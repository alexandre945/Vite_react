import { Routes, Route, Link } from  'react-router-dom';
import { About } from './components/Portfolio/About';
import { Challenge } from './components/Portfolio/Challenge';
import { Home } from './components/Portfolio/Link';
import { Skill } from './components/Portfolio/Skill';

export default function AppRoutes() {
    return(
       <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/skill" element={<Skill />}/>
           <Route path="/about" element={<About />}/>
           <Route path="/challenge" element={<Challenge />} />
       </Routes> 
    )
}