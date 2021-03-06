import React from 'react';
import ExperienceInfo from './ExperienceInfo'
import { Tabs, Tab, Row, Col, Nav } from 'react-bootstrap/'

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [
                {
                    id: 1,
                    company: 'Miramom',
                    title: 'Frontend Developer',
                    start_date: 'October 2019',
                    end_date: 'Present',
                    description: [
                        'Collaborate with Founder, CTO and Senior Developer to build a web app offering flexible jobs for parenting professionals',
                        'Collaborate with CTO and Senior Developer to implement new feature developments',
                        'Build page components using React',

                    ]
                },
                {   
                    id: 2,
                    company: 'Freelance',
                    title: 'Web Developer',
                    start_date: 'July 2019',
                    end_date: 'Present',
                    description: [
                        'Built and maintaining CRM app for constrution company using Ruby on Rails',
                        'Built company website for fencing company using React'
                    ]
                },
                {
                    id: 3,
                    company: 'BlackRock',
                    title: 'Senior Financial Analyst',
                    start_date: 'August 2016',
                    end_date: 'April 2019',
                    description: [
                        "Contributed to the development and oversight of the firm's global product strategy across all asset classes, which included reviewing the most strategic franchises for sales and performance weaknesses, product gaps and opportunities",
                        "Identified market trends, analyzed the investment and commercial performance of products, and conducted indepth competitor analysis to ensure that the firm continues to meet the needs of our clients in all market environments",
                        "Built monthly and quarterly asset flows deck displaying how BlackRock’s product suite stack up versus competitors; formed key takeaways using the data and then presented to the head of the group",
                        "Improved several product economic and performance models, streamlining the process by building robust frameworks"
                    ]
                }
            ],
            selectedJob: 
                {
                    id: 1,
                    company: 'Miramom',
                    title: 'Frontend Developer',
                    start_date: 'October 2019',
                    end_date: 'Present',
                    description: [
                        'Build components using React',
                        'Collaborating with founder and two developers to build a web app offering flexible jobs for parenting professionals'
                    ]
                }
        }
    }

    handleJobClick = (selectedId) => {
        let selectedJob = this.state.jobs.filter(job => job.id === selectedId)
        this.setState({
            selectedJob: selectedJob[0]
        })
    }

    render() {        
        
        return (
            <div className='experience' id='experience'>
                <h3 className='titles-other'>Some Work History</h3>
                <div id='work-history-desktop'>
                    <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
                        <Row>
                            <Col sm={2}>
                                <Nav className="flex-column">
                                    {this.state.jobs.map(job => (
                                        <Nav.Item key={job.id} >
                                            <Nav.Link eventKey={job.id}>{job.company}</Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                            </Col>
                            <Col sm={10}>
                                <Tab.Content>
                                    {this.state.jobs.map(job => (
                                        <Tab.Pane key={job.id} eventKey={job.id}>
                                            <ExperienceInfo job = {job} />
                                        </Tab.Pane>
                                    ))}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>                    
                </div>
                <div id='work-history-mobile'>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        {this.state.jobs.map(job => (
                            <Tab key={job.id} eventKey={job.id} title={job.company}>
                                <ExperienceInfo job = {job} />
                            </Tab>
                        ))}
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Experience;