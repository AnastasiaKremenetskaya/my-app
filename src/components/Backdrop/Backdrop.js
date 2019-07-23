import React from 'react';
import './Backdrop.css';
//Opening left bar
const backdrop = props => (
    <div className="backdrop" onClick={props.click}/>
)

export default backdrop;