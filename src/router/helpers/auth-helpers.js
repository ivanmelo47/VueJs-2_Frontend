export function isAuthenticated() {
  return !!localStorage.getItem("token");
}

export function getUserRole() {
  return localStorage.getItem("rol");
}

export function redirectToDashboard(role) {
  switch (role) {
    case "admin":
      return { name: "AdminDashboard" };
    case "empleado":
      return { name: "EmployeeDashboard" };
    default:
      return { name: "Login" };
  }
}

export function isRoleAllowed(routeRole, userRole) {
  return routeRole === userRole;
}
