<script>
export default {
    name: 'Card',
    data () {
      return {
      }
    },
    components: {
    },
    methods: {
      toTab(tab) {
        this.$emit('toTab', tab)
      }
    }

}
</script>

<template>
    <div class="clash-card">
      <div class="header">
        <span @click="toTab(true)">Инвентарь</span>
        <span @click="toTab(false)">Персонаж</span>
      </div>
      <div class="clash-card__image clash-card__image--barbarian">
        <div class="clash-card__unit-name">Сергей</div>
      </div>
      <div class="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
        <div class="stat_wrapper">
          <div class="stat-value heart"></div>
          <div class="stat">100</div>
        </div>

        <div class="stat_wrapper">
          <div class="stat-value energy"></div>
          <div class="stat">100</div>
        </div>

        <div class="stat_wrapper">
          <div class="stat-value hungry"></div>
          <div class="stat">100</div>
        </div>
        <div class="stat_wrapper">
          <div class="stat-value money"></div>
          <div class="stat">100.000₽</div>
        </div>

        <div class="stat_wrapper">
          <div class="stat-value power"></div>
          <div class="stat">1</div>
        </div>

        <div class="stat_wrapper">
          <div class="stat-value clear"></div>
          <div class="stat">100</div>
        </div>
        <div class="stat_wrapper">
          <div class="stat-value intellect"></div>
          <div class="stat">1</div>
        </div>

        <div class="stat_wrapper">
          <div class="stat-value lucky"></div>
          <div class="stat">1</div>
        </div>

        <div class="stat_wrapper column">
          <div class="stat">Нет</div>
          <div class="stat-value">Водительские права</div>
        </div>
        <div class="stat_wrapper column">
          <div class="stat">Безработный</div>
          <div class="stat-value">Профессия</div>
        </div>
      </div>
</div> <!-- end container -->
</template>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:400,700,900);
 *, *:before, *:after {
	 box-sizing: border-box;
}
 body {
	 background: linear-gradient(to bottom, rgba(140, 122, 122, 1) 0%, rgba(175, 135, 124, 1) 65%, rgba(175, 135, 124, 1) 100%) fixed;
	 background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/coc-background.jpg') no-repeat center center fixed;
	 background-size: cover;
	 font: 14px/20px "Lato", Arial, sans-serif;
	 color: #9e9e9e;
	 margin-top: 30px;
}
.header {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(0, 0, 0, 0.6);
  width: 100%;
  z-index: 1;
}
.header span {
  margin: 0px 19px;
  cursor: pointer;
  user-select: none;
}
 .slide-container {
	 text-align: center;
}
 .wrapper:focus {
	 outline: 0;
}
 .clash-card {
	 background: white;
	 display: flex;
   flex-direction: column;
   justify-content: space-between;
	 position: relative;
	 text-align: center;
   width: 100%;
   height: 100%;
}
 .clash-card__image {
	 position: relative;
	 height: 192px;
}
 .clash-card__image--barbarian {
    position: relative;
	  background: url('../images/character.jpeg');
    background-position: -70px -50px;
    background-size: 150%;
}
 .clash-card__unit-name {
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
	 font-size: 26px;
	 font-weight: 900;
	 margin-bottom: 5px;
}
 .clash-card__unit-stats--barbarian {
	 background: #ec9b3b;
}
 .clash-card__unit-stats--barbarian .stat_wrapper {
	 border: 1px solid #bd7c2f;
   display: flex;
   align-items: center;
   justify-content: center;
  }
  .stat_wrapper.column {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .stat_wrapper.column .stat-value,  .stat_wrapper.column .stat{
    width: 100%;
    height: 100%;
  }
 .clash-card__unit-stats {
  color: white;
  font-weight: 700;
  display: grid;
  flex-direction: column;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(2, 1fr);
  height: 60%;
  width: 100%;
  flex-wrap: wrap;
  }

 .clash-card__unit-stats sup {
	 position: absolute;
	 bottom: 4px;
	 font-size: 45%;
	 margin-left: 2px;
}
 .clash-card__unit-stats .stat {
	 position: relative;
	 font-size: 24px;
}
 .clash-card__unit-stats .stat-value {
	text-transform: uppercase;
	font-weight: 400;
	font-size: 12px;
  background-size: contain;
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
}
.heart {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/768px-Heart_coraz%C3%B3n.svg.png");
}
.money {
  background-image: url("https://cdn-icons-png.flaticon.com/512/9400/9400200.png");
}
.weight {
  background-image: url("data:image/png;base64,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");
}
.age {
  background-image: url("https://cdn-icons-png.flaticon.com/512/5931/5931453.png");
}
.energy {
  background-image: url("https://freesvg.org/img/lightning.png");
}
.hungry {
  background-image: url("https://cdn-icons-png.flaticon.com/512/2309/2309069.png");
}
.power {
  background-image: url("https://cdn0.iconfinder.com/data/icons/fitness-58/50/Fitness-14-512.png");
}
.intellect {
  background-image: url("https://brainmadesimple.com/wp-content/uploads/2019/09/logo.png");
}
.lucky {
  background-image: url("https://cdn2.iconfinder.com/data/icons/animals-nature-2/50/1F340-four-leaf-clover-512.png");
}
.clear {
  background-image: url("https://clipart-library.com/images_k/shower-clipart-transparent/shower-clipart-transparent-16.png");
}
.carlaw {
  background-image: url("https://cdn-icons-png.flaticon.com/512/7831/7831414.png");
}
.profession {
  background-image: url("https://www.iconpacks.net/icons/2/free-briefcase-icon-1965-thumb.png");
}
.created_at {
  background-image: url("https://icons.iconarchive.com/icons/flat-icons.com/flat/512/Clock-icon.png");
}

 .clash-card__unit-stats .no-border {
	 border-right: none;
}
 .clearfix:after {
	 visibility: hidden;
	 display: block;
	 font-size: 0;
	 content: " ";
	 clear: both;
	 height: 0;
}
 .slick-prev {
	 left: 100px;
	 z-index: 999;
}
 .slick-next {
  }
</style>