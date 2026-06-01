import { useCart } from "../context/CartContext";

export function CartIcon() {
   const { totalItems, toggleCart } = useCart();

   return (
      <button
         type="button"
         onClick={toggleCart}
         className="relative p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
         aria-label={`Abrir carrito, ${totalItems} productos`}
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
         >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
         </svg>

         {totalItems > 0 && (
            <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 bg-emerald-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
               {totalItems > 99 ? "99+" : totalItems}
            </span>
         )}
      </button>
   );
}
