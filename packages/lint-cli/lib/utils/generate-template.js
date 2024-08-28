"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const lodash_1 = __importDefault(require("lodash"));
const glob_1 = __importDefault(require("glob"));
const ejs_1 = __importDefault(require("ejs"));
const constants_1 = require("./constants");
const mergeVSCodeConfig = (filepath, content) => {
    if (!fs_extra_1.default.existsSync(filepath))
        return content;
    try {
        const targetData = fs_extra_1.default.readJSONSync(filepath);
        const sourceData = JSON.parse(content);
        return JSON.stringify(lodash_1.default.mergeWith(targetData, sourceData, (target, source) => {
            if (Array.isArray(target) && Array.isArray(source)) {
                return [...new Set(source.concat(target))];
            }
        }), null, 2);
    }
    catch (e) {
        return '';
    }
};
exports.default = (cwd, data, vscode) => {
    const templatePath = path_1.default.resolve(__dirname, '../config');
    const templates = glob_1.default.sync(`${vscode ? '_vscode' : '**'}/*.ejs`, { cwd: templatePath });
    for (const name of templates) {
        const filepath = path_1.default.resolve(cwd, name.replace(/\.ejs$/, '').replace(/^_/, '.'));
        let content = ejs_1.default.render(fs_extra_1.default.readFileSync(path_1.default.resolve(templatePath, name), 'utf8'), Object.assign({ eslintIgnores: constants_1.ESLINT_IGNORE_PATTERN, stylelintExt: constants_1.STYLELINT_FILE_EXT, stylelintIgnores: constants_1.STYLELINT_IGNORE_PATTERN, markdownLintIgnores: constants_1.MARKDOWN_LINT_IGNORE_PATTERN }, data));
        if (/^_vscode/.test(name)) {
            content = mergeVSCodeConfig(filepath, content);
        }
        if (!content.trim())
            continue;
        fs_extra_1.default.outputFileSync(filepath, content, 'utf8');
    }
};
