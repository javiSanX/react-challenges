import { useState, useEffect } from "react";

export const useNearScreen = (externalRef, options = {}) => {
   const [isNear, setIsNear] = useState(false);

   useEffect(() => {
      if (!externalRef.current) return;

      const onIntersect = (entries, observer) => {
         const { isIntersecting } = entries[0];

         if (isIntersecting) {
            setIsNear(true);
            observer.disconnect();
         }
      };

      const observer = new window.IntersectionObserver(onIntersect, options);
      observer.observe(externalRef.current);

      return () => observer?.disconnect();
   }, [externalRef, options]);

   return [isNear];
};
