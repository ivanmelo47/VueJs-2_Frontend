<template>
  <div>
    <!-- Pantalla de carga estilizada -->
    <div v-show="isLoading" class="loading-overlay">
      <div class="loading-container">
        <!-- Spinner personalizado de Bootstrap -->
        <div class="spinner-border text-light custom-spinner" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
        <!-- Mensaje de carga -->
        <p class="loading-text">Cargando, por favor espera...</p>
      </div>
    </div>

    <!-- Contenido principal -->
    <div v-show="!isLoading">
      <!-- MENU ENCABEZADO -->
      <div class="contenedor-header">
        <header>
          <div class="logo">
            <a href="#">{{ personalData.name }}</a>
          </div>

          <nav id="nav">
            <ul>
              <li><a href="#inicio" onclick="seleccionar()">INICIO</a></li>

              <li><a href="#sobremi" onclick="seleccionar()">SOBRE MI</a></li>

              <li><a href="#skills" onclick="seleccionar()">SKILLS</a></li>

              <li>
                <a href="#curriculum" onclick="seleccionar()">CURRICULUM</a>
              </li>

              <li>
                <a href="#portfolio" onclick="seleccionar()">PORTFOLIO</a>
              </li>

              <li><a href="#contacto" onclick="seleccionar()">CONTACTO</a></li>
            </ul>
          </nav>

          <div class="nav-responsive" onclick="mostrarOcultarMenu()">
            <i class="fa-solid fa-bars"></i>
          </div>
        </header>
      </div>

      <!-- SECCION INICIO -->
      <section id="inicio" class="inicio">
        <div class="contenido-banner" style="margin-top: 100px">
          <div class="contenedor-img">
            <img src="personal_assets/img/ivanmelo.jpg" alt="" />
          </div>

          <h1>{{ personalData.name }}</h1>

          <h2>{{ personalData.especialidad }}</h2>

          <!-- Consume API de redes sociales -->
          <div class="redes">
            <a
              v-for="(red, index) in redesSociales"
              :key="index"
              :href="red.url_red"
              target="_blank"
            >
              <i :class="red.logo"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- SECCION SOBRE MI -->
      <section id="sobremi" class="sobremi">
        <div class="contenido-seccion">
          <h2>Sobre Mí</h2>

          <div v-html="formattedDescription"></div>

          <div class="fila">
            <!-- datos personales -->

            <div class="col">
              <h3>Datos Personales</h3>

              <ul>
                <li>
                  <strong>Cumpleaños</strong>
                  {{ personalData.cumpleanios }}
                </li>

                <li>
                  <strong>Teléfono</strong>
                  {{ personalData.telefono }}
                </li>

                <li>
                  <strong>Email</strong>
                  {{ personalData.email }}
                </li>

                <li>
                  <strong>Linkedin</strong>

                  <a
                    :href="personalData.linkedin"
                    target="_blank"
                    style="text-decoration: underline"
                    >{{ personalData.name }}</a
                  >
                </li>

                <li>
                  <strong>Dirección</strong>
                  {{ personalData.direccion }}
                </li>

                <li>
                  <strong>Cargo</strong>

                  <span>{{ personalData.cargo }}</span>
                </li>
              </ul>
            </div>

            <!-- intereses -->

            <div class="col">
              <h3>Intereses</h3>

              <!-- Consume API de intereses -->
              <div class="contenedor-intereses">
                <div
                  class="interes"
                  v-for="(interes, index) in intereses"
                  :key="index"
                >
                  <i :class="interes.logo"></i>
                  <span>{{ interes.nombre }}</span>
                </div>
              </div>
            </div>
          </div>

          <button>
            Descargar CV <i class="fa-solid fa-download"></i>
            <span class="overlay"></span>
          </button>
        </div>
      </section>

      <!-- SECCION SKILLS -->
      <section class="skills" id="skills">
        <div class="contenido-seccion">
          <h2>Skills</h2>

          <div class="fila">
            <!-- Itera sobre los tipos de skills dinámicamente -->
            <div
              v-for="(skillsPorTipo, titulo) in groupedSkills"
              :key="titulo"
              class="col"
            >
              <h3>{{ titulo }}</h3>
              <!-- Itera sobre las skills dentro de cada tipo -->
              <div
                v-for="(skill, index) in skillsPorTipo"
                :key="index"
                class="skill"
              >
                <span>{{ skill.nombre }}</span>
                <div class="barra-skill">
                  <div class="progreso">
                    <span><i :class="skill.logo"></i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECCION CURRICULUM -->
      <section id="curriculum" class="curriculum">
        <div class="contenido-seccion">
          <h2>Curriculum</h2>

          <div class="fila">
            <div class="columna izquierda">
              <h3>Educación</h3>
              <div class="item izq" v-for="(educacion, index) in curriculumEducation" :key="index">
                <h4>{{ educacion.nombre }}</h4>
                <span class="casa">{{ educacion.empresa }}</span>
                <!-- <span class="fecha">{{ educacion.inicio }}{{ educacion.inicio !== educacion.fin ? ' - ' + educacion.fin : '' }}</span> -->
                <span class="fecha">
                  {{ educacion.inicio }}
                  {{ educacion.fin !== educacion.inicio && educacion.fin !== null ? ' - ' + educacion.fin : '' }}
                  {{ educacion.fin === null && educacion.actualmente === 1 ? ' - Actualmente' : '' }}
                </span>
                <p>{{ educacion.descripcion }}</p>
                <div class="conectori">
                  <div class="circuloi"></div>
                </div>
              </div>
            </div>

            <div class="columna derecha">
              <h3>Experiencia de trabajo</h3>
              <div class="item der" v-for="(trabajo, index) in curriculumTrabajo" :key="index">
                <h4>{{ trabajo.nombre }}</h4>
                <span class="casa">{{ trabajo.empresa }}</span>
                <!-- <span class="fecha">2024</span> -->
                <span class="fecha">
                  {{ trabajo.inicio }}
                  {{ trabajo.fin !== trabajo.inicio && trabajo.fin !== null ? ' - ' + trabajo.fin : '' }}
                  {{ trabajo.fin === null && trabajo.actualmente === 1 ? ' - Actualmente' : '' }}
                </span>
                <p>{{ trabajo.descripcion }}</p>
                <div class="conectord">
                  <div class="circulod"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECCION PORTFOLIO -->
      <section id="portfolio" class="portfolio">
        <div class="contenido-seccion">
          <h2>PORTAFOLIO</h2>

          <div class="galeria">
            <div class="proyecto">
              <a
                href="http://puntoventa.josueivanmj.com/almacen/producto"
                target="_blank"
              >
                <img src="personal_assets/img/laravel_crud.png" alt="" />
                <div class="overlay">
                  <h3>LARAVEL</h3>
                  <p>CRUD de Productos</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- SECCION CONTACTO -->
      <section id="contacto" class="contacto">
          <div class="contenido-seccion">
              <h2>CONTACTO</h2>
              <div class="fila">
                  <!-- Formulario -->
                  <div class="col">
                      <input type="text" placeholder="Tú Nombre" v-model="mensaje.nombre">
                      <input type="text" placeholder="Número telefónico" v-model="mensaje.telefono">
                      <input type="text" placeholder="Dirección de correo" v-model="mensaje.correo">
                      <input type="text" placeholder="Tema" v-model="mensaje.tema">
                      <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje" v-model="mensaje.mensaje"></textarea>
                      <button @click="enviarMensaje()">
                          Enviar Mensaje<i class="fa-solid fa-paper-plane"></i>
                          <span class="overlay"></span>
                      </button>
                  </div>
                  <!-- Mapa -->
                  <div class="col" v-show="false">
                      <img src="" alt="">
                      <div class="info">
                          <ul>
                              <li>
                                  <i class="fa-solid fa-location-dot"></i>
                                  Nicaragua 159, San Rafael Mza
                              </li>
                              <li>
                                  <i class="fa-solid fa-mobile-screen"></i>
                                  Llamanos: 2384 - 4343443 
                              </li>
                              <li>
                                  <i class="fa-solid fa-envelope"></i>
                                  Email: cw@example.com
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!-- footer -->
      <footer>
        <a href="#inicio" class="arriba">
          <i class="fa-solid fa-angles-up"></i>
        </a>

        <div class="redes">
          <a
            href="https://www.facebook.com/ivan23.melojaramillo"
            target="_blank"
            ><i class="fa-brands fa-facebook-f"></i
          ></a>

          <a href="https://www.instagram.com/ivan.m_jaramillo" target="_blank"
            ><i class="fa-brands fa-square-instagram"></i
          ></a>

          <a
            href="https://www.linkedin.com/in/josue-ivan-b510611a5/"
            target="_blank"
            ><i class="fa-brands fa-linkedin-in"></i
          ></a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { loadScript, loadCSS } from "@/utils/loadScript";
