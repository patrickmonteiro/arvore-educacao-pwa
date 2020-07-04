
const routes = [
  {
    path: '/',
    name: 'TelaInicial',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/reader', component: () => import('pages/Reader.vue') },
      { path: '/epub-reader', component: () => import('pages/EpubReader.vue') }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
