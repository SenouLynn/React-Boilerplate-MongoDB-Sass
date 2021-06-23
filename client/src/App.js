//Tools//
import { useMediaQuery } from 'react-responsive'


//CSS
import './styles/App.css';


//<--- Component Import --->//
import Nav from './components/Nav'
import NavMobile from './components/NavMobile'
import Landing from './components/Landing'
import PageBreak from './components/PageBreak'
import About from './components/About'
import AboutMobile from './components/AboutMobile'
import Projects from './components/Projects'
import ProjectsMobile from './components/ProjectsMobile'
import Skills from './components/Skills'



function App() {

  //Conditionally Render Components Based on Screen Size//

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 800px)'
  })

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })



console.log(isDesktopOrLaptop)
  return (
    <div className="App">

      {isDesktopOrLaptop && <>
      <Nav />
      <Landing />
      <PageBreak />
      <About />
      <PageBreak />
      <Skills />
      <PageBreak />
      <Projects />
      </>
      }
      {isTabletOrMobile && <> 
      <NavMobile />
      <Landing />
      <PageBreak />
      <Skills />
      <PageBreak />
      <AboutMobile />
      <PageBreak />
      <ProjectsMobile />
      </>}

    </div>
  );
}

export default App;
