import { useCart } from "../context/CartContext";

export function Cart() {
   const {
      cart,
      isCartOpen,
      closeCart,
      incrementItem,
      decrementItem,
      totalPrice,
      totalItems,
   } = useCart();

   return (
      <>
         {/* Backdrop */}
         <div
            className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 ${
               isCartOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
            }`}
            onClick={closeCart}
            aria-hidden="true"
         />

         {/* Drawer */}
         <div
            role="dialog"
            aria-modal="true"
            aria-label="Carrito de la compra"
            className={`fixed top-0 right-0 h-full w-80 bg-neutral-950 border-l border-neutral-800 z-50 flex flex-col transition-transform duration-300 ease-in-out ${
               isCartOpen ? "translate-x-0" : "translate-x-full"
            }`}
         >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-800 shrink-0">
               <h2 className="text-sm font-bold text-white">
                  Carrito
                  {totalItems > 0 && (
                     <span className="ml-2 px-1.5 py-0.5 bg-emerald-600 text-white text-[10px] font-bold rounded-full">
                        {totalItems}
                     </span>
                  )}
               </h2>
               <button
                  type="button"
                  onClick={closeCart}
                  className="text-neutral-400 hover:text-white transition-colors p-1 cursor-pointer"
                  aria-label="Cerrar carrito"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="18"
                     height="18"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     aria-hidden="true"
                  >
                     <path d="M18 6 6 18" />
                     <path d="m6 6 12 12" />
                  </svg>
               </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
               {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full gap-3 text-neutral-500">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-40"
                        aria-hidden="true"
                     >
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                     </svg>
                     <p className="text-sm">Tu carrito está vacío</p>
                  </div>
               ) : (
                  cart.map((item) => (
                     <div
                        key={item.id}
                        className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl p-3"
                     >
                        <img
                           src={item.image}
                           alt={item.name}
                           className="w-14 h-14 object-cover rounded-lg shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                           <p className="text-xs font-semibold text-white leading-snug truncate">
                              {item.name}
                           </p>
                           <p className="text-[11px] text-emerald-400 font-medium mt-0.5">
                              ${item.price.toFixed(2)}
                           </p>
                           <p className="text-[10px] text-neutral-500 mt-0.5">
                              Subtotal: $
                              {(item.price * item.quantity).toFixed(2)}
                           </p>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 shrink-0">
                           <button
                              type="button"
                              onClick={() => incrementItem(item.id)}
                              className="w-6 h-6 rounded-full bg-neutral-700 hover:bg-emerald-600 text-white text-xs font-bold transition-colors flex items-center justify-center cursor-pointer"
                           >
                              +
                           </button>
                           <span className="text-xs font-bold text-white tabular-nums">
                              {item.quantity}
                           </span>
                           <button
                              type="button"
                              onClick={() => decrementItem(item.id)}
                              className="w-6 h-6 rounded-full bg-neutral-700 hover:bg-red-600 text-white text-xs font-bold transition-colors flex items-center justify-center cursor-pointer"
                           >
                              −
                           </button>
                        </div>
                     </div>
                  ))
               )}
            </div>

            {/* Footer total + checkout */}
            {cart.length > 0 && (
               <div className="p-4 border-t border-neutral-800 shrink-0">
                  <div className="flex justify-between items-center mb-3">
                     <span className="text-xs text-neutral-400">
                        {totalItems}{" "}
                        {totalItems === 1 ? "producto" : "productos"}
                     </span>
                     <span className="text-base font-bold text-white">
                        ${totalPrice.toFixed(2)}
                     </span>
                  </div>
                  <button
                     type="button"
                     className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white text-sm font-semibold rounded-xl transition-all cursor-pointer"
                  >
                     Finalizar compra
                  </button>
               </div>
            )}
         </div>
      </>
   );
}
