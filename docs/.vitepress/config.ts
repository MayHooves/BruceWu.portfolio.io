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
      { text: 'Portfolio', link: '/projects'},
      { text: 'Blog', link: '/blog/'},
    ],
  }
}