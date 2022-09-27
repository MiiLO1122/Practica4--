-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-09-2022 a las 18:44:21
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29
CREATE DATABASE `btowwqgmhdu4cl3fjyew`;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `practicasiniciales-p4`
--
USE `btowwqgmhdu4cl3fjyew`;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentariospublicacion`
--

CREATE TABLE `comentariospublicacion` (
  `idcomentario` int(11) NOT NULL,
  `idpublicacion` int(11) NOT NULL,
  `comentario` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `credenciales`
--

CREATE TABLE `credenciales` (
  `carnet` int(11) NOT NULL,
  `1apellido` varchar(45) NOT NULL,
  `2apellido` varchar(45) DEFAULT NULL,
  `1nombre` varchar(45) NOT NULL,
  `2nombre` varchar(45) DEFAULT NULL,
  `contrasena` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `idcursosaprobados` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `idcursos` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `creditos_necesarios` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursosaprobados`
--

CREATE TABLE `cursosaprobados` (
  `idcursosaprobados` int(11) NOT NULL,
  `idcurso` int(11) NOT NULL,
  `punteo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones`
--

CREATE TABLE `publicaciones` (
  `idpublicaciones` int(11) NOT NULL,
  `carne` int(11) NOT NULL,
  `mensaje` varchar(500) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentariospublicacion`
--
ALTER TABLE `comentariospublicacion`
  ADD PRIMARY KEY (`idcomentario`),
  ADD KEY `idpublicacion_idx` (`idpublicacion`);

--
-- Indices de la tabla `credenciales`
--
ALTER TABLE `credenciales`
  ADD PRIMARY KEY (`carnet`),
  ADD UNIQUE KEY `carnet_UNIQUE` (`carnet`),
  ADD KEY `idcursosaprobados_idx` (`idcursosaprobados`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`idcursos`),
  ADD UNIQUE KEY `idcursos_UNIQUE` (`idcursos`);

--
-- Indices de la tabla `cursosaprobados`
--
ALTER TABLE `cursosaprobados`
  ADD PRIMARY KEY (`idcursosaprobados`),
  ADD KEY `idcursos_idx` (`idcurso`);

--
-- Indices de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`idpublicaciones`),
  ADD KEY `carne_idx` (`carne`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cursosaprobados`
--
ALTER TABLE `cursosaprobados`
  MODIFY `idcursosaprobados` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentariospublicacion`
--
ALTER TABLE `comentariospublicacion`
  ADD CONSTRAINT `idpublicacion` FOREIGN KEY (`idpublicacion`) REFERENCES `publicaciones` (`idpublicaciones`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `credenciales`
--
ALTER TABLE `credenciales`
  ADD CONSTRAINT `idcursosaprobados` FOREIGN KEY (`idcursosaprobados`) REFERENCES `cursosaprobados` (`idcursosaprobados`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `cursosaprobados`
--
ALTER TABLE `cursosaprobados`
  ADD CONSTRAINT `idcursos` FOREIGN KEY (`idcurso`) REFERENCES `cursos` (`idcursos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD CONSTRAINT `carne` FOREIGN KEY (`carne`) REFERENCES `credenciales` (`carnet`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
