import {Link} from 'react-router-dom'

const SocialLinks = () => (
    <div className='flex flex-col md:flex-row items-center md:ml-6'>
        <Link
            to='https://github.com/nickholo'
            className='hidden'
            target='_blank'
        >
            <img src='assets/github-mark-white.svg' alt='Github logo'/>
        </Link>
        <Link
            to='https://www.linkedin.com/in/nick-hologroski'
            className='hidden'
            target='_blank'
        >
            <img src='assets/linkedin-icon.svg' alt='Linkedin logo'/>
        </Link>
    </div>
)

export default SocialLinks