import {Link} from 'react-router-dom'
import {MySkills} from '../constants'

const Skills = () => {
    return (
        <section id='skills' className='mx-6 mt-4 pb-10 pt-20 h-fit'>
            <h2 className='text-4xl pt-4 font-bold'>Skills</h2>
            <div className='grid grid-cols-2 gap-4 w-full'>
                {MySkills.map((skill, index) => (
                    <Link 
                        to={skill.href} 
                        className='w-full h-full flex justify-center items-center my-8 border-4 rounded-3xl border-indigo-300 bg-bglt' 
                        key={index} 
                        target='_blank' 
                        data-skill={skill.name}
                    >
                        <img 
                            src={skill.img} 
                            alt={skill.name} 
                            className='w-3/4 h-auto object-contain'
                        />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Skills