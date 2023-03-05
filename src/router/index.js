import { createWebHistory, createRouter } from "vue-router";
import CreateStudent from '@/components/CreateComponent';
import ViewComponent from '@/components/ViewComponent';


const routes = [
  {
    path: '/',
    name: 'home',
    component: CreateStudent,
  },
  {
    path: '/view',
    name: 'view',
    component: ViewComponent,
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;