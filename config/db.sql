-- Creando la base de datos
CREATE DATABASE crudluxperi;

-- Usando base de datos
use crudluxperi;

CREATE TABLE comprador(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(15)
);

CREATE TABLE producto(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    precio VARCHAR(15)
);

-- Mostrar las tablas

SHOW TABLES;

-- Para describir tabla

DESCRIBE comprador;
DESCRIBE producto;
