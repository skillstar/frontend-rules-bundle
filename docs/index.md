---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
home: true

hero:
  name: "FRB"
  text: "前端编码规范工程化"
  tagline: FRB是一个用来标准化前端开发、确保代码质量和提高团队协作的工具包
  actions:
    - theme: brand
      text: 立刻进入 →
      link: /coding/html.md

features:
  - icon: 🐬
    title: 完善的规范生态
    details: 支持对全部前端配置实现一键接入、一键扫描、一键修复、一键升级
  - icon: 🤸‍
    title: 支持 Typescript
    details: 提供完整的类型注释，帮助您从 0~1 掌握完整的前端规范化
  - icon: 🧩
    title: 完整的测试用例
    details: 配套完整的测试用例，帮助您提升项目健壮性
---
## :star: 设计目的

随着前端技术的发展，前端项目愈发复杂。`JavaScript` 作为弱类型解释性语言，灵活多变的语法提升了开发效率，但也带来了许多问题。大型项目中，代码维护时间往往超过新功能开发。因此，编写符合团队规范的代码至关重要。

一致的代码规范能提高团队协作效率、提升代码质量、减少系统维护负担。然而，团队成员的编码风格各异，一个普适的标准是必不可少的。

制定并推广前端团队的代码规范是前端架构师的挑战。许多团队虽然了解部分规范工具，但缺乏完整的工程化方案来落实规范。如果能产出一套完整的前端编码规范工具，不仅能解决现有项目的问题，还能确保后续项目的高质量。

</br>

## :couch_and_lamp: 配套工具

我们引入了多个业界流行的 `Linter` 作为规约文档的配套工具，并根据规约内容定制了对应的规则包，它们包括：

| 规约 | Lint 工具 | NPM包 |
| -------- | -------- | -------- |
| JavaScript 编码规范 <br/> TypeScript 编码规范  <br/> Node 编码规范   |  [ESLint](https://eslint.org/)   | [@frbundle/eslint-config](https://www.npmjs.com/package/@frbundle/eslint-config) |
| CSS 编码规范     |  [stylelint](https://stylelint.io/)  | [@frbundle/stylelint-config](https://www.npmjs.com/package/@frbundle/stylelint-config) |
| Git 规范    |  [commitlint](https://commitlint.js.org/#/)  | [@frbundle/commitlint-config](https://www.npmjs.com/package/@frbundle/commitlint-config) |
| 文档规范     |  [markdownlint](https://github.com/DavidAnson/markdownlint)  | [@frbundle/markdownlint-config](https://www.npmjs.com/package/@frbundle/markdownlint-config) |

[@frbundle/lint-cli](https://www.npmjs.com/package/@frbundle/lint-cli) 收敛屏蔽了上述依赖和配置细节，提供简单的 `CLI` 和 `Node.js API`，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规约的成本。

您可以使用[@frbundle/lint-cli](https://www.npmjs.com/package/@frbundle/lint-cli) 方便地为项目接入全部规范。