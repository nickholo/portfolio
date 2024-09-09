import { Hero, Navbar, About, Skills, Projects, Contact } from './components'
import '../style.css'

function App() {
  return (
    <main>
      <Hero/>
      <Navbar/>
      <About/>
      <Skills/>
      {/* <Projects/> */}
      {/* Make some projects to upload */}
      <Contact/>  
    </main>
    
  )
}

export default App
