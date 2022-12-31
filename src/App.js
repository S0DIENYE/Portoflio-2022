import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Theme from './components/theme'
import Home from './containers/home'
import About from './containers/about'
import Skills from './containers/skills'
import Resume from './containers/resume'
import Portfolio from './containers/portfolio'
import Contact from './containers/contact'
import Navbar from './components/navBar';
import pageHeaderContent from './components/pageHeaderContent';
import particlesConfig from './helpers/particlesConfig';

function App() {

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  const location = useLocation();
  const homePath = location.pathname === '/';

  return (
    <div className="App">
      {/* Particles js */}

      {
        homePath && <Particles id="particles" options={particlesConfig} init={particlesInit} />
      }

      {/* Navbar component */}
      <div className="App__navbar-wrapper">
        <Navbar />
      </div>

      {/* main page content*/}
      <div className="App__main-content-wrapper">
        <Theme />
        <Routes>
          {/* create all routes */}
          <Route path='/' index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>

      </div>
    </div>
  );
}

export default App;
