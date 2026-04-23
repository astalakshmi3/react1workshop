import type {Product} from "../types/Product";
import ProductCard from "./ProductCard";

type ProductGridProps = {
    products: Product[],
    onAddToCart: (product: Product) => void;
};

const ProductGrid = ({products, onAddToCart}: ProductGridProps) => {
    return (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart}/>
            ))}
        </div>
    );
};

export default ProductGrid;