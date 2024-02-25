<script>
export default {
  data() {
    return {
      price: '123.214213',
      message: "Hello Vue!"
    }
  },

  methods: {
    sayHello() {
      alert(this.message);
    }
  }
}
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>

    {{ $filters.formatBigEuro(price)  }}
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
