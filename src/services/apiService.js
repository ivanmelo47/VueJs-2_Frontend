// src/services/apiService.js
import axiosInstance from "@/utils/axiosConfig"; // Asegúrate de importar tu instancia de axios

async function handleRequest(promise) {
  try {
    const response = await promise;
    return response.data; // O lo que necesites retornar
  } catch (error) {
    // Maneja el error de forma centralizada, aquí podrías loguear el error o mostrar un mensaje
    console.error("API error:", error);
    throw error; // Re-lanzar el error si es necesario manejarlo en otro lugar
  }
}

export default {
  // Método para iniciar sesión con un payload
  login(payload) {
    return axiosInstance.post("/api/v1/login", payload);
  },

  users() {
    return axiosInstance.post("/api/v1/admin/users");
  },

  // Apis para Landing Page --------------------------------------------------
  getPersonalData(payload) {
    return axiosInstance.post("/api/v1/landing-page/personal-data", payload); // const
  },
  getRedesSociales(payload) {
    return axiosInstance.post("/api/v1/landing-page/redes-sociales", payload);
  },
  getIntereses(payload) {
    return axiosInstance.post("/api/v1/landing-page/intereses", payload);
  },
  getSkills(payload) {
    return axiosInstance.post("/api/v1/landing-page/skills", payload);
  },
  getCurriculum(payload) {
    return axiosInstance.post("/api/v1/landing-page/curriculum", payload);
  },
  recibirMensaje(payload) {
    return axiosInstance.post("/api/v1/landing-page/recibir-mensaje", payload);
  },

  async getPersonalDataV2(payload) {
    return await handleRequest(
      axiosInstance.post("/api/v1/landing-page/personal-data", payload)
    );
  },
};
