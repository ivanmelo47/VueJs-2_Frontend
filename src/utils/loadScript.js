// utils/loadScript.js
export function loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => reject(new Error(`Error al cargar el script: ${url}`));
      document.body.appendChild(script);
    });
  }