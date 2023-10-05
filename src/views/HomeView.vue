<script>
export default {
    name: 'my-component',
    data () {
      return {}
    },
    methods: {
      onPlay() {
        window.location='https://t.me/thesimsonline_bot';
      }
    }
}
</script>

<template>
  <div class="container">
    <h1 class="banner"></h1>
    <div class="logo">
      <img src="@/images/logo.png"/>
    </div>
    <div class="btn">
      <button @click="onPlay">Играть</button>
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati hic ex placeat veritatis eum blanditiis optio, vel voluptatibus laboriosam consequatur. Ex possimus molestiae sapiente. Libero quibusdam molestias quia dicta.
    </div>
    <div class="socials">
      <a href="https://t.me/thesimsonline_bot">
        <img src="@/images/class.png"/>
      </a>
      <a href="https://t.me/thesimsonline_bot">
        <img src="@/images/gos.png"/>
      </a>
      <a href="https://t.me/thesimsonline_bot">
        <img src="@/images/vk.svg"/>
      </a>
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
    cursor: pointer;
  }
  .socials {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75px;
    width: 100%;
    margin: 10px 0px;
  }
  .socials img, .socials a {
    height: 100%;
    margin: 0px 20px;
  } 
  .socials img:hover, .socials a:hover {
    background-color: transparent;
  }
</style>