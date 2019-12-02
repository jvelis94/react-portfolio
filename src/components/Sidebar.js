import React from 'react'

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <div className="icon-bar mobile-bar" >
                    <a href="https://github.com/jvelis94" rel="noopener noreferrer" target='_blank' className="github"><i className="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/joel-velis/" rel="noopener noreferrer" target='_blank' className="linkedin"><i className="fa fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/jayemveeyu/" rel="noopener noreferrer" target='_blank' className="instagram"><i className="fa fa-instagram"></i></a>
                    <a href="https://twitter.com/VelisJoel" rel="noopener noreferrer" target='_blank' className="twitter"><i className="fa fa-twitter"></i></a>
                </div>
                <div className='email-sidebar'>
                    <a href="mailto:joelvelis94@gmail.com" rel="noopener noreferrer" target='_blank'>joelvelis94@gmail.com</a>
                </div>
            </div>
        )
    }
}


export default Sidebar