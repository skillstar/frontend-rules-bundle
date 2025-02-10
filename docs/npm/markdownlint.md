---
title: @frbundle/markdownlint-config
categories:
  - 工程规范
tags:
  - 工程规范
author:
  name: Anson
  link: https://github.com/skillstar/frontend-rules-bundle
---

# @frbundle/markdownlint-config

:::tip
FRB 文档 规范
:::

支持配套的 [markdownlint 可共享配置](https://www.npmjs.com/package/markdownlint#optionsconfig)。

## 安装

需要先行安装 [markdownlint](https://www.npmjs.com/package/markdownlint)：

```bash
npm install @frbundle/markdownlint-config markdownlint --save-dev
```

## 使用

在 `.markdownlint.json` 中继承本包:

```json
{
  "extends": "@frbundle/markdownlint-config"
}
```
