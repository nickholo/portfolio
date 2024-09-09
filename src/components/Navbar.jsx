import { links } from "../constants"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const ExternalLink = ({link}) => (
    <Link to={link.href} className={link.class} target={link.target}>
        <img src={link.img} alt={link.alt}/>
    </Link>
)

const InternalLink = ({link, activeSection}) => (
    <a href={`#${link.href}`} className={`${link.class} ${activeSection === link.href ? "active" : ""}`}>
        {link.name}
    </a>
)


const Navbar = () => {
    
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section")
            let currentSection = ""

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 50
                const sectionBottom = sectionTop + section.offsetHeight
                if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                    currentSection = section.getAttribute("id")
                }
            })

            setActiveSection(currentSection)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    const externalLinks = links.filter((link) => link.class === 'link-btn')
    const internalLinks = links.filter((link) => link.class === 'link')

    return (
        <nav>
            <div className="ext-links">
                {externalLinks.map((link) => (<ExternalLink key={link.id} link={link}/>))}
            </div>
            <div className="int-links">
                {internalLinks.map((link) => (<InternalLink key={link.id} link={link} activeSection={activeSection}/>))}
            </div>
        </nav>
    )
}

export default Navbar