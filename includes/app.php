<?php 

require 'funciones.php';
require 'config/database.php';
require __DIR__ . '/../vendor/autoload.php';

// Conexion a la Base de Datos
$db = conectarDB();

use Model\ActiveRecord;

ActiveRecord::setDB($db);

