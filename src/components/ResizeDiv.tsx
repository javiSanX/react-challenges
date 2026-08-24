import React, { useEffect, useRef, useState } from "react";

const SIZES = {
   width: 700,
   height: 300,
};

interface Position {
   x: number;
   y: number;
}

interface Size {
   width: number;
   height: number;
}
const UP_DOWN = "up_down";
const RIGHT_LEFT = "right_left";

export default function ResizeDiv() {
   const [sizes, setSizes] = useState<Size>(SIZES);
   const resizing = useRef(false);
   const direction = useRef(UP_DOWN);
   const initialPosition = useRef<Position>({
      x: 0,
      y: 0,
   });
   const initialSize = useRef<Size>({
      width: SIZES.width,
      height: SIZES.height,
   });

   const handlePointerDown = (
      e: React.PointerEvent<HTMLButtonElement>,
      currDirection: string,
   ) => {
      resizing.current = true;
      initialPosition.current = { x: e.clientX, y: e.clientY };
      initialSize.current = { width: sizes.width, height: sizes.height };
      direction.current = currDirection;
   };

   const handlePointerMove = (e: PointerEvent) => {
      if (!resizing.current) return;
      const deltaX = e.clientX - initialPosition.current.x;
      const deltaY = e.clientY - initialPosition.current.y;
      if (direction.current === UP_DOWN) {
         setSizes({
            width: initialSize.current.width,
            height: initialSize.current.height + deltaY,
         });
      } else {
         setSizes({
            width: initialSize.current.width + deltaX,
            height: initialSize.current.height,
         });
      }
   };

   const handlePointerUp = () => {
      resizing.current = false;
   };

   useEffect(() => {
      document.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("pointerup", handlePointerUp);

      return () => {
         document.removeEventListener("pointermove", handlePointerMove);
         document.removeEventListener("pointerup", handlePointerUp);
      };
   }, []);

   return (
      <div className="w-full h-full">
         <div
            className="relative border-4 flex"
            style={{
               width: sizes.width,
               height: sizes.height,
            }}
         >
            <button
               className="  absolute right-[-20px] top-1/2 -translate-y-1/2 bg-black h-32 w-3 rounded-md cursor-pointer"
               onPointerDown={(e) => handlePointerDown(e, RIGHT_LEFT)}
            />
            <button
               className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-black h-3 w-32 rounded-md cursor-pointer"
               onPointerDown={(e) => handlePointerDown(e, UP_DOWN)}
            />
         </div>
      </div>
   );
}
