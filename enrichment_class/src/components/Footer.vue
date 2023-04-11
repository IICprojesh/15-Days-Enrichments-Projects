<template>
     <footer class="footer">
        <div class="mainfooter">
            <h2>This is footer</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Perspiciatis nisi expedita ab molestiae? Eaque ex totam ad itaque nostrum neque?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, sit.</p>
        <div class="link">
            <i class="fa fa-facebook "></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-linkedin"></i>
            <!-- <i class="fa fa-coffee fa-5x"></i> -->
        </div>
        </div>

    </footer>

</template>

<script>
export default {
    name:'Footer'
}
</script>

<style>
footer{
    background: black;
}
.mainfooter{
    
    margin: 0;padding: 0;
    width: 500px;
    margin: auto;
    text-align: center;
    /* height: 100vh; */
}
footer h2{
    
    font-size: 25px;
   /* margin-top: 20px; */
}
footer p{
    font-size: 20px;
}
footer h2, p{
    padding: 10px 0;
    color: white;
}

footer .link{
    padding: 10px 0;
    text-align: center;
}

footer .link i{
    color: white;
    font-size: 25px;
    
    margin: 0 10px;
padding: 8px 13px;
/* border: 2px solid silver; */
    align-items: center;
    text-align: center;
    /* width: 15px; */
    /* height: 19px; */
   
  
  
/* border-radius: 15px 50px; */
/* border-radius: 30px; */
}
</style>