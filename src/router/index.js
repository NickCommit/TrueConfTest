import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  
  {
    path: '/green', //redirect: to => {
    name: 'green'
   // }
  },
  {
    path: '/yellow', //redirect: to => {
    name: 'yellow'
    //}
  },
  {
    path: '/red', //redirect: to => {
    name: 'red'
    //}
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   
// })

export default router;
