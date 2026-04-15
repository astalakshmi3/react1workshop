
import { Menu, Package, Search, ShoppingBag, User } from "lucide-react";

const Header = () => {
    return (
        <header className="sticky top-0 z-40 border-b border-blue-700/30 bg-blue-600 shadow-lg shadow-blue-900/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600 shadow-md">
                <Package size={20} />
              🛍
            </span>
                        <span className="text-xl tracking-tighter uppercase font-black">LITE.SHOP</span>
                    </a>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-blue-100">
                        <a href="#">New Arrival</a>
                        <a href="#">Men</a>
                        <a href="#">Women</a>
                        <a href="#">Sale</a>
                    </nav>

                    <div className="flex items-center gap-2">
                        <div className="relative hidden sm:block">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="h-10 w-48 rounded-[0.75rem] bg-blue-500/30 pl-4 pr-4 text-xs font-medium text-blue-50 placeholder:text-blue-200/50 border border-blue-400/20 outline-none"
                            />
                            <Search size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-50" />
                        </div>

                        <button className="inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-blue-500/30 text-blue-50 border border-blue-400/20">
                            < ShoppingBag size={20} />
                        </button>

                        <button className="inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-blue-500/30 text-blue-50 border border-blue-400/20">
                            <User size={20} />
                        </button>

                        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-blue-500/30 text-blue-50 border border-blue-400/20">
                            ≡
                            <Menu size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;