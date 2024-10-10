import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './utils/axiosConfig';  // Importa la configuración de Axios con la URL base

// Importar css estilos
import './assets/css/bootstrap.min.css';
import './assets/css/lineicons.css';
import './assets/css/materialdesignicons.min.css';
import './assets/css/main.css';
import './assets/css/fullcalendar.css';

// Configuración de la URL del servidor
const serverUrl = process.env.VUE_APP_URL || "http://localhost:8080";

// Cargar scripts dinámicamente
const scripts = [
  `${serverUrl}/assets/js/bootstrap.bundle.min.js`,
  `${serverUrl}/assets/js/Chart.min.js`,
  `${serverUrl}/assets/js/dynamic-pie-chart.js`,
  `${serverUrl}/assets/js/moment.min.js`,
  `${serverUrl}/assets/js/fullcalendar.js`,
  `${serverUrl}/assets/js/jvectormap.min.js`,
  /* `${serverUrl}/assets/js/world-merc.js`, */
  `${serverUrl}/assets/js/polyfill.js`,
  /* `${serverUrl}/assets/js/main.js`, */
];

scripts.forEach((src) => {
  const script = document.createElement('script');
  script.src = src;
  script.async = true; // Carga asíncrona para no bloquear el renderizado
  document.body.appendChild(script);
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
