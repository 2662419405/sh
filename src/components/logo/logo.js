import React, { Component, div } from 'react';
import logoImg from "./sh.png";
import './index.css';

class Logo extends Component{

    render(){
        return(
            <div className='logo-container'>
                <img src={logoImg} alt='简招' />
                <h2>简招</h2>
            </div>
        )
    }

}

export default Logo;