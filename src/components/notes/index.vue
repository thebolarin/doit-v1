<template>
  <div class="row">
    <div class="col xl2 l2 m2 sideBar hide-on-med-and-down">
      <app-right></app-right>
    </div>
    <div class="col xl8 l8 m12 s12">
      <app-mid :head="head"></app-mid>
      <!-- <Alert v-if="alert" v-bind:message="alert" />
<h1  v-bind:message="alert"></h1> -->
      <div class="activity">
        <div class="container">
          <div v-if="notes.length > 0">
            <div class style="margin-right:50px;">
              <a
                @click="navigateToNote"
                style="background:#6B46C1;height:40px;width:40px;"
                class="btn-floating btn-large waves-effect waves-light"
              >
                <i class="material-icons" style="font-size:20px;position:relative;bottom:7px;">add</i>
              </a>
            </div>
            <div v-for="note in paginatedData" :key="note._id" class="row rowt">
              <router-link  v-bind:to="'/note-details/'+note._id">
                <a>
                  <div class="noteslist">
                    <h5 >
                      {{note.title}}

                      <span>{{moment(note.createdAt).format('YYYY-MM-DD')}}</span>
                    </h5>

                    <p v-html="note.content" style="word-break: break-all;" class="truncate">
                    </p>
                  </div>
                </a>
              </router-link>
            </div>

            <div class="center">
              <a class="btn" @click="prevPage" :disabled="pageNumber==0">
                Previous
                <!-- <b>
                <i class="flaticon-add"></i>
                </b>-->
              </a>
              <a class="btn" @click="nextPage" :disabled="pageNumber >= pageCount-1">
                Next
                <!-- <b>
                <i class="flaticon-add"></i>
                </b>-->
              </a>
            </div>
          </div>

          <div v-else>
            <div class="center">
              <img class style="opacity:0.9;" src="/img/paper.jpg" alt />
            </div>
            <h4 style="text-align:center;font-size:20px;">No Notes</h4>
            <p
              style="text-align:center;font-weight:400;font-size:14px;color:#718096;"
            >There are no notes at the moment.To create a new note,click the button below</p>
            <div class="center">
              <a @click="navigateToNote" style="text-align:center;" class="btn">Add Note</a>
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
  // import Alert from '../../Alert';
import left from "../includes/leftBar.vue";
import right from "../includes/rightBar.vue";
import mid from "../includes/partMid.vue";

export default {
  data: function() {
    return {
      pageNumber: 0, // default to page 0
      size: 4,
      // alert:'',
      head: "All Notes",
      notes: []
    };
  },
  computed: {
    pageCount() {
      let l = this.notes.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.notes.slice(start, end);
    }
  },
  components: {
    appLeft: left,
    appRight: right,
    appMid: mid
  },
  methods: {
    navigateToNote() {
      this.$router.push({ name: "create-note" });
    },
    shown() {
      this.notes.length > 0;
    },
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },

    updateNote(noteId) {
      var read = confirm("Continue this action");
      // let noteId;
      if (read == true) {
        axios
          .put(`/update/${noteId}`, {
          headers: {
            Authorization:'Bearer ' +  localStorage.getItem('token')
            }
          })
          .then(res => {
            this.getNotes();
            res;
          })
          .catch(err => {
           err;
          });
      } else {
        this.getNotes();
      }
    },

    getNotes() {
      // let self = this;
      axios
        .get("/get", {
          headers: {
            Authorization:'Bearer ' +  localStorage.getItem('token')
            }
          })
        .then(res => {
          res;
          const data = res.data.notes;
          this.notes = data;
        })
        .catch(error =>error);
    }
  },
  beforeMount() {
    this.getNotes();
  },
  mounted() {
    this.getNotes();

    const M = window.M;

    M.AutoInit();
  },
  created() {
    this.getNotes();
    const M = window.M;

    M.AutoInit(); // That way, it is only initialized when the component is mounted
  }
};
</script>
<style>
</style>
