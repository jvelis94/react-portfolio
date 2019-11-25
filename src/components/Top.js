import React from 'react';

class Top extends React.Component {
    render() {
        return (
            <div className='page-top'>
                <div className='home-blurb'>
                    <p style={{color: '#64FFD9'}}>Hi, my name is</p>
                    <h1 id='my-name' style={{color: '#ffffff'}}>Joel Velis.</h1>
                    <h1 style={{ color: '#8892B0'}}>I'm a thinker, and a builder.</h1>

                    <p>I am a software developer based in New York City who loves building web applications with a broader goal in mind. </p>
                </div>
            </div>
        )
    }
}

export default Top;