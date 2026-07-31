import { useRef, useState } from "react";

export default function ImageList() {
   const inputRef = useRef<HTMLInputElement>(null);
   const [robots, setRobots] = useState<Array<string>>(["a", "b", "c"]);

   const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const inputText = inputRef.current!.value;
      setRobots([...robots, inputText]);
   };

   return (
      <div>
         <h1>image list</h1>
         <form onSubmit={(e) => submitHandler(e)}>
            <input
               ref={inputRef}
               className="bg-zinc-600 rounded-md p-2 m-5"
               placeholder="Add robot"
            />
         </form>

         <div className="grid grid-cols-3 gap-3">
            {robots.map((robot, i) => {
               return (
                  <img
                     key={robot + i}
                     src={`https://robohash.org/${robot}`}
                     className="border border-zinc-600 rounded-md cursor-pointer"
                     onClick={() =>
                        setRobots(robots.filter((r) => r !== robot))
                     }
                  />
               );
            })}
         </div>
      </div>
   );
}
