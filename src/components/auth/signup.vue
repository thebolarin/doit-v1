<template>
  <div>
    <nav class="nav">
      <div class="container">
        <div class="nav-wrapper">
          <a href="/" class="brand-logo">doit</a>
        </div>
      </div>
    </nav>

    <div class="row login">
      <div class="col xl6 l6 m12 s12 signup-a">
        <div class="container">
          <h4>Sign Up</h4>
          <p>
            Already have an account?
            <router-link to="/">
              <a>Log In</a>
            </router-link>
          </p>

          <form @submit.prevent="onSubmit"  novalidate>
            <div class="input-field">
              <input id="name" name="name" v-model="name" type="text" />

              <label for="name">Username</label>
            </div>
             <div class="input-field">
                  <input value="234" id="phone" placeholder="2340000000000" name="phone" type="tel" v-model="phone">

                  <label for="name" class="active">Mobile number</label>
              </div>
            <div class="input-field" :class="{invalid: $v.email.$error}">
              <input
                id="email"
                name="email"
                type="email"
                class="validate"
                @input="$v.email.$touch()"
                v-model="email"
                data-error="Invalid"
                data-success="Valid"
              />

              <label for="email">Email</label>

              <p v-if="!$v.email.email">Please provide a valid email address.</p>
              <!-- <p v-if="!$v.email.required">This field must not be empty.</p> -->
            </div>
            <div class="input-field" :class="{invalid: $v.password.$error}">
              <input
                id="password"
                name="password"
                @blur="$v.password.$touch()"
                v-model="password"
                type="password"
              />
              <label for="name">Password</label>
            </div>
            <div class="input-field" :class="{invalid: $v.confirmPassword.$error}">
              <input
                id="confirmPassword"
                name="confirmPassword"
                @blur="$v.confirmPassword.$touch()"
                v-model="confirmPassword"
                type="password"
              />
              <label for="name">Confirm Password</label>
            </div>
            <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
            <div>
              <input
                type="submit"
                :disabled="$v.$invalid"
                value="Create Free Account"
                class="btn submit"
              />
            </div>
          </form>
        </div>
      </div>
      <div class="col xl6 l6 signup-b hide-on-med-and-down">
        <br />
        <div class="container">
          <div class="content">
            <h4>Welcome to doit.</h4>

            <p style="line-height:37px;">Goal setting and goal management software for high achievers.
              Life is full of exciting moments that motivate us to get out of the bed in the morning but our most important milestones can also be the most stressfull,the good news is that you don't have to do it alone..Doit will keep you on track and be your personal assistannt.
            Doit givs you the extra clarity and control you need to achieve your personal goals and be ready for life's important milestones.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../axios-auth";
import {
  required,
  email,
  minLength,
  sameAs,
} from "vuelidate/lib/validators";


export default {
  data() {
    return {
      email: "",
      name: "",
      phone:"",
      password: "",
      confirmPassword: ""
    };
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
      // unique: val => {
      //   if (val === '') return true
      //   return axios.get('/users.json?orderBy="email"&equalTo="' + val + '"')
      //     .then(res => {
      //       return Object.keys(res.data).length === 0
      //     })
      // }
    },

    password: {
      required,
      minLen: minLength(6)
    },
    confirmPassword: {
      //        sameAs: sameAs('password')
      sameAs: sameAs(vm => {
        return vm.password;
      })
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
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
        phone:this.phone,

      };
      // console.log(formData);
      // this.$store.dispatch('signup', formData)
      axios
        .post("/signup", formData)
        .then(res => {
          res;
          this.loading = false;
          // console.log(res);
          // this.$noty.success("Note saved successfully!");
          this.$router.push({ name: "login" });
        })
        .catch(error => {
          error;
          // console.log(error);
          this.$router.push({ name: "signup" });
          this.$noty.warning("Please review your information.");
        });
    }
  }
};
</script>


<style scoped>
.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}
.input-field.invalid label {
  color: red;
}

.input-field.invalid input {
  border: 1px solid red;
  background-color: #ffc9aa;
}


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
  background: #44337a;
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
  background: #44337a;
  width: 100%;
}
form .submit:hover {
  text-transform: none;
  background: #553c9a;
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

/* login */
.login {
  margin-top: 50px;
  /* background:red; */
  width: 70%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  background: white;
  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.2);
}
.login .signup-a .container {
  margin-left: auto;
  margin-right: auto;

  background: white;
  width: 100%;
}
.login .signup-a .container h4 {
  text-align: center;
  font-size: 20px;
  color: #44337a;
}
.login .signup-a .container p {
  text-align: center;
  color: #718096;
  font-size: 13px;
  /* font-weight:bold; */
}

.login .signup-a .container a {
  color: #44337a;
  font-size: 13px;
  font-weight: bold;
}

.login .signup-a .container form {
  margin-top: 50px;
  margin-bottom: 50px;
}
.login .signup-a .container form .input-field {
  margin-top: 20px;
}
.login .signup-a .container form .input-field input {
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
.login .signup-a .container form .input-field input:focus {
  border-color: #44337a;
}
.login .signup-a .container form .input-field input:active {
  background: #faf5ff;
}
.login .signup-a .container form .input-field input .invalid {
  border-color: #44337a;
}
.login .signup-a .container form .remember {
  float: left;
  color: #44337a;
  padding-bottom: 20px;
  font-size: 11px;
}
.login .signup-a .container form .remember label {
  color: #44337a;
  font-size: 13px;
}
.checkbox-orange[type="checkbox"].filled-in:checked + label:after {
  border: 2px solid #44337a;
  background-color: #44337a;
}
.login .signup-a .container form .forgot {
  float: right;
  padding-bottom: 20px;
}
.login .signup-a .container form .btn {
  border-radius: 4px;
}
.login .signup-b .content {
  /* background:blue; */
  border-left: 2px solid #44337a;
  border-radius: 5px;
  /* height:200px; */
  margin-top: 20px;
  width: 100%;
}
.login .signup-b .content p {
  padding-left: 30px;
  color: #718096;
  font-size: 14px;
  line-height: 25px;
}
.login .signup-b .content h4 {
  padding-left: 30px;
  font-size: 24px;
  color: #44337a;
}

/* Inactive/Active Default input label color */
.input-field input[type]:focus:not([readonly]) + label,
.input-field textarea:focus:not([readonly]) + label {
  color: #718096;
}



/* Active/Inactive Invalid input label color */
.input-field input[type].invalid:focus + label,
.input-field input[type].invalid ~ .helper-text::after,
.input-field input[type].invalid:focus ~ .helper-text::after,
.input-field textarea.invalid:focus + label,
.input-field textarea.invalid ~ .helper-text::after,
.input-field textarea.invalid:focus ~ .helper-text::after {
  color: #718096;
}



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
