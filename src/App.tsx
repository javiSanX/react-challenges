import { useEffect, useState, useRef } from "react";
import MenuSelector from "./components/MenuSelector";
import ImageList from "./components/ImageList";
import ResizeDiv from "./components/ResizeDiv";
import "./App.css";

function App() {
   const buttonRef = useRef(null);
   const [selectedChallenge, setSelectedChallenge] = useState("");

   const clickHandler = (e) => {
      const buttonElement = e.target as HTMLButtonElement;
      buttonElement.style.scale = "90%";
      buttonElement.style.background = "rgba(0,0,0,0.7)";
      buttonRef.current.style.scale = "100%";
      buttonRef.current.style.background = "rgba(0,0,0,1)";
      buttonRef.current = buttonElement;

      setSelectedChallenge(e.target.name);
   };

   return (
      <div className="flex gap-4  box max-w-[1200px] m-auto h-screen">
         <div className="box flex flex-col gap-2 px-5 w-fit border h-full overflow-scroll">
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
               name="MenuSelector"
            >
               Menu Selector
            </button>
            <button
               type="button"
               className="btn btn-sm btn-primary"
               onClick={clickHandler}
               name="ImageList"
            >
               Image List
            </button>
            <button
               type="button"
               className="btn btn-sm btn-primary"
               onClick={clickHandler}
               name="ResizeDiv"
            >
               Resize Div
            </button>
            <button
               type="button"
               className="btn btn-sm btn-primary"
               onClick={clickHandler}
            >
               Boton 5
            </button>
            <button
               type="button"
               className="btn btn-sm btn-primary"
               onClick={clickHandler}
            >
               Menu Selector
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
            <button
               type="button"
               className="btn btn-sm btn-primary"
               onClick={clickHandler}
            >
               Menu Selector
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
            <button
               type="button"
               className="btn btn-sm btn-primary"
               onClick={clickHandler}
            >
               Menu Selector
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
            <button
               type="button"
               className="btn btn-sm btn-primary"
               onClick={clickHandler}
            >
               Menu Selector
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
            <button
               type="button"
               className="btn btn-sm btn-primary"
               onClick={clickHandler}
            >
               Menu Selector
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
         <div className="border flex-1 box flex h-fit min-h-[500px] max-h-full overflow-scroll justify-center">
            {selectedChallenge === "MenuSelector" && <MenuSelector />}
            {selectedChallenge === "ImageList" && <ImageList />}
            {selectedChallenge === "ResizeDiv" && <ResizeDiv />}
         </div>
      </div>
   );
}

export default App;
