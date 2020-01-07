<template>
  <div>
    <nav class="nav">
      <div class="container">
        <div class="nav-wrapper">
          <a href="/" class="brand-logo center-align">doit</a>
        </div>
      </div>
    </nav>

      <div class="row empty">
                <div class="col xl6 l6 m12 s12 gif">
                    <div class="container">
                            <img style="width:100%;height:auto;" src="/img/empty.gif" alt="come on">

                            </div>

                </div>
                <div class="col xl6 l6  content  ">

                        <div class="container ">
                          <div class="content">
                                <h1 style="text-align:center;color:#6B46C1;font-weight:400">404</h1>
                                <h4 style="font-size:20px;text-align:center;">Connection Lost.</h4>

                                <p>Looks like the page you are trying to visit doesn't exist.  Please check the URL and try again</p>
                                <div class="center">

                                              <a  @click="navigateToDash" style="text-align:center;color:white;" class="btn" >Dashboard</a>


                                    </div>
                                    <br>
                          </div>




                            </div>

                        </div>
                </div>
  </div>
</template>
<script>


export default {

   methods: {
    navigateToDash() {
      this.$router.push({ name: "dashboard" });
    }
  },

};
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

  .empty{
    margin-top:50px;
    width:70%;
    justify-content:center;
    margin-left:auto;
    margin-right:auto;
    background:white;
    box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.2);
  }
  .empty .gif .container{
    margin-left:auto;
    margin-right:auto;

    background:white;
    width:100%;
  }



  .empty .content .content{
    margin-top:20px;
    width:100%;
  }
  .empty .content .content p{
  padding-left:30px;
  color:#718096;
  font-size: 13px;
  /* line-height:25px; */

  }
  .empty .content .content h4{
    /* padding-left:30px; */
    font-size:24px;
    color:#6B46C1;
    }
    /* .empty  .content .content a{

      color:#6B46C1;
    font-size:13px;

    } */

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
