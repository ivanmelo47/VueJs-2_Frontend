<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark-custom fixed-top">
    <div class="container-fluid">
      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img src="https://via.placeholder.com/40" alt="Logo" class="d-inline-block align-text-top" />
        Rol: {{ rol }}
      </a>

      <!-- Toggle button for mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Links and Icons -->
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <i class="bi bi-house-door-fill"></i>
              <span class="link-text">Home</span>
              <span class="underline"></span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">
              <i class="bi bi-info-circle-fill"></i>
              <span class="link-text">About</span>
              <span class="underline"></span>
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-list"></i>
              <span class="link-text">Services</span>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#"><i class="bi bi-check-circle"></i> Service 1</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="bi bi-check-circle"></i> Service 2</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="bi bi-check-circle"></i> Service 3</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">
              <i class="bi bi-envelope-fill"></i>
              <span class="link-text">Contact</span>
              <span class="underline"></span>
            </router-link>
          </li>
          <!-- Botón de Logout -->
          <li class="nav-item">
            <button @click="logout" class="btn btn-danger nav-link">
              <i class="bi bi-box-arrow-right"></i>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      idleTimeout: null, // Controla el tiempo de inactividad
      idleLimit: 600000, // Límite de inactividad (10 minutos en milisegundos)
      rol: null
    };
  },
  methods: {
    resetTimer() {
      // Reiniciar el temporizador de inactividad
      clearTimeout(this.idleTimeout);
      this.idleTimeout = setTimeout(this.logout, this.idleLimit); // Iniciar el temporizador
    },
    logout() {
      // Limpiar el token y redirigir al login
      localStorage.removeItem("token");
      this.$router.push("/login");
      alert("Has sido desconectado por inactividad");
    },
  },
  mounted() {
    // Escuchar los eventos de actividad del usuario
    window.addEventListener("mousemove", this.resetTimer);
    window.addEventListener("keydown", this.resetTimer);
    window.addEventListener("click", this.resetTimer);

    // Iniciar el temporizador cuando la vista está montada
    this.resetTimer();

    this.rol = localStorage.getItem("rol");
  },
  beforeDestroy() {
    // Limpiar los eventos al destruir la vista
    window.removeEventListener("mousemove", this.resetTimer);
    window.removeEventListener("keydown", this.resetTimer);
    window.removeEventListener("click", this.resetTimer);
    clearTimeout(this.idleTimeout);
  },
};
</script>

<style scoped>
/* Estilos personalizados del Navbar */
.navbar {
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease-in-out;
}

/* Logo */
.navbar-brand img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

/* Navbar Links */
.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  color: #fff;
  font-size: 1.1rem;
  margin-right: 20px;
  transition: color 0.3s ease;
}

/* Texto dentro de los links */
.link-text {
  margin-left: 8px;
}

/* Subrayado animado debajo de los links */
.nav-link .underline {
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: transparent;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.nav-link:hover {
  color: #f8f9fa;
}

.nav-link:hover .underline {
  background-color: #f8f9fa;
  transform: scaleX(1);
  transform-origin: left;
}

/* Dropdown personalizado */
.dropdown-menu {
  background-color: #212529;
  border-radius: 8px;
  padding: 10px;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.dropdown-item {
  color: #fff;
  padding: 10px 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dropdown-item:hover {
  background-color: #495057;
  color: #f8f9fa;
}

/* Animación en dispositivos móviles */
.navbar-toggler {
  border: none;
  transition: transform 0.3s ease;
}

.navbar-toggler:focus {
  outline: none;
}

.navbar-toggler.collapsed .navbar-toggler-icon {
  transform: rotate(180deg);
}

/* Efectos al colapsar y desplegar el menú */
.collapse.show {
  transition: height 0.3s ease;
}

</style>
