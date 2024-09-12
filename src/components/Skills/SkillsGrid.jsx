import SkillCard from './SkillCard';
import {MySkills} from '../utils/constants'

const SkillsGrid = () => (
    <div className='grid grid-cols-2 gap-4 w-full md:grid-cols-4 xl:grid-cols-8'>
        {MySkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
        ))}
    </div>
)

export default SkillsGrid