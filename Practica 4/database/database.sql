CREATE DATABASE btowwqgmhdu4cl3fjyew;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT/;
/!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS/;
/!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION/;
/!40101 SET NAMES utf8mb4/;

--
-- Base de datos: practicasiniciales-p4
--
USE btowwqgmhdu4cl3fjyew;

CREATE TABLE usuario(
    Registro_Academico VARCHAR(20) NOT NULL PRIMARY KEY, 
    nombres VARCHAR(100),
    apellidos VARCHAR(100),
    contraseña VARCHAR(35),
    correo VARCHAR(180),
    Cursos_ganados varchar(100),
    Publicacion VARCHAR(350),
    creditos INT(10)
);

CREATE TABLE cursosDisponibles(
    codigo VARCHAR(20) NOT NULL,
    nombreCurso VARCHAR(250) NOT NULL PRIMARY KEY,
    profesor VARCHAR(100),
    detalles TEXT(450)
);

CREATE TABLE nuevaPublicacion(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    descripcion TEXT(500),
    Registro_Academico VARCHAR(20) NOT NULL,
    fecha DATE
);

DESCRIBE usuario;
DESCRIBE cursosDisponibles;
DESCRIBE nuevaPublicacion;