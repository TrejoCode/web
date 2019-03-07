<?php

    $to = "alejandrotrejocode@gmail.com";
    $email = "";
    $name = "";
    $message = "";
    $subject = "CONTACTO WEB";

    if(isset($_POST['name'])) { $name = $_POST['name']; }

    if(isset($_POST['email'])) { $email = $_POST['email']; }

    if(isset($_POST['message'])) {
        $message = "Nombre: " . $name . "<br/>" . "Correo: " . $email . "<br/>" . "Mensaje: " . $_POST['message'];
    }

    mail($to, $subject, $message);

    header('Location: https://www.trejocode.com/');
