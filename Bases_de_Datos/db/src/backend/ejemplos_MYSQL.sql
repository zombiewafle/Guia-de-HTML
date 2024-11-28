Aquí tienes ejemplos prácticos para cada uno de los comandos y operaciones descritos en el capítulo 10 de tu guía sobre *Comandos y Sintaxis en MySQL*.

-- 1. **Crear Base de Datos**

CREATE DATABASE mi_base_de_datos;


-- 2. **Crear Tabla**

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100),
    edad INT
);


-- 3. **Insertar Datos (INSERT INTO)**

INSERT INTO usuarios (nombre, email, edad)
VALUES ('Juan', 'juan@correo.com', 30);


-- 4. **Leer Datos (SELECT)**

SELECT * FROM usuarios;


-- 5. **Filtrar Datos (WHERE)**

SELECT * FROM usuarios WHERE edad > 25;


-- 6. **Actualizar Datos (UPDATE)**

UPDATE usuarios
SET email = 'nuevo_correo@correo.com'
WHERE id = 1;


-- 7. **Eliminar Datos (DELETE)**

DELETE FROM usuarios WHERE id = 1;


-- 8. **Crear Clave Foránea (Relación entre Tablas)**

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES usuarios(id)
);


-- 9. **Uniones (JOIN)**

SELECT usuarios.nombre, pedidos.id
FROM usuarios
INNER JOIN pedidos ON usuarios.id = pedidos.user_id;


-- 10. **Índices**

CREATE INDEX idx_nombre ON usuarios (nombre);


-- 11. **Transacciones**

START TRANSACTION;
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;
UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;
COMMIT;
-- O para revertir:
-- ROLLBACK;


-- 12. **Definición de Clave Primaria y AUTO_INCREMENT**

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL(10, 2)
);


-- 13. **Tipos de Datos en MySQL**
- **INT**: Para números enteros (por ejemplo, `id INT AUTO_INCREMENT`)
- **VARCHAR(100)**: Para texto corto como nombres (`nombre VARCHAR(100)`)
- **TEXT**: Para texto largo (`descripcion TEXT`)
- **DECIMAL(10, 2)**: Para valores con decimales como precios (`precio DECIMAL(10, 2)`)
- **DATE**: Para fechas (`fecha DATE`)
- **TIMESTAMP**: Para marcas de tiempo (`created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`)
- **ENUM**: Para listas de valores predefinidos (`status ENUM('pendiente', 'completado', 'cancelado')`)
