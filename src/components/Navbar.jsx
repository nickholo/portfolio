import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Navbar = () => {
    
    const [activeSection, setActiveSection] = useState('')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section')
            let currentSection = ''

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 50
                const sectionBottom = sectionTop + section.offsetHeight
                if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                    currentSection = section.getAttribute('id')
                }
            })

            setActiveSection(currentSection)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    const handLinkClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className='sticky top-0 w-full bg-bglt text-text shadow-lg z-50'>
            <div className='flex justify-between items-center p-4'>
                <div className='text-xl font-bold'>Nick</div>
                <button 
                    className='block md:hidden text-white focus:outline-none' 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                    </svg>
                </button>
            </div>
            <div className={`md:flex items-center ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <div className='flex flex-col md:flex-row items-center md:ml-6'>
                    <Link 
                        to='https://github.com/nickholo' 
                        className='hidden' 
                        target='_blank'
                    >
                        <img src='/assets/github-mark-white.svg' alt='Github logo'/>
                    </Link>  
                    <Link 
                        to='https://www.linkedin.com/in/nick-hologroski' 
                        className='hidden' 
                        target='_blank'
                    >
                        <img src='/assets/linkedin-icon.svg' alt='Linkedin logo'/>
                    </Link>
                </div>
                <div className='flex flex-col text-right p-4 md:flex-row md:p-0'>
                    <a href='#hero' className='m-2' onClick={handLinkClick}>Home</a>
                    <a href='#about' className='m-2' onClick={handLinkClick}>About</a>
                    <a href='#skills' className='m-2' onClick={handLinkClick}>Skills</a>
                    <a href='#contact' className='m-2' onClick={handLinkClick}>Contact</a>
                </div>    
            </div>
            
        </nav>
    )
}

export default Navbar