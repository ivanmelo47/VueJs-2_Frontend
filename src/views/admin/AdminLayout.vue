<template>
    <div id="admin-layout">
      <Navbar />
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/NavbarComponent.vue'; // Navbar de administrador
  
  export default {
    name: 'AdminLayout',
    components: {
      Navbar,
    },
  };
  </script>
  
  <style scoped>
  #admin-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .main-content {
    flex: 1;
    padding: 20px;
    background-color: #f8f9fa;
  }
  </style>
  