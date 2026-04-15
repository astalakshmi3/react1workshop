import ProductCard from "./ProductCard";

const ProductGrid = () => {
    return (
        <section className="lg:col-span-9">
            <div className="border border-slate-200 rounded-[1.25rem] bg-slate-50/50 p-5 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-xl font-bold tracking-tight text-slate-900">
                        Recommended for you
                    </h1>

                    <select className="rounded-[0.75rem] border border-slate-200 bg-white py-2 px-3 text-sm text-slate-950 outline-none">
                        <option>Newest</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Best Selling</option>
                    </select>
                </div>

                <div className="mt-5 h-px bg-slate-100"></div>

                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <ProductCard
                        image="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800"
                        category="Outerwear"
                        title="Technical Shell Jacket"
                        status="In Stock • Ships in 2 days"
                        oldPrice="1,450 kr"
                        price="890 kr"
                        badge="Discount"
                    />

                    <ProductCard
                        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
                        category="Footwear"
                        title="Speedster Running Shoes"
                        status="Only 4 items left"
                        price="1,200 kr"
                        badge="Limited"
                    />

                    <ProductCard
                        image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
                        category="Accessories"
                        title="Minimalist Quartz Watch"
                        status="Back in stock next week"
                        price="1,850 kr"
                        badge="Sold Out"
                    />
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;