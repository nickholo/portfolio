import { Hero, Navbar, About, Skills, Contact, Footer } from './components'

function App() {
  return (
    <main className='bg-bg text-text'>
      <Hero/>
      <Navbar/>
      <About/>
      <Skills/>
      {/* <Projects/> */}
      {/* Make some projects to upload */}
      <Contact/>
      <Footer/>  
    </main>
  )
}

export default App
