import React from "react";
import { useForm } from "react-hook-form";
import './logIn.css'

const LogIn = () => {
    const { register, formState: { errors } , handleSubmit} = useForm ("");
    
    const onSubmit = (data) => {
    }

    return(
        <main className="contenedorDeContacto2">
        <form className="form2" onSubmit={handleSubmit (onSubmit)}>
            <h1 className="contactUs2">Iniciar Sesión</h1>

            <label htmlFor="email" className="letra2"> Correo Electrónico</label>
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

            <label htmlFor="contraseña" className="letra2"> Contraseña </label>
            <input type="password" name="contraseña" id="password" {...register('contraseña', {
            required: true,
            maxLength: 18
            })}/>
            
            {errors.contraseña?.type === 'required' && <p className="font-size">
            El campo "Contraseña" es obligatorio. </p>}

            {errors.contraseña?.type === 'maxLength' && <p className="font-size">
            El campo "Contraseña" debe tener menos de 18 caracteres". </p>}

            <span className="contenedor2">
            <div className="registrarme2">
            <a className="color2" href="./registrarme">Registrate</a>
            </div>
            <div className="send2">
            <input type="submit" value="Acceder"/>
            </div>
            </span>
        </form>
    </main>
    );
};

export default LogIn;