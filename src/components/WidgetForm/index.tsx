import { useState } from "react";
import { CloseButton } from "../CloseButton";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
    Bug:
      {
       title: 'Poblema'
      },
    IDEA:
      {
       title: 'Ideia'
      },
    OTHER:
      {
       title: 'Outro'
      },    
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm()
    {
        const [feedbackType,setFeedbacktype] = useState<FeedbackType | null> (null)
        const [feedbackSent, setFeedbackSent] = useState(false);

        function handleRestartFeedback() {
          setFeedbacktype(null);
        }

        return(
             <div className="bg-zinc-900 p-4  relative rounded-2xl mb-4 flex flex-col items-center
              shadow-lg w-[calc(100vw-2rem)] md:w-auto">
                 
               {feedbackSent ? (
                 <FeedbackSuccessStep />
               ): (
                 <>
                         {!feedbackType ? (
                 <FeedbackTypeStep  onFeedbackTypeChanged={setFeedbacktype}/>
                 ):(
                 <FeedbackContentStep feedbackType={feedbackType}
                 onFeedbackRestartRequestd={handleRestartFeedback}
                 onFeedbackSent={()=> setFeedbackSent(true) }
                 />
                 )}
                 </>
               )}
                

                <footer className="text-xl text-neutral-200">
                  Feito por Alexandre/desenvovimentos/web
                </footer>
             </div>

        );
    }