<script>
export default {
    name: 'Home',
    data () {
      return {}
    },
    methods: {
      onPlay() {
        window.location.href = "https://t.me/thesimsonline_bot"
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
      «Обследование в приёмном покое подтвердило первоначальный диагноз: не к нам, а в шестую больницу!» © https://anekdoty.ru/
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
      При простуде эффективнее пить не молоко с мёдом, а коньяк с медсестрой.© https://anekdoty.ru/</div>
  </div>
</template>
<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    overflow:hidden;
    height: 100%;
    width: 100%;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 110px;
    width: 100%;
  }
  .logo img {
    width: 100%;
    height: 100%;
  }
  .btn {
    margin: 20px 0px;
    height: 30px;
    width: 50%;
  }
  .btn button {
    width: 100%;
    height: 100%;
    border: 0;
    background-color: green;
    color: white;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
  }
  .socials {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    margin: 10px 0px;
  }
  .socials img, .socials a {
    height: 100%;
    margin: 0px 10px;
  } 
  .socials img:hover, .socials a:hover {
    background-color: transparent;
  }
</style>