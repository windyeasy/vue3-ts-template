<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core'

const test = ref('test auto import')
const store = useLocalStorage('my-storage', {
  name: 'Apple',
  color: 'red',
})
setTimeout(() => {
  store.value.color = 'blue'
}, 1500)
</script>

<template>
  <div class="home">
    <div class="header m-1 text-3xl">
      home
      {{ test }}
      <hello-world />
      <button class="i-carbon-sun" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  background-color: red;
  .header {
    color: yellow;
  }
}
</style>
