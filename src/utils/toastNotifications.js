import { createToastInterface } from "vue-toastification";
import "vue-toastification/dist/index.css";

// Crear una instancia de Toast
const toast = createToastInterface();

// Establecer un ancho máximo para las notificaciones
//const MAX_WIDTH = "350px"; // Cambia este valor según tus necesidades

export function showNotification(type, message) {
  const options = {
    position: "top-right",
    timeout: 3000, // Mantener la notificación visible por 3 segundos
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  // Diferentes tipos de notificaciones según el tipo recibido
  if (type === "success") {
    toast.success(message, options);
  } else if (type === "error") {
    toast.error(message, options);
  } else if (type === "info") {
    toast.info(message, options);
  } else {
    toast(message, options); // Notificación por defecto
  }
}
