import { createRouter, createWebHistory } from 'vue-router';
import tasks from '../components/tasks.vue';
import matrixpage from '../components/matrixpage.vue';

const routes = [
  {
    path: '/tasks',
    name: 'tasks',
    component: tasks,
  },
  {
    path: '/matrix',
    name: 'matrixpage',
    component: matrixpage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;