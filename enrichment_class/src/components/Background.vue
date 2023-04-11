<template>
    <div class="herocontent">
        <div class="hero">
            <h2>{{ title }}</h2>
            <p>{{ bodytext }}</p>
    </div>
    </div>

</template>

<script>
    export default {
        name:'Background',
         data(){
         return{
            title:'Lorem ips',
            bodytext:'Lorem ipsum dolor sit amet consectetur,adipisicing elit. Porro quaerat inventore at qui ab reiciendis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis dignissimos odit ipsam fugiat, quod sunt! Impedit nam doloribus omnis?',

        }
    }
     }

</script>

<style>
    .herocontent {
        background: linear-gradient(to right, #00CED1, silver, #FFFFFF);
        padding: 50px;
        height: 500px;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .hero {
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        padding: 20px;
        width: 600px;
        margin: 0 auto;
        text-align: center;
        
    }

    h2 {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    p {
        font-size: 18px;
        line-height: 1.5;
        margin-bottom: 30px;
        color: black;
    }
</style>
