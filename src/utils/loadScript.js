// utils/loadScript.js
export function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () =>
      reject(new Error(`Error al cargar el script: ${url}`));
    document.body.appendChild(script);
  });
}

// Función modificada para aceptar un array de URLs
export function loadScriptArray(urls) {
  return Promise.all(
    urls.map((url) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        script.onload = () => resolve(true);
        script.onerror = () => reject(new Error(`Error al cargar el script: ${url}`));
        document.body.appendChild(script);
      });
    })
  );
}


export function loadCSS(url) {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    link.onload = () => resolve(true);
    link.onerror = () =>
      reject(new Error(`Error al cargar la hoja de estilo: ${url}`));
    document.head.appendChild(link);
  });
}

// Función modificada para aceptar un array de URLs
export function loadCSSArray(urls) {
  return Promise.all(
    urls.map((url) => {
      return new Promise((resolve, reject) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        link.onload = () => resolve(true);
        link.onerror = () =>
          reject(new Error(`Error al cargar la hoja de estilo: ${url}`));
        document.head.appendChild(link);
      });
    })
  );
}
