import React from 'react'
import ReactCardFlip from 'react-card-flip';

class ProjectItem extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
    }
  
    handleHover = () => {
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <section class='project-info' onMouseEnter={this.handleHover}>
                <h3>{this.props.project.name}</h3>
                <ul>
                    {this.props.project.technologies.map(tech => (
                        <div>
                            <li style={{borderBottom: '0.5px solid #8892B0', padding: '12px'}}>{tech}</li>
                        </div>
                    ))}
                </ul>
            </section>
            <section class='project-info' onMouseLeave={this.handleHover}>
                <h3>Flexible Jobs for Parenting Professionals</h3>
                <ul style={{display: 'flex', justifyContent: 'space-between'}}>
                    <li><button><a class='links' href={this.props.project.source_code}>Demo</a></button></li>
                    <li><button><a class='links' href={this.props.project.github}>GitHub</a></button></li>
                </ul>
            </section>
        </ReactCardFlip>
      )
    }
  }

  export default ProjectItem