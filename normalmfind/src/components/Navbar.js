import React, {Component} from 'react'
import logo  from '../images/logo2.svg'

import {FaAlignRight} from 'react-icons/fa'

import {Link} from 'react-router-dom'

export default class Navbar extends Component{

    state = {
        isOpen: false
    }

    handleToggle = () => {

        this.setState({isOpen:!this.state.isOpen})
    }

    render (){
        return (
            <nav classname='navbar'>
                <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src= {logo} alt="normalmfind logo" />
                    </Link>
                    <button type="button"   className="nav-btn">
                        <FaAlignRight className = "nav-icon"/>
                    </button>




                </div>
                </div>



            </nav>
        )
    }
}