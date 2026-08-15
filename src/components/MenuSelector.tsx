import { useLayoutEffect, useState, useRef } from "react";

const BUTTONS = [
   { id: 1, label: "Selector1" },
   { id: 2, label: "Selector2" },
   { id: 3, label: "Selector3" },
   { id: 4, label: "Selector4" },
   { id: 5, label: "Selector5" },
];

export default function MenuSelector() {
   const [selected, setSelected] = useState<number | null>(null);

   return (
      <div className="flex flex-col gap-2 justify-center">
         <div className="flex items-center gap-2 ">
            {BUTTONS.map(({ id, label }) => (
               <button
                  key={id}
                  type="button"
                  className={`btn btn-sm btn-primary ${selected === id ? "bg-blue-600 scale-90" : "bg-black"}`}
                  onClick={() => setSelected(id)}
               >
                  {label}
               </button>
            ))}
         </div>
         <Component2 />
      </div>
   );
}

function Component2() {
   const buttonRef = useRef<HTMLButtonElement | null>(null);
   const selectorRef = useRef<HTMLButtonElement | null>(null);
   const containerRef = useRef<HTMLDivElement | null>(null);

   const moveSelector = () => {
      const button = buttonRef.current;
      const selector = selectorRef.current;
      const container = containerRef.current;
      if (!button || !selector || !container) return;

      const buttonRect = button?.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      selector.style.width = `${buttonRect.width}px`;
      selector.style.height = `${buttonRect.height}px`;
      selector.style.transform = `translate(${buttonRect.x - containerRect.x}px, ${buttonRect.y - containerRect.y}px)`;
   };

   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const currentButton = e.currentTarget;
      if (currentButton === buttonRef.current) return;
      const previousButton = buttonRef.current;
      previousButton?.classList.remove(
         "text-white",
         "bg-transparent",
         "z-10",
         "border-transparent",
         "hover:bg-transparent",
      );
      currentButton.classList.add(
         "text-white",
         "bg-transparent",
         "z-10",
         "border-transparent",
         "hover:bg-transparent",
      );
      buttonRef.current = currentButton;
      moveSelector();
   };

   useLayoutEffect(() => {
      moveSelector();
   }, []);

   return (
      <div
         className="flex relative gap-2 items-center h-fit"
         ref={containerRef}
      >
         {BUTTONS.map(({ id, label }) => (
            <button
               key={id}
               ref={id === 1 ? buttonRef : null}
               onClick={handleClick}
               className={`btn btn-sm btn-tertiary bg-neutral-100 border border-neutral-100 hover:bg-neutral-300 ${id === 1 ? "text-white bg-transparent z-10 hover:bg-transparent" : "text-black"}`}
            >
               {label}
            </button>
         ))}
         <span
            className="absolute btn btn-sm bg-black transition-all"
            ref={selectorRef}
         />
      </div>
   );
}
