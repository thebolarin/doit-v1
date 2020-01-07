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
                <h4>Create New Task</h4>

                <form @submit.prevent="onSubmit" novalidate>
                  <div class="input-field">
                    <input id="name" name="title"  v-model="title" type="text" />

                    <label for="name">Title</label>
                  </div>

                  <div class="input-field">
                    <input type="text" class="datepicker" :data-value="start_date"  ref="myDateField" name="date" id="date" />
                    <label for="date">Start Date</label>
                  </div>

                  <!-- TIME PICKER -->
                  <div class="input-field">
                    <input type="text" name="time" ref="myTimeField"  class="timepicker" />

                    <label for="time" style="color:#44337A;">Choose a deadline</label>
                  </div>

                  <div class="input-field">
                    <select name="category" v-model="category" id="vueSelect">
                      <option value disabled selected>Select Category</option>
                      <option v-for="category in categories " :key="category.id">{{category}}</option>
                    </select>
                  </div>

                  <div class="input-field">
                    <select name="tag" v-model="tag" id="vueTag">
                      <option value disabled selected>Select Tag</option>
                      <option v-for="tag in tags" :key="tag.id">{{tag}}</option>
                    </select>
                  </div>

                  <div class="input-field">
                    <select name="remind" v-model="remind" id="vueRemind">
                      <option value disabled selected>Remind through</option>
                      <option v-for="remind in reminds" :key="remind.id">{{remind}}</option>
                    </select>
                  </div>

                  <!-- <input type="hidden" name="_csrf" value="<%= csrfToken %>" /> -->
                  <div>
                    <input type="submit" :disabled="disabled" value="Create Task" class="btn submit" />
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
import axios from "../../axios-url";
import left from "../includes/leftBar.vue";
import right from "../includes/rightBar.vue";
import mid from "../includes/partMid.vue";

export default {
  data: function() {
    return {
      head: "Add New",
      tags: ["important", "irrelevant", "default"],
      categories: ["Work", "Personal", "General", "Food"],
      reminds: [ "Text Messsage"],
      title: '',

      start_date:'',
      time: '',
      category: '',
      tag: '',
      remind: '',
       loading:false
      //  date:document.querySelector("input[name=date]").value,
    };
  },
    computed:{
    // diabled(){
    //   this.loading;
    // }
  },
  methods: {
    onSubmit() {
       this.loading = true;
      const formData = {
        title: this.title,
        date: this.$refs.myDateField.value,
        time: this.$refs.myTimeField.value,
        category: this.category,
        tag: this.tag,
        remind: this.remind
      };
      // console.log(formData);
      axios
        .post("/create", formData , {
          headers: {
            Authorization:'Bearer ' +  localStorage.getItem('token')
            }
          }
          )
        .then(res => {
          res;
           this.loading=false;
          // console.log(res);
            this.$noty.success("Task created and scheduled successfully!")
          })
        .catch(error => {
          error;
           this.$noty.warning("Please review your information.")
        } );
         this.$router.push({ name: "tasks" });
        //  console.log(this.$refs.myDateField.value);
        //  console.log(this.$refs.myTimeField.value)
    }
  },
  components: {
    appLeft: left,
    appRight: right,
    appMid: mid
  },
  mounted() {
    const M = window.M;

    M.AutoInit(); // That way, it is only initialized when the component is mounted
  },
  created() {
    const M = window.M;

    M.AutoInit(); // That way, it is only initialized when the component is mounted
  }
};
</script>
<style>
</style>
