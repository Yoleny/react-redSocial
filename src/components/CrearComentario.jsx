import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CrearComentario = () => {

    const navigate =  useNavigate();

    const [form, setForm] = useState({

        nombre_usuario : "", 
        imagen : "", 
        comen : ""
        
    });



    const onChangeHandler = () => {

        const { name, value } = event.target;
        if (name ==="imagen") {

           const img = event.target.files[0];
           setForm({ ...form, [name]: img });
           return;
           
        }
        setForm({ ...form, [name]: value });

    }

    const submitHandler = async () => {

        const url = "http://localhost:4000/api/publicacion";

        event.preventDefault();

        const datosFormulario = new FormData();
        
        datosFormulario.append( "nombre_usuario" , form.nombre_usuario);
        datosFormulario.append( "comen" , form.comen);
        datosFormulario.append( "imagen" , form.imagen);

        const result  = await axios.post(url, datosFormulario);
        const resultData = (await result).data;

        navigate('/muro')
    }

    return (
        <>
        <div className='container mt-5' >
            <form onSubmit={submitHandler} >
                <fieldset>
                    <legend>Crear comentario</legend>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Usuario</label>
                        <div className="col-sm-10">
                            <input className="form-control-plaintext"
                                name="nombre_usuario"
                                onChange={onChangeHandler} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Comen</label>
                        <div className="col-sm-10">
                            <input className="form-control-plaintext"
                                name="comen"
                                onChange={onChangeHandler} />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label mt-4">Imagen</label>
                        <input className="form-control " type="file" name="imagen" onChange={onChangeHandler} />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Crear comentario</button>
                </fieldset>
            </form>

        </div>
    </>  
        
    )
}


