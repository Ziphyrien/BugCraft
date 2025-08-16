import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "BugCraft",
  lang: 'zh-Hans',
  description: "There are many bugs to play.",
  head: [['link', { rel: 'icon', href: './upload/favicon.svg' }]],
  srcDir: 'src',
  //base: '/vitepress-carbon-template/', if running on github-pages, set repository name here

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '友链', link: '/links' }
    ],

    logo: {
      src: './upload/favicon.svg'
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: '<a href="https://icp.gov.moe/?keyword=20251809" target="_blank">萌ICP备20251809号</a>',
      copyright: '版权所无，不保留所有权利。'
    },
    
    sidebar: [
      {
        text: '导航',
        items: [
          { text: '开始', link: '/guide' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/brenoepics/vitepress-carbon' }
    ]
  }
})
