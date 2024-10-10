<template>
    <div id="employee-layout">
      <Navbar />
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/NavbarComponent.vue';

  export default {
    name: 'EmployeeLayout',
    components: {
      Navbar,
    },
  };
  </script>
  
  <style scoped>
  #employee-layout {
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
  