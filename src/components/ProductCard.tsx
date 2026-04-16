import { Heart, ShoppingCart } from "lucide-react";

type ProductCardProps = {
    title: string;
    price: string;
    image: string;
};

const ProductCard = ({ title, price, image }: ProductCardProps) => {
    return (
        <article className="rounded-xl border bg-white p-3 shadow-sm">
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="aspect-[4/5] w-full rounded-lg object-cover"
                />

                <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow">
                    <Heart size={16} />
                </button>
            </div>

            <div className="mt-3">
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="mt-1 text-slate-600">{price}</p>

                <button className="mt-3 flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white">
                    <ShoppingCart size={16} />
                    Add to cart
                </button>
            </div>
        </article>
    );
};

export default ProductCard;