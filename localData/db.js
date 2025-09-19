const db = {
  usuario: {
    nombre: "Juan Pérez",
    email: "juanperez@gmail.com",
    password: "123456", 
    fechaNacimiento: "1990-05-14",
    domicilio: "Av. callao 742",
    avatar: "/images/users/default-image.png"
  },

  productos: [
    {
      id: 1,
      nombre: "Zapatillas Nike Air",
      precio: 35000,
      descripcion: "Zapatillas deportivas de última generación, cómodas y resistentes.",
      imagen: "/images/products/nike-air.jpg",
      comentarios: [
        {
          usuario: "Pedro Gómez",
          texto: "Muy buenas, me resultaron súper cómodas.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          usuario: "María López",
          texto: "La calidad es excelente, valen la pena.",
          imagenPerfil: "/images/users/default-image.png"
        }
      ]
    },
    {
      id: 2,
      nombre: "Smartphone Samsung S21",
      precio: 120000,
      descripcion: "Pantalla AMOLED de 6.5'', 128GB de almacenamiento, 5G.",
      imagen: "/images/products/samsung-s21.jpg",
      comentarios: [
        {
          usuario: "Carlos Ruiz",
          texto: "El celular anda perfecto y la cámara es increíble.",
          imagenPerfil: "/images/users/default-image.png"
        }
      ]
    },
    {
      id: 3,
      nombre: "Notebook Lenovo IdeaPad",
      precio: 220000,
      descripcion: "Notebook Lenovo IdeaPad 15.6'' con procesador i5 y 8GB RAM.",
      imagen: "/images/products/lenovo-ideapad.jpg",
      comentarios: [
        {
          usuario: "Lucía Fernández",
          texto: "Rinde muy bien para trabajar y estudiar.",
          imagenPerfil: "/images/users/default-image.png"
        }
      ]
    },
    {
      id: 4,
      nombre: "Auriculares Inalámbricos JBL",
      precio: 25000,
      descripcion: "Auriculares Bluetooth con cancelación de ruido.",
      imagen: "/images/products/jbl-headphones.jpg",
      comentarios: []
    },
    {
      id: 5,
      nombre: "Cámara Canon EOS Rebel",
      precio: 300000,
      descripcion: "Cámara réflex digital con lente 18-55mm.",
      imagen: "/images/products/canon-eos.jpg",
      comentarios: [
        {
          usuario: "Marta Díaz",
          texto: "Saca fotos espectaculares, la uso para mi emprendimiento.",
          imagenPerfil: "/images/users/default-image.png"
        }
      ]
    },
    {
      id: 6,
      nombre: "Silla Gamer Redragon",
      precio: 60000,
      descripcion: "Silla ergonómica con apoyabrazos ajustable y respaldo reclinable.",
      imagen: "/images/products/silla-gamer.jpg",
      comentarios: []
    },
    {
      id: 7,
      nombre: "Consola PlayStation 5",
      precio: 500000,
      descripcion: "Consola PS5 con control DualSense.",
      imagen: "/images/products/ps5.jpg",
      comentarios: [
        {
          usuario: "Diego Torres",
          texto: "La mejor consola, gráficos impresionantes.",
          imagenPerfil: "/images/users/default-image.png"
        }
      ]
    },
    {
      id: 8,
      nombre: "Mochila Adidas",
      precio: 15000,
      descripcion: "Mochila deportiva con múltiples compartimentos.",
      imagen: "/images/products/adidas-backpack.jpg",
      comentarios: []
    },
    {
      id: 9,
      nombre: "Reloj Inteligente Xiaomi Mi Band 6",
      precio: 18000,
      descripcion: "Reloj inteligente con monitoreo de actividad y sueño.",
      imagen: "/images/products/xiaomi-band6.jpg",
      comentarios: [
        {
          usuario: "Ana Castillo",
          texto: "Me encanta, muy útil para el gimnasio.",
          imagenPerfil: "/images/users/default-image.png"
        }
      ]
    },
    {
      id: 10,
      nombre: "Parlante Bluetooth Sony",
      precio: 40000,
      descripcion: "Parlante portátil con sonido estéreo y batería de 12 horas.",
      imagen: "/images/products/sony-speaker.jpg",
      comentarios: []
    }
  ]
};

module.exports = db;