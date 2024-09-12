const About = () => (
        <section id='about' className='mx-8 mt-6 pt-20'>
            <h2 className='text-4xl font-bold mb-8'>About Me</h2>
            <AboutMe/>
            <CurrentWork/>
        </section>
    ) 


const AboutMe = () => (
    <article className="space-y-4">
        <p>
            I'm a passionate second-year student at Sheridan College pursuing a dual specialization in Software Development and Network Engineering. My journey in the tech world is driven by a love for creating innovative software solutions and designing robust network infrastructures that enable seamless connectivity and security.
        </p>
        <p>
            Throughout my studies, I've developed proficiency in a variety of programming languages, including Java, Python, and JavaScript, as well as a solid understanding of network protocols, cybersecurity principles, and systems administration. I've had the opportunity to work on diverse projects, from building responsive web applications to configuring and managing complex network systems, allowing me to apply my skills in real-world scenarios and continuously expand my technical expertise.
        </p>
        <p>
            I'm particularly interested in cloud computing, web development, artificial intelligence, and I'm always eager to learn and explore new technologies that push the boundaries of what's possible. My goal is to combine my software development skills with my network engineering knowledge to create scalable, secure, and efficient solutions that make a meaningful impact.
        </p>
        <p>
            In addition to my technical abilities, I pride myself on being a collaborative team player with strong problem-solving skills and a keen attention to detail. I thrive in dynamic environments where creativity and critical thinking are encouraged, and I enjoy taking on challenges that allow me to grow both personally and professionally.
        </p>
        <p>
            When I'm not immersed in coding or network configurations, you can find me gaming, reading, or working on my car or motorcycle, which help me maintain a balanced and inspired mindset.
        </p>
        <p>
            Feel free to explore my portfolio to see some of the projects I've worked on, and don't hesitate to reach out if you'd like to connect or collaborate!
        </p>
    </article>
)

const CurrentWork = () => (
    <article className="mt-10 space-y-4">
        <h3 className='text-3xl font-semibold mb-4'>What am I currently working on?</h3>
        <p>
            I'm currently working on a home server. I built the server using some leftover parts from my last pc build as well as new case, hard drive and motherboard.
        </p>
        <p>
            A single 8TB Seagate Ironwolf hard drive is being used as my main storage with plans to add more in the future.
        </p>
        <p>
            I'm using TrueNAS, a open-source network-attached storage (NAS) operating system because of its use of the ZFS file system and its ability to easily customize and expand functionality with a variety of free apps.
        </p>
        <p>
            I was also drawn to TrueNas because of its SCALE web UI that allows me to access my home server without the terminal, a feature which my previous Ubuntu home server did not have.
        </p>
        <p>
            I hope to use this server as a NAS for storage, provide whole home ad-blocking, and a multimedia server such as Plex.
        </p>
    </article>
)

export default About