import apiService from "@/services/apiService";
import { showNotification } from '@/utils/toastNotifications'; // Importamos la función desde utils

export default {
  name: "PortafolioMain",
  data() {
    return {
      isLoading: true,
      serverUrl: process.env.VUE_APP_URL || "http://localhost:8080",
      personalData: {},
      redesSociales: {},
      intereses: {},

      description: "",
      formattedDescription: "",

      skills: {},
      groupedSkills: {},

      curriculumEducation: {},
      curriculumTrabajo: {},

      /* Formulario de mensajes */
      mensaje: {
        nombre: "",
        telefono: "",
        correo: "",
        tema: "",
        mensaje: "",
      }
    };
  },
  methods: {
    async getDatosPersonales() {
      const payload = {
        uuid: "1936e2fc-48bf-48a1-ad37-53b2d441acfc",
      };
      const response = await apiService.getPersonalData(payload);
      this.personalData = response.data.data;
      this.formattedDescription = this.formatDescription(
        this.personalData.parrafo
      );
      //console.log(this.personalData);
    },
    async getRedesSociales() {
      const payload = {
        uuid: "1936e2fc-48bf-48a1-ad37-53b2d441acfc",
      };
      const response = await apiService.getRedesSociales(payload);

      // Filtrar solo las redes sociales que tienen nombre y logo
      this.redesSociales = response.data.data.filter(
        (red) => red.nombre && red.logo
      );
    },
    async getIntereses() {
      const payload = {
        uuid: "1936e2fc-48bf-48a1-ad37-53b2d441acfc",
      };
      const response = await apiService.getIntereses(payload);
      this.intereses = response.data.data.filter(
        (red) => red.nombre && red.logo
      );
    },

    async getSkills() {
      const payload = {
        uuid: "1936e2fc-48bf-48a1-ad37-53b2d441acfc",
      };
      const response = await apiService.getSkills(payload);
      this.skills = response.data.data.filter((red) => red.nombre && red.logo);

      // Agrupa las skills inmediatamente después de obtenerlas
      this.groupedSkills = this.skills.reduce((acc, skill) => {
        // Agrupa las skills por 'titulo'
        if (!acc[skill.titulo]) {
          acc[skill.titulo] = [];
        }
        acc[skill.titulo].push(skill);
        return acc;
      }, {});
    },

    async getCurriculum() {
      const payload = {
        uuid: "1936e2fc-48bf-48a1-ad37-53b2d441acfc",
      };
      const response = await apiService.getCurriculum(payload);
      this.curriculumEducation = response.data.data.filter(
        (red) =>
          red.nombre &&
          red.empresa &&
          red.inicio &&
          red.descripcion &&
          red.tipo === "educacion"
      );
      this.curriculumTrabajo = response.data.data.filter(
        (red) =>
          red.nombre &&
          red.empresa &&
          red.inicio &&
          red.descripcion &&
          red.tipo === "experiencia_trabajo"
      );
    },

    // Metodo para enviar mensaje
    async enviarMensaje() {
      const payload = {
        uuid: "1936e2fc-48bf-48a1-ad37-53b2d441acfc",
        nombre: this.mensaje.nombre,
        telefono: this.mensaje.telefono,
        email: this.mensaje.correo,
        tema: this.mensaje.tema,
        mensaje: this.mensaje.mensaje,
      };
      const response = await apiService.recibirMensaje(payload);

      if (response.data.status) {
        this.showMultipleNotifications(response.data.notifications, 'success');
        // Vaciar mensaje
        Object.keys(this.mensaje).forEach(key => {
          this.mensaje[key] = ""; // Restablecer cada propiedad a su valor por defecto
        });
      } else {
        this.showMultipleNotifications(response.data.notifications, 'error');
      }
    },

    handleResponse() {
      const response = {
        "status": false,
        "validation": false,
        "code": 422,
        "message": "Error al validar los datos.",
        "notifications": [
          "El campo email es requerido.",
          "El campo mensaje es requerido."
        ],
        "data": null
      };

      this.showMultipleNotifications(response.notifications);
    },

    showMultipleNotifications(notifications, type = 'error') {
      if (notifications && notifications.length > 0) {
        notifications.forEach((notification, index) => {
          // Llamamos a la función externa para cada notificación con un retraso acumulado
          setTimeout(() => {
            showNotification(type, notification);
          }, index * 900); // Retraso acumulativo de 1 segundo por notificación
        });
      }
    },

    // Método para formatear el párrafo
    formatDescription(parrafo) {
      if (!parrafo) return ""; // Verifica si el párrafo no está vacío

      // Divide el texto en párrafos usando doble salto de línea (\n\n)
      const paragraphs = parrafo.split(/\n\s*\n/);

      // Si hay al menos un párrafo, envuelve el primero con <p><span></span></p>
      if (paragraphs.length > 0) {
        paragraphs[0] = `<p><span>${paragraphs[0]}</span></p>`;
      }

      // Envuelve los demás párrafos solo con <p>
      const formatted = paragraphs.map((p, index) => {
        return index === 0 ? p : `<p>${p}</p>`;
      });

      // Junta todos los párrafos en un solo string y lo asigna a formattedDescription
      return formatted.join("");
    },
  },
  mounted() {
    Promise.all([
      // Cargar Css y Js
      loadCSS(`${this.serverUrl}/personal_assets/estilo.css`),
      loadCSS(
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      ),
      loadScript(`${this.serverUrl}/personal_assets/script.js`),
      this.getDatosPersonales(),
      this.getRedesSociales(),
      this.getIntereses(),
      this.getSkills(),
      this.getCurriculum(),
    ])
      .then(() => {
        //this.groupSkills();
        // Agregar tiempo extra antes de ocultar el spinner
        /* setTimeout(() => {
          this.isLoading = false; // Oculta el spinner
        }, 0); // Tiempo en milisegundos (ej: 1000 ms = 1 segundo) */
        this.isLoading = false; // Oculta el spinner

        //this.openColorPicker();
        
        // Definir la función global para manejar la selección de color
        /* window.selectColor = (color) => {
          console.log("Selected color:", color);
          Swal.close(); // Cierra el modal al seleccionar el color
        }; */
      })
      .catch((error) => {
        console.error("Error al cargar los recursos:", error);
      });
  },
  computed: {
    interesesFiltrados() {
      return this.intereses.filter((interes) => interes.nombre && interes.logo);
    },
  },
};
</script>

<style scoped>
/* Estilo para la pantalla de carga completa */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #343a40; /* Color de fondo oscuro */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease;
}

/* Contenedor de la pantalla de carga */
.loading-container {
  text-align: center;
}

/* Spinner personalizado */
.custom-spinner {
  width: 4rem;
  height: 4rem;
  border-width: 0.4rem;
}

/* Texto estilizado debajo del spinner */
.loading-text {
  color: #fff;
  font-size: 1.2rem;
  margin-top: 1rem;
  font-weight: 500;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  animation: blink 1s linear infinite;
}

/* Animación de parpadeo del texto */
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
