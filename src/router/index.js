//src/router/index.js

// Importar Librerias Vue
import Vue from "vue";
import Router from "vue-router";

// Importar Rutas
import { adminRoutes } from './adminRoutes/adminRoutes';
import { employeeRoutes } from './employeeRoutes/employeeRoutes';
import { authRoutes } from './authRoutes/authRoutes';

// Importar los ayudantes de autenticación
import { isAuthenticated, getUserRole, redirectToDashboard, isRoleAllowed } from './helpers/auth-helpers';

Vue.use(Router);

const routes = [
  ...adminRoutes,
  ...employeeRoutes,
  ...authRoutes,
  // Ruta para capturar todas las rutas no definidas
  {
    path: '*',
    redirect: '/login',
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

// Guardia de navegación global
router.beforeEach((to, from, next) => {
  const auth = isAuthenticated();
  const role = getUserRole();

  // Busca las rutas que requieren autenticación y rol, incluyendo las rutas hijas
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const routeRole = to.matched.find(record => record.meta.role)?.meta.role;

  if (requiresAuth && !auth) {
    // Si requiere autenticación y el usuario no está autenticado, redirigir al login
    next({ name: 'Login' });
  } else if (auth && to.meta.requiresGuest) {
    // Redirigir al dashboard correspondiente si está autenticado
    next(redirectToDashboard(role));
  } else if (auth && routeRole && !isRoleAllowed(routeRole, role)) {
    // Verificar si el rol del usuario coincide con el rol requerido para la ruta
    next(redirectToDashboard(role));
  } else {
    next(); // Permitir la navegación si todo es válido
  }
});

export default router;