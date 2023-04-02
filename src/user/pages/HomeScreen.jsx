import React from 'react';
import { CarouselHome } from '../../components/CarouselHome';
import { CardOne } from '../../components/CardOne';
import { CardThree } from '../../components/CardThree';
import "../pages/HomeScreen.css";

export const HomeScreen = () => {
  return (
    <>
    <div className='Principal-container'>
     <CarouselHome/>
     <CardThree/>
     <CardOne/>  
    </div>
    </>
  );
}

