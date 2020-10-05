import React from 'react'
import { NavLink } from "react-router-dom";

import leftarrow from '../../icons/leftarrow.png'

import '../../css/backbutton.scss'


const Back = ()=> {

    return (
        <>
        <NavLink to='/projects'>
        <img src={leftarrow} alt="back button" />
          </NavLink>
          
        </>
    )
}
export default Back