import React from "react";
import { useForm } from "react-hook-form";
import './registrarme.css'

const Registrarme = () => {
    const { register, formState: { errors } , handleSubmit} = useForm ("");
    
    const onSubmit = (data) => {
    }

    return(
        <main className="contenedorDeContacto3">
        <form className="form3" onSubmit={handleSubmit (onSubmit)}>
            <h1 className="contactUs3"> Registrate </h1>

            <label htmlFor="email" className="letra3"> Correo Electrónico</label>
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

            <label htmlFor="contraseña" className="letra2"> Repita su contraseña </label>
            <input type="password" name="contraseña" id="password2" {...register('contraseña', {
            required: true,
            maxLength: 18
            })}/>
            
            {errors.contraseña?.type === 'required' && <p className="font-size">
            El campo "Contraseña" es obligatorio. </p>}

            {errors.contraseña?.type === 'maxLength' && <p className="font-size">
            El campo "Contraseña" debe tener menos de 18 caracteres". </p>}

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

            <span className="contenedor3">
            <div className="send3">
            <input type="submit" value="Registrarme"/>
            </div>
            </span>
        </form>
    </main>
    )
}

export default Registrarme;