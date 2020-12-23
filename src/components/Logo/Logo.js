import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';
import { NavLink } from 'react-router-dom';

const logo = (props) => (
    <div className={classes.Logo}>
       <NavLink to="/"><img src={burgerLogo} alt="MyBurger"/></NavLink> 
    </div>
);

export default logo;