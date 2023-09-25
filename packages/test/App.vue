<!--
 * @Description:
 * @Author: wsy
 * @Date: 2023-09-12 20:11:59
 * @LastEditTime: 2023-09-25 22:49:56
 * @LastEditors: wsy
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a
      href="https://vitejs.dev" target="_blank" foo="1"
      a="2" c="3333"
    />
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
