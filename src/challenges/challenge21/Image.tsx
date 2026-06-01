import { useRef } from "react";
import { useNearScreen } from "./useNearScreen";

export const Image = ({ src }) => {
   const imageRef = useRef(null);
   const [isNear] = useNearScreen(imageRef, { rootMargin: "100px" });

   return (
      <figure ref={imageRef}>
         {isNear && <img src={src} alt="lazy animal" />}
      </figure>
   );
};
