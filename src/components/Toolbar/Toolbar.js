import React from 'react'

import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Формула Бернулли</a>
          </li>
          <li>
            <a href="/">Полиномиальная формула</a>
          </li>
          <li>
            <a href="/">Интегральная теорема Муавра-Лапласа</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar