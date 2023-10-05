<script setup>
</script>

<template>
  <div class="container">
    <h1 class="banner"></h1>
    <div class="logo">
      <img src="@/images/logo.png"/>
    </div>
    <div class="btn">
      <button>Играть</button>
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati hic ex placeat veritatis eum blanditiis optio, vel voluptatibus laboriosam consequatur. Ex possimus molestiae sapiente. Libero quibusdam molestias quia dicta.
    </div>
    <div class="socials">
      <img src="@/images/class.png"/>
      <img src="@/images/gos.png"/>
      <img src="@/images/vk.svg"/>
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, consequatur esse. Quisquam, iste alias aspernatur in est porro, eaque nobis suscipit laboriosam repellat dolore perspiciatis sunt vero reiciendis optio praesentium.
    </div>
  </div>
</template>
<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 210px;
  }
  .logo img {
    height: 100%;
  }
  .btn {
    margin: 20px 0px;
    height: 60px;
    width: 50%;
  }
  .btn button {
    width: 100%;
    height: 100%;
    border: 0;
    background-color: green;
    color: white;
    font-size: 20px;
    border-radius: 4px;
  }
  .socials {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75px;
    width: 100%;
    margin: 10px 0px;
  }
  .socials img {
    height: 100%;
    margin: 0px 20px;
  } 
</style>