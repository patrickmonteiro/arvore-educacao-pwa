
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/',
    name: 'TelaInicial',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/dashboard', name: 'dashboard', component: () => import('pages/Index.vue') },
      { path: '/epub-reader', component: () => import('pages/EpubReader.vue') },
      { path: '/carteira', component: () => import('pages/Carteira.vue') }
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
