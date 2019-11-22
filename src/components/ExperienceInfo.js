import React from 'react';
import logo from '../images/J.png'

class ExperienceInfo extends React.Component {
    render(props) {
        return (
            <section id='job-info'>
                <div>
                    <h6 style={{fontWeight: 'bold'}}>{this.props.job.title}</h6>
                    <p>{this.props.job.start_date} - {this.props.job.end_date}</p>
                    <ul style={{marginRight: '56px'}}>
                        {this.props.job.description.map(each => (
                            <li>{each}</li>
                        ))}
                    </ul>
                </div>
            </section>
        )
    }
}

export default ExperienceInfo;