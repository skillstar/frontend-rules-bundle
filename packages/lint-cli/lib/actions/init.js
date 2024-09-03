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
const prompts_1 = require("@inquirer/prompts");
const cross_spawn_1 = __importDefault(require("cross-spawn"));
const update_1 = __importDefault(require("./update"));
const npm_type_1 = __importDefault(require("../utils/npm-type"));
const log_1 = __importDefault(require("../utils/log"));
const conflict_resolve_1 = __importDefault(require("../utils/conflict-resolve"));
const generate_template_1 = __importDefault(require("../utils/generate-template"));
const constants_1 = require("../utils/constants");
let step = 0;
const chooseEslintType = () => __awaiter(void 0, void 0, void 0, function* () {
    const type = yield (0, prompts_1.rawlist)({
        message: `Step ${++step}. 请选择项目的语言（JS/TS）和框架（React/Vue）类型：`,
        choices: constants_1.PROJECT_TYPES,
    });
    return type;
});
const chooseEnableStylelint = (defaultValue) => __awaiter(void 0, void 0, void 0, function* () {
    const enable = yield (0, prompts_1.confirm)({
        message: `Step ${++step}. 是否需要使用 stylelint（若没有样式文件则不需要）：`,
        default: defaultValue,
    });
    return enable;
});
const chooseEnableMarkdownLint = () => __awaiter(void 0, void 0, void 0, function* () {
    const enable = yield (0, prompts_1.confirm)({
        message: `Step ${++step}. 是否需要使用 markdownlint（若没有 Markdown 文件则不需要）：`,
        default: true,
    });
    return enable;
});
const chooseEnablePrettier = () => __awaiter(void 0, void 0, void 0, function* () {
    const enable = yield (0, prompts_1.confirm)({
        message: `Step ${++step}. 是否需要使用 Prettier 格式化代码：`,
        default: true,
    });
    return enable;
});
exports.default = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const cwd = options.cwd || process.cwd();
    const isTest = process.env.NODE_ENV === 'test';
    const checkVersionUpdate = options.checkVersionUpdate || false;
    const disableNpmInstall = options.disableNpmInstall || false;
    const config = {};
    const pkgPath = path_1.default.resolve(cwd, 'package.json');
    let pkg = fs_extra_1.default.readJSONSync(pkgPath);
    if (!isTest && checkVersionUpdate) {
        yield (0, update_1.default)(false);
    }
    if (typeof options.enableESLint === 'boolean') {
        config.enableESLint = options.enableESLint;
    }
    else {
        config.enableESLint = true;
    }
    if (options.eslintType && constants_1.PROJECT_TYPES.find((choice) => choice.value === options.eslintType)) {
        config.eslintType = options.eslintType;
    }
    else {
        config.eslintType = yield chooseEslintType();
    }
    if (typeof options.enableStylelint === 'boolean') {
        config.enableStylelint = options.enableStylelint;
    }
    else {
        config.enableStylelint = yield chooseEnableStylelint(!/node/.test(config.eslintType));
    }
    if (typeof options.enableMarkdownlint === 'boolean') {
        config.enableMarkdownlint = options.enableMarkdownlint;
    }
    else {
        config.enableMarkdownlint = yield chooseEnableMarkdownLint();
    }
    if (typeof options.enablePrettier === 'boolean') {
        config.enablePrettier = options.enablePrettier;
    }
    else {
        config.enablePrettier = yield chooseEnablePrettier();
    }
    if (!isTest) {
        log_1.default.info(`Step ${++step}. 检查并处理项目中可能存在的依赖和配置冲突`);
        pkg = yield (0, conflict_resolve_1.default)(cwd, options.rewriteConfig);
        log_1.default.success(`Step ${step}. 已完成项目依赖和配置冲突检查处理 :D`);
        if (!disableNpmInstall) {
            log_1.default.info(`Step ${++step}. 安装依赖`);
            const npm = yield npm_type_1.default;
            cross_spawn_1.default.sync(npm, ['i', '-D', constants_1.PKG_NAME], { stdio: 'inherit', cwd });
            log_1.default.success(`Step ${step}. 安装依赖成功 :D`);
        }
    }
    pkg = fs_extra_1.default.readJSONSync(pkgPath);
    if (!pkg.scripts) {
        pkg.scripts = {};
    }
    if (!pkg.scripts[`${constants_1.PKG_NAME}-scan`]) {
        pkg.scripts[`${constants_1.PKG_NAME}-scan`] = `${constants_1.PKG_NAME} scan`;
    }
    if (!pkg.scripts[`${constants_1.PKG_NAME}-fix`]) {
        pkg.scripts[`${constants_1.PKG_NAME}-fix`] = `${constants_1.PKG_NAME} fix`;
    }
    log_1.default.info(`Step ${++step}. 配置 git commit 卡点`);
    if (!pkg.husky)
        pkg.husky = {};
    if (!pkg.husky.hooks)
        pkg.husky.hooks = {};
    pkg.husky.hooks['pre-commit'] = `${constants_1.PKG_NAME} commit-file-scan`;
    pkg.husky.hooks['commit-msg'] = `${constants_1.PKG_NAME} commit-msg-scan`;
    fs_extra_1.default.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    log_1.default.success(`Step ${step}. 配置 git commit 卡点成功 :D`);
    log_1.default.info(`Step ${++step}. 写入配置文件`);
    (0, generate_template_1.default)(cwd, config);
    log_1.default.success(`Step ${step}. 写入配置文件成功 :D`);
    const logs = [`${constants_1.PKG_NAME} 初始化完成 :D`].join('\r\n');
    log_1.default.success(logs);
});
