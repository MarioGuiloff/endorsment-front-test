import { defineAsyncComponent } from 'vue'

const Home = defineAsyncComponent(
  () =>
    import(/* webpackChunkName: 'HomeLayout' */ '@/views/home/HomeLayout.vue'),
)

const routes = {
  path: '/',
  component: Home,
}

export default routes
