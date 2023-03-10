import React from 'react';
import { CarouselHome } from '../../components/CarouselHome';
import { CardOne } from '../../components/CardOne';
import "../pages/HomeScreen.css";

export const HomeScreen = () => {
  return (
    <>
    <div>
     <CarouselHome/>
     <CardOne/> 
    </div>
    </>
  );
}

