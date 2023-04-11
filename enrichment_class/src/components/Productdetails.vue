<template>
    <Header></Header>
    <div  class="product-detail">
    <h1 class="maintopic"><span>Product Detail</span></h1>
<div class="prodetail">
   <div class="imgsection">
    <img src="../assets/logo.png" alt="">
   </div>
   <div class="detailsection">
    <span class="blank">yuiu</span>
    <h1>Product 1</h1>
    <h3>Myprice</h3>
    <p class="detail">Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Quibusdam ipsum laborum consequuntur praesentium nemo,</p>
        <RouterLink to="/">Home</RouterLink>
   </div>
   </div>
</div>
<Footer></Footer>
</template>

<script>
import { RouterLink } from 'vue-router';
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
    name:'Productdetails',
    components:{
        Header,
        Footer,
    }
}
</script>

<style>

.product-detail{
    margin: 10px 0 ;
    width: 100%;
    
}
.product-detail .maintopic{

    font-size: 28px;
    text-align: center;
}
.product-detail .maintopic span{
    border-bottom: 7px solid #b10404;
}
.prodetail{
  
    margin: 2rem 4rem;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */

    /* padding: 20px auto; */
}
.detailsection{
    width: 40%;
    margin-left: 3rem;
    /* text-align: center; */
}
.detailsection span.blank{
    content: none;
    border-bottom: 6px solid #000;
    color: white;
    /* width: 20px; */
    /* margin-left: 2rem; */
   
}
.prodetail h1,h3{
    margin-top: 0.5rem;
}
.prodetail h1, .detail{
    justify-content: center;
    color: black;
    margin-top: 1rem;
    /* text-align: center; */
    
}
.prodetail h1{
    font-size: 30px;
}
.prodetail h3{
    font-size: 23px;
}
.prodetail .imgsection{
   width: 400px;
   
}
.prodetail .imgsection img{
    width: 100%;
    overflow: hidden;
}
.detailsection a{
    text-decoration: none;
    color: #000;
    font-size: 20px;
    padding: 0.6em 0.5rem;
    /* margin-top: 20px; */
    background-color: bisque;
    border-radius: 10px;
}
.detailsection a:hover{
    background-color: #000;
    color: white;
    transition: all 0.8s ease-in-out;
}
.detailsection p{
    margin-bottom: 20px;
}
</style>