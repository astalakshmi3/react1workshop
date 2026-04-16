import { ArrowDownUp } from "lucide-react";
import ProductCard from "./ProductCard";

type Product = {
    id: number;
    title: string;
    price: string;
    image: string;
};

type ProductGridProps = {
    products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
    return (
        <section className="lg:col-span-9">
            <div className="rounded-xl border bg-white p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-xl font-bold">Recommended for you</h2>

                    <div className="flex items-center gap-2">
                        <ArrowDownUp size={16} className="text-slate-500" />
                        <select className="rounded-lg border bg-white px-3 py-2 text-sm outline-none">
                            <option>Newest</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;