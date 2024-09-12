import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div id='footer' className="flex justify-center p-10">
            <Link 
                to='https://github.com/nickholo' 
                className='w-10 h-10 mx-4' 
                target='_blank'
                aria-label='GitHub'
            >
                <img 
                    src='/assets/github-mark-white.svg' 
                    alt='Github logo' 
                    className="w-10 h-10"
                />
            </Link>  
            <Link 
                to='https://www.linkedin.com/in/nick-hologroski' 
                className='w-10 h-10 mx-4' 
                target='_blank'
                aria-label="LinkedIn"
            >
                <img 
                    src='/assets/linkedin-icon.svg' 
                    alt='Linkedin logo' 
                    className="w-10 h-10"
                />
            </Link>
        </div>   
    )

}

export default Footer