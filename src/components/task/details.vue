<template>
  <div class="row">
    <div class="col xl2 l2 m2 sideBar hide-on-med-and-down">
      <app-right></app-right>
    </div>
    <div class="col xl8 l8 m12 s12">
       <app-mid :head="head"></app-mid>

      <div class="activity">
                <div class="container">

                    <div class="row default">


                        <div class="taskdetails">
                            <h2> 24/3/19 <span><a href="" class=""> <i class="flaticon-trash cat"></i></a></span> </h2>
                            <span><i class="flaticon-timetable"></i> 3:45am</span>
                            <br>
                            <h5>Design week</h5>
                            <br>
                            <p class=""> ducimus vitaedgfhjgkhgfdghjkjkhsdfdghi. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Molestiae, perspiciatis mollitia quidem praesentium aliquid laborum
                                iure eligendi impedit sit numquam?hgvd reiciendis nesciunt delectus, fuga quas dolor
                                perspiciatis est reprehenderit?</p>


                        </div>

                        <br>
                        <a class="btn" style="text-align:center;margin:auto;" href="addtask.html"><b> <i
                                    class="flaticon-settings-1"></i> EditTask</b></a>


                        <!-- <div class="col xl3 l3 m3 s3 time ">
                         <p></p>

                            <i class="flaticon-calendar"></i><br>
                             <span>2/8/15</span>
                          </div>
                          <div class="col xl9 l9 m9 s9 notes">
                              <h5>Design week</h5>
                              <p class="truncate">ducimus vitae reiciendis nesciunt delectus, fuga quas dolor perspiciatis est reprehenderit?</p>
                          </div> -->


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
  head:'Details'
      };

  },
  components: {
    appLeft: left,
    appRight: right,
    appMid: mid
  },
   methods: {
            navigateToTask() {
                this.$router.push({ name: 'create-task' });
            }
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

