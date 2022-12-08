import React from "react";
import "./aboutUs.css";
import Image from './primerImagen.jpg'
import {useState} from "react";

const AboutUs = () => {

    const [nombre, setNombre] = useState ('Presiona el Boton');

    const cambiarNombre = () => {
        setNombre ('MercadoGamer te saluda cordialmente, ten un gran dia =)')
    }

    return (
        <div className="contenedorAboutUs">
        <div className="contenido">
        <h1> MercadoGamer </h1>
        <p className="texto1"> 
        Nuestra compañia se inicio en septiembre de 2017, siendo impulsada por el aumento de consumo de nuestra mercancia en todo el pais.
        </p>
        <p className="texto2"> Somos una empresa dedicada a la comercialización de productos electrónicos incluyendo perifericos y componentes de computadora.
        Por tal motivo, nuestros objetivos se encuentran ligados a brindar articulos con el mejor precio-calidad del mercado.
        </p>
        <div className="contenedorImagen">
        <h3 className="titulo"> Nuestro Stand</h3>
        <h6 >Florida 537 Local 315 (CABA)</h6>
        <img className="negocio" src={Image} alt="imagen" width="30%"></img>
        
        </div>

        <span>
        <p className="instruccion"> {nombre} </p>
        <button className="botonSorpresa" onClick={ cambiarNombre }> Boton Sorpresa </button>
        </span>
        </div>     
        </div>
    )
}

export default AboutUs;