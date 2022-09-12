import React from 'react';
import '../styles/mystyle.css'
import Logo from '../assets/img/log.png'
class Header extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render() { 
        return ( 
            <div className='hero'>
                <div className='left-h'>
                   <img src={Logo} alt="" className='logo'/>
                </div>
               
               
            </div>
         );
    }
}
 
export  default Header;