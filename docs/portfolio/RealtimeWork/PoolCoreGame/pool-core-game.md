<center>

# Pool Core Game
</center>




<center>

## Screen Shots From The Game
</center>

<script setup>
import { ref } from 'vue'
// 1. 引入 VitePress 提供的路径转换工具
import { withBase } from 'vitepress'

// 图片路径
const images = [
  withBase('/Realtime/PoolCore/duck.png'),
  withBase('/Realtime/PoolCore/hall.png'),
  withBase('/Realtime/PoolCore/pool.png'),
  withBase('/Realtime/PoolCore/space.png'),
  withBase('/Realtime/PoolCore/basement.png'),
]

// 2. 记住当前选中的是第几张图，默认是 0（第一张）
const currentIndex = ref(0)
</script>

<div class="gallery-container">
  <div class="main-image">
    <img :src="images[currentIndex]" alt="大图展示" />
  </div>

  <div class="thumbnails">
    <img 
      v-for="(img, index) in images" 
      :key="index"
      :src="img" 
      :class="{ active: currentIndex === index }"
      @click="currentIndex = index"
      alt="缩略图"
    />
  </div>
</div>

<style scoped>
/* 整体容器 */
.gallery-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 600px; /* 画廊的宽度 */
  margin: 30px auto; /* 让画廊在页面居中 */
}

/* 大图样式 */
.main-image img {
  width: 100%;
  aspect-ratio: 1.5/1; /* 锁定大图比例，防止切换不同尺寸图片时页面跳动 */
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: opacity 0.3s ease;
}

/* 底部滑块容器 */
.thumbnails {
  display: flex;
  gap: 10px;
  overflow-x: auto; /* 当图片太多时，允许横向滑动 */
  padding-bottom: 8px; /* 给滚动条留点空间 */
  scrollbar-width: thin; /* 让滚动条细一点，更好看 */
}

/* 底部小图样式 */
.thumbnails img {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer; /* 鼠标放上去变小手 */
  opacity: 0.5;    /* 没选中的时候变暗 */
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

/* 选中的小图以及鼠标悬停时的小图样式 */
.thumbnails img.active,
.thumbnails img:hover {
  opacity: 1; /* 完全点亮 */
  border-color: #10b981; /* 加上一个带颜色的高亮边框 */
}
</style>

<center>

## Record of the game
</center>
<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Km9pcuRuZ_0?si=W9KItoBDdaXHgBoz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>



## What I've learned

This game demo was developed during my exploration of **Unreal Engine 5**, with a core focus on high-level visual polishing. I developed custom **post-processing filters and materials** to create a hazy, surreal aesthetic, intentionally simulating the artifacts and imperfections of **vintage VHS footage**.

Beyond the visual layer, the environment design centers on counterintuitive **spatial arrangements**. By placing objects in unsettling, illogical ways, I aimed to evoke the inexplicable dread associated with **"Weirdcore."** This project demonstrates my ability to use technical shaders and meticulous level design to craft a specific, immersive psychological atmosphere.


<br>
<center>

[Click here going back](/projects.md)

</center>