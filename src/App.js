import './App.css';
import Sidebar from './components/Sections/SideBar/Sidebar';
import Home from './components/Sections/Home/Home';
import AboutMe from './components/Sections/AboutMe/AboutMe';
import Services from './components/Sections/Services/Services';
import Portfolio from './components/Sections/Portfolio/Portfolio';
import ContactMe from './components/Sections/ContactMe/ContactMe';
import Styleswitch from './components/StyleSwitcher/Styleswitch';

function App() { 
  return (
    <div className="app-content">
      <Sidebar/>
      <Home/>
      <AboutMe/>
      <Services/>
      <Portfolio/>
      <ContactMe/> 
      <Styleswitch/>
      </div>
  );
}

export default App;
