const path = require('path');

const RULE_NAME = 'no-js-in-ts-project';

const JS_REG = /\.jsx?$/;

//过滤白名单
const DEFAULT_WHITE_LIST = [
  'commitlint.config.js',
  'eslintrc.js',
  'prettierrc.js',
  'stylelintrc.js',
];

module.exports = {
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    fixable: null,
    messages: {
      noJSInTSProject: 'The "{{fileName}}" is not recommended in TS project',
    },
  },

  create(context) {
    const fileName = context.getFilename();
    const extName = path.extname(fileName);
    //获取自定义的 ESLint 规则，没有就使用DEFAULT_WHITE_LIST白名单
    const ruleOptions = context.options[0] || {};
    let { whiteList = [], autoMerge = true } = ruleOptions;
    if (whiteList.length === 0) {
      whiteList = DEFAULT_WHITE_LIST;
    } else if (autoMerge) {
        //如果有自定义ESLint规则，去除重复，合并白名单
      whiteList = [...new Set([...DEFAULT_WHITE_LIST, ...whiteList])];
    }
    //能够匹配任何以 whiteList 中的一个元素结尾的字符串
    const whiteListReg = new RegExp(`(${whiteList.join('|')})$`);

    //条件：不在白名单中 或 jsx文件
    if (!whiteListReg.test(fileName) && JS_REG.test(extName)) {
      context.report({
        loc: {
          start: {
            line: 0,
            column: 0,
          },
          end: {
            line: 0,
            column: 0,
          },
        },
        messageId: 'noJSInTSProject',
        data: {
          fileName,
        },
      });
    }

    // Necessary
    return {};
  },
};
