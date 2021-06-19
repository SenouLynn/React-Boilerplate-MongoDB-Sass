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



function App() {

  //Conditionally Render Components Based on Screen Size//

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 600px)'
  })

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })





  return (
    <div className="App">

      {isDesktopOrLaptop && <>
      <Nav />
      </>
      }
      {isTabletOrMobile && <> 
      <NavMobile />
      </>}

      <Landing />
      <PageBreak />
      <About />
    </div>
  );
}

export default App;
