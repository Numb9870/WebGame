import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('../components/Main.vue')
    },
    {
      path: '/FightingGamesList',
      name: 'FightingGamesList',
      component: () => import('../components/H5Game/FightingGamesList.vue')
    },
    {
      path: '/PuzzleGamesList',
      name: 'PuzzleGamesList',
      component: () => import('../components/H5Game/PuzzleGamesList.vue'),
      children: [
        {
          path: "2048",
          name: "2048",
          component: () => import('../components/H5Game/PuzzleGames/2048.vue')
        }
      ]
    },

  ]
})

export default router
