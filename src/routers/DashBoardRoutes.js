import React, { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import { Navbar } from '../components/ui/Navbar';
import { DcScreen } from "../components/Dc/DcScreen";
import { Hero } from '../components/Hero/HeroScreen';
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/Search/SearchScreen";


export const DashBoardRoutes = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />

          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroid" element={<Hero />} />
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </Fragment>
  )
}
