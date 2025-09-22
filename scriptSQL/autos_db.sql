CREATE SCHEMA AUTOS_DB;
USE AUTOS_DB;

CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    fechaNacimiento DATE,
    domicilio VARCHAR(255),
    avatar VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT UNSIGNED NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    precio DECIMAL(10,2),
    descripcion TEXT,
    imagen VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idProducto INT UNSIGNED NOT NULL,
    idUsuario INT UNSIGNED NOT NULL,
    comentario TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (idProducto) REFERENCES productos(id),
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);


INSERT INTO usuarios (nombre, email, password, fechaNacimiento, domicilio, avatar) VALUES 
('Juan Pérez', 'juanperez@gmail.com', '123456', '1990-05-14', 'Av. Callao 742', '/images/users/default-image.png'),
('Pedro Gómez', 'pedrogomez@gmail.com', '123456', '1985-03-10', 'Calle Falsa 123', '/images/users/default-image.png'),
('María López', 'marialopez@gmail.com', '123456', '1992-07-22', 'Av. Corrientes 567', '/images/users/default-image.png'),
('Carlos Ruiz', 'carlosruiz@gmail.com', '123456', '1988-11-30', 'Calle Rivadavia 89', '/images/users/default-image.png'),
('Lucía Fernández', 'luciafernandez@gmail.com', '123456', '1995-01-05', 'Av. Santa Fe 101', '/images/users/default-image.png');


INSERT INTO productos (idUsuario, nombre, precio, descripcion, imagen) VALUES
(1, 'Toyota Corolla', 15000, 'Año 2020 · 80.000 km · Transmisión automática · Nafta', '/images/products/toyota-corolla.jpg'),
(2, 'Ford Mustang', 28000, 'Año 2018 · 45.000 km · Transmisión manual · Motor V8', '/images/products/ford-mustang.jpg'),
(3, 'Chevrolet Silverado', 32000, 'Año 2019 · 70.000 km · Transmisión automática · 4x4', '/images/products/chevrolet-silverado.jpg'),
(4, 'Honda Civic', 22000, 'Año 2021 · 25.000 km · Transmisión automática · Nafta', '/images/products/honda-civic.jpg'),
(5, 'BMW Serie 3', 26000, 'Año 2017 · 60.000 km · Caja automática · Motor turbo', '/images/products/bmw-serie3.jpg'),
(1, 'Jeep Wrangler', 24000, 'Año 2016 · 90.000 km · Transmisión manual · 4x4', '/images/products/jeep-wrangler.jpg'),
(2, 'Tesla Model 3', 35000, 'Año 2022 · 15.000 km · Automático · 100% eléctrico', '/images/products/tesla-model3.jpg'),
(3, 'Volkswagen Golf', 18000, 'Año 2019 · 50.000 km · Transmisión manual · Hatchback', '/images/products/volkswagen-golf.jpg'),
(4, 'Audi A4', 27000, 'Año 2018 · 55.000 km · Caja automática · Motor 2.0T', '/images/products/audi-a4.jpg'),
(5, 'Mercedes-Benz Clase C', 30000, 'Año 2017 · 65.000 km · Automático · Sedan de lujo', '/images/products/mercedes-clasec.jpg'),
(1, 'Nissan Sentra', 17000, 'Año 2020 · 40.000 km · Automático · Nafta', '/images/products/nissan-sentra.jpg'),
(2, 'Hyundai Tucson', 25000, 'Año 2019 · 55.000 km · Automática · SUV', '/images/products/hyundai-tucson.jpg');


INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES
(1, 2, 'Muy confiable, gasta poco combustible.'),
(1, 3, 'Excelente relación precio/calidad.'),
(1, 4, 'Ideal para ciudad y viajes largos.');

INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES
(2, 1, 'Una máquina, suena increíble.'),
(2, 3, 'Potente y con estilo.'),
(2, 5, 'Perfecto para los amantes de los autos deportivos.');

INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES
(3, 2, 'Ideal para trabajo pesado y viajes largos.'),
(3, 4, 'Muy resistente y cómodo.'),
(3, 5, 'Gran camioneta, excelente rendimiento.');

INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES
(4, 1, 'Cómodo y económico.'),
(4, 2, 'Buen diseño y confiable.'),
(4, 3, 'Excelente para ciudad y carretera.');

INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES
(5, 1, 'Lujo y comodidad, vale cada dólar.'),
(5, 3, 'Muy elegante y deportivo.'),
(5, 4, 'Manejo suave y potente.');

INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES
(6, 2, 'Perfecto para aventuras off-road.'),
(6, 3, 'Robusto y confiable.'),
(6, 5, 'Muy divertido de manejar.');

INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES
(7, 1, 'Tecnología de otro nivel, muy rápido.'),
(7, 2, 'El auto del futuro, increíble autonomía.'),
(7, 3, 'Cómodo y silencioso, me encanta.');

INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES
(8, 1, 'Compacto y práctico.'),
(8, 4, 'Muy buen rendimiento de combustible.'),
(8, 5, 'Ideal para la ciudad.');

INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES
(9, 2, 'Muy elegante y cómodo para viajes largos.'),
(9, 3, 'Potente y seguro.'),
(9, 4, 'Gran relación calidad-precio.');

INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES
(10, 1, 'Lujo y confort premium.'),
(10, 3, 'Excelente motor y diseño.'),
(10, 5, 'Muy buena compra.');

INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES
(11, 2, 'Muy cómodo y económico en ciudad.'),
(11, 3, 'Práctico y confiable.'),
(11, 4, 'Ideal para uso diario.');

INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES
(12, 1, 'Excelente SUV para familia.'),
(12, 2, 'Cómodo y seguro.'),
(12, 5, 'Gran vehículo, muy recomendable.');