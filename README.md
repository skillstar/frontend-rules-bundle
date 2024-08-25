# 1. frontend-rules-bundle


## 1.1. :mountain: 能力支持

### 1.1.1. 完善的规范生态

支持对全部前端配置实现一键接入、一键扫描、一键修复、一键升级

### 1.1.2. 支持 `Typescript`

提供完整的类型注释

### 1.1.3. 完整的测试用例

配套完整的测试用例，帮助您提升项目健壮性

## 1.2. :star: 设计目的

随着前端技术的发展，前端项目正在变得越来越复杂。`JavaScript` 作为一门弱类型解释性编程语言，其灵活多变的语法极大的提高了前端开发效率，但同时也存在一系列问题。在大型项目开发过程中，代码维护所占的时间比重往往大于新功能的开发。因此编写符合团队编码规范的代码是至关重要的。 一致性的代码规范可以增强团队开发协作效率、提高代码质量、减少遗留系统维护的负担。但是每个人的代码编写喜好不同，代码风格也会迥然不同，若要一个团队内所有的成员都能发挥最大程度的价值，一个具有普适性的标准是必不可少的。

那么，如何制定前端团队的代码规范，如何在团队内进行最小成本的推广，就是一个合格的前端架构师面临的一大难题。很多团队的基础建设都只是简单地知晓其中一部分规范工具的使用，但却没有一套完整的工程化产出来助力研发同学实现规范落地。因此，如果我们能够产出一套完整化的前端编码规范工具，都会对不仅能够解决存量项目的编码异味，还能够保证后续所有项目的编码质量。

## 1.3. :bulb: 本项目的优势

### 1.3.1. 先进的研发工具
在现有的前端研发流程中，本项目提供了多种前沿工具来提升项目的编码规范。这些工具包括但不限于 `eslint`、`stylelint`、`commitlint`、`markdownlint`、`husky` 等。通过最佳实践，您可以将这些工具与单元测试结合，实现项目代码质量的全面提升;
### 1.3.2. 一键接入的脚手架工具
本项目通过脚手架工具以交互式形式一键接入，实现对 `JavaScript`、`Typescript`、`React`、`Vue` 等不同类型前端项目的标准语法限制。这样，您可以在新项目中快速应用标准化的开发规范，提升开发效率;
### 1.3.3. 存量项目优化
本项目提供了对现有项目进行优化的方案。对于不符合规范的存量代码，项目提供了一键扫描和一键修复的功能，最小化存量代码的更新成本。这样，您可以在不大幅修改现有代码的情况下，提升项目的整体代码质量;
### 1.3.4. 新项目规范化
本项目可以为新项目添加规范。通过一键接入新项目，并结合 `gitpre-commit` 钩子，对提交文件进行编码规范的扫描。同时，通过 `husky` 的 `commit-msg` 钩子，对代码提交信息的格式进行检查。这样，您可以确保新项目从一开始就符合最佳编码规范，提升项目的维护性和可读性。

## 1.4. :couch_and_lamp: 配套工具

我们引入了多个业界流行的 `Linter` 作为规约文档的配套工具，并根据规约内容定制了对应的规则包，它们包括：

| 规约                                                              | Lint 工具                                                  | npm 包                                                                                       |
| ----------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| JavaScript 编码规范 <br/> TypeScript 编码规范 <br/> Node 编码规范 | [ESLint](https://eslint.org/)                              | [frb-eslint-config](https://www.npmjs.com/package/frb-eslint-config)             |
| CSS 编码规范                                                      | [stylelint](https://stylelint.io/)                         | [frb-stylelint-config](https://www.npmjs.com/package/frb-stylelint-config)       |
| Git 规范                                                          | [commitlint](https://commitlint.js.org/#/)                 | [frb-commitlint-config](https://www.npmjs.com/package/frb-commitlint-config)     |
| 文档规范                                                          | [markdownlint](https://github.com/DavidAnson/markdownlint) | [frb-markdownlint-config](https://www.npmjs.com/package/frb-markdownlint-config) |

[frb-lint-cli](https://www.npmjs.com/package/frb-lint-cli) 收敛屏蔽了上述依赖和配置细节，提供简单的 `CLI` 和 `Node.js API`，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规约的成本。

您可以使用[frb-lint-cli](https://www.npmjs.com/package/frb-lint-cli) 方便地为项目接入全部规范。

## 1.5. 其他

## 1.6. 测试`markdown config`

全局安装`markdownlint-cli`

```bash
npm i -g markdownlint-cli
pnpm run lint
```

### 1.6.1. 生成`CHANGELOG`

参考[conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli)，全局安装`conventional-changelog-cli`：

```bash
npm install -g conventional-changelog-cli
pnpm run changelog
```

### 1.6.2. 设置`husky`

```bash
pnpm husky install
```

## 1.7. :email: 联系方式

-   **前端编码规范工程化** <https://yangsheng8.github.io/frontend-rules-bundle/>
-   **GitHub**: <https://github.com/yangsheng8/frontend-rules-bundle>

