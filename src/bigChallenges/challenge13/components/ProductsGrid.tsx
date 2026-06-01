import { PRODUCTS } from "../mocks/products";
import { ProductCard } from "./ProductCard";

export function ProductsGrid() {
   return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
         {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </div>
   );
}
