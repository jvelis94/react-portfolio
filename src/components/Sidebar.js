import React from 'react'

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <div class="icon-bar mobile-bar" >
                    <a href="https://github.com/jvelis94" class="github"><i class="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/joel-velis/" class="linkedin"><i class="fa fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/jayemveeyu/" class="instagram"><i class="fa fa-instagram"></i></a>
                    <a href="https://twitter.com/VelisJoel" class="twitter"><i class="fa fa-twitter"></i></a>
                </div>
                <div class='email-sidebar'>
                    <a href="mailto:joelvelis94@gmail.com">joelvelis94@gmail.com</a>
                </div>
            </div>
        )
    }
}


export default Sidebar