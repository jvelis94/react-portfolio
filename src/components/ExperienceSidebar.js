import React from 'react';
import logo from '../images/J.png'

class ExperienceSidebar extends React.Component {
    render() {
        return (
            <section id='sidebar'>
                {this.props.jobs.map(job => (
                    <h3 onClick={() => this.props.handleJobClick(job.id)}>{job.company}</h3>
                ))}
            </section>
        )
    }
}

export default ExperienceSidebar;