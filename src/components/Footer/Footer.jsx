import SocialIcon from "./SocialIcon"

const Footer = () => {
    return (
        <div id='footer' className="flex justify-center p-10">
            <SocialIcon
                href='https://github.com/nickholo'
                src='assets/github-mark-white.svg'
                alt='Github logo'
                label='GitHub'
            />
            <SocialIcon
                href='https://www.linkedin.com/in/nick-hologroski'
                src='assets/linkedin-icon.svg'
                alt='Linkedin logo'
                label='LinkedIn'
            />
        </div>   
    )

}

export default Footer