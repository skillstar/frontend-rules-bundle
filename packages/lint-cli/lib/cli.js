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
const commander_1 = require("commander");
const cross_spawn_1 = __importDefault(require("cross-spawn"));
const init_1 = __importDefault(require("./actions/init"));
const update_1 = __importDefault(require("./actions/update"));
const generate_template_1 = __importDefault(require("./utils/generate-template"));
const constants_1 = require("./utils/constants");
const cwd = process.cwd();
commander_1.program
    .version(constants_1.PKG_VERSION)
    .description(`${constants_1.PKG_NAME} 是 印客学院前端编码规范工程化 的配套 Lint 工具，提供简单的 CLI 和 Node.js API，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡点，降低项目实施规约的成本`);
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
    .command('commit-msg-scan')
    .description('commit message 检查: git commit 时对 commit message 进行检查')
    .action(() => {
    const result = cross_spawn_1.default.sync('commitlint', ['-E', 'HUSKY_GIT_PARAMS'], { stdio: 'inherit' });
    if (result.status !== 0) {
        process.exit(result.status);
    }
});
commander_1.program
    .command('update')
    .description(`更新 ${constants_1.PKG_NAME} 至最新版本`)
    .action(() => (0, update_1.default)(true));
commander_1.program.parse(process.argv);
