const path = require('path');
const requireAll = require('require-all');

exports.rules = requireAll({
  dirname: path.resolve(__dirname, 'rules'),
});

exports.configs = requireAll({
  dirname: path.resolve(__dirname, 'configs'),
});

//定义插件入口： 这里的作用是把.json文件当.js处理
exports.processors = {
  '.json': {
    preprocess(text) {
      // As JS file
      return [`module.exports = ${text}`];
    },
  },
};
