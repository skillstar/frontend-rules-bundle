"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const text_table_1 = __importDefault(require("text-table"));
const terminal_link_1 = __importDefault(require("terminal-link"));
const is_docker_1 = __importDefault(require("is-docker"));
const strip_ansi_1 = __importDefault(require("strip-ansi"));
const constants_1 = require("./constants");
exports.default = (results, fix) => {
    let output = '\n';
    let errorCount = 0;
    let warningCount = 0;
    let fixableErrorCount = 0;
    let fixableWarningCount = 0;
    let summaryColor = 'yellow';
    const transformMessage = ({ line, column, rule, url, message, errored }) => {
        if (errored)
            summaryColor = 'red';
        let text = '';
        if (rule && url) {
            text = (0, terminal_link_1.default)(chalk_1.default.blue(rule), chalk_1.default.dim(` ${url} `), { fallback: !(0, is_docker_1.default)() });
        }
        else if (rule) {
            text = chalk_1.default.blue(rule);
        }
        return [
            '',
            chalk_1.default.dim(`${line}:${column}`),
            errored ? chalk_1.default.red('error') : chalk_1.default.yellow('warning'),
            message,
            text,
        ];
    };
    for (const result of results) {
        if (result.messages.length === 0)
            continue;
        const { messages } = result;
        errorCount += result.errorCount;
        warningCount += result.warningCount;
        fixableErrorCount += result.fixableErrorCount;
        fixableWarningCount += result.fixableWarningCount;
        output += `${chalk_1.default.underline(result.filePath)}\n`;
        output += `${(0, text_table_1.default)(messages.map(transformMessage), {
            align: ['.', 'r', 'l'],
            stringLength: (str) => (0, strip_ansi_1.default)(str).length,
        })}\n\n`;
    }
    const total = errorCount + warningCount;
    const pluralize = (word, count) => (count === 1 ? word : `${word}s`);
    if (fix)
        output += chalk_1.default.green('代码规约问题自动修复完成，请通过 git diff 确认修复效果 :D\n');
    if (fix && total > 0) {
        output += chalk_1.default.green('ps. 以上显示的是无法被自动修复的问题，需要手动进行修复\n');
    }
    if (!fix && total > 0) {
        output += chalk_1.default[summaryColor].bold([
            `${constants_1.UNICODE.failure} `,
            total,
            pluralize(' problem', total),
            ' (',
            errorCount,
            pluralize(' error', errorCount),
            ', ',
            warningCount,
            pluralize(' warning', warningCount),
            ')\n',
        ].join(''));
        if (fixableErrorCount > 0 || fixableWarningCount > 0) {
            output += chalk_1.default[summaryColor].bold([
                '  ',
                fixableErrorCount,
                pluralize(' error', fixableErrorCount),
                ' and ',
                fixableWarningCount,
                pluralize(' warning', fixableWarningCount),
                ` potentially fixable with the \`${constants_1.PKG_NAME} fix\``,
            ].join(''));
        }
    }
    if (!fix && total === 0)
        output = chalk_1.default.green.bold(`${constants_1.UNICODE.success} no problems`);
    console.log(chalk_1.default.reset(output));
};
