const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/IndexPage', component: () => import('pages/IndexPage.vue') },
      { path: '/tiktok', component: () => import('https://tiktok.com/@sltechravi') },
      { path: '/youtube', component: () => import('https://youtube.com/@sltechravi') },
      { path: '/facebook', component: () => import('https://facebook.com/sltechravi') },
      { path: '/Aboutpage', component: () => import('pages/AboutPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
