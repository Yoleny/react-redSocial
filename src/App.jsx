import React from 'react'
import { Registro } from './components/Registro';
import { Muro } from './components/Muro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InicioSesion } from './components/InicioSesion';
import { CrearPost } from './components/CrearPost';
import { CrearComentario } from './components/CrearComentario';
import { EditarPost } from './components/EditarPost';
import { EditarComentario } from './components/EditarComentario';
import { UsuarioCrud } from './components/CrudUsuario/UsuarioCrud';
import { EditUsuario } from './components/CrudUsuario/EditUsuario';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<InicioSesion/>} />
        <Route path='/registro' element = {<Registro/>} />
        <Route path='/muro' element = {<Muro/>} />
        <Route path='/crearPost/' element = {<CrearPost/>} />
        <Route path='/crearComentario/' element = {<CrearComentario/>} />
        <Route path='/editarPost/:idPost' element = {<EditarPost/>} />
        <Route path='/editarComentario/:idComentario' element = {<EditarComentario/>} />
        <Route path='/crudUsuario' element = {<UsuarioCrud/>} />
        <Route path='/editarCrudUsuario/:nombre_usuario' element = {<EditUsuario/>} />
      </Routes>
    </BrowserRouter>

    //<Registro />
  )
}

export default App; 
