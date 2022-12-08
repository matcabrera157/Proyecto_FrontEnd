import React from "react";
import '../productos/productos.css'
import Productos from "../productos/productos.js";
import './home.css'

const Home = () => {
    return (
    <div className="home">
    <Productos
    imagen='1.jpg'
    altImagen = 'Producto 1'
    titulo= 'Mouse Pad Gamer XXL RGB'     
    texto='Siente una maxima comodidad y confort con este Pad RGB'
    />
    <Productos
    imagen='2.jpg'
    altImagen = 'Producto 2'
    titulo= 'NVMe SSD M.2 Aorus RGB 512GB'     
    texto='Obten la maxima velocidad y rendimiento para tu PC'
    />
    <Productos
    imagen='3.jpg'
    altImagen = 'Producto 3'
    titulo= 'Mouse + Teclado Gamer Redragon'     
    texto='Combo para fanaticos de Redragon'
    />
    <Productos
    imagen='4.jpg'
    altImagen = 'Producto 4'
    titulo= 'Water Cooling Corsair ICUE H115i'     
    texto='Esta refrigeración liquida refrescara a tu procesador'
    />
    <Productos
    imagen='5.jpg'
    altImagen = 'Producto 5'
    titulo= 'Auriculares Gamer HyperX Cloud II'     
    texto='La mejor calidad de sonido y confort propias de HyperX'
    />
    <Productos
    imagen='6.jpg'
    altImagen = 'Producto 6'
    titulo= 'Memoria Ram TridentZ 4x8GB'     
    texto='Almacenamiento temporal + esplendidos colores RGB'
    />
    <Productos
    imagen='7.jpg'
    altImagen = 'Producto 7'
    titulo= 'Teclado Hyperx Alloy Origins 60%'     
    texto='Ahorra espacio con este teclado 60% de ancho'
    />
    <Productos
    imagen='8.jpg'
    altImagen = 'Producto 8'
    titulo= 'Mouse Gamer Rog Strix RGB'     
    texto='Vence a tus oponentes con Rog Strix'
    />
    <Productos
    imagen='9.jpg'
    altImagen = 'Producto 9'
    titulo= 'Procesador Ryzen 7 5700G'    
    texto='Procesador con graficos integrados incluidos'
    />
    <Productos
    imagen='10.jpg'
    altImagen = 'Producto 10'
    titulo= 'Cooler CPU ID-COOLING'     
    texto='ID-COOLING te garantiza calidad en todos sus coolers'
    />
    </div>
    );
  }


export default Home;