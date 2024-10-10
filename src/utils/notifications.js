// src/utils/notifications.js
import Swal from 'sweetalert2'; // Importar SweetAlert2

export function showNotification(icon, text) {
  Swal.fire({
    icon: icon,
    title: icon === "error" ? "Error" : "Éxito", // Personaliza el título según el tipo de notificación
    text: text,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    toast: true,
  });
}