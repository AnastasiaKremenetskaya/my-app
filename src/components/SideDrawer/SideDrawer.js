import React from 'react'

import './SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';//open is a class of side-drawer type. In css I write a 
                                          //condition of right bar appearence
    }
    return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Число успехов равно m</a>
        </li>
        <li>
          <a href="/">Число успехов больше либо равно m</a>
        </li>
        <li>
          <a href="/">Число успехов меньше m</a>
        </li>
        <li>
          <a href="/">Число успехов между m1 и m2</a>
        </li>
        <li>
          <a href="/">Влад привет!</a>
        </li>

      </ul>
    </nav>
  )
}

export default sideDrawer