import React from 'react';
import { CarouselHome } from '../../components/CarouselHome';
import { CardOne } from '../../components/CardOne';
import { CardTwo } from '../../components/CardTwo';
import "../pages/HomeScreen.css";

export const HomeScreen = () => {
  return (
    <>
    <div className='Principal-container'>
     <CarouselHome/>
     <CardTwo/>
     <CardOne/> 
    </div>
    </>
  );
}

