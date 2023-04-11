<template>
    <div class="header">

        <div class="logo">
            <img src="../assets/logo.png"/>
        </div>
        <div class="nav">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About Us</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            <!-- <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a> -->
            <button @click="goToLogin">Login</button>
            <button @click="goToSignup">SingIn</button>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
// import '../assets/style.css'
export default {
    name:'Header',
    methods: {
    goToLogin() {
      this.$router.push({ name: 'Login' }); // Navigate to the Home route
    },
    goToSignup() {
      this.$router.push({ name: 'Signup' }); // Navigate to the About route
    },
}}

</script>

<style >
/* @import url('../assets/style.css'); */

.header {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    /* position: fixed; */
    background: darkgray;
    width: 100%;
    flex-direction: row;

}

.nav{
    display: flex;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    justify-content:space-around;
    width: 60%;

}

.nav a{
    font-size: 20px;
    padding: 6px 20px;
    border-radius: 8px;
    transition: all 0.2s ease;
    margin: 0 4px 0 0;
    text-decoration: none;
}


.nav a:hover {
    transition: all 0.5s ease;
    color: white;
    
}
.nav button{
    border-radius: 30px;
    border: 0px;    
    width: 100px;
    height: 30px;
    background: linear-gradient( 120deg, #00CED1 10%, silver 40%, #FFFFFF 70%);

}

.nav button:hover{
    /* background-color: white; */
    background: linear-gradient( 120deg, #00CED1 90%, silver 80%, #FFFFFF 100%);
    color: black;

}

.logo{
    display: block;

}

.logo img {

    height: 100px;

}
</style>