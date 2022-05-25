import { LinkedinLogo, ThumbsUp } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import foto from "../../assetes/image/foto.png";


export function Home() {

  const [count, setCount] = useState(0);

  return (

    <>
      <div className="flex flex-col-2 ms:flex-1">
        <div className="">

          <img src={foto} alt="foto.png"className="h-auto border-2 rounded-3xl mt-6 ml-8 border-brand-500 py-2 pb-0 " />

        </div>

          <div className=" ml-40 mt-40 ms:text-2xl ms:text-rigth text-3xl py-6 ">
            <h2 className=" text-brand-300 ms:text-2xl">Olá meu nome é </h2>
            <h1 className="py-8 text-6xl text-brand-200 ms:text-3xl">Alexandre Sousa</h1>
            <h1 className="text-brand-300">E eu sou Desenvolvedor Web:</h1>
          </div>

      </div>


      {/* <div className="ml-4 mb-4">
        <p>Like {count}</p>
        <button onClick={() => setCount(count + 1)}>
          <ThumbsUp className="w-6 h-6" bg-zinc-900 />
        </button>
      </div> */}

    </>



  );
}