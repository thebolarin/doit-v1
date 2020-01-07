<template>
  <div class="row">
    <div class="col xl2 l2 m2 sideBar hide-on-med-and-down">
      <app-right></app-right>
    </div>
    <div class="col xl8 l8 m12 s12">
      <app-mid :head="head"></app-mid>

      <div class="activity">
        <div class="container">
          <div v-if="tasks.length > 0">
            <div>
              <div
                v-for="(task) in paginatedData"
                :key="task._id"
                class="row rows"
                style="z-index:-1;"
                :class="task.tag"
              >
                <div>
                  <div class="task">
                    <h5>
                      <span>
                        <label>
                          <span
                            style="font-size:13px;word-break: break-all;width:80%;color:#4A5568;font-weight:600;"
                          >{{task.title}}</span>
                        </label>
                      </span>

                      <a @click="trashTask(task._id)">
                        <i class="flaticon-trash cat"></i>
                      </a>
                    </h5>
                    <p>
                      <span>{{moment(task.date).format('YYYY-MM-DD')}} | {{task.time}}</span>
                      <span class="category">{{task.category}}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="tasks.length > 5" class="center">
              <a class="btn" @click="prevPage" :disabled="pageNumber==0">
                Previous
              </a>
              <a class="btn" @click="nextPage" :disabled="pageNumber >= pageCount-1">
                Next
              </a>
            </div>
          </div>

          <div v-else>
            <div class="center">
              <img class style="opacity:0.5;" src="/img/reverse.jpg" alt />
            </div>
            <h4 style="text-align:center;font-size:20px;">No tasks</h4>
            <p
              style="text-align:center;font-weight:400;font-size:14px;color:#718096;"
            >There are no upcoming events at the moment.To create a task,click the button below</p>
            <div class="center">
              <a class="btn" @click="navigateToTask">Add Task</a>
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
      head: "Completed",
      pageNumber: 0,
      size: 5,
      tasks: []
    };
  },
  computed: {
    pageCount() {
      let l = this.tasks.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;

      return this.tasks.slice(start, end);
    }
  },
  components: {
    appLeft: left,
    appRight: right,
    appMid: mid
  },
  methods: {
    navigateToTask() {
      this.$router.push({ name: "create-task" });
    },
    shown() {
      this.tasks.length > 0;
    },
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
    deleteTask(taskId) {
      var read = confirm("Continue this action");
      if (read == true) {
        axios
          .delete(`/delete/${taskId}`, {
          headers: {
            Authorization:'Bearer ' +  localStorage.getItem('token')
            }
          })
          .then(res => {
            res;
            this.getTasks();
            // console.log(res);
          })
          .catch(err => {
            // console.log(err);
            err;
          });
      }
    },
    trashTask(taskId) {
      var read = confirm("Are you sure you want to trash task?");
      if (read == true) {
        axios
          .put(`/trash/${taskId}`, {
          headers: {
            Authorization:'Bearer ' +  localStorage.getItem('token')
            }
          })
          .then(res => {
              this.$noty.success("Task trashed successfully!")
            this.getTasks();
            res;
          })
          .catch(err => {
            err;
            // console.log(err);
          });
      } else {
        this.getTasks();
      }
    },
    getTasks() {
      // let self = this;
      axios
        .get("/getComplete", {
          headers: {
            Authorization:'Bearer ' +  localStorage.getItem('token')
            }
          })
        .then(res => {
          // console.log(res);
          const data = res.data.tasks;
          var notTrashed = data.filter(function(data) {
            return data.trashed === false;
          });

          // console.log(notTrashed);
          this.tasks = notTrashed;
        })
        .catch(error => error);
    }
  },
  mounted() {
    this.getTasks();
    const M = window.M;

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
