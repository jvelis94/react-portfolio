import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/J.png'

class Navbar extends React.Component {

    handleBarClick = () => {
        var x = document.querySelector(".nav-list-mobile");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
    };

    render() {
        return (
            <div className='nav-bar-size'>
                <div className='nav-container'>
                    <div className='nav-logo'>
                        <p style={{margin: '0', fontWeight: 'bold', color: '#ffffff'}}><img id='logoImage' src={logo} /></p>
                    </div>
                    <div className='nav-options'>
                        <ul className='nav-list'>
                            <li><a href='/#about-me' >About</a> </li>
                            <li><a href='/#experience'>Experience</a> </li>
                            <li><a href='/#projects'>Portfolio</a> </li>
                            <li><a href='/resume'>Resume</a> </li>
                        </ul>
                    </div>
                </div>
                <div className='mobile-nav'>
                    <div className='nav-container-mobile'>
                        <div className='nav-logo'>
                            <p style={{margin: '0', color: '#ffffff'}}><img id='logoImage' src={logo} /></p>
                        </div>
                        <a href="javascript:void(0);" style={{color: 'black', fontSize: '24px'}} className="icon" onClick={this.handleBarClick}>
                            <FontAwesomeIcon icon={faBars} style={{color: '#ffffff'}} />
                        </a>
                    </div>
                    <div className='nav-options'>
                        <ul className='nav-list-mobile'>
                            <li><a href='/#about-me' >About</a> </li>
                            <li><a href='/#experience'>Experience</a> </li>
                            <li><a href='/#projects'>Portfolio</a> </li>
                            <li><a href='/resume'>Resume</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar