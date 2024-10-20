// src/router/adminRoutes.js

export const authRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/LoginPage.vue'),
    meta: { requiresGuest: true }, // Ruta solo para invitados
  }
];