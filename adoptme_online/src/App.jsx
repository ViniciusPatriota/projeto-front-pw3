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
import Container from './components/layout/Container'
import DetailAnimal from './components/pages/DetailPet'
import DeleteAnimal from './components/pages/DeleteAnimal'
import UpdateAnimal from './components/pages/UpdateAnimal'


function App() {
  return (
    <>

      {/* ESTRUTURA DE NAVEGAÇÃO */}
        <BrowserRouter>

          <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>
                <Route path='/' element={<Home />}/>
                <Route path='/listAnimal' element={<ListarAnimais />}/>
                <Route path='/createAnimal' element={<CadastrarAnimal />}/>
                <Route path='/detailPet/:id_animal' element={<DetailAnimal />}/>
                {/* <Route path='/logIn' element={<LoginUser/>}/>
                <Route path='/singUp' element={<CadastrarUsuario />}/> */}
                <Route path='/deleteAnimal/:id_animal' element={<DeleteAnimal />} />
                <Route path='/updateAnimal/:id_animal' element={<UpdateAnimal />} />
              </Route>

            </Routes>

          </Container>

        </BrowserRouter>

    </>
  )
}
 
export default App
