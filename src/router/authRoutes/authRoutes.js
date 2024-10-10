// src/router/adminRoutes.js

export const authRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/LoginPage.vue'),
    meta: { requiresGuest: true }, // Ruta solo para invitados
  },
  {
    path: '/',
    name: 'LoginDemo',
    component: () => import('@/views/auth/LoginPage.vue')
  },
  /* {
    path: '/register-demo',
    name: 'Register',
    component: () => import('@/views/auth/LoginPage.vue'),
  }, */
  /* {
    path: '/admin-demo',
    name: 'AdminDemo',
    component: () => import('@/views/admin/AdminLayoutcopy.vue'),
  } */
];