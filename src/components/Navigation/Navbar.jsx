import { useEffect, useState } from 'react'
import Logo from './Logo'
import MenuButton from './MenuButton'
import SocialLinks from './SocialLinks'
import NavLinks from './NavLinks'

const Navbar = () => {
    
    const [activeSection, setActiveSection] = useState('')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section')
            let currentSection = ''

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop - 50
                const sectionBottom = sectionTop + section.offsetHeight

                const isLastSection = index === sections.length - 1
                const nearPageBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2

                if (isLastSection && nearPageBottom) {
                    currentSection = section.getAttribute('id')
                }

                else if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
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

    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className='sticky top-0 w-full bg-bglt text-text shadow-lg z-50 md:flex md:justify-between'>
            <div className='flex justify-between items-center p-4'>
                <Logo />
                <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
            </div>
            <div className={`md:flex md:justify-between md:items-center items-center ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <SocialLinks />
                <NavLinks activeSection={activeSection} handleLinkClick={handleLinkClick} />    
            </div>
        </nav>
    )
}

export default Navbar