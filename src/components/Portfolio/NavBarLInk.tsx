import { Link } from "react-router-dom";

export function NavBarLink(){
    return(
         <div>
                <nav className="bg-brand-500 flex py-2 px-2 border-2 border-brand-200 hover:bg-brand-300  w-full gap-4 place-content-center  ">
                <Link to="/" className="px-4 " >Home</Link>
                <Link to="/skill"className="px-4">Skill</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/challenge">Desafios</Link>

            </nav>
         </div>        
    )
}