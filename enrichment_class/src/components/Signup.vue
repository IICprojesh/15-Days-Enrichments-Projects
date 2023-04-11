<template>
    <div class="formcontainer">
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label><br />
        <input type="text" id="name" v-model="form.name" />
        <br />
        <label for="email">Email:</label><br />
        <input type="email" id="email" v-model="form.email" />
        <br />
        <label for="password">Password:</label><br />
        <input type="password" id="password" v-model="form.password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name:'Signup'  ,
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Submit form logic here
        alert("Signedup successfully")
        console.log('Form submitted:', this.form);
        // You can send the form data to the server for processing here
        // using AJAX, Axios, or any other library of your choice
      }
    }
  };
  </script>
  <style>
  .formcontainer {
    display :flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  form label{
    text-align: left;
    padding: 0px;
    margin: 5px;
    font-size: 14px;
    color: black;
    font-weight: 550;
}

form input{
    margin:5px;
    line-height: 18px;
    width: 100%;
    transition: all 0.3s ease-out;
}
form input:hover{
    transform: scaleX(1.05);
    /*transform: scale(1.1);*/
    transition: all 0.3s ease-in;
}

form button{
    background-color: black;
    color: white;
    font-weight: bold;
    width: 100px;
    margin: 10px;
    padding: 5px;
    border-radius: 30px;
    box-shadow:1px 2px black;
    transition: all 0.3s ease-out;
}
form button:hover{
    transform: scale(1.2);
    transition: all 0.3s ease-in;
}
</style>