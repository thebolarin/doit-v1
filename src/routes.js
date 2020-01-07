import Login from './components/auth/login.vue';
import Dashboard from './components/others/dashboard.vue';
import empty from './components/others/404.vue';
import Signup from './components/auth/signup.vue';
import Notes from './components/notes/index.vue';
import Tasks from './components/task/index.vue';
import Completed from './components/others/completed.vue';
import Profile from './components/others/profile.vue';
import Today from './components/others/today.vue';
import Trash from './components/others/trash.vue';
import Upcoming from './components/others/upcoming.vue';
import createTask from './components/task/create.vue';
import createNote from './components/notes/create.vue';
import editNote from './components/notes/edit.vue';
import noteDetails from './components/notes/details.vue';
import VueRouter from 'vue-router'

export const routes = [
  { path: '',name:'login',component: Login },
  { path: '/dashboard', name: 'dashboard', component: Dashboard,
  beforeEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/')
    }
  }
 },
  { path: '/404', component: empty },
  { path: '/signup',name:'signup', component: Signup},
  { path: '/notes', name: 'notes', component: Notes,
  beforeEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/')
    }
  }
 },
  { path: '/note-details/:noteId', name: 'details', component: noteDetails ,
  beforeEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/')
    }
  }
 },
  { path: '/tasks', name: 'tasks', component: Tasks ,
  beforeEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/')
    }
  }
 },
  { path: '/create-task', name: 'create-task', component: createTask ,
  beforeEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/')
    }
  }
 },
  { path: '/create-note', name: 'create-note', component: createNote ,
  beforeEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/')
    }
  }
 },
  { path: '/edit-note/:noteId', name: 'edit-note', component: editNote,
  beforeEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/')
    }
  }
 },
  { path: '/completed-tasks', component: Completed ,
  beforeEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/')
    }
  }
 },
  { path: '/profile', component: Profile ,
  beforeEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/')
    }
  }
 },
  { path: '/today', component: Today ,
  beforeEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/')
    }
  }
 },
  { path: '/trashed-tasks', component: Trash ,
  beforeEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/')
    }
  }
 },
  { path: '/upcoming-tasks', component: Upcoming ,
  beforeEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/')
    }
  }
 },
  { path: '*', redirect: '/404' }
]
export default new VueRouter({mode: 'history', routes})
