import React from 'react';
import portrait from '../images/portrait.jpeg'

class AboutMe extends React.Component {
    render() {
        return (
            <div class='about-me' id='about-me'>
                <section id='about-text'>
                    <h3 class='titles'>About Me</h3>
                        
                    
                    <p>I am a software developer based in New York City who loves building web applications with a broader goal in mind. I aim to build websites that put the user experience above all, regardless of the device they use to access it</p>
                    <p>I started my career in Finance working in product strategy for the largest investment manager in the world. After three years in the industry, I fell in love with coding</p>
                    <p>Below are a list of technologies I feel comfortable working with. I am also ready and willing to learn anything new!</p>

                    <div id='tech-list'>
                        <ul style={{marginRight: '56px'}}>
                            <li>Ruby</li>
                            <li>Rails</li>
                            <li>Active record</li>
                        </ul>
                        <ul>
                            <li>HTML & CSS</li>
                            <li>React</li>
                            <li>Python (for data analysis)</li>
                        </ul>
                    </div>
                </section>
                <section id='about-img'>
                    <img src={portrait} />
                </section>
            </div>
        )
    }
}

export default AboutMe;