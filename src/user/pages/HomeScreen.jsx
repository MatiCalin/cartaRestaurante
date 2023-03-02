import React from 'react';
import { CarouselHome } from '../../components/CarouselHome';
import { CardOne } from '../../components/CardOne';
import { AllFoods } from '../../components/AllFoods';
import "../pages/HomeScreen.css";

export const HomeScreen = () => {
  return (
    <>
    <div>
     <CarouselHome/>
     <AllFoods/> 
     <CardOne/> 
    </div>
    </>
  );
}

