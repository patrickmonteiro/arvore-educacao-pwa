
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', name: 'loginPage', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/',
    name: 'TelaInicial',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/dashboard', name: 'dashboard', component: () => import('pages/Index.vue') },
      { path: '/epub-reader', name: 'epubReader', component: () => import('pages/EpubReader.vue'), props: true },
      { path: '/carteira', component: () => import('pages/Carteira.vue') },
      { path: '/detalhe-livro', name: 'detalheLivro', component: () => import('pages/DetalheLivro.vue'), props: true },
      { path: '/detalhe-livro-premium', name: 'detalheLivroPremium', component: () => import('pages/DetalheLivroPremium.vue'), props: true },
      { path: '/sucesso-livro-premium', name: 'sucessoLivroPremium', component: () => import('pages/SucessoLivroPremium.vue') },
      { path: '/premium-ar', name: 'sucessoPremiumAr', component: () => import('pages/PremiumAr.vue') }
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
