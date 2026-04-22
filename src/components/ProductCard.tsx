import type { Product } from "../types/Product";
import { Heart, Eye, Plus, Star } from "lucide-react";

type ProductCardProps = {
    product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <article className="border border-slate-200 rounded-[1.25rem] bg-white p-3 transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1.5 group">
            <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-blue-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-3">
                    <button className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center">
                        <Eye size={20} />
                    </button>
                    <button className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center">
                        <Plus size={20} />
                    </button>
                </div>

                <span className="absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full bg-blue-100 text-blue-600">
          {product.badge}
        </span>

                <button className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-slate-600 backdrop-blur-md">
                    <Heart size={18} />
                </button>
            </div>

            <div className="mt-4 px-1 pb-2 space-y-1">
                <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600/70">
                        {product.category}
                    </p>
                    <div className="flex items-center gap-1">
                        <Star size={10} className="fill-amber-400 text-amber-400" />
                        <span className="text-[10px] font-bold text-slate-400">
              {product.rating}
            </span>
                    </div>
                </div>

                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                </h3>

                <p className="text-[11px] font-medium text-slate-500">{product.status}</p>

                <div className="flex items-center justify-between gap-3 pt-3">
                    <div className="flex flex-col">
                        {product.oldPrice && (
                            <span className="text-[10px] text-slate-400 line-through font-medium leading-none">
                {product.oldPrice} kr
              </span>
                        )}
                        <span className="text-lg font-black text-slate-900 tracking-tight">
              {product.price} kr
            </span>
                    </div>

                    <button
                        className={`inline-flex h-10 items-center justify-center rounded-xl px-5 text-xs font-bold ${
                            product.inStock
                                ? "bg-slate-900 text-white hover:bg-blue-600"
                                : "bg-slate-100 text-slate-400 cursor-not-allowed"
                        }`}
                        disabled={!product.inStock}
                    >
                        {product.inStock ? "Add to cart" : "Notify Me"}
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;