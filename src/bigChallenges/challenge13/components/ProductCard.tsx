import type { Product } from "../types";
import { useCart } from "../context/CartContext";

interface Props {
   product: Product;
}

export function ProductCard({ product }: Props) {
   const { cart, addToCart, incrementItem, decrementItem } = useCart();
   const cartItem = cart.find((i) => i.id === product.id);

   return (
      <div className="bg-neutral-900 border border-neutral-700 rounded-xl overflow-hidden flex flex-col group hover:border-neutral-500 transition-all duration-200">
         <div className="overflow-hidden h-36 shrink-0">
            <img
               src={product.image}
               alt={product.name}
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
         </div>

         <div className="p-3 flex flex-col gap-1.5 flex-1 text-left">
            <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-widest">
               {product.category}
            </span>
            <h3 className="text-xs font-bold text-white leading-snug">
               {product.name}
            </h3>
            <p className="text-[11px] text-neutral-400 leading-relaxed flex-1">
               {product.description}
            </p>

            <div className="flex items-center justify-between mt-2 gap-2">
               <span className="text-sm font-bold text-white">
                  ${product.price.toFixed(2)}
               </span>

               {cartItem ? (
                  <div className="flex items-center gap-1.5 shrink-0">
                     <button
                        type="button"
                        onClick={() => decrementItem(product.id)}
                        className="w-6 h-6 rounded-full bg-neutral-700 hover:bg-red-600 text-white text-xs font-bold transition-colors flex items-center justify-center cursor-pointer"
                     >
                        −
                     </button>
                     <span className="text-xs font-bold text-white w-4 text-center tabular-nums">
                        {cartItem.quantity}
                     </span>
                     <button
                        type="button"
                        onClick={() => incrementItem(product.id)}
                        className="w-6 h-6 rounded-full bg-neutral-700 hover:bg-emerald-600 text-white text-xs font-bold transition-colors flex items-center justify-center cursor-pointer"
                     >
                        +
                     </button>
                  </div>
               ) : (
                  <button
                     type="button"
                     onClick={() => addToCart(product)}
                     className="px-3 py-1 text-[11px] font-semibold bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-lg transition-all cursor-pointer shrink-0"
                  >
                     Agregar
                  </button>
               )}
            </div>
         </div>
      </div>
   );
}
