import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
//export default defineConfig({})

export default {
  base: '/BruceWu.portfolio.io/',
  title: 'BruceWu',
  appearance: true,
  ignoreDeadLinks: true,
  lang: 'en-US',
  lastUpdated: true,
  titleTemplate: 'Portfolio',
  

  themeConfig:{
    footer: {
        copyright: "Copyright@ 2026 Zhaoxiang Wu"
    },
    socialLinks: [
    { icon: "instagram", link: "https://www.instagram.com/bruce._.wu/" },
    { icon: "github", link: "https://github.com/MayHooves" },
    { icon: "linkedin", link: "https://www.linkedin.com/in/bruce-wu-4450363b0/" },
    ],
    nav: [
      { text: 'Home', link: '/'},
      { text: 'About Me', link: '/about/'},
      { text: 'CV', link: '/cv.md'},
      { text: 'Portfolio', link: '/projects'},
      { text: 'Blog', link: '/blog/'},
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
  }
}