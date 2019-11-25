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
            <section className='project-info' onMouseEnter={this.handleHover}>
                <h3>{this.props.project.name}</h3>
                <ul>
                    {this.props.project.technologies.map(tech => (
                        <div key={tech}>
                            <li style={{borderBottom: '0.5px solid #8892B0', padding: '12px'}}>{tech}</li>
                        </div>
                    ))}
                </ul>
            </section>
            <section className='project-info' onMouseLeave={this.handleHover}>
                <h3>{this.props.project.caption}</h3>
                <ul style={{display: 'flex', justifyContent: 'space-between'}}>
                    <li><button className='project-buttons'><a className='links' href={this.props.project.demo_link}>Demo</a></button></li>
                    <li><button className='project-buttons'><a className='links' href={this.props.project.github}>GitHub</a></button></li>
                </ul>
            </section>
        </ReactCardFlip>
      )
    }
  }

  export default ProjectItem