const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 lg:col-span-2 space-y-6">
                        <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-slate-900">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg">
                🛍
              </span>
                            <span className="text-xl tracking-tighter uppercase font-black">LITE.SHOP</span>
                        </a>

                        <p className="max-w-xs text-sm text-slate-500 leading-relaxed font-medium">
                            Modern e-commerce experience built for speed and elegance.
                        </p>

                        <div className="flex items-center gap-4">
                            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600">
                                T
                            </a>
                            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600">
                                I
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">Shop</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-500">
                            <li><a href="#">New Arrival</a></li>
                            <li><a href="#">Best Sellers</a></li>
                            <li><a href="#">Men Collection</a></li>
                            <li><a href="#">Women Collection</a></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">Support</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-500">
                            <li><a href="#">Order Status</a></li>
                            <li><a href="#">Shipping Policy</a></li>
                            <li><a href="#">Returns & Exchanges</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">Company</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-500">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Sustainability</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 border-t border-slate-100 pt-8">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        © 2026 LITE.SHOP. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;