// src/router/adminRoutes.js
import UsuariosListado from "@/views/admin/UsuariosTable.vue";
import DashBoardGeneral from "@/views/general/DashBoard.vue";

export const adminRoutes = [
  {
    path: '/admin',
    component: () => import('@/views/admin/AdminInterfaz.vue'),
    meta: { requiresAuth: true, role: 'admin' },
    children: [
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: DashBoardGeneral,
      },
      {
        path: 'usuarios',
        name: 'UsuariosListado',
        component: UsuariosListado,
      },
      // Otras rutas del administrador
    ],
  },
];