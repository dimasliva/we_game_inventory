<script>
import draggable from "vuedraggable";
export default {
    name: 'Home',
    data () {
      return {
        item: {},
        list1: [
          { img: 'https://i.imgur.com/Yyr1zED.png', alt: 'Deagle' },
          { img: 'https://i.imgur.com/VDsFdmg.png', alt: 'Blue Waffle' },
          { img: 'https://i.imgur.com/Gr4OB7y.png', alt: 'Курица' },
          { img: 'https://icons.iconarchive.com/icons/george-ui/ancient-legend/128/Help-Book-icon.png', alt: 'Книга' },
        ],
        list2: [
        { img: 'https://i.imgur.com/KyJHqZb.png', alt: 'Тизер' },
        ],
    
      }
    },
    components: {
      draggable
    },
    methods: {
      onPress(item) {
        this.list1.forEach(val => val.clicked = false)
        item.clicked = !item.clicked
        if(item.clicked) {
          this.item = item
        } else {
          this.item = {}
        }
      },
      onUse() {
        console.log(this.item)
        let i = this.list1.indexOf(this.item)
        if(i !== -1) {
          this.list1.splice(i, 1)
        }
      }
    }

}
</script>

<template>
  <main>
    <section>
      <div class="grid-container">
        <!-- section titles -->

        <div class="title">Хранилище</div> 
        <!-- storage -->
        <draggable
          class="item-container"
          :list="list1"
          group="people"
          item-key="id"
        >
            <template #item="{ element }">
              <div @click="onPress(element)" :style="{ backgroundImage: `url(${element.img})` }" :class="{clicked: element.clicked}" class="item-cell" id="i1">
                <div  class="item">
                </div>
              </div>  
            </template>
          </draggable>
          <div class="title">Действия</div> 
        <!-- actions -->
        <div class="action-container">
          <!-- use -->
          <button class="btn" @click="onUse">Использовать</button>
          <!-- give -->
          <button class="btn" @click="onUse">Выбросить</button>
        </div>
      </div>
    </section>
    
    <!-- hotbar section -->
    <section>
      <div class="hotbar-grid-container">
        <div class="title">Инвентарь</div> 

        <div class="hotbar-item-container">
          <draggable
            class="hotbar-item-container"
            :list="list2"
            group="people"
            item-key="id"
          >
            <template #item="{ element }">
              <div class="hotbar-item-cell"  id="h1">
                <div class="item" :style="{ backgroundImage: `url(${element.img})` }">
                </div>
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.container {
  overflow-y: auto;
}
.clicked {
  background-color: yellow;
}
.title {
  color: white;
}

.btn {
  background-color: #222;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Farfetch Basis","Helvetica Neue",Arial,sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  min-height: 44px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 50%;
  margin: 0 10px;
}

.btn:hover {
  opacity: .75;
}

 .item {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
 }
 .grid-container {
  display: flex;
  flex-direction: column;
	 opacity: 0.6;
	 background: #000;
	 padding: 1% 1% 1.5% 1%;
	 grid-gap: 1%;
	 text-align: center;
	 max-height: 30em;
}
/* inventory/storage middle layer container */
 .item-container {
	 display: grid;
	 overflow: scroll;
	 overflow-x: hidden;
	 background-color: #111;
	 grid-template-columns: repeat(4, 1fr);
	 grid-template-rows: auto;
	 max-height: 25em;
   min-height: 192px;
}
/* individual inventory items */
 .item-cell {
	 border-style: solid;
	 border-width: 0.1em;
	 height: 6em;
   background-size: 100%;
   background-position:center;
   background-repeat:no-repeat;
}
/* text boxes underneath items */
 .overlay {
	 margin: 1em;
}
/* makes cells change colour on hover */
 .item-cell:hover {
	 background-color: yellow;
	 color: #000;
}
/* actions middle layer container */
 .action-container {
    display: flex;
    justify-content: space-between;
    padding: 4%;
    background-color: #111;
    max-height: 28em;
  }

/* outer container */
 .hotbar-grid-container {
	 display: grid;
	 opacity: 0.6;
	 background: #000;
	 padding: 1% 1% 1% 1%;
	 grid-gap: 1%;
	 text-align: center;
	 max-height: 30em;
}
/* inventory/storage middle layer container */
 .hotbar-item-container {
	 display: grid;
	 padding: 0.5em;
	 grid-gap: 0.5em;
	 background-color: #111;
	 grid-template-columns: repeat(3, 1fr);
	 grid-template-rows: auto;
	 max-height: 25em;
   width: 97%;
   min-height: 110px;
}
/* individual inventory items */
 .hotbar-item-cell {
    border-radius: 4px;
	  background-color: #ccc;
	  height: 6em;
    width: 6em;
}
/* numbers denoting which hotkey is attached */
 .hotkey-overlay {
	 display: grid;
	 position: absolute;
	 top: 0;
	 left: 0;
	 background: rgba(255, 255, 255, 0.6);
	 color: #000;
	 padding: 6%;
}
 
</style>