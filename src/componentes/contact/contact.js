import React from "react";
import { useForm } from "react-hook-form";
import "./contact.css";

const Contact = () => {
    const { register, formState: { errors } , handleSubmit} = useForm ("");
    
    const onSubmit = (data) => {
    }

    return(
        <main className="contenedorDeContacto">
        <form className="form" onSubmit={handleSubmit (onSubmit)}>
            <h1 className="contactUs">Contactanos</h1>
            <label htmlFor="name" className="letra"> Nombre </label>
            <input type="text" name="nombre" id="name" {...register('nombre', {
            required: true,
            maxLength: 18
            })}/>
            {errors.nombre?.type === 'required' && <p className="font-size">
            El campo "Nombre" es obligatorio. </p>} 
            {errors.nombre?.type === 'maxLength' && <p className="font-size">
            El campo "Nombre debe tener menos de 18 caracteres". </p>}

            <label htmlFor="lastName" className="letra"> Apellido </label>
            <input type="text" name="apellido" id="lastName" 
            {...register('apellido', {
                required:true,
                maxLength: 18
            })}/>
            {errors.apellido?.type === 'required' && <p className="font-size">
            El campo "Apellido" es obligatorio. </p>} 
            {errors.apellido?.type === 'maxLength' && <p className="font-size">
            El campo "Apellido" debe tener menos de 18 caracteres </p>}

            <label htmlFor="age" className="letra" > Edad </label>
            <input type="number" name="edad" id="age" min={13}
            {...register('edad', {
                required:true,
                maxLength: 3
            })}/>
            {errors.edad?.type === 'required' && <p className="font-size">
            El campo "Edad" es obligatorio. </p>} 
            {errors.edad?.type === 'maxLength' && <p className="font-size">
            El campo "Edad" debe tener menos de 3 caracteres.</p>}

            <label htmlFor="email" className="letra"> Correo Electrónico</label>
            <input type="email" name="correo" id="email"
            {...register('email', {
                required:true,
                maxLength: 320,
                pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
            })}/>
            {errors.email?.type === 'required' && <p className="font-size">
            El campo "Correo Electrónico" es obligatorio. </p>} 

            {errors.email?.type === 'pattern' && <p className="font-size">
            Verifique que contenga ".com" </p>}

            <label htmlFor="mensaje" className="letra"> Mensaje </label>
            <textarea className="textTarea" name="mensaje" id="Mensaje" cols="10" rows="5"
            {...register('mensaje', {
            required: true,
            maxLength: 500
            })}/>
            
            {errors.mensaje?.type === 'required' && <p className="font-size">
            El campo "Mensaje" es obligatorio. </p>} 
            {errors.mensaje?.type === 'maxLength' && <p className="font-size">
            El campo "Mensaje" debe tener menos de 500 caracteres. </p>}

            <span className="contenedor">
            <div className="clear">
            <input type="reset" value="Limpiar"/>
            </div>
            <div className="send">
            <input type="submit" value="Enviar"/>
            </div>
            </span>
        </form>
    </main>
    );
};

export default Contact;