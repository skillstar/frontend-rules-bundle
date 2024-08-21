const path = require('path');

const RULE_NAME = 'no-broad-semantic-versioning';

module.exports = {
  name: RULE_NAME,
  meta: {
    type: 'problem',
    fixable: null,
    messages: {
      noBroadSemanticVersioning:
        'The "{{dependencyName}}" is not recommended to use "{{versioning}}"',
    },
  },

  create(context) {
    //context.getFilename()获取完整路径，path.basename()获取文件名称
    if (path.basename(context.getFilename()) !== 'package.json') {
      return {};
    }

    //获取当前工作目录的路径
    const cwd = context.getCwd();

    return {
      Property: function handleRequires(node) {
        if (
          node.key &&
          node.key.value &&
          (node.key.value === 'dependencies' || node.key.value === 'devDependencies') &&
          node.value &&
          node.value.properties
        ) {
          node.value.properties.forEach((property) => {
            if (property.key && property.key.value) {
              const dependencyName = property.key.value;
              const dependencyVersion = property.value.value;
              //不能有*、x、>
              if (
                // *
                dependencyVersion.indexOf('*') > -1 ||
                // x.x
                dependencyVersion.indexOf('x') > -1 ||
                // > x
                dependencyVersion.indexOf('>') > -1
              ) {
                context.report({
                  loc: property.loc,
                  messageId: 'noBroadSemanticVersioning',
                  data: {
                    dependencyName,
                    versioning: dependencyVersion,
                  },
                });
              }
            }
          });
        }
      },
    };
  },
};
