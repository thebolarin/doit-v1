<template>
  <div>
    <nav class="nav">
      <div class="container">
        <div class="nav-wrapper">
          <a href="/" class="brand-logo center-align">doit</a>
        </div>
      </div>
    </nav>

    <div class="row auth">
      <div class="col xl6 l6 m12 s12 signup-a">
        <div class="container">
          <h4>Log In</h4>
          <p>
            Don't have an account?
            <router-link to="/signup">
              <a class>Sign Up</a>
            </router-link>
          </p>
          <form  @submit.prevent="onSubmit" novalidate>
            <div class="input-field">
              <input id="email" name="email" v-model="email" type="email" data-error="Invalid" data-success="Valid"/>

              <label data-error="Invalid" data-success="Valid" for="email">Email</label>
            </div>

            <div class="input-field">
              <input id="password" name="password" type="password" v-model="password"/>
              <label for="name">Password</label>
            </div>

            <span class="remember">
              <label class>
                <input type="checkbox" class="filled-in checkbox-orange" checked="checked" />
                <span style="font-size:13px;">Remember Me</span>
              </label>

              <!-- <input type="checkbox"  class="filled-in" id="filled-in-box" checked="checked" />
              <label for="filled-in-box">Remember Me</label>-->
            </span>

            <!-- <span class="forgot">
              <a href>Forgot Password</a>
            </span> -->
            <input type="hidden" name="_csrf" value="<%= csrfToken %>" />

            <div>
              <input type="submit" value="Log In" class="btn submit" />
            </div>
          </form>
        </div>
      </div>
      <div class="col xl6 l6 signup-b hide-on-med-and-down">
        <br />
        <div class="container">
          <div class="content">
            <h4>Free up your mental space.</h4>

            <p style="line-height:37px;">Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list (no matter where you are).Achieve peace with doit today. </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 import axios from "../../axios-auth";
  export default {

    data () {
      return {
        email: '',
        password: ''
      }
    },
      mounted() {

    const M = window.M

      M.AutoInit(); // That way, it is only initialized when the component is mounted

    },
  created(){
const M = window.M

      M.AutoInit(); // That way, it is only initialized when the component is mounted
  },
    methods: {


      onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
        }
        // console.log(formData)
        //  this.$store.dispatch('auth', {email: formData.email, password: formData.password})
        axios
        .post("/login", formData)
        .then(res => {
          // localStorage.setItem('auth', JSON.stringify(res.data));
          // this.$root.auth = res.data;

           localStorage.setItem('token', res.data.token);
           localStorage.setItem('name', res.data.details.name);
            //  console.log(res.data.details.name);
          this.loading = false;
          // console.log(res);

          this.$router.push({ name: "dashboard" });
        })
        .catch(error => {
          error;
          // console.log(error);
          this.$router.push({ name: "login" });
          this.$noty.warning("Please review your information.");
        });
      }
    }
  }
</script>
<style>
/* html {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
} */

* {
  box-sizing: border-box;
}
body {
  /* background: #faf5ff; */

  /* background-image: url("../img/all.jpg"); */

  font-family: "Muli", sans-serif;
  font-weight: 500;
  position: relative;
  color: #241c15;
}

html,
body {
  width: 100%;
  /* overflow-x: hidden; */
}

h1,
h2,
h3,
h4 {
  font-weight: bold;
  letter-spacing: 2px;
}
.bold {
  font-weight: bold;
}

p {
  line-height: 20px;
  font-size: 17px;
}
table th,
td {
  font-weight: 400 !important;
  font-size: 13px;
}

i {
  color: black;
}

a {
  outline: none !important;
}

hr {
  width: 100%;
  border: 0.5px solid rgb(226, 224, 224);
}
.btn {
  font-size: 13px;
  text-transform: none;
  background: #6b46c1;
  margin-top: 5px;
  text-align: center;
  border-radius: 4px;
}
.btn:hover {
  font-size: 13px;
  text-transform: none;
  background: #553c9a;
  margin-top: 5px;
  text-align: center;
}

form {
  width: 100%;
  /* margin-left:40px; */
}
form .submit {
  text-transform: none;
  background: #553c9a;
  width: 100%;
}
form .submit:hover {
  text-transform: none;
  background: #6b46c1;
}
form .input-field label {
  font-size: 13px;
  color: #718096;
}
form .input-field {
  width: 98%;
}
form .input-field input {
  background: #ffffff;
  display: block;
  /* width:auto; */
  padding-left: 5px;
  border: 1px solid rgb(179, 179, 179);
  transition: all 1s;
  border-radius: 5px;
  box-shadow: none;
}

form .input-field input:focus {
  /* border-color:#005680; */
  border: 1px solid #44337a;
}
form label {
  color: #718096;
  padding-left: 20px;
}
form label:focus {
  color: #718096;
  padding-left: 40px;
}
/* label underline focus color */

