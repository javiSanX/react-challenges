import { Suspense, use, useState } from "react";
import { createPromises } from "./data";

type Promises = ReturnType<typeof createPromises>;

function CatFact({ promises }: { promises: Promises }) {
   const fact = use(promises.factsPromise);
   const imageData = use(promises.imagePromise);

   return (
      <div className="mt-6 min-h-75">
         <p className="mt-4 text-lg">{fact}</p>
         <img
            src={imageData}
            alt={fact}
            className="mx-auto max-h-75 rounded-lg object-contain"
         />
      </div>
   );
}

const Demo = () => {
   const [promises, setPromises] = useState(createPromises);

   return (
      <div className="text-center border-solid border border-neutral-800 text-white bg-black rounded-xl p-8 min-h-100 flex flex-col gap-4 items-center justify-center">
         <h1 className="text-4xl font-bold">Cat Facts</h1>
         <button
            type="button"
            onClick={() => setPromises(createPromises())}
            className="mt-4 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg text-sm cursor-pointer"
         >
            New fact
         </button>
         <Suspense
            fallback={
               <div className="mx-auto rounded-lg w-75 h-64 bg-neutral-800 animate-pulse" />
            }
         >
            <CatFact promises={promises} />
         </Suspense>
      </div>
   );
};

export default Demo;
