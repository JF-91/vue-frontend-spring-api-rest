<script setup>
</script>

<template>
  <div class="nav">
    <RouterLink to="/">Home</RouterLink> | 
    <RouterLink to="/about">About</RouterLink> |
  </div>
  <RouterView />
</template>

<style scoped lang="scss">
.nav {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
}

</style>
