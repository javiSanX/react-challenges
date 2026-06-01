import { useCart } from "../context/CartContext";

export function CartFooter() {
   const { totalItems, totalPrice, toggleCart } = useCart();

   return (
      <button
         type="button"
         onClick={toggleCart}
         className="w-full py-3 px-5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-500 rounded-xl text-sm font-semibold text-white transition-all duration-200 flex items-center justify-between cursor-pointer active:scale-[0.99]"
      >
         <span className="flex items-center gap-2">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="16"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
               className="shrink-0"
               aria-hidden="true"
            >
               <circle cx="8" cy="21" r="1" />
               <circle cx="19" cy="21" r="1" />
               <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            {totalItems === 0
               ? "Carrito vacío"
               : `${totalItems} ${totalItems === 1 ? "producto" : "productos"}`}
         </span>

         <span
            className={
               totalItems > 0
                  ? "text-emerald-400 font-bold"
                  : "text-neutral-500"
            }
         >
            {totalItems > 0 ? `$${totalPrice.toFixed(2)}` : "$0.00"}
         </span>
      </button>
   );
}
