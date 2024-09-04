#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const ora_1 = __importDefault(require("ora"));
const glob_1 = __importDefault(require("glob"));
const commander_1 = require("commander");
const cross_spawn_1 = __importDefault(require("cross-spawn"));
const child_process_1 = require("child_process");
const init_1 = __importDefault(require("./actions/init"));
const scan_1 = __importDefault(require("./actions/scan"));
const update_1 = __importDefault(require("./actions/update"));
const log_1 = __importDefault(require("./utils/log"));
const print_report_1 = __importDefault(require("./utils/print-report"));
const npm_type_1 = __importDefault(require("./utils/npm-type"));
const git_1 = require("./utils/git");
const generate_template_1 = __importDefault(require("./utils/generate-template"));
const constants_1 = require("./utils/constants");
const cwd = process.cwd();
const installDepsIfThereNo = () => __awaiter(void 0, void 0, void 0, function* () {
    const lintConfigFiles = [].concat(glob_1.default.sync('.eslintrc?(.@(js|yaml|yml|json))', { cwd }), glob_1.default.sync('.stylelintrc?(.@(js|yaml|yml|json))', { cwd }), glob_1.default.sync('.markdownlint(.@(yaml|yml|json))', { cwd }));
    const nodeModulesPath = path_1.default.resolve(cwd, 'node_modules');
    if (!fs_extra_1.default.existsSync(nodeModulesPath) && lintConfigFiles.length > 0) {
        const npm = yield npm_type_1.default;
        log_1.default.info(`使用项目 Lint 配置，检测到项目未安装依赖，将进行安装（执行 ${npm} install）`);
        (0, child_process_1.execSync)(`cd ${cwd} && ${npm} i`);
    }
});
commander_1.program
    .version(constants_1.PKG_VERSION)
    .description(`${constants_1.PKG_NAME} 是前端编码规范工程化 的配套 Lint 工具，提供简单的 CLI 和 Node.js API，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡点，降低项目实施规约的成本`);
commander_1.program
    .command('init')
    .description('一键接入：为项目初始化规约工具和配置，可以根据项目类型和需求进行定制')
    .option('--vscode', '写入.vscode/setting.json配置')
    .action((cmd) => __awaiter(void 0, void 0, void 0, function* () {
    if (cmd.vscode) {
        const configPath = path_1.default.resolve(cwd, `${constants_1.PKG_NAME}.config.js`);
        (0, generate_template_1.default)(cwd, require(configPath), true);
    }
    else {
        yield (0, init_1.default)({
            cwd,
            checkVersionUpdate: true,
        });
    }
}));
commander_1.program
    .command('scan')
    .description('一键扫描：对项目进行代码规范问题扫描')
    .option('-q, --quiet', '仅报告错误信息 - 默认: false')
    .option('-o, --output-report', '输出扫描出的规范问题日志')
    .option('-i, --include <dirpath>', '指定要进行规范扫描的目录')
    .option('--no-ignore', '忽略 eslint 的 ignore 配置文件和 ignore 规则')
    .action((cmd) => __awaiter(void 0, void 0, void 0, function* () {
    yield installDepsIfThereNo();
    const checking = (0, ora_1.default)();
    checking.start(`执行 ${constants_1.PKG_NAME} 代码检查`);
    const { results, errorCount, warningCount, runErrors } = yield (0, scan_1.default)({
        cwd,
        fix: false,
        include: cmd.include || cwd,
        quiet: Boolean(cmd.quiet),
        outputReport: Boolean(cmd.outputReport),
        ignore: cmd.ignore,
    });
    let type = 'succeed';
    if (runErrors.length > 0 || errorCount > 0) {
        type = 'fail';
    }
    else if (warningCount > 0) {
        type = 'warn';
    }
    checking[type]();
    if (results.length > 0)
        (0, print_report_1.default)(results, false);
    runErrors.forEach((e) => console.log(e));
}));
commander_1.program
    .command('commit-msg-scan')
    .description('commit message 检查: git commit 时对 commit message 进行检查')
    .action(() => {
    const result = cross_spawn_1.default.sync('commitlint', ['-E', 'HUSKY_GIT_PARAMS'], { stdio: 'inherit' });
    if (result.status !== 0) {
        process.exit(result.status);
    }
});
commander_1.program
    .command('commit-file-scan')
    .description('代码提交检查: git commit 时对提交代码进行规范问题扫描')
    .option('-s, --strict', '严格模式，对 warn 和 error 问题都卡口，默认仅对 error 问题卡口')
    .action((cmd) => __awaiter(void 0, void 0, void 0, function* () {
    yield installDepsIfThereNo();
    const files = yield (0, git_1.getAmendFiles)();
    if (files)
        log_1.default.warn(`[${constants_1.PKG_NAME}] changes not staged for commit: \n${files}\n`);
    const checking = (0, ora_1.default)();
    checking.start(`执行 ${constants_1.PKG_NAME} 代码提交检查`);
    const { results, errorCount, warningCount } = yield (0, scan_1.default)({
        cwd,
        include: cwd,
        quiet: !cmd.strict,
        files: yield (0, git_1.getCommitFiles)(),
    });
    if (errorCount > 0 || (cmd.strict && warningCount > 0)) {
        checking.fail();
        (0, print_report_1.default)(results, false);
        process.exitCode = 1;
    }
    else {
        checking.succeed();
    }
}));
commander_1.program
    .command('fix')
    .description('一键修复：自动修复项目的代码规范扫描问题')
    .option('-i, --include <dirpath>', '指定要进行修复扫描的目录')
    .option('--no-ignore', '忽略 eslint 的 ignore 配置文件和 ignore 规则')
    .action((cmd) => __awaiter(void 0, void 0, void 0, function* () {
    yield installDepsIfThereNo();
    const checking = (0, ora_1.default)();
    checking.start(`执行 ${constants_1.PKG_NAME} 代码修复`);
    const { results } = yield (0, scan_1.default)({
        cwd,
        fix: true,
        include: cmd.include || cwd,
        ignore: cmd.ignore,
    });
    checking.succeed();
    if (results.length > 0)
        (0, print_report_1.default)(results, true);
}));
commander_1.program
    .command('update')
    .description(`更新 ${constants_1.PKG_NAME} 至最新版本`)
    .action(() => (0, update_1.default)(true));
commander_1.program.parse(process.argv);
