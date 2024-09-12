import {Link} from 'react-router-dom'

const SkillCard = ({skill}) => (
    <Link
        to={skill.href}
        className='w-full h-full flex justify-center items-center my-8 border-4 rounded-3xl border-indigo-300 bg-bglt'
        target='_blank'
        data_skill={skill.name}
    >
        <img
            src={skill.img}
            alt={skill.name}
            className='w-3/4 h-auto object-contain'
        />
    </Link>
)

export default SkillCard