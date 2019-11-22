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
                    name: 'Instagram Clone',
                    caption: 'Instagram clone with ability to post photos and follow users',
                    demo_link: 'http://insta-ror.herokuapp.com/',
                    github: 'https://github.com/jvelis94/insta-clone-backend',
                    technologies: ['Rails', 'PostgreSQL', 'AWS S3', 'React']
                },
                {
                    id: 2,
                    name: 'Sicuranza CRM',
                    caption:'A CRM tool that provides a dashboard for admins and employees',
                    demo_link: 'http://sicuranza.herokuapp.com/',
                    github: 'https://github.com/jvelis94/sicuranza',
                    technologies: ['Rails', 'PostgreSQL', 'ActiveRecord', 'React']
                },
                {
                    id: 3,
                    name: 'Mutable Matter',
                    caption:'Blog featuring exciting developments in the tech world',
                    demo_link: 'http://mutable-matter.herokuapp.com/',
                    github: 'https://github.com/jvelis94/mutable_matter',
                    technologies: ['Rails', 'PostgreSQL', 'ActiveRecord', 'TinyMce CMS']
                },
            ]
        }
    }

    render() {        
        
        return (
            <div class='projects' id='projects'>
                <h3 class='titles-other'>Notable Projects </h3>
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