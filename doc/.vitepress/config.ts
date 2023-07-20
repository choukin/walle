import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/walle/', // 网址路径
  srcDir:'notes', // 源目录
  title: "WALLE 成长😈",
  description: "个人笔记，学习总结",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '使用示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '编写',
        items: [
          { text: 'Markdown 扩展', link: '/guide/markdown-examples' },
          { text: '资源处理', link: '/guide/asset-handling' },
          { text: '运行时 API 示例', link: '/guide/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: '在平坦的道路上曲折前行',
      copyright:'Copyright @ 2020-present WALLE'
    },
     editLink: {
      pattern: 'https://github.com/choukin/walle/edit/main/doc/notes/:path',
      text: 'Edit this page on GitHub'
    }

  },
  markdown: {
    lineNumbers: false
  }
})
