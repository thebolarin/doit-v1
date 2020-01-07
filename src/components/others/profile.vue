<template>
 <div class="row">

       <div class="col xl2 l2 m2 sideBar hide-on-med-and-down">
            <app-right></app-right>
        </div>
        <div class="col xl8 l8 m12 s12">

         <app-mid :head="head"></app-mid>

             <div class="activity">
                <div class="container">

                    <div class="row login">
                        <div class="col xl12 l12 m12 s12 signup-a">
                            <div class="container">
                                <h4>Edit Profile</h4>


                                <form @submit.prevent="updateUser" novalidate>


                                    <div class="input-field">
                                        <input id="name" name="name" type="text" v-model="users.name">

                                        <label for="name" class="active">Name</label>
                                    </div>
                                    <div class="input-field">
                                        <input id="email" name="email" type="email" v-model="users.email">

                                        <label for="email" class="active">Email</label>
                                    </div>

                                    <div class="input-field">
                                        <input id="phone" name="phone" type="tel" v-model="users.phone">

                                        <label for="name" class="active">Mobile number</label>
                                    </div>

                                    <!-- <input type="hidden" name="_csrf" value="<%= csrfToken %>"> -->
                                    <div>
                                        <input type="submit" :disabled="disabled" value="Update Profile " class="btn submit">
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>

            </div>


        </div>
         <app-left></app-left>
 </div>



</template>


<script>
import axios from "../../axios-auth";
 import left from '../includes/leftBar.vue';
 import right from '../includes/rightBar.vue';
  import mid from '../includes/partMid.vue';

    export default {
           data:function(){
      return{
  head:'Profile',
  users: {},
       loading:false
      };

  },
        components: {
            appLeft: left,
            appRight:right,
            appMid:mid
        },
         mounted() {
    const M = window.M

      M.AutoInit(); // That way, it is only initialized when the component is mounted
    },
  created(){
    this.viewUser();
const M = window.M

      M.AutoInit(); // That way, it is only initialized when the component is mounted
  },
  //  computed:{
  //   disabled(){
  //     this.loading;
  //   }
  // },
   methods: {
    // showChange() {
    //   console.log("nothing here");
    // },
    viewUser() {
      axios
        .get("/fetch", {
          headers: {
            Authorization:'Bearer ' +  localStorage.getItem('token')
            }
          })
        .then(res => {
          // console.log(res);
          const data = res.data.user;
          this.users = data;
        })
        .catch(error => error);
    },
    updateUser() {
      if (!this.users.name || !this.users.email|| !this.users.phone) {
      this.$noty.warning("Please review your information.")
      } else {
        this.loading = true;
        let upduser = {
          name: this.users.name,
          email: this.users.email,
          phone:this.users.phone
        };
        axios
          .put("/update/", upduser, {
          headers: {
            Authorization:'Bearer ' +  localStorage.getItem('token')
            }
          })
          .then(res =>{
            res;
             this.loading=false;
              // console.log(res);
               this.$noty.success("User profile updated successfully!")
          })
          .catch(error => {
            error;
           this.$noty.warning("Please review your information.")
          });
        // this.$router.push({ name: "users" });


        // e.preventDefault();
      }
      // e.preventDefault();
    }
  }

    }
</script>
<style>

</style>
