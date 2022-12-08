import React from 'react';
import './productos.css';

function Productos (props) {
  return(
    <div className='contenedorProductos'>
        <div className='contenedorTexto'>
      <img
      className='contenedorImagen'
      src={require(`../imagenes/${props.imagen}`)}
      alt={props.altImagen}
      />
      <h5 className='contenedorTitulo'>{props.titulo}</h5>
      <p className='contenedorParrafo'>{props.texto}</p>
      <button className='botonMasInfo'> Comprar </button>
    </div>
    </div>
  );
}

export default Productos;