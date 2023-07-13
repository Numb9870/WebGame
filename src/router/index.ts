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
      path: '/H5Game',
      name: 'H5Game',
      children: [
        {
          path: 'H5FightingGames',
          name: 'H5FightingGames',
          component: () => import('../components/H5Game/H5FightingGames.vue')
        },
        {
          path: "H5PuzzleGames",
          name: "H5PuzzleGames",
          component: () => import('../components/H5Game/H5PuzzleGames.vue'),
          redirect: { name: 'GameList' },
          children: [
            {
              path: "GameList",
              name: "GameList",
              component: () => import('../components/util/GameList.vue')
            },
            {
              path: "2048",
              name: "2048",
              children: [
                {
                  path: "2048-v0.0.1",
                  name: "2048-v0.0.1",
                  component: () => import('../components/H5Game/PuzzleGames/2048/2048-v0.0.1.vue')
                },
                {
                  path: "2048-v0.0.2",
                  name: "2048-v0.0.2",
                  component: () => import('../components/H5Game/PuzzleGames/2048/2048-v0.0.2.vue')
                },
              ]
            }
          ]
        }
      ]
    },

  ]
})


export default router
