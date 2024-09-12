import {Link} from 'react-router-dom'

const SocialIcon = ({href, src, alt, label}) => {
    return (
        <Link 
            to={href}
            className='w-10 h-10 mx-4'
            target='_blank'
            aria-label={label}
        >
            <img src={src} alt={alt}></img>
        </Link>
    )
}

export default SocialIcon