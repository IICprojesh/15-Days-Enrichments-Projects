<script>
import { RouterLink } from 'vue-router';
import Productdetails from './Productdetails.vue';
export default{
    name:'Places',
    props:{
            place:String,
            unit:String,
            price:Number,
    },

    components:{Productdetails

    }
    // data (){
    //     return{
    //         image:'../assets/logo.png',
    //         place:'Pokhara',
    //         unit:'NRS',
    //         price:'3000',

    //     }
    // }
}

</script>
<template>
    <div class="destinationsection">
            <div class="places">
                <div class="imgsection">
                    <img src="../assets/logo.png" alt="">
                </div>
                <div class="imgdetail">
                    <!-- <h2>Pokhara</h2> -->
                        <h2>{{ place }}</h2>
                    <div class="imgpackage">
                        <div class="price">
                            <h3>{{ unit }} <span class="green">{{ price }}</span></h3>
                        </div>
                        <div class="star">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>
                    <RouterLink to="/details">More</RouterLink>
        
                </div>
                </div>
                </div>
                

</template>





<style>

.destination{
    margin:0;
    padding: 0;

    
}
.destination h1{
    margin-top: 20px;
    text-align: center;
}
.destination  .maroon{
    border-bottom: 4px solid maroon;
    margin-top: 5px;
}
.destinationsection{
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.destinationsection .places{
    width: 300px;
 /* flex-direction: column; */
    padding: 15px 15px;
    margin: 10px 4px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;    */
    /* border: 3px solid red; */
    border-radius: 10px;
    box-sizing: border-box;
    
}
.destinationsection .places .imgsection{
    height: 300px;
    
}
.destinationsection .places .imgsection img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.8;
}
.destinationsection .places .imgsection img:hover{
   opacity: 1;
}
.destinationsection .places .imgdetail{
    padding: 10px 0;
}
.destinationsection .places .imgdetail h2{
    text-align: center;
}
.destinationsection .places .imgdetail .imgpackage{
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
.destinationsection .places .imgdetail .imgpackage .star{
    margin-top: 8px;
}
.destinationsection .places .imgdetail a{
    /* width: 30px; */
justify-content: center;
  display: flex;
   text-decoration: none;
   font-size: 20px;
   color: black;
   margin: 0;
  
   
   /* width: 20px; */
}
.destinationsection .places .imgdetail a span{
    width: 100px;
    padding: 10px 13px;
    background-color: rgb(124, 124, 66);
    border-radius: 10px;
}
.destinationsection .places .imgdetail a span:hover{
    background-color: black;
    color: white;
    transition: all 0.5s ease;
}
</style>