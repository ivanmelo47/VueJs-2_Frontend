<?php
if(isset($_POST['submit'])) {
    // Recibe los datos del formulario
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $tema = $_POST['tema'];
    $mensaje = $_POST['mensaje'];

    // Destinatario del correo
    $destinatario = "ivanmj@josueivanmj.com1";
    $asunto = $tema;
    $contenido = "Nombre: $nombre\nTeléfono: $telefono\nCorreo: $correo\nMensaje: $mensaje";

    // Cabeceras del correo
    $headers = "From: $correo\r\n";
    $headers .= "Reply-To: $correo\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Envío del correo
    if(mail($destinatario, $asunto, $contenido, $headers)) {
        echo "¡El mensaje se ha enviado correctamente!";
    } else {
        echo "Error al enviar el mensaje.";
    }
} else {
    echo "Acceso denegado.";
}

