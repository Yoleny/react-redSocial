import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const baseUrl = import.meta.env.MY_APP_URL;

export const FormularioUsuarios = ( {setContador, contador} ) => {

  const [dataForm, setDataForm] = useState({
    nombre_usuario : "", 
    correo_electronico : "", 
    contrasena : "", 
    nombre : "", 
    apellido : "", 
    activo : true, 
    id_rol : 1
   });

   const handlerChange = (event)=>{

    const {name, value} = event.target;
    setDataForm({ ...dataForm, [name]: value });

   }

   const handlerSubmit = async()=>{

    event.preventDefault();

    const url = baseUrl + '/usuarioCrud';

    const result = await axios.post(url, dataForm);

    const resultData = (await  result).data;
    console.log(resultData);
    setContador(contador + 1);

   }

  return (
    <>
        <div className='container mt-5' >
            <form onSubmit = {handlerSubmit} >
                <fieldset>
                    <legend>Administración de Usuarios</legend>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Usuario</label>
                        <div className="col-sm-10">
                            <input type='text' className="form-control-plaintext"
                                name="nombre_usuario"
                                onChange={handlerChange} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Correo</label>
                        <div className="col-sm-10">
                            <input type='email' className="form-control-plaintext"
                                name="correo_electronico"
                                onChange={handlerChange}
                                />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">contrasena</label>
                        <div className="col-sm-10">
                            <input type='password' className="form-control-plaintext"
                                name="contrasena"
                                onChange={handlerChange}
                                />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Nombre</label>
                        <div className="col-sm-10">
                            <input type='text' className="form-control-plaintext"
                                name="nombre" onChange={handlerChange}
                                />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Apellido</label>
                        <div className="col-sm-10">
                            <input type='text' className="form-control-plaintext"
                                name="apellido" onChange={handlerChange}
                                />
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Activo</label>
                        <div className="col-sm-10">
                            <select className="form-select"
                                name="activo" onChange={handlerChange}
                                >
                                    
                                <option value={true}  >Si</option>
                                <option value={false}>No</option>
                                
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Activo</label>
                        <div className="col-sm-10">
                            <select className="form-select"
                                name="id_rol" onChange={handlerChange}
                                >
                                    
                                <option value={1}  >Admin</option>
                                <option value={2}>Cliente</option>
                                
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Crear Usuario</button>
                </fieldset>
            </form>
        </div>

    </>
  )
}
