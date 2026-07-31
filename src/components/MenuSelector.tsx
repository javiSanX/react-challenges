import { useRef, useLayoutEffect } from "react";

export default function MenuSelector() {
   const buttonRef = useRef(null);
   const button2ref = useRef(null);
   const dinamycDivRef = useRef(null);
   const button3ref = useRef(null);
   const dinamycDivRef2 = useRef(null);

   const clickHandler = (e) => {
      const buttonElement = e.target as HTMLButtonElement;
      if (buttonElement === buttonRef.current) return;
      buttonElement.style.scale = "90%";
      buttonElement.style.background = "rgba(0,0,0,0.7)";
      buttonRef.current.style.scale = "100%";
      buttonRef.current.style.background = "rgba(0,0,0,1)";
      buttonRef.current = buttonElement;
   };

   const resizeWindow = () => {
      const { bottom, height, left, right, top, width, x, y } =
         button2ref.current.getBoundingClientRect();

      dinamycDivRef.current.style.width = `${width}px`;
      dinamycDivRef.current.style.height = `${height}px`;
      dinamycDivRef.current.style.left = `${left}px`;
      dinamycDivRef.current.style.top = `${top}px`;
   };

   useLayoutEffect(() => {
      resizeWindow();
      window.addEventListener("resize", () => {
         dinamycDivRef.current.classList.remove("transition-all");
         resizeWindow();
         dinamycDivRef.current.classList.add("transition-all");
      });

      return () => window.removeEventListener("resize", resizeWindow);
   }, []);

   const clickHandler2 = (e) => {
      const buttonElement2 = e.target as HTMLButtonElement;
      if (buttonElement2 === button2ref.current) return;

      buttonElement2.classList.remove("text-black");
      buttonElement2.classList.add("text-white");
      buttonElement2.classList.remove("hover:bg-neutral-200");
      buttonElement2.classList.add("bg-transparent");

      button2ref.current.classList.remove("text-white");
      button2ref.current.classList.add("text-black");
      button2ref.current.classList.remove("bg-black");
      button2ref.current.classList.add("hover:bg-neutral-200");
      button2ref.current = buttonElement2;
      resizeWindow();
   };

   const moveDynamicDiv = () => {
      const { bottom, height, left, right, top, width, x, y } =
         button3ref.current.getBoundingClientRect();
      dinamycDivRef2.current.style.width = `${width}px`;
      dinamycDivRef2.current.style.height = `${height}px`;
      dinamycDivRef2.current.style.left = `${left}px`;
      dinamycDivRef2.current.style.top = `${top}px`;
   };

   useLayoutEffect(() => {
      moveDynamicDiv();
      window.addEventListener("resize", () => {
         dinamycDivRef2.current.classList.remove("transition-all");
         moveDynamicDiv();
         dinamycDivRef2.current.classList.add("transition-all");
      });

      return () => window.removeEventListener("resize", () => moveDynamicDiv());
   }, []);

   const clickHandler3 = (e) => {
      const buttonElement3 = e.target as HTMLButtonElement;
      if (buttonElement3 === button3ref.current) return;

      buttonElement3.classList.remove("border");
      buttonElement3.classList.add("z-20");
      buttonElement3.classList.add("text-white");
      buttonElement3.classList.add("bg-transparent");

      button3ref.current.classList.remove("z-20");
      button3ref.current.classList.add("border");
      button3ref.current.classList.remove("text-white");
      button3ref.current.classList.add("text-black");
      button3ref.current.classList.remove("bg-transparent");
      button3ref.current.classList.remove("bg-black");
      button3ref.current.classList.add("bg-neutral-100");

      button3ref.current = buttonElement3;
      moveDynamicDiv();
   };

   return (
      <div className="flex flex-col items-center gap-2 justify-center">
         <div className="box flex p-0 gap-2 w-fit h-fit">
            <button
               ref={buttonRef}
               type="button"
               className="btn btn-sm btn-primary"
               onClick={clickHandler}
            >
               Boton 1
            </button>
            <button
               type="button"
               className="btn btn-sm btn-primary"
               onClick={clickHandler}
            >
               Boton 2
            </button>
            <button
               type="button"
               className="btn btn-sm btn-primary"
               onClick={clickHandler}
            >
               Boton 3
            </button>
            <button
               type="button"
               className="btn btn-sm btn-primary"
               onClick={clickHandler}
            >
               Boton 4
            </button>
            <button
               type="button"
               className="btn btn-sm btn-primary"
               onClick={clickHandler}
            >
               Boton 5
            </button>
         </div>
         <div className="rounded-lg p-0 flex gap-2 w-fit h-fit">
            <button
               type="button"
               ref={button2ref}
               className="btn btn-sm btn-tertiary hover:bg-neutral-200 bg-black text-white"
               onClick={clickHandler2}
            >
               Boton 1
            </button>
            <button
               type="button"
               className="btn btn-sm btn-tertiary bg-transparent hover:bg-neutral-200"
               onClick={clickHandler2}
            >
               Boton 2
            </button>
            <button
               type="button"
               className="btn btn-sm btn-tertiary bg-transparent hover:bg-neutral-200"
               onClick={clickHandler2}
            >
               Boton 3
            </button>
            <button
               type="button"
               className="btn btn-sm btn-tertiary bg-transparent hover:bg-neutral-200"
               onClick={clickHandler2}
            >
               Boton 4
            </button>
            <button
               type="button"
               className="btn btn-sm btn-tertiary bg-transparent hover:bg-neutral-200"
               onClick={clickHandler2}
            >
               Boton 5
            </button>
            <span
               ref={dinamycDivRef}
               className="absolute h-2 btn btn-sm bg-black transform transition-all -z-10"
            ></span>
         </div>
         <div className="rounded-lg p-0 flex gap-2 w-fit h-fit">
            <button
               type="button"
               ref={button3ref}
               className="btn btn-sm btn-tertiary text-white bg-black z-20 border border-neutral-100 hover:border-neutral-300"
               onClick={clickHandler3}
            >
               Boton 1
            </button>
            <button
               type="button"
               className="btn btn-sm btn-tertiary bg-neutral-100 border border-neutral-100 hover:border-neutral-300"
               onClick={clickHandler3}
            >
               Boton 2
            </button>
            <button
               type="button"
               className="btn btn-sm btn-tertiary bg-neutral-100 border border-neutral-100 hover:border-neutral-300"
               onClick={clickHandler3}
            >
               Boton 3
            </button>
            <button
               type="button"
               className="btn btn-sm btn-tertiary bg-neutral-100 border border-neutral-100 hover:border-neutral-300"
               onClick={clickHandler3}
            >
               Boton 4
            </button>
            <button
               type="button"
               className="btn btn-sm btn-tertiary bg-neutral-100 border border-neutral-100 hover:border-neutral-300"
               onClick={clickHandler3}
            >
               Boton 5
            </button>
            <span
               ref={dinamycDivRef2}
               className="absolute h-2 btn btn-sm bg-black transform border border-black transition-all"
            ></span>
         </div>
      </div>
   );
}
