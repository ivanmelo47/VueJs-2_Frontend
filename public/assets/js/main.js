(function () {
  /* ========= Preloader ======== */
  /* const preloader = document.getElementById('preloader');

  window.addEventListener('load', function () {
    if (preloader) {
      preloader.style.display = 'none';
    }
  }); */
  /* const preloader = document.getElementById("preloader");

  window.addEventListener("load", function () {
    if (preloader) {
      const loadTime = performance.now();
      console.log(`La página se cargó en ${loadTime.toFixed(2)} ms`);

      // Mantener el preloader visible por al menos 500 ms, por ejemplo
      const minPreloaderTime = 1000; // Puedes ajustar este tiempo
      const elapsedTime = performance.now(); // Tiempo cuando la página terminó de cargar

      const remainingTime = Math.max(0, minPreloaderTime - elapsedTime); // Tiempo restante hasta completar los 500 ms

      setTimeout(() => {
        preloader.style.display = "none";
      }, remainingTime);
    }
  }); */

  const preloader = document.getElementById("preloader");

  window.addEventListener("load", function () {
    if (preloader) {
      const loadTime = performance.now(); // Tiempo en milisegundos desde que se inició la navegación
      console.log(`La página se cargó en ${loadTime.toFixed(2)} ms`);

      // Ocultar el preloader después de que se cargue todo
      preloader.style.display = "none";
    }
  });

  /* ========= Add Box Shadow in Header on Scroll ======== */
  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        header.style.boxShadow = "0px 0px 30px 0px rgba(200, 208, 216, 0.30)";
      } else {
        header.style.boxShadow = "none";
      }
    });
  }

  /* ========= Sidebar toggle ======== */
  const sidebarNavWrapper = document.querySelector(".sidebar-nav-wrapper");
  const mainWrapper = document.querySelector(".main-wrapper");
  const menuToggleButton = document.querySelector("#menu-toggle");
  const menuToggleButtonIcon = document.querySelector("#menu-toggle i");
  const overlay = document.querySelector(".overlay");

  if (
    menuToggleButton &&
    sidebarNavWrapper &&
    mainWrapper &&
    overlay &&
    menuToggleButtonIcon
  ) {
    menuToggleButton.addEventListener("click", () => {
      sidebarNavWrapper.classList.toggle("active");
      overlay.classList.add("active");
      mainWrapper.classList.toggle("active");

      if (document.body.clientWidth > 1200) {
        if (menuToggleButtonIcon.classList.contains("lni-chevron-left")) {
          menuToggleButtonIcon.classList.remove("lni-chevron-left");
          menuToggleButtonIcon.classList.add("lni-menu");
        } else {
          menuToggleButtonIcon.classList.remove("lni-menu");
          menuToggleButtonIcon.classList.add("lni-chevron-left");
        }
      } else {
        if (menuToggleButtonIcon.classList.contains("lni-chevron-left")) {
          menuToggleButtonIcon.classList.remove("lni-chevron-left");
          menuToggleButtonIcon.classList.add("lni-menu");
        }
      }
    });

    overlay.addEventListener("click", () => {
      sidebarNavWrapper.classList.remove("active");
      overlay.classList.remove("active");
      mainWrapper.classList.remove("active");
    });
  }
})();
