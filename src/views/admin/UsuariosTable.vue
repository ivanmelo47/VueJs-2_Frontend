<template>
  <div class="tables-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <div class="card-style mb-30">
          <h6 class="mb-10">Tabla de usuarios</h6>
          <div class="table-wrapper table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th class="lead-info">
                    <h6>#</h6>
                  </th>
                  <th class="lead-info">
                    <h6>Nombre</h6>
                  </th>
                  <th class="lead-email">
                    <h6>Email</h6>
                  </th>
                  <th class="lead-phone">
                    <h6>Telefono</h6>
                  </th>
                  <th>
                    <h6>Acciones</h6>
                  </th>
                </tr>
                <!-- end table row-->
              </thead>
              <tbody>
                <tr v-for="(user, index) in users" :key="user.id">
                  <td >
                    <div class="lead">
                      <div class="lead-text">
                        <p>{{ index + 1 }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="min-width">
                    <div class="lead">
                      <div class="lead-text">
                        <p>{{ user.username }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="min-width">
                    <p>{{ user.email }}</p>
                  </td>
                  <td class="min-width">
                    <p>{{ user.phone }}</p>
                  </td>
                  <td>
                    <div class="action">
                      <button class="text-danger">
                        <i class="lni lni-trash-can"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <!-- end table row -->
              </tbody>
            </table>
            <!-- end table -->
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </div>
</template>

<script>
import apiService from "@/services/apiService";
export default {
  name: "HomePage",
  data() {
    return {
      users: [], // Almacena la lista de usuarios
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await apiService.users(); // Cambia la URL según tu API
        if (response.data.status) {
          this.users = response.data.data; // Almacena los usuarios en la variable
        }
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    },
    editUser(userId) {
      // Lógica para editar el usuario
      console.log(`Editar usuario con ID: ${userId}`);
    },
    deleteUser(userId) {
      // Lógica para eliminar el usuario
      console.log(`Eliminar usuario con ID: ${userId}`);
    },
  },
  mounted() {
    this.fetchUsers(); // Llama a la función al montar el componente
  },
};
</script>