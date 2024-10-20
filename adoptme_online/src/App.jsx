import { useState } from 'react'
import './App.css'
//IMPORTA OS COMPONENTES
import NavBar from './components/layout/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import CadastrarAnimal from './components/pages/CreateAnimal' 
import ListarAnimais from './components/pages/ListAnimals' 
// import CadastrarUsuario from './components/pages/CreateUser' 
// import LoginUser from './components/pages/LoginUser'
import Container from './components/layout/Conteiner'


function App() {
  return (
    <>

      {/* ESTRUTURA DE NAVEGAÇÃO */}
        <BrowserRouter>

          <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>
                <Route path='/' element={<Home />}/>
                <Route path='/listAnimals' element={<ListarAnimais />}/>
                <Route path='/createAnimal' element={<CadastrarAnimal />}/>
                {/* <Route path='/logIn' element={<LoginUser/>}/>
                <Route path='/singUp' element={<CadastrarUsuario />}/> */}
              </Route>

            </Routes>

          </Container>

        </BrowserRouter>

    </>
  )
}
 
export default App
