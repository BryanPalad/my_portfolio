import "./App.css";
import {
  SideBar,
  Home,
  AboutMe,
  Services,
  Portfolio,
  ContactMe,
  Styleswitch,
} from "./components";
function App() {
  return (
    <div className="app-content">
      <SideBar />
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
