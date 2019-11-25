import React from 'react'

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <div className="icon-bar mobile-bar" >
                    <a href="https://github.com/jvelis94" className="github"><i className="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/joel-velis/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/jayemveeyu/" className="instagram"><i className="fa fa-instagram"></i></a>
                    <a href="https://twitter.com/VelisJoel" className="twitter"><i className="fa fa-twitter"></i></a>
                </div>
                <div className='email-sidebar'>
                    <a href="mailto:joelvelis94@gmail.com">joelvelis94@gmail.com</a>
                </div>
            </div>
        )
    }
}


export default Sidebar