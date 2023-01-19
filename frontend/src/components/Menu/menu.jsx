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

      <div className="main-menu">
        <MenuItems img={burguer2} nameItem='BurguerTeste' descriptionItem="Description Burguer Teste" />
        <MenuItems img={burguer1} nameItem='BurguerTeste' descriptionItem="Description Burguer Teste" />
        <MenuItems img={combo1} nameItem='ComboTeste' descriptionItem="Description Combo Teste" />
        <MenuItems img={combo2} nameItem='BurguerTeste' descriptionItem="Description Combo Teste" />
        <MenuItems img={milkshake} nameItem='MilkShakeTeste' descriptionItem="Description Milk Teste" />
        <MenuItems img={pizza1} nameItem='PizzaTeste' descriptionItem="Description Pizza Teste" />
        <MenuItems img={pizza2} nameItem='PizzaTeste' descriptionItem="Description Pizza Teste" />
        <MenuItems img={pizza3} nameItem='PizzaTeste' descriptionItem="Description Pizza Teste" />
        <MenuItems img={potato} nameItem='PotatoTeste' descriptionItem="Description Potato Teste" />
        <MenuItems img={soda} nameItem='SodaTeste' descriptionItem="Description Soda Teste" />
        <MenuItems img={acai} nameItem='AcaiTeste' descriptionItem="Description Acai Teste" />
        <MenuItems img={cake} nameItem='CakeTeste' descriptionItem="Description Cake Teste" />

        {/* <img className='chef-img' src={chef} alt='chef' /> */}
      </div>
    </div>
  )
}

export default menu