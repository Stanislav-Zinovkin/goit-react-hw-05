import React, { Suspense, lazy } from "react";
const HomePage =lazy(() => import( "../../pages/HomePage/HomePage"));
const MovieDetailsPage =lazy(() => import( "../../pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage =lazy(() =>  import ("../../pages/NotFoundPage/NotFoundPage"));
const MoviesPage =lazy(() => import( "../../pages/MoviesPage/MoviesPage"));
import Header from "../Header/Header";
const MovieCast  =lazy(() =>import( "../MovieCast/MovieCast"));
const MovieReviews  =lazy(() => import( "../MovieReviews/MovieReviews"));
import {  Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../Loader/Loader";
const App = () => {

  return (
    <div>
      
      <ToastContainer />
      <Header />
<Suspense fallback={<Loader/>}>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
  
  <Route path="/movies/:id" element={<MovieDetailsPage />}>
    <Route path="cast" element={<MovieCast />} />
    <Route path="reviews" element={<MovieReviews />} /> 
  </Route>

         <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
</Suspense>
    </div>
  )
}

export default App;