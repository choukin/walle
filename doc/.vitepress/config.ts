import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir:'notes', // 源目录
  title: "WALLE 成长😈",
  description: "个人笔记，学习总结",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '使用示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '使用示例',
        items: [
          { text: 'Markdown 使用示例', link: '/markdown-examples' },
          { text: '运行时 API 示例', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: '在平坦的道路上曲折前行',
      copyright:'Copyright @ 2023-present WALLE'
    }

  }
})
