import {Link} from 'react-router-dom'
import {frontendSkills, backendSkills, tools} from '../constants'

const Skills = () => {
    return (
        <section id='skills'>
            <h2>Skills</h2>
            <SkillsGrid title='Frontend' skills={frontendSkills}/>
            <SkillsGrid title='Backend' skills={backendSkills}/>
            <SkillsGrid title='Other' skills={tools}/>
        </section>
    )
}

const SkillsGrid = ({skills}) => {
    return (
        <div className='skill-container'>
            <div className='skills-row'>
                {skills.map((skill, index) => (
                    <Link to={skill.href} className='skill' key={index} target='_blank' data-skill={skill.name}>
                        <img src={skill.img} alt={skill.name}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Skills