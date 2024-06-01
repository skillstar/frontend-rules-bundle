import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "frontend-rules-bundle",
  description: "前端编码规范工程化",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yangsheng8/frontend-rules-bundle' }
    ]
  }
})
