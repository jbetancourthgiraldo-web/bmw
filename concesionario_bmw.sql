CREATE DATABASE IF NOT EXISTS concesionario_bmw
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE concesionario_bmw;

CREATE TABLE IF NOT EXISTS marcas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    documento VARCHAR(30) UNIQUE,
    telefono VARCHAR(30),
    email VARCHAR(120),
    direccion VARCHAR(255),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS vendedores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    telefono VARCHAR(30),
    email VARCHAR(120),
    cargo VARCHAR(80),
    activo TINYINT(1) DEFAULT 1
);

CREATE TABLE IF NOT EXISTS catalogo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marca_id INT NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    anio YEAR NOT NULL,
    color VARCHAR(50),
    kilometraje INT DEFAULT 0,
    precio DECIMAL(12,2) NOT NULL,
    descripcion TEXT,
    imagen VARCHAR(255),
    estado ENUM('Disponible','Reservado','Vendido')
        DEFAULT 'Disponible',
    FOREIGN KEY (marca_id) REFERENCES marcas(id)
);

CREATE TABLE IF NOT EXISTS citas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    vendedor_id INT,
    vehiculo_id INT,
    fecha DATETIME NOT NULL,
    motivo VARCHAR(255),
    estado ENUM('Pendiente','Confirmada','Realizada','Cancelada')
        DEFAULT 'Pendiente',
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (vendedor_id) REFERENCES vendedores(id)
        ON DELETE SET NULL,
    FOREIGN KEY (vehiculo_id) REFERENCES catalogo(id)
        ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS servicios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    vehiculo_id INT,
    vendedor_id INT,
    tipo VARCHAR(120) NOT NULL,
    descripcion TEXT,
    fecha DATE NOT NULL,
    costo DECIMAL(12,2) NOT NULL DEFAULT 0,
    estado ENUM('Pendiente','En proceso','Finalizado','Cancelado')
        DEFAULT 'Pendiente',
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (vehiculo_id) REFERENCES catalogo(id)
        ON DELETE SET NULL,
    FOREIGN KEY (vendedor_id) REFERENCES vendedores(id)
        ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    vendedor_id INT,
    vehiculo_id INT NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    precio DECIMAL(12,2) NOT NULL,
    descuento DECIMAL(12,2) DEFAULT 0,
    total DECIMAL(12,2) NOT NULL,
    estado ENUM('Pendiente','Pagada','Anulada')
        DEFAULT 'Pendiente',
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (vendedor_id) REFERENCES vendedores(id)
        ON DELETE SET NULL,
    FOREIGN KEY (vehiculo_id) REFERENCES catalogo(id)
);

CREATE TABLE IF NOT EXISTS pagos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    venta_id INT NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    monto DECIMAL(12,2) NOT NULL,
    metodo ENUM('Efectivo','Tarjeta','Transferencia','Financiacion')
        NOT NULL,
    referencia VARCHAR(100),
    estado ENUM('Pendiente','Aprobado','Rechazado')
        DEFAULT 'Pendiente',
    FOREIGN KEY (venta_id) REFERENCES ventas(id)
);

INSERT IGNORE INTO marcas (nombre, descripcion)
VALUES ('BMW', 'Bayerische Motoren Werke');

INSERT INTO clientes
(nombre, documento, telefono, email, direccion)
VALUES
('Carlos Ramirez', '1001001001', '3001234567',
 'carlos@example.com', 'Manizales'),
('Laura Gomez', '1001001002', '3107654321',
 'laura@example.com', 'Pereira');

INSERT INTO vendedores (nombre, telefono, email, cargo)
VALUES
('Andres Martinez', '3121112233',
 'andres@example.com', 'Asesor comercial'),
('Sofia Torres', '3134445566',
 'sofia@example.com', 'Vendedora');

INSERT INTO catalogo
(marca_id, modelo, anio, color, kilometraje, precio, descripcion)
SELECT id, 'BMW Serie 3', 2025, 'Negro', 0,
       220000000, 'Sedan de lujo'
FROM marcas
WHERE nombre = 'BMW'
AND NOT EXISTS (
    SELECT 1 FROM catalogo WHERE modelo = 'BMW Serie 3'
);

INSERT INTO catalogo
(marca_id, modelo, anio, color, kilometraje, precio, descripcion)
SELECT id, 'BMW X5', 2025, 'Blanco', 0,
       380000000, 'SUV premium'
FROM marcas
WHERE nombre = 'BMW'
AND NOT EXISTS (
    SELECT 1 FROM catalogo WHERE modelo = 'BMW X5'
);

SELECT * FROM marcas;
SELECT * FROM clientes;
SELECT * FROM vendedores;
SELECT * FROM catalogo;
SELECT * FROM citas;
SELECT * FROM servicios;
SELECT * FROM ventas;
SELECT * FROM pagos;