import React, { Component } from 'react';
import './App.css';

class  Navigation extends Component {

  render () {

    const sections = ["Home", "About", "Services", "Portfolio", "contact"];
    const navBoucle = sections.map( section  =>{
      return (
        <li><a href= {"#" + section}>{section}</a></li>
      )
    })
    return (
   <nav>
   


      
      <h2 className="nav-logo">{this.props.LogoTitle}</h2>
            <ul>
            {navBoucle}

           
           
            </ul>
      
     
   </nav>


        );
  } 
}

export default Navigation;
