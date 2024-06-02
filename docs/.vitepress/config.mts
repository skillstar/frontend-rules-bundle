import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FrontendRulesBundle",
  description: "前端编码规范工程化",
  head: [["link", { rel: "icon", href: "/img/logo.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/logo1.jpg',
    outlineTitle:'目录',
    nav: [
      { text: '首页', link: '/' },
      {
				text: '编码规范',
				items: [
					{ text: 'HTML 编码规范', link: '/coding/html.md' },
					{ text: 'CSS 编码规范', link: '/coding/css.md' },
					{ text: 'JavaScript 编码规范', link: '/coding/javascript.md' },
					{ text: 'Node 编码规范', link: '/coding/node.md' },
					{ text: 'Typescript 编码规范', link: '/coding/typescript.md' },
				],
			},
			{
				text: '工程规范',
				items: [
					{ text: 'Git 规范', link: '/engineering/git.md' },
					{ text: '文档规范', link: '/engineering/doc.md' },
					{ text: 'CHANGELOG 规范', link: '/engineering/changelog.md' },
				],
			},
      {
        text: 'NPM包',
        items: [
          { text: 'eslint-config', link: '/npm/eslint.md' },
          { text: 'stylelint-config', link: '/npm/stylelint.md' },
          { text: 'commitlint-config', link: '/npm/commitlint.md' },
          { text: 'markdownlint-config', link: '/npm/markdownlint.md' },
          { text: 'eslint-plugin', link: '/npm/eslint-plugin.md' },
        ],
      },
      {
        text: '脚手架',
        items: [{ text: 'frb-fe-lint', link: '/cli/frb-lint.md' }],
      },
    ],

    sidebar: [
      {
        text: '编码规范',
        items: [
          {
            text: 'HTML 编码规范',
            link: '/coding/html.md',
          },
          {
            text: 'CSS 编码规范',
            link: '/coding/css.md',
          },
          {
            text: 'JavaScript 编码规范',
            link: '/coding/javascript.md',
          },
          {
            text: 'Typescript 编码规范',
            link: '/coding/typescript.md',
          },
          {
            text: 'Node 编码规范',
            link: '/coding/node.md',
          },
        ],
      },
      {
        text: '工程规范',
        items: [
          {
            text: 'Git 规范',
            link: '/engineering/git.md',
          },
          {
            text: '文档规范',
            link: '/engineering/doc.md',
          },
          {
            text: 'CHANGELOG 规范',
            link: '/engineering/changelog.md',
          },
        ],
      },
      {
        text: 'NPM包',
        items: [
          { text: 'eslint-config', link: '/npm/eslint.md' },
          { text: 'stylelint-config', link: '/npm/stylelint.md' },
          { text: 'commitlint-config', link: '/npm/commitlint.md' },
          { text: 'markdownlint-config', link: '/npm/markdownlint.md' },
          { text: 'eslint-plugin', link: '/npm/eslint-plugin.md' },
        ],
      },
      {
        text: '脚手架',
        items: [{ text: 'frb-lint', link: '/cli/frb-lint.md' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yangsheng8/frontend-rules-bundle' }
    ],
     // 设置搜索框的样式
     search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    footer: {
      message: 'Released under the <a href="https://github.com/yangsheng8/frontend-rules-bundle">Github</a>.',
      copyright: 'Copyright@ 2023-present Anson Young '
    }
  },
})
