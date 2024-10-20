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

// Función para mostrar notificaciones apiladas con desplazamiento
export function showNotificationWithOffset(icon, text, index) {
  Swal.fire({
    icon: icon,
    title: "Error",
    text: text,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    toast: true,
    customClass: {
      popup: `swal-toast-${index}`
    },
    didOpen: (toast) => {
      toast.style.marginTop = `${index * 70}px`; // Apilar con un margen de 70px entre cada alerta
    },
  });
}