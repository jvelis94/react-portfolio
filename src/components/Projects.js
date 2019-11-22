import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap/'
import insta from '../images/insta.png'
import ReactCardFlip from 'react-card-flip';
import ProjectItem from './ProjectItem'


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    id: 1,
                    name: 'Miramom',
                    image: insta,
                    source_code: '',
                    github: '',
                    technologies: ['Rails', 'PostgreSQL', 'AWS S3', 'React']
                },
                {
                    id: 2,
                    name: 'Miramom',
                    image: insta,
                    source_code: '',
                    github: '',
                    technologies: ['Rails', 'PostgreSQL', 'AWS S3', 'React']
                },
                {
                    id: 3,
                    name: 'Miramom',
                    image: insta,
                    source_code: '',
                    github: '',
                    technologies: ['Rails', 'PostgreSQL', 'AWS S3', 'React']
                },
            ]
        }
    }

    render() {        
        
        return (
            <div class='projects' id='projects'>
                <h3>Notable Projects</h3>
                <div class='project-list'>
                    {this.state.projects.map(project => (
                        <div id='project-item'>
                            <ProjectItem project = {project} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Projects;