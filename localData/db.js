const db = {
  usuario: {
    nombre: "Juan Pérez",
    email: "juanperez@gmail.com",
    password: "123456", 
    fechaNacimiento: "1990-05-14",
    domicilio: "Av. callao 742",
    avatar: "/images/users/fotodeperfil.jpg"
  },

  productos: [
    {
      id: 1,
      nombre: "Toyota Corolla",
      precio: 15000,
      descripcion: "Año 2020 · 80.000 km · Transmisión automática · Nafta",
      imagen: "/images/products/toyota-corolla.jpg",
      comentarios: [
        {
          usuario: "Pedro Gómez",
          texto: "Muy confiable, gasta poco combustible.",
          imagenPerfil: "/images/users/fotodeperfil.jpg"
        },
        {
          usuario: "María López",
          texto: "Excelente relación precio/calidad.",
          imagenPerfil: "/images/users/fotodeperfil.jpg"
        }
      ]
    },
    {
      id: 2,
      nombre: "Ford Mustang",
      precio: 28000,
      descripcion: "Año 2018 · 45.000 km · Transmisión manual · Motor V8",
      imagen: "/images/products/ford-mustang.jpg",
      comentarios: [
        {
          usuario: "Carlos Ruiz",
          texto: "Una máquina, suena increíble.",
          imagenPerfil: "/images/users/fotodeperfil.jpg"
        }
      ]
    },
    {
      id: 3,
      nombre: "Chevrolet Silverado",
      precio: 32000,
      descripcion: "Año 2019 · 70.000 km · Transmisión automática · 4x4",
      imagen: "/images/products/chevrolet-silverado.jpg",
      comentarios: [
        {
          usuario: "Lucía Fernández",
          texto: "Ideal para trabajo pesado y viajes largos.",
          imagenPerfil: "/images/users/fotodeperfil.jpg"
        }
      ]
    },
    {
      id: 4,
      nombre: "Honda Civic",
      precio: 22000,
      descripcion: "Año 2021 · 25.000 km · Transmisión automática · Nafta",
      imagen: "/images/products/honda-civic.jpg",
      comentarios: []
    },
    {
      id: 5,
      nombre: "BMW Serie 3",
      precio: 26000,
      descripcion: "Año 2017 · 60.000 km · Caja automática · Motor turbo",
      imagen: "/images/products/bmw-serie3.jpg",
      comentarios: [
        {
          usuario: "Marta Díaz",
          texto: "Lujo y comodidad, vale cada dólar.",
          imagenPerfil: "/images/users/fotodeperfil.jpg"
        }
      ]
    },
    {
      id: 6,
      nombre: "Jeep Wrangler",
      precio: 24000,
      descripcion: "Año 2016 · 90.000 km · Transmisión manual · 4x4",
      imagen: "/images/products/jeep-wrangler.jpg",
      comentarios: []
    },
    {
      id: 7,
      nombre: "Tesla Model 3",
      precio: 35000,
      descripcion: "Año 2022 · 15.000 km · Automático · 100% eléctrico",
      imagen: "/images/products/tesla-model3.jpg",
      comentarios: [
        {
          usuario: "Diego Torres",
          texto: "Tecnología de otro nivel, muy rápido.",
          imagenPerfil: "/images/users/fotodeperfil.jpg"
        }
      ]
    },
    {
      id: 8,
      nombre: "Volkswagen Golf",
      precio: 18000,
      descripcion: "Año 2019 · 50.000 km · Transmisión manual · Hatchback",
      imagen: "/images/products/volkswagen-golf.jpg",
      comentarios: []
    },
    {
      id: 9,
      nombre: "Audi A4",
      precio: 27000,
      descripcion: "Año 2018 · 55.000 km · Caja automática · Motor 2.0T",
      imagen: "/images/products/audi-a4.jpg",
      comentarios: [
        {
          usuario: "Ana Castillo",
          texto: "Muy elegante y cómodo para viajes largos.",
          imagenPerfil: "/images/users/fotodeperfil.jpg"
        }
      ]
    },
    {
      id: 10,
      nombre: "Mercedes-Benz Clase C",
      precio: 30000,
      descripcion: "Año 2017 · 65.000 km · Automático · Sedan de lujo",
      imagen: "/images/products/mercedes-clasec.jpg",
      comentarios: []
    },
    {
      id: 11,
      nombre: "Nissan Sentra",
      precio: 17000,
      descripcion: "Año 2020 · 40.000 km · Automático · Nafta",
      imagen: "/images/products/nissan-sentra.jpg",
      comentarios: [
        {
          usuario: "Laura Medina",
          texto: "Muy cómodo y económico en ciudad.",
          imagenPerfil: "/images/users/fotodeperfil.jpg"
        }
      ]
    },
    {
      id: 12,
      nombre: "Hyundai Tucson",
      precio: 25000,
      descripcion: "Año 2019 · 55.000 km · Automática · SUV",
      imagen: "/images/products/hyundai-tucson.jpg",
      comentarios: []
    }
  ]
};

module.exports = db;