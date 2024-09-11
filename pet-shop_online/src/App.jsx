import { useState } from 'react'
import './App.css'
//IMPORTA OS COMPONENTES
import NavBar from './components/layout/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import CreateUser from './components/pages/CreateUser' 
import ListLojas from './components/pages/ListLojas' 


function App() {
  return (
    <>

      {/* ESTRUTURA DE NAVEGAÇÃO */}
        <BrowserRouter>

          <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>
                <Route path='/' element={<Home />}/>
                <Route path='/listLojas' element={<ListLojas />}/>
                <Route path='/createUser' element={<CreateUser />}/>
              </Route>

            </Routes>

          </Container>

        </BrowserRouter>

    </>
  )
}
 
export default App
