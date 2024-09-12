const Hero = () => {
    return (
        <div id='hero' className='mx-auto min-h-screen text-center flex flex-col justify-center items-center space-y-6'>
            <h1 className='text-4xl font-light leading-tight xl:text-6xl'>
                Hi, I'm Nick. 
                <br/>
                I'm an aspiring web/software developer
            </h1>
            <a href='#about' className='text-3xl font-bold'>Go!</a>
        </div>
    )
}

export default Hero