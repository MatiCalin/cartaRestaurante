import React from 'react'
import { Link } from 'react-router-dom';
import "./404.css";

export const ErrorScreen = () => {
  return (
    <div className='errorScreen'>
       <section className='notFound'>
        <div className='img'>
        
        <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly"/>
        </div>
        <div className='text'>
        
        <h2 className='py-2'>Lo siento, la pagina que buscas no se ha encontrado</h2>
        
        <Link to="/">
        <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" className='w-50'/>
        </Link>
      
        
        </div>
    </section>
    </div>
  )
}
