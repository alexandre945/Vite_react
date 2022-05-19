import { LinkedinLogo, ThumbsUp } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import foto from "../../assetes/image/foto.png";


export function Home() {

  const [count, setCount ] = useState(0);

    return (

      <>
          <div className="m-0">
        
        <img src={foto}alt="foto.png"/>
       
      </div>

      <div className="ml-4 mb-4">
        <p>Like {count}</p>
        <button onClick={()=> setCount(count + 1)}>
           <ThumbsUp className="w-6 h-6" bg-zinc-900/>
        </button>
      </div>
      
      </>
    


    );
}