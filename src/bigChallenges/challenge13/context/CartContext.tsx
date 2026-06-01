import { createContext, use, useMemo, useReducer, useState } from "react";
import type { CartItem, Product } from "../types";

interface CartContextType {
   cart: CartItem[];
   addToCart: (product: Product) => void;
   incrementItem: (id: number) => void;
   decrementItem: (id: number) => void;
   totalItems: number;
   totalPrice: number;
   isCartOpen: boolean;
   toggleCart: () => void;
   closeCart: () => void;
}

type CartAction =
   | { type: "ADD"; payload: Product }
   | { type: "INCREMENT"; payload: number }
   | { type: "DECREMENT"; payload: number };

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
   switch (action.type) {
      case "ADD": {
         const existing = state.find((i) => i.id === action.payload.id);
         if (existing) {
            return state.map((i) =>
               i.id === action.payload.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i,
            );
         }
         return [...state, { ...action.payload, quantity: 1 }];
      }
      case "INCREMENT":
         return state.map((i) =>
            i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i,
         );
      case "DECREMENT": {
         const item = state.find((i) => i.id === action.payload);
         if (!item) return state;
         if (item.quantity === 1)
            return state.filter((i) => i.id !== action.payload);
         return state.map((i) =>
            i.id === action.payload ? { ...i, quantity: i.quantity - 1 } : i,
         );
      }
   }
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
   const [cart, dispatch] = useReducer(cartReducer, []);
   const [isCartOpen, setIsCartOpen] = useState(false);

   const totalItems = useMemo(
      () => cart.reduce((acc, i) => acc + i.quantity, 0),
      [cart],
   );
   const totalPrice = useMemo(
      () => cart.reduce((acc, i) => acc + i.price * i.quantity, 0),
      [cart],
   );

   const addToCart = (product: Product) =>
      dispatch({ type: "ADD", payload: product });
   const incrementItem = (id: number) =>
      dispatch({ type: "INCREMENT", payload: id });
   const decrementItem = (id: number) =>
      dispatch({ type: "DECREMENT", payload: id });
   const toggleCart = () => setIsCartOpen((prev) => !prev);
   const closeCart = () => setIsCartOpen(false);

   return (
      <CartContext
         value={{
            cart,
            addToCart,
            incrementItem,
            decrementItem,
            totalItems,
            totalPrice,
            isCartOpen,
            toggleCart,
            closeCart,
         }}
      >
         {children}
      </CartContext>
   );
}

export function useCart() {
   const context = use(CartContext);
   if (!context) throw new Error("useCart must be used within a CartProvider");
   return context;
}
