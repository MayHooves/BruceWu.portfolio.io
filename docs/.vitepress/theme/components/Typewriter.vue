<!-- .vitepress/theme/components/Typewriter.vue -->
<template>
  <div class="typewriter-container">
    <span class="text">{{ displayedText }}</span>
    <span class="cursor">|</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  quotes: {
    type: Array,
    required: true,
    default: () => ['Hello VitePress!', '这是一个打字机效果', '不断删掉又刷新~']
  },
  typeSpeed: { type: Number, default: 150 },    // 打字速度 (ms)
  deleteSpeed: { type: Number, default: 80 },   // 删除速度 (ms)
  pauseDuration: { type: Number, default: 2000 } // 打完一句话后的停顿时间 (ms)
})

const displayedText = ref('')
let quoteIndex = 0
let charIndex = 0
let isDeleting = false
let timer = null

const type = () => {
  const currentQuote = props.quotes[quoteIndex]

  if (isDeleting) {
    displayedText.value = currentQuote.substring(0, charIndex - 1)
    charIndex--
  } else {
    displayedText.value = currentQuote.substring(0, charIndex + 1)
    charIndex++
  }

  // 动态调整下一次执行的时间
  let speed = isDeleting ? props.deleteSpeed : props.typeSpeed

  // 如果这句话打完了
  if (!isDeleting && charIndex === currentQuote.length) {
    speed = props.pauseDuration // 停顿一会儿再开始删
    isDeleting = true
  } 
  // 如果这句话删完了
  else if (isDeleting && charIndex === 0) {
    isDeleting = false
    quoteIndex = (quoteIndex + 1) % props.quotes.length // 切换到下一句
    speed = 500 // 开始打下一句前的短暂亦停顿
  }

  timer = setTimeout(type, speed)
}

onMounted(() => {
  if (props.quotes.length > 0) {
    type()
  }
})

onUnmounted(() => {
  clearTimeout(timer)
})
</script>

<style scoped>
.typewriter-container {
  font-size: 1.2rem;
  color: var(--vp-c-text-3); /* 使用 VitePress 默认主题的次级文字颜色 */
  margin-top: 16px;
  font-weight: 500;
}

.cursor {
  display: inline-block;
  color: var(--vp-c-brand); /* 光标使用主题高亮色 */
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>