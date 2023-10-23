import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogoDeFilmes from "@/components/CatalogoDeFilmes"
import CatalogoDeLivros from "@/components/CatalogoDeLivros"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  //quando eu escrever livros no componente ira chamar o catalogo de livros
  {
    path: '/livros',
    component: CatalogoDeLivros
  },
  //quando eu escrever livros no componente ira chamar o catalogo de filmes
  {
    path: '/filmes',
    component: CatalogoDeFilmes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
