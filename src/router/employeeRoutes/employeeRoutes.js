// src/router/adminRoutes.js
//import HomePage from "@/views/HomePage.vue";
import DashBoardGeneral from "@/views/general/DashBoard.vue";


export const employeeRoutes = [
  {
    path: '/employee',
    component: () => import('@/views/employee/EmployeeLayout.vue'),
    meta: { requiresAuth: true, role: 'empleado' },
    children: [
      {
        path: 'dashboard',
        name: 'EmployeeDashboard',
        component: DashBoardGeneral,
      },
      // Otras rutas del administrador
    ],
  },
];