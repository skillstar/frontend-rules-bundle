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
const glob_1 = __importDefault(require("glob"));
const prompts_1 = require("@inquirer/prompts");
const log_1 = __importDefault(require("./log"));
const constants_1 = require("./constants");
const packageNamesToRemove = [
    '@babel/eslint-parser',
    '@commitlint/cli',
    '@iceworks/spec',
    'babel-eslint',
    'eslint',
    'husky',
    'markdownlint',
    'prettier',
    'stylelint',
    'tslint',
];
const packagePrefixesToRemove = [
    '@commitlint/',
    '@typescript-eslint/',
    'eslint-',
    'stylelint-',
    'markdownlint-',
    'commitlint-',
];
const checkUselessConfig = (cwd) => {
    return []
        .concat(glob_1.default.sync('.eslintrc?(.@(yaml|yml|json))', { cwd }))
        .concat(glob_1.default.sync('.stylelintrc?(.@(yaml|yml|json))', { cwd }))
        .concat(glob_1.default.sync('.markdownlint@(rc|.@(yaml|yml|jsonc))', { cwd }))
        .concat(glob_1.default.sync('.prettierrc?(.@(cjs|config.js|config.cjs|yaml|yml|json|json5|toml))', { cwd }))
        .concat(glob_1.default.sync('tslint.@(yaml|yml|json)', { cwd }))
        .concat(glob_1.default.sync('.kylerc?(.@(yaml|yml|json))', { cwd }));
};
const checkReWriteConfig = (cwd) => {
    return glob_1.default
        .sync('**/*.ejs', { cwd: path_1.default.resolve(__dirname, '../config') })
        .map((name) => name.replace(/^_/, '.').replace(/\.ejs$/, ''))
        .filter((filename) => fs_extra_1.default.existsSync(path_1.default.resolve(cwd, filename)));
};
exports.default = (cwd, rewriteConfig) => __awaiter(void 0, void 0, void 0, function* () {
    const pkgPath = path_1.default.resolve(cwd, 'package.json');
    const pkg = fs_extra_1.default.readJSONSync(pkgPath);
    const dependencies = [].concat(Object.keys(pkg.dependencies || {}), Object.keys(pkg.devDependencies || []));
    const willRemovePackage = dependencies.filter((name) => packageNamesToRemove.includes(name) ||
        packagePrefixesToRemove.some((prefix) => name.startsWith(prefix)));
    const uselessConfig = checkUselessConfig(cwd);
    const reWriteConfig = checkReWriteConfig(cwd);
    const willChangeCount = willRemovePackage.length + uselessConfig.length + reWriteConfig.length;
    if (willChangeCount > 0) {
        log_1.default.warn(`检测到项目中存在可能与 ${constants_1.PKG_NAME} 冲突的依赖和配置，为保证正常运行将`);
        if (willRemovePackage.length > 0) {
            log_1.default.warn('删除以下依赖：');
            log_1.default.warn(JSON.stringify(willRemovePackage, null, 2));
        }
        if (uselessConfig.length > 0) {
            log_1.default.warn('删除以下配置文件：');
            log_1.default.warn(JSON.stringify(uselessConfig, null, 2));
        }
        if (reWriteConfig.length > 0) {
            log_1.default.warn('覆盖以下配置文件：');
            log_1.default.warn(JSON.stringify(reWriteConfig, null, 2));
        }
        if (typeof rewriteConfig === 'undefined') {
            yield (0, prompts_1.confirm)({
                message: '请确认是否继续：'
            });
        }
        else if (!reWriteConfig) {
            process.exit(0);
        }
    }
    for (const name of uselessConfig) {
        fs_extra_1.default.removeSync(path_1.default.resolve(cwd, name));
    }
    delete pkg.eslintConfig;
    delete pkg.eslintIgnore;
    delete pkg.stylelint;
    for (const name of willRemovePackage) {
        delete (pkg.dependencies || {})[name];
        delete (pkg.devDependencies || {})[name];
    }
    fs_extra_1.default.writeFileSync(path_1.default.resolve(cwd, 'package.json'), JSON.stringify(pkg, null, 2), 'utf8');
    return pkg;
});
