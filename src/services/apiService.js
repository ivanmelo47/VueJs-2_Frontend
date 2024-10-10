// src/services/apiService.js
import axiosInstance from "@/utils/axiosConfig"; // Asegúrate de importar tu instancia de axios

export default {
  // Método para iniciar sesión con un payload
  login(payload) {
    return axiosInstance.post("/api/v1/login", payload);
  },

  users(){
    return axiosInstance.post('/api/v1/admin/users');
  }

};
