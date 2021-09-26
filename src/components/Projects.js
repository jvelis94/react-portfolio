import React from 'react';
import ProjectItem from './ProjectItem'


const Projects = () => {
    const projects = [
        {
            id: 1,
            name: 'Debt Collector App',
            caption: 'Tool used to split bills with friends and track payment',
            demo_link: 'https://debt-collector-nextjs.vercel.app/',
            github_frontend: 'https://github.com/jvelis94/debt-collector-nextjs',
            github_beckend: 'https://github.com/jvelis94/debt-collector-api',
            technologies: ['Rails', 'PostgreSQL', 'React (NextJs)', 'Redis', "Sidekiq"]
        },
        {
            id: 2,
            name: 'Introvert Dining',
            caption:'App allowing restaurant customers the ability to order and pay for their meal from the app',
            demo_link: 'https://introvert-dining-nextjs.vercel.app/',
            github_frontend: 'https://github.com/jvelis94/introvert-dining-nextjs',
            github_beckend: 'https://github.com/jvelis94/introvert-dining-api',
            technologies: ['Rails', 'PostgreSQL', 'ActiveRecord', 'RSpec','React (NextJs)', 'Stripe API', 'Cookies']
        },
        {
            id: 3,
            name: 'Famble (in development)',
            caption:'Social app that allows friends to post wagers with each other',
            demo_link: 'https://famble-nextjs.vercel.app/',
            github_frontend: 'https://github.com/jvelis94/famble-nextjs',
            github_beckend: 'https://github.com/jvelis94/famble-api',
            technologies: ['Rails', 'PostgreSQL', 'ActiveRecord', 'JWT Auth', 'React (NextJs)' ]
        }
    ]
  
    return (
        <div className='projects' id='projects'>
            <h3 className='titles-other'>Notable Projects </h3>
            <div className='project-list'>
                {projects.map(project => (
                    <div id='project-item' key={project.id}>
                        <ProjectItem project = {project} />
                    </div>
                ))}
            </div>
        </div>
    )
    
}

export default Projects;