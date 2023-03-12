import React from 'react'
import './Menu.css'

const Menu = () => {

    const Menulista = [
        {
            foto:'https://assets.unileversolutions.com/recipes-v2/209558.jpg', 
            nombre:'Canelones',
            precio:900,
        },{
            foto:'https://www.recetas-argentinas.com/base/stock/Recipe/47-image/47-image_web.jpg', 
            nombre:'Ravioles',
            precio:900,
        },{
            foto:'', 
            nombre:'Ñoquis',
            precio:900,
        },{
            foto:'', 
            nombre:'Sorrentinos',
            precio:900,
        },{
            foto:'', 
            nombre:'Parrillada',
            precio:900,
        },{
            foto:'', 
            nombre:'Pescado a la parrilla',
            precio:900,
        },{
            foto:'', 
            nombre:'Pollo grillado',
            precio:900,
        },{
            foto:'', 
            nombre:'Roll de carne y verduras',
            precio:900,
        },{
            foto:'', 
            nombre:'Matambre a la pizza',
            precio:900,
        },{
            foto:'', 
            nombre:'Matambre al verdeo',
            precio:900,
        },{
            foto:'', 
            nombre:'Empanadas de carne',
            precio:900,
        },{
            foto:'', 
            nombre:'Empanadas de pollo',
            precio:900,
        },{
            foto:'', 
            nombre:'Empanadas de verduras',
            precio:900,
        },{
            foto:'', 
            nombre:'Sfijas',
            precio:900,
        },{
            foto:'', 
            nombre:'Ensalada de Mariscos',
            precio:900,
        },{
            foto:'', 
            nombre:'Ensalada Cesar',
            precio:900,
        },{
            foto:'', 
            nombre:'Ensalada mediterranea',
            precio:900,
        },{
            foto:'', 
            nombre:'Picada caliente',
            precio:900,
        },{
            foto:'', 
            nombre:'Picada fría',
            precio:900,
        },{
            foto:'', 
            nombre:'Milanesa Rellena',
            precio:900,
        }
    ]
localStorage.setItem("hola",Menulista)
  return (
    <div class="contenedor" id="contenedor">
        {
            Menulista.map(menu => (
                <div className='card-menu'>
                    <img src={menu.foto} alt="producto1" />
                    <div class="informacion">
                        <p>{menu.nombre}</p>
                        <p class="precio">${menu.precio}</p>
                        <button>comprar</button>
                    </div>
                </div>
            ))
            
        }
    

    </div>
  )
}

export default Menu