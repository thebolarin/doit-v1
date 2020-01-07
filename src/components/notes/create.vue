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
                <h4>Create New Note</h4>

                <form @submit.prevent="onSubmit" novalidate>
                  <div class="input-field">
                    <input id="name" v-model="title" maxlength="13" name="title" type="text" />

                    <label for="name">Title</label>
                  </div>
                  <br />
                  <p
                    style="text-align:left;font-size:13px;color:#718096;font-weight:400;"
                    for="message"
                  >Description</p>
                  <div class="input-field">
                    <textarea
                      placeholder="Message"
                      ref="content"
                      id="editor1"
                      cols="5"
                      rows="5"
                      name="content"
                      class
                    ></textarea>
                  </div>
                  <br />
                  <div>
                    <input type="submit" :disabled="disabled" value="Add Note" class="btn submit" />
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
import CKEDITOR from 'ckeditor4';

export default {
  data: function() {
    return {
      head: "Create Note",
      title: "",
      content: "",
      loading: false
    };
  },
  components: {
    appLeft: left,
    appRight: right,
    appMid: mid
  },
  // computed: {
  //   diabled() {
  //     this.loading;
  //   }
  // },
  methods: {
    onSubmit() {
      this.loading = true;
      const formData = {
        title: this.title,
        content: CKEDITOR.instances.editor1.getData()
      };
      // console.log(formData);
      axios
        .post("/create", formData, {
          headers: {
            Authorization:'Bearer ' +  localStorage.getItem('token')
            }
          })
        .then(res => {
          res;
          this.loading = false;
          // console.log(res);
          this.$noty.success("Note saved successfully!");
          this.$router.push({ name: "notes" });
        })
        .catch(error => {
          error;
          this.$router.push({ name: "details" });
          this.$noty.warning("Please review your information.");
        });
    }
  },
  mounted() {
    const M = window.M;
    // var self = this;

    CKEDITOR.replace("editor1");
    M.AutoInit();
  },
  created() {
    const M = window.M;

    M.AutoInit();
  }
};
</script>
<style>
</style>