/* auth */
.auth {
  margin-top: 50px;
  /* background:red; */
  width: 70%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  background: white;
  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.2);
}
.auth .signup-a .container {
  margin-left: auto;
  margin-right: auto;

  background: white;
  width: 100%;
}
.auth .signup-a .container h4 {
  text-align: center;
  font-size: 20px;
  color: #44337a;
}
.auth .signup-a .container p {
  text-align: center;
  color: #718096;
  font-size: 13px;
  /* font-weight:bold; */
}

.auth .signup-a .container a {
  color: #44337a;
  font-size: 13px;
  font-weight: bold;
}

.auth .signup-a .container form {
  margin-top: 50px;
  margin-bottom: 50px;
}
.auth .signup-a .container form .input-field {
  margin-top: 20px;
}
.auth .signup-a .container form .input-field input {
  display: block;
  /* width:auto; */
  padding-left: 5px;
  border: 1px solid rgb(179, 179, 179);
  transition: all 1s;
  border-radius: 5px;
  box-shadow: none;
  color: #718096;
  font-size: 13px;
}
.auth .signup-a .container form .input-field input:focus {
  border-color: #44337a;
}
.auth .signup-a .container form .input-field input:active {
  background: #faf5ff;
}
.auth .signup-a .container form .input-field input .invalid {
  border-color: #44337a;
}
/* .auth .signup-a .container form .remember {
  float: left;
  color: #44337a;
  padding-bottom: 20px;
  font-size: 11px;
} */
.auth .signup-a .container form .remember label span {
  color: #44337a;
  font-size: 13px;
}
.filled-in[type="checkbox"].filled-in:checked + label:after {
  border: 2px solid #44337a !important;
  background-color: #44337a !important;
}
.auth .signup-a .container form .forgot {
  float: right;
  padding-bottom: 20px;
}
/* .auth .signup-a .container form label{
    color:#718096;
    padding-left:20px;
    font-size: 13px;
  }
  .auth .signup-a .container form label:focus{
    color:#718096;
    padding-left:40px;
  } */
.auth .signup-a .container form .btn {
  border-radius: 4px;
}

/* .auth .signup-b{

    /* background:blueviolet;
  } */
.auth .signup-b .content {
  /* background:blue; */
  border-left: 2px solid #44337a;
  border-radius: 5px;
  /* height:200px; */
  margin-top: 20px;
  width: 100%;
}
.auth .signup-b .content p {
  padding-left: 30px;
  color: #718096;
  font-size: 14px;
  line-height: 25px;
}
.auth .signup-b .content h4 {
  padding-left: 30px;
  font-size: 24px;
  color: #44337a;
}

/* Inactive/Active Default input field color */
/* .input-field input[type]:not([readonly]),
 .input-field input[type]:focus:not([readonly]),
 .input-field textarea:not([readonly]),
 .input-field textarea:focus:not([readonly]) {
     border-bottom: 1px solid #718096;
     box-shadow: 0 1px 0 0 #718096;
 } */

/* Inactive/Active Default input label color */
.input-field input[type]:focus:not([readonly]) + label,
.input-field textarea:focus:not([readonly]) + label {
  color: #718096;
}

/* Active/Inactive Invalid input field colors */
/* .input-field input[type].invalid,
 .input-field input[type].invalid:focus,
 .input-field textarea.invalid,
 .input-field textarea.invalid:focus {
     border-bottom: 1px solid #e57373;
     box-shadow: 0 1px 0 0 #e57373;
 } */

/* Active/Inactive Invalid input label color */
.input-field input[type].invalid:focus + label,
.input-field input[type].invalid ~ .helper-text::after,
.input-field input[type].invalid:focus ~ .helper-text::after,
.input-field textarea.invalid:focus + label,
.input-field textarea.invalid ~ .helper-text::after,
.input-field textarea.invalid:focus ~ .helper-text::after {
  color: #718096;
}

/* Active/Inactive Valid input field color */
/* .input-field input[type].valid,
 .input-field input[type].valid:focus,
 .input-field textarea.valid,
 .input-field textarea.valid:focus {
     border-bottom: 1px solid #26a69a;
     box-shadow: 0 1px 0 0 #26a69a;
 } */

/* Active/Inactive Valid input label color */
.input-field input[type].valid:focus + label,
.input-field input[type].valid ~ .helper-text::after,
.input-field input[type].valid:focus ~ .helper-text::after,
.input-field textarea.valid:focus + label,
.input-field textarea.valid ~ .helper-text::after,
.input-field textarea.valid:focus ~ .helper-text::after {
  color: #718096;
}

.nav {
  background: transparent;
}

.nav .brand-logo {
  font-size: 26px;
  color: #553c9a;
  font-weight: bold;
  font-family: "Kaushan Script", cursive;
}
nav ul p {
  color: #718096;
  font-size: 13px;
  font-weight: bold;
}
nav {
  box-shadow: none;
}
nav p a {
  background: #44337a !important;
}
</style>
