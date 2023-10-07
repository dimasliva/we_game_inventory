<template>
  <div class="container">
    <span class="title">Инвентарь</span>
  </div>
</template>
<script>

export default {
    name: 'Inventory',
    data () {
      return {}
    },
    methods: {
      onPlay() {
        this.$router.push({name: 'inventory'})
      }
    }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
.title {
  font-size: 20px;
  font-weight: bold;
}
</style>
