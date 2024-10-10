<!-- <template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Listado de Usuarios</h1>

    <div class="table-responsive">
      <table class="table table-hover table-bordered table-custom">
        <thead class="thead-dark">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <td>{{ index + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.telefono }}</td>
            <td>
              <button class="btn btn-primary btn-sm me-2" @click="editUser(user.id)">Editar</button>
              <button class="btn btn-danger btn-sm" @click="deleteUser(user.id)">Eliminar</button>
            </td>
          </tr>
          <tr v-if="!users.length">
            <td colspan="5" class="text-center">No hay usuarios disponibles.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template> -->

<template>
  <div>
    <h1>About Page</h1>
    <p>Esta es la página de información</p>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>
