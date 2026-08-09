import { useEffect, useRef, useState } from "react";
import useDebounce from "../helpers/useDebounce";

export default function Debounce() {
   const [value, setValue] = useState<string>('')
   const debouncedValue = useDebounce<string>(value, 500)

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
   }

   // Fetch API (optional)
   useEffect(() => {
   }, [debouncedValue])

   return (
      <div className="CenterElements">
         <h1>Debounce</h1>
         <div className="flex gap-2">
            <p>Insert value</p>
            <input className="border" type="text" value={value} onChange={handleChange} />
         </div>
         <p>Value real-time: {value}</p>
         <p>Debounced value: {debouncedValue}</p>

      </div>
   );
}
