<template>
  <FormFactory
    :inputs="formInputs"
    :formTitle="'Formulario de inicio de sesión'"
    submitButtonText="Iniciar Sesión"
    @submit="login"
  />
</template>

<script>
// Importa la instancia de Axios desde el archivo de configuración
import FormFactory from '@/components/formFactory/FormFactory.vue';
import apiService from "@/services/apiService"; // Ajusta la ruta según sea necesario
import { showNotification } from '@/utils/notifications'; // Importar la función de notificación

export default {
  name: "LoginView",
  components: {
    FormFactory,
  },
  data() {
    return {
      email: "",
      password: "",
      error: null,

      // Inputs para el FormFactory
      formInputs: [
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          value: '',
          placeholder: 'Email',
          required: true,
        },
        {
          name: 'password',
          label: 'Contraseña',
          type: 'password',
          value: '',
          placeholder: 'Contraseña',
          required: true,
        },
      ],
    };
  },
  methods: {
    async login(inputs) {
      try {
        console.log(`Iniciando sesión con ${this.email} y ${this.password}`);

        // Definir el payload
        const payload = {
          email: inputs.email,
          password: inputs.password,
        };

        const response = await apiService.login(payload);

        if (response.data.status) {
          // Guardar el token en localStorage
          localStorage.setItem("token", response.data.data.access_token);
          localStorage.setItem("rol", response.data.data.role ?? "empleado");
          localStorage.setItem("nombre", response.data.data.name ?? "Nombre");
          localStorage.setItem(
            "img_url",
            response.data.data.url_img ?? "uploads/profile-image.png"
          );
          // Redirigir al usuario a una página protegida
          if (response.data.data.role === "admin") {
            this.$router.push("/admin/usuarios");
          } else if (response.data.data.role === "empleado") {
            this.$router.push("/employee/usuarios");
          } else {
            this.$router.push("/");
          }
        } else {
          // Llamar a la función de notificación
          showNotification("error", response.data.message);
        }
      } catch (error) {
        // Mostrar error en la notificación
        showNotification("error", error.response?.data?.message || "Error en el servidor. Intenta más tarde.");
      }
    },
  },
};
</script>

<style scoped>
/* html,
body {
  height: 150%;
  margin: 0;
}
.auth-row {
  height: 100%;
}
.signin-wrapper {
  width: 100%;
  max-width: 600px;
  padding: 20px;
} */
</style>
