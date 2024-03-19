import { useState } from "react";
import axios from "axios";

export const Registro = () => {

    // Logica de la vista
    const url = 'http://localhost:4000/api/usuario'
    //Hooks: Componente nativo de REACT que se encarga de enlazar el contenido de la vista (HTML) la logica del componente en si

    const [usuario, setUsuario] = useState();

    const [correo, setCorreo] = useState();

    const [nombre, setNombre] = useState();

    const [apellido, setApellido] = useState();

    const [pass, setPass] = useState();

    const [passConfirm, setPassConfirm] = useState();

    const usuarioHandler = (event) => {

        const { name, value } = event.target;
        setUsuario(value);

    }

    const correoHandler = (event) => {

        const { name, value } = event.target;
        setCorreo(value);

    }

    const nombreHandler = (event) => {

        const { name, value } = event.target;
        setNombre(value);

    }

    const apellidoHandler = (event) => {

        const { name, value } = event.target;
        setApellido(value);

    }

    const passHandler = (event) => {

        const { name, value } = event.target;
        setPass(value);

    }

    const passConfirmHandler = (event) => {

        const { name, value } = event.target;
        setPassConfirm(value);

    }

    const submitHandler = async () => {

        event.preventDefault();
        const data = {
            nombre_usuario: usuario,
            correo_electronico: correo,
            contrasena: pass,
            nombre: nombre,
            apellido: apellido,
            confirmacion_con: passConfirm
        }

        const result = await axios.post(url, data);
        const resultData = (await result).data;

        console.log(result);
        console.log(resultData);

    }



    // Esto es lo que renderiza el Navegador
    return (
        <>
            <div className='container mt-5' >
                <form onSubmit={submitHandler}>
                    <fieldset>
                        <legend>Registro de Usuarios</legend>

                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Usuario</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext"
                                    name="usuario"
                                    onChange={usuarioHandler}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" onChange={correoHandler} name="correo" placeholder="Ingrese su Correo" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Nombre</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" name="nombre"
                                    onChange={nombreHandler} placeholder="Ingrese su Nombre" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Apellido</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" name="apellido" onChange={apellidoHandler} placeholder="Ingrese su Apellido" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Contrasena</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" name="pass" onChange={passHandler} placeholder="Ingrese su Contrasena" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Confirmación</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext"
                                    name="passConfirm" onChange={passConfirmHandler} placeholder="Confirme su Contraseña" />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Crear Usuario</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}
