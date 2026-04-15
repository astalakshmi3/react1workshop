type ProductCardProps = {
    image: string;
    category: string;
    title: string;
    status: string;
    price: string;
    oldPrice?: string;
    badge: string;
};

const ProductCard = ({
                         image,
                         category,
                         title,
                         status,
                         price,
                         oldPrice,
                         badge,
                     }: ProductCardProps) => {
    return (
        <article className="border border-slate-200 rounded-[1.25rem] bg-white p-3 shadow-sm">
            <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                <img
                    src={image}
                    alt={title}
                    className="aspect-[4/5] w-full object-cover"
                />

                <span className="absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full bg-white/80 text-slate-900">
          {badge}
        </span>
            </div>

            <div className="mt-4 px-1 pb-2 space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600/70">
                    {category}
                </p>

                <h3 className="text-sm font-bold text-slate-900">{title}</h3>
                <p className="text-[11px] font-medium text-slate-500">{status}</p>

                <div className="flex items-center justify-between gap-3 pt-3">
                    <div className="flex flex-col">
                        {oldPrice && (
                            <span className="text-[10px] text-slate-400 line-through">
                {oldPrice}
              </span>
                        )}
                        <span className="text-lg font-black text-slate-900">{price}</span>
                    </div>

                    <button className="inline-flex h-10 items-center justify-center rounded-xl bg-slate-900 px-5 text-xs font-bold text-white">
                        Add to cart
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;