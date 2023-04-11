<template>
     <div class="homepage">
    <Header></Header>
    <Background></Background>
    <div class="container">
      <Places :place="place1"
    :unit="unit1"
    :price="price1"></Places>
    <Places :place="place1"
    :unit="unit1"
    :price="price1"></Places>
    <Places :place="place1"
    :unit="unit1"
    :price="price1"></Places>
    <Places :place="place1"
    :unit="unit1"
    :price="price1"></Places>
    <Places :place="place1"
    :unit="unit1"
    :price="price1"></Places>
    </div>
    <Footer></Footer>
   

    <!-- <HelloWorld :msg="'hello'"></HelloWorld> -->
  </div>

</template>
<script>
import Places from './components/Places.vue';
// import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
import Background from './components/Background.vue';
import Footer from './components/Footer.vue';

export default {
    name:'Home',
  components:{
    Header,Background,Places,Footer
  },
  data(){
    return{
      place1:"Pokhara",
      unit1:"Nrs",
      price1:"3000,"
    }
  }
}
</script>
<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
  
}

/* .container {
  display: flex;
  flex-direction: row-reverse;
  /* justify-content: space-between; */
  /* padding: 0px 20px; */
  /* overflow: scroll; */

/* } */ 

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px;
  margin: 20px;
  max-height: 100vh;
  overflow-y: scroll;
}

.container::-webkit-scrollbar {
  display: none;
}

.container > * {
  flex-basis: 25%;
}
</style>