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


                                <form action="sign" method="POST" novalidate>


                                    <div class="input-field">
                                        <input id="name" name="name" maxlength="30" type="text">

                                        <label for="name">Title</label>
                                    </div>
                                    <!-- <div class="input-field">
                                        <input id="password" name="password" type="text">
                                        <label for="name">Description</label>
                                    </div> -->



                                    <div class="input-field">
                                        <input type="text" class="datepicker" name="start" id="date">
                                        <label for="date">Start Date</label>
                                    </div>

                                    <!-- TIME PICKER -->
                                    <div>
                                        <input type="text" class="timepicker" id="time">
                                        <!-- <a class="btn">  -->
                                        <b> <label for="time" style="color:#44337A;">Choose a Time</label></b>
                                        <!-- </a> -->

                                    </div>

                                    <div class="input-field">
                                        <select>
                                            <option value="" disabled selected>Select Category</option>
                                            <option value="1">Work</option>
                                            <option value="2">Personal</option>
                                            <option value="3">General</option>
                                            <option value="3">Food</option>
                                        </select>
                                        <!-- <label>Select List</label> -->
                                    </div>

                                    <div class="input-field">
                                        <select>
                                            <option value="" disabled selected>Select Tag</option>
                                            <option value="1">Important</option>
                                            <option value="2">Irrelevant</option>
                                            <option value="3">Default</option>
                                        </select>
                                        <!-- <label>Select List</label> -->
                                    </div>

                                     <div class="input-field">
                                        <select>
                                            <option value="" disabled selected>Remind through</option>
                                            <option value="1">Text Message</option>
                                            <option value="2">Email</option>

                                        </select>
                                        <!-- <label>Select List</label> -->
                                    </div>

                                    <input type="hidden" name="_csrf" value="<%= csrfToken %>">
                                    <div>
                                        <input type="submit" value="Create Task" class="btn submit">
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
import left from "../includes/leftBar.vue";
import right from "../includes/rightBar.vue";
import mid from "../includes/partMid.vue";

export default {
 data:function(){
      return{
  head:'Edit'
      };

  },
  components: {
    appLeft: left,
    appRight: right,
    appMid: mid
  },
   mounted() {
    const M = window.M

      M.AutoInit(); // That way, it is only initialized when the component is mounted
    },
  created(){
const M = window.M

      M.AutoInit(); // That way, it is only initialized when the component is mounted
  }
};
</script>
<style>

</style>
