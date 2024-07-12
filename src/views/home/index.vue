<script lang="ts" setup>
const test = ref('test auto import')
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
