<template>
  <div class="row">
    <div class="col xl2 l2 m2 sideBar hide-on-med-and-down">
      <app-right></app-right>
    </div>
    <div class="col xl8 l8 m12 s12">
      <app-mid :head="head"></app-mid>

      <div class="activity">
        <div class="container">
          <p v-if="name" style="color:#44337A;">Hi {{name}} !</p>

          <div class="row">
            <div class="col xl3 l3 m3 s6">
              <div class="one">
                <br />
                <div class="icon" style="background:#EBF4FF;">
                  <img src="/img/suitcase.png" alt />
                </div>
                <div class="box">
                  <p>
                    Work
                    <br />
                    <span>{{counts.work}} tasks</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col xl3 l3 m3 s6 two">
              <div class="one">
                <br />
                <div class="icon" style="background:#EBF8FF;">
                  <img src="/img/users.png" alt />
                </div>
                <div class="box">
                  <p>
                    Personal
                    <br />
                    <span>{{counts.personal}} tasks</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col xl3 l3 m3 s6 three">
              <div class="one">
                <br />
                <div class="icon" style="background:#FBD38D;">
                  <img src="/img/burger.png" alt />
                </div>
                <div class="box">
                  <p>
                    Food
                    <br />
                    <span>{{counts.food}} tasks</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col xl3 l3 m3 s6 four">
              <div class="one">
                <br />
                <div class="icon" style="background:#FED7D7;">
                  <img src="/img/likes.png" alt />
                </div>
                <div class="box">
                  <p>
                    General
                    <br />
                    <span>{{counts.general}} tasks</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col xl3 l3 m3 s6 add">
              <a  @click="navigateToTask">
                <div class="one">
                  <br />
                  <div class="icon">
                    <i class="flaticon-plus"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
    <app-left></app-left>
  </div>
</template>


<script>
import axios from "../../axios-url";
import left from "../includes/leftBar.vue";
import right from "../includes/rightBar.vue";
import mid from "../includes/partMid.vue";

export default {
  data: function() {
    return {
      head: "Dashboard",
      work:'',
      personal:'',
      general:'',
      food:'',
      counts:[],
      name: localStorage.getItem('name')
    };
  },
  components: {
    appLeft: left,
    appRight: right,
    appMid: mid
  },
  // computed: {
  //     email () {
  //       return !this.$store.getters.user ? false : this.$store.getters.user.name
  //     }
  //   },
   methods: {
    navigateToTask() {
      this.$router.push({ name: "create-task" });
    },
      getCounts() {
      // let self = this;
      axios
        .get("/getCount" , {
          headers: {
            // token: localStorage.getItem('token')
            Authorization:'Bearer ' +  localStorage.getItem('token')
            }
          })
        .then(res => {
          // console.log(res);
          const data = res.data;
          this.counts = data;
        })
        .catch(error =>error)
    }
  },
  mounted() {
     this.getCounts();
    const M = window.M;

    M.AutoInit(); // That way, it is only initialized when the component is mounted
  },
  created() {
     this.getCounts();
    const M = window.M;

    M.AutoInit(); // That way, it is only initialized when the component is mounted
  }
};
</script>

<style>
</style>

