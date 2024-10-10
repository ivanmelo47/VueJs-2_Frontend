<!-- src/views/Login.vue -->
<template>
  <div class="login-container">
    <h1>Iniciar Sesión</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email del usuario</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
      <br />
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
//import axios from "axios";
// Importa la instancia de Axios desde el archivo de configuración
import axiosInstance from "@/utils/axiosConfig";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    handleLogin() {
      // Aquí puedes manejar el proceso de inicio de sesión, como llamar a una API
      console.log(`Iniciando sesión con ${this.email} y ${this.password}`);
    },

    async login() {
      try {
        console.log(`Iniciando sesión con ${this.email} y ${this.password}`);
        const response = await axiosInstance.post("/auth/login", {
          email: this.email,
          password: this.password,
        });

        if (response.data.status) {
          // Guardar el token en localStorage
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("rol", response.data.rol ?? "empleado");
          // Redirigir al usuario a una página protegida
          if (response.data.rol === "admin") {
            this.$router.push("/admin/dashboard");
          } else if (response.data.rol === "empleado") {
            this.$router.push("/employee/dashboard");
          }
        } else {
          this.error = response.data.msg; // Mostrar el error si las credenciales son incorrectas
        }
      } catch (error) {
        this.error =
          error.response?.data?.msg ||
          "Error en el servidor. Intenta más tarde.";
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f8f9fa;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
