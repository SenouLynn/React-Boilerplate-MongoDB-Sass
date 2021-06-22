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
import PageBreak2 from './components/PageBreak2'
import Projects from './components/Projects'



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
      <PageBreak2 />
      <Projects />
      </>
      }
      {isTabletOrMobile && <> 
      <NavMobile />
      <Landing />
      <PageBreak />
      <AboutMobile />
      <PageBreak2 />
      <Projects />
      </>}

    </div>
  );
}

export default App;
