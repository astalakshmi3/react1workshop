import {Package2, User2, Heart, ShoppingBag, Sparkle, Star, Truck} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 lg:col-span-2 space-y-6">
                        <h2 className="text-xl tracking-tighter uppercase font-black text-slate-900">
                            LITE.SHOP
                        </h2>
                        <p className="max-w-xs text-sm text-slate-500 leading-relaxed font-medium">
                            Modern e-commerce experience built for speed and elegance.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">Shop</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-500">
                            <li><a href="#" className="flex items-center gap-2 hover:text-white">
                                <Sparkle size={16}/>New Arrival</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-white">
                                <Star size={16}/>Best Sellers</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-white">
                                <User2 size={16}/>Men Collection</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-white">
                                <Heart size={16}/>Women Collection</a></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">Support</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-500">
                            <li><a href="#" className="flex items-center gap-2 hover:text-white">
                                <Heart size={16}/>Order Status</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-white">
                                <ShoppingBag size={16}/>Shipping Policy</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-white">
                                <Truck size={16}/>Returns & Exchanges</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-white">
                                <Package2 size = {18}/>FAQs</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 border-t border-slate-100 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        © 2026 LITE.SHOP. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;