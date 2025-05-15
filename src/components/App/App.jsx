import React from "react";
import HomePage from "../../pages/HomePage/HomePage";
{/*import MovieDetailsPage from "../../pages/MovieDetailsPage";}
{/*import NotFoundPage from "../../pages/NotFoundPage"*/}
import MoviesPage from "../../pages/MoviesPage/MoviesPage"
import Header from "../Header/Header";
import {  Routes, Route } from "react-router-dom";


const App = () => {

  return (
    <div>
   
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/movies" element={<MoviesPage/>}/>
        {/*<Route path="/movie/:id" element={<MovieDetailsPage/>}/>
        <Route path="*" element={<NotFoundPage/>}*/}
      </Routes>
    
    </div>
  )
}

export default App;