<?php

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$destinatario = 'reserva@breakout.com.mx';
$header = "Enviado desde la pagina Breakout";

// $mensajeCompleto = $message . "\nAtentamente: " . $nombre;
$mensajeContacto = "De: $nombre \n";
$mensajeContacto .= "Correo: $correo \n";
$mensajeContacto .= "Mensaje: $mensaje \n";

mail($destinatario, $header, $mensajeContacto);
echo "<script>alert('Correo enviado exitosamente')</script>";
echo "<script>setTimeout(\"location.href= 'index.html'\",1000)</script>";

?>