<template>
  <div class>
    <div class="brand-logo">doit</div>
    <br />
    <ul>
      <a>
        <router-link to="/dashboard" tag="li" active-class="active">
          <i class="flaticon-home"></i>
Dashboard
        </router-link>
      </a>

      <!-- <a>
        <router-link to="/notes" tag="li" active-class="active">
          <i class="flaticon-sticky-note"></i>
Notes
        </router-link>
      </a> -->

      <a>
        <router-link to="/tasks" tag="li" active-class="active">
          <i class="flaticon-layers"></i>All task
        </router-link>
      </a>

      <a>
        <router-link to="/today" tag="li" active-class="active">
          <i class="flaticon-star-1"></i>
Today
        </router-link>
      </a>
      <a>
        <router-link to="/upcoming-tasks" tag="li" active-class="active">
          <i class="flaticon-calendar-1"></i>
 Upcoming
        </router-link>
      </a>
      <a>
        <router-link to="/completed-tasks"  tag="li" active-class="active">
          <i class="flaticon-tick"></i>
Completed
        </router-link>
      </a>
      <a>
        <router-link to="/trashed-tasks" tag="li" active-class="active">
          <i class="flaticon-delete-1"></i>
Trash
        </router-link>
      </a>
    </ul>

    <div class="signOut">
      <a @click="onLogout()">
        <i class="flaticon-sign-out-option"></i>
      </a>
    </div>
  </div>
</template>
<script>
  export default {

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
    }
  }
</script>
<style>

</style>
