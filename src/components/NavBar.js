import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/J.png'
import ScrollIntoView from 'react-scroll-into-view'
import resume from '../../src/files/Joel_Velis.pdf'

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
                        <p style={{margin: '0', fontWeight: 'bold', color: '#ffffff'}}><img id='logoImage' src={logo} alt='logo'/></p>
                    </div>
                    <div className='nav-options'>
                        <div className='nav-list'>
                            <ScrollIntoView className='nav-items' selector='#about-me'>About</ScrollIntoView>
                            <ScrollIntoView className='nav-items' selector='#experience'>Experience</ScrollIntoView>
                            <ScrollIntoView className='nav-items' selector='#projects'>Projects</ScrollIntoView>
                            <li className='nav-items'><a href={resume} rel="noopener noreferrer" target='_blank'>Resume</a> </li>
                        </div>
                    </div>
                </div>
                <div className='mobile-nav'>
                    <div className='nav-container-mobile'>
                        <div className='nav-logo'>
                            <p style={{margin: '0', color: '#ffffff'}}><img id='logoImage' src={logo} alt='logo' /></p>
                        </div>
                        <button id='hamburger' style={{color: 'black', fontSize: '24px'}} className="icon" onClick={this.handleBarClick}>
                            <FontAwesomeIcon icon={faBars} style={{color: '#ffffff'}} />
                        </button>
                    </div>
                    <div className='nav-options'>
                        <div className='nav-list-mobile'>
                            <ScrollIntoView className='nav-items' selector='#about-me'>About</ScrollIntoView>
                            <ScrollIntoView className='nav-items' selector='#experience'>Experience</ScrollIntoView>
                            <ScrollIntoView className='nav-items' selector='#projects'>Projects</ScrollIntoView>
                            <li className='nav-items'><a href={resume} rel="noopener noreferrer" target='_blank'>Resume</a> </li>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar