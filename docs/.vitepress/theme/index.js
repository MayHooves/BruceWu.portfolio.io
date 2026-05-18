import DefaultTheme from 'vitepress/theme'
import './style.css'
import { h } from 'vue'
import Typewriter from './components/Typewriter.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 这里的 'home-hero-info-after' 是 VitePress 提供的插槽
      // 它会把内容插入到首页大标题和描述的下方，按钮的上方
      'home-hero-info-after': () => h(Typewriter, {
        // 在这里传入你想要的语录集
        quotes: [
          'Stay hungry, stay foolish',
          'Small steps every day lead to big results',
          'Be the energy you want to attract',
          'Focus on the good, and the good gets better',
          'Follow where the heart leads, everything becomes a miracle'
        ],
        typeSpeed: 100,
        deleteSpeed: 50,
        pauseDuration: 2500
      })
    })
  }
}