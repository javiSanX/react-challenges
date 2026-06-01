import { Cart } from "./components/Cart";
import { CartFooter } from "./components/CartFooter";
import { CartIcon } from "./components/CartIcon";
import { ProductsGrid } from "./components/ProductsGrid";
import { CartProvider } from "./context/CartContext";

function App() {
   return (
      <CartProvider>
         <div className="text-6xl text-center border-solid border border-neutral-800 text-white bg-black rounded-xl p-8 min-h-[400px] flex flex-col gap-6">
            <header className="flex items-center justify-between text-base text-left">
               <div>
                  <h1 className="text-xl font-bold text-white tracking-tight">
                     Tech Store
                  </h1>
                  <p className="text-xs text-neutral-500 mt-0.5">
                     Los mejores gadgets al mejor precio
                  </p>
               </div>
               <CartIcon />
            </header>

            <ProductsGrid />

            <CartFooter />

            <Cart />
         </div>
      </CartProvider>
   );
}

export default App;
