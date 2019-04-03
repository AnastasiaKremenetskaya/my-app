import React from 'react'

import './SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
    <nav className={drawerClasses}>
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
    </nav>
  )
}

export default sideDrawer