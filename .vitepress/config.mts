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
      { text: '友链', link: '/links' },
      { text: '捐赠', link: 'https://afdian.com/a/bugcraft' }
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
          { text: '开始', link: '/guide/' },
          { text: '规则', link: '/guide/rules' },
          { text: '常见问题', link: '/guide/q&a' },
          { text: '关于', link: '/guide/about' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cygbs/BugCraft' }
    ],

    editLink: {
      pattern: 'https://github.com/cygbs/BugCraft/edit/main/:path',
      text: '在 GitHub 上编辑此页面'
    },

        docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '好像没有这页呢',
      quote:
        '“你要去的地方，可能并不存在。”',
      linkLabel: '前往首页',
      linkText: '回到首页'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
