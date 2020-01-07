<template>
  <div class="row">
    <div class="col xl2 l2 m2 sideBar hide-on-med-and-down">
      <app-right></app-right>
    </div>
    <div class="col xl8 l8 m12 s12">
      <app-mid :head="head"></app-mid>
      <div class="activity">
        <div class="container">
          <div class="row notedetails">
            <div class="col xl12 l12 m12 s12">
              <div class>
                <h4>
                  {{notes.title}}
                    <a style="cursor:pointer;" @click="deleteNote(notes._id)">
                    <i class="flaticon-trash cat"></i>
                  </a>
                   <router-link  v-bind:to="'/edit-note/'+notes._id" style="cursor:pointer;"> <i class="material-icons edit">edit</i></router-link>
                </h4>
                <hr />

                <p v-html="notes.content">

                </p>
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
import axios from "../../axios-need";
import left from "../includes/leftBar.vue";
import right from "../includes/rightBar.vue";
import mid from "../includes/partMid.vue";

export default {
  props: ["noteId"],
  data: function() {
    return {
      head: "Details",
      notes:{}
    };
  },
  components: {
    appLeft: left,
    appRight: right,
    appMid: mid
  },
  mounted() {
    const M = window.M;

    M.AutoInit();
  },
  created() {
    this.viewNote(this.$route.params.noteId);
    const M = window.M;

    M.AutoInit();
  },
  methods: {
    navigateToNote() {
      this.$router.push({ name: "create-note" });
    },
    navigateToEditNote() {
      this.$router.push({ name: "edit-note" });
    },
    deleteNote(noteId) {
      var read = confirm("Continue this action");
      if (read == true) {
        axios
          .delete(`/delete/${noteId}`, {
          headers: {
            Authorization:'Bearer ' +  localStorage.getItem('token')
            }
          })
          .then(res => {
             this.$noty.success("Note deleted successfully!")
            this.$router.push({ name: "notes" });
            alert(res);
          })
          .catch(err => {
            this.$noty.error("Oops, something went wrong!")
              // this.$router.push({ name: "details" });
              alert(err);
          });
      }
    },
    viewNote(noteId) {
      axios
        .get('/fetch/'+noteId, {
          headers: {
            Authorization:'Bearer ' +  localStorage.getItem('token')
            }
          })
        .then(res => {
          // console.log(res);
          const data = res.data.note;
          this.notes = data;
        })
        .catch(error =>error);
    }
  }
};
</script>
<style>
</style>
