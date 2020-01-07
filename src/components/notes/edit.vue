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
            <div class="col xl12 l12 m12 s12 notes">
              <div class="container">
                <h4>Edit Existing Note</h4>

                <form @submit.prevent="updateNote" novalidate>
                  <div class="input-field">
                    <input id="name" name="name"  maxlength="13" type="text" v-model="notes.title" />

                    <label for="name"></label>
                  </div>
                  <br />
                  <label for="message">Description</label>
                  <div class="input-field">
                    <textarea
                      placeholder="Message"
                      cols="5"
                      rows="5"
                      name="content"
                      v-model="notes.content"
                    ></textarea>
                  </div>

                  <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                  <br />
                  <div>
                    <input type="submit" :disabled="disabled" value="Update Note" class="btn submit" />
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
import axios from "../../axios-need";
import left from "../includes/leftBar.vue";
import right from "../includes/rightBar.vue";
import mid from "../includes/partMid.vue";

export default {
  data: function() {
    return {
      head: "Edit Note",
      notes: {},
       loading:false
    };
  },
  components: {
    appLeft: left,
    appRight: right,
    appMid: mid
  },

  mounted() {
    const M = window.M;
    // var self = this;

    // CKEDITOR.replace("editor1");
    M.AutoInit(); // That way, it is only initialized when the component is mounted
  },
  created() {
    this.viewNote(this.$route.params.noteId);
    const M = window.M;

    M.AutoInit(); // That way, it is only initialized when the component is mounted
  },
//  computed:{
//     disabled(){
//       this.loading;
//     }
//   },
  methods: {
    // showChange() {
    //   console.log("nothing here");
    // },
    viewNote(noteId) {
      axios
        .get("/fetch/" + noteId, {
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
    },
    updateNote() {
      if (!this.notes.title || !this.notes.content) {
        // this.alert = 'Please fill in all required fields';
      } else {
        this.loading = true;
        let updNote = {
          title: this.notes.title,
          content: this.notes.content
        };
        axios
          .put("/update/" + this.$route.params.noteId, updNote, {
          headers: {
            Authorization:'Bearer ' +  localStorage.getItem('token')
            }
          })
          .then(res =>{
            res;
             this.loading=false;
              // console.log(res);
               this.$noty.success("Note updated successfully!")
          })
          .catch(error => {
            error;
           this.$noty.warning("Please review your information.")
          });
        this.$router.push({ name: "notes" });


        // e.preventDefault();
      }
      // e.preventDefault();
    }
  }
};
</script>
<style>
</style>
