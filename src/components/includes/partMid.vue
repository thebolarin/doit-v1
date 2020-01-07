<template>
  <div>
    <nav class="white">
      <div>
        <div class="nav-wrapper">
          <a  class="username" style="color:#44337A;">{{head}}</a>

  <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>


          <ul class="right">
            <li>
              <a class="dropdown-trigger" data-target='my-dropdown' id="dropdown-button">
                <img src="/img/user1.png" alt="profile_img" />
              </a>
            </li>
          </ul>



          <ul class="sidenav" id="mobile-nav">
            <a class="brand-logo">doit</a>
            <br/>
            <li>
              <span>
                <img src="/img/doit.gif" alt />
              </span>
            </li>

            <router-link to="/dashboard" tag="li">
              <a>
                <i class="flaticon-home"></i>Dashboard
              </a>
            </router-link>
            <!-- <router-link to="/notes" tag="li">
              <a>
                <i class="flaticon-sticky-note"></i>Notes
              </a>
            </router-link> -->

            <router-link to="/tasks" tag="li">
              <a>
                <i class="flaticon-layers"></i>Tasks
              </a>
            </router-link>
            <router-link to="/today" tag="li">
              <a>
                <i class="flaticon-star-1"></i>Today
              </a>
            </router-link>
            <router-link to="/upcoming-tasks" tag="li">
              <a>
                <i class="flaticon-calendar-1"></i> Upcoming
              </a>
            </router-link>
            <router-link to="/completed-tasks" tag="li">
              <a>
                <i class="flaticon-tick"></i>Completed
              </a>
            </router-link>
            <router-link to="/trashed-tasks" tag="li">
              <a>
                <i class="flaticon-delete-1"></i>Trash
              </a>
            </router-link>

           <div class="signOut">
      <a @click="onLogout()">
        <i class="flaticon-sign-out-option"></i>
      </a>
    </div>
          </ul>
        </div>
      </div>
    </nav>

    <ul id="my-dropdown" class="dropdown-content">
      <router-link to="/dashboard" tag="li">
               <a>Dashboard</a>
            </router-link>

      <router-link  tag="li" to="/profile" style="cursor:pointer;">
  <a>Profile</a>
      </router-link>
    <router-link to="/dashboard" tag="li">
  <a>Help</a>
    </router-link>


    </ul>

    <hr />
  </div>
</template>
<script>
export default {
  props:['head'],
  methods: {
      onLogout() {
        //  commit('clearAuthData')
        // console.log('Logout successfull');
      localStorage.removeItem('expirationDate')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      // router.replace('/')
       this.$router.push('/');
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


}
</script>



<style>

</style>
