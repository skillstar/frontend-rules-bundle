//这规则的建议 将HTTP链接转为HTTPS链接

const RULE_NAME = 'no-http-url';

module.exports = {
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    fixable: null,
    messages: {
      noHttpUrl: 'Recommended "{{url}}" switch to HTTPS',
    },
  },
  //在 create 函数中，我们需要定义一些回调函数，这些回调函数会在代码中特定的节点上被调用。
  create(context) {
    return {
      //字面量节点 检测 string类型的，内容是否http,如果是http则报错误
      Literal: function handleRequires(node) {
        //indexOf 方法返回的是子字符串的起始位置，而不是子字符串的长度或子字符串本身，所以当子字符串在字符串开头时，返回值是 0。因此，node.value.indexOf('http:') === 0 用于判断 node.value 是否以 'http:' 开头。
        if (node.value && typeof node.value === 'string' && node.value.indexOf('http:') === 0) {
          context.report({
            node,
            messageId: 'noHttpUrl',
            data: {
              url: node.value,
            },
          });
        }
      }
    };
  },
};
