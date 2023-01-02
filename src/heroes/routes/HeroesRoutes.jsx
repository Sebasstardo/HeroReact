import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../navBar/components/NavBar'
import DcPage from '../pages/DcPage'
import HeroPage from '../pages/HeroPage'
import MarvelPage from '../pages/MarvelPage'
import SearchPage from '../pages/SearchPage'

const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DcPage />} />
                    <Route path='search' element={<SearchPage />} />
                    {/* con este tipo de ruta se hace dinamica la vista 
                        con el ID seleccionado en la ruta de HeroCard
                    */}                    
                    <Route path='hero/:id' element={<HeroPage />} />
                    <Route path='/' element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    )
}

export default HeroesRoutes