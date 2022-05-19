


import { Widget } from "./components/Widget";
import { BrowserRouter as Router } from "react-router-dom";
import  Routes  from "./routes";
import { Home } from "./components/Portfolio/Link";
import { NavBarLink } from "./components/Portfolio/NavBarLInk";

export function App() {

  return (
    <Router>
      <div>
        <Widget />
        <NavBarLink />
        <Routes />
       
      </div>
    </Router>


  )



}