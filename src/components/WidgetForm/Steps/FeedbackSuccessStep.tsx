import { Checks } from "phosphor-react";
import { CloseButton } from "../../CloseButton";

export function FeedbackSuccessStep()
     {
         return (
           <>
           <header>
               <CloseButton />
           </header>
            
            <div className=" flex flex-col items-center py-10 w-[304px]">
            <Checks className=" w-6 h-6 text-bg-brand-500 border-brand-500 hover:text-zinc-500" />
            <span className="text-xl mt-2">Agradecemos seu feedback!</span>
            </div>
           </>
         )
     }