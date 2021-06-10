
import './styles/App.css';


//<--- Component Import --->//
import Nav from './components/Nav'
import Landing from './components/Landing'
import PageBreak from './components/PageBreak'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <PageBreak />
      <About />
    </div>
  );
}

export default App;
