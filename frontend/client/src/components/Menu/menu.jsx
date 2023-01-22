import React from 'react'
// import chef from './pictures/chef-picture.png'

import burguer1 from './pictures/burguer.png'
import burguer2 from './pictures/burguer2.png'
import combo1 from './pictures/combo.png'
import combo2 from './pictures/combo2.png'
import milkshake from './pictures/milkshake.png'
import pizza1 from './pictures/pizza1.png'
import pizza2 from './pictures/pizza2.png'
import pizza3 from './pictures/pizza3.png'
import potato from './pictures/potato.png'
import soda from './pictures/soda.png'
import acai from './pictures/acai.png'
import cake from './pictures/cake.png'

import './menu.css'
import MenuItems from '../Menu-Items/menuItems'

function menu() {
  return (
    <div className='menu-container'>
      <div className="title">
        <h1>Menu</h1>
      </div>

      {/* <div className="chef-container">
        <img className='chef-img' src={chef} alt='chef' />
      </div> */}

      <div className="main-menu-1">
        <MenuItems img={combo2} nameItem='BurguerTeste' descriptionItem="Description Combo Teste" price="R$ 9,99" />
        <MenuItems img={burguer1} nameItem='BurguerTeste' descriptionItem="Description Burguer Teste" price="R$ 9,99" />
        <MenuItems img={combo1} nameItem='ComboTeste' descriptionItem="Description Combo Teste" price="R$ 9,99" />

      </div>

      <div className="main-menu-2">
        <MenuItems img={burguer2} nameItem='BurguerTeste' descriptionItem="Description Burguer Teste" price="R$ 9,99" />
        <MenuItems img={milkshake} nameItem='MilkShakeTeste' descriptionItem="Description Milk Teste" price="R$ 9,99" />
        <MenuItems img={potato} nameItem='PotatoTeste' descriptionItem="Description Potato Teste" price="R$ 9,99" />
      </div>

      <div className="main-menu-1">
        <MenuItems img={pizza1} nameItem='PizzaTeste' descriptionItem="Description Pizza Teste" price="R$ 9,99" />
        <MenuItems img={pizza2} nameItem='PizzaTeste' descriptionItem="Description Pizza Teste" price="R$ 9,99" />
        <MenuItems img={pizza3} nameItem='PizzaTeste' descriptionItem="Description Pizza Teste" price="R$ 9,99" />
      </div>

      <div className="main-menu-2">
        <MenuItems img={soda} nameItem='SodaTeste' descriptionItem="Description Soda Teste" price="R$ 9,99" />
        <MenuItems img={acai} nameItem='AcaiTeste' descriptionItem="Description Acai Teste" price="R$ 9,99" />
        <MenuItems img={cake} nameItem='CakeTeste' descriptionItem="Description Cake Teste" price="R$ 9,99" />
      </div>

    </div>
  )
}

export default menu