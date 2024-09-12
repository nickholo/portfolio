import AboutMe from './AboutMe'
import CurrentWork from './CurrentWork'

const About = () => (
        <section id='about' className='mx-8 mt-6 pt-20'>
            <h2 className='text-4xl font-bold mb-8'>About Me</h2>
            <AboutMe/>
            <CurrentWork/>
        </section>
    ) 

export default About