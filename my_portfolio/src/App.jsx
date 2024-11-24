import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/footer'
import Intro from './Components/Intro/Intro'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills/Skills'
import Works from './Components/Works/Works'
import './app.css'
function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App
