import {
    Package,
    Menu,
    Search,
    Sparkles,
    Shirt,
    ShoppingBag,
    User,
    Tag,
} from "lucide-react";

import { useTheme } from "../context/ThemeContext";

type HeaderProps = {
    searchTerm: string;
    onSearchChange: (searchTerm: string) => void;
    cartCount: number;
};

const Header = ({ searchTerm, onSearchChange, cartCount }: HeaderProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <header className="sticky top-0 z-40 border-b border-blue-700/30 bg-blue-600 shadow-lg shadow-blue-900/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-white">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600 shadow-md">
                <Package size={20} />
              </span>
                            <span className="text-xl tracking-tighter uppercase font-black">
                LITE.SHOP
              </span>
                        </a>

                        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-blue-100">
                            <a href="#" className="flex items-center gap-2 hover:text-white">
                                <Sparkles size={16} /> New Arrival
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:text-white">
                                <Shirt size={16} /> Men
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:text-white">
                                <User size={16} /> Women
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:text-white">
                                <Tag size={16} /> Sale
                            </a>
                        </nav>

                        <div className="flex items-center gap-2">
                            <div className="relative hidden sm:block">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchTerm}
                                    onChange={(e) => onSearchChange(e.target.value)}
                                    className="h-10 w-48 rounded-xl bg-blue-500/30 pl-10 pr-4 text-xs text-white placeholder:text-blue-200/50 border border-blue-400/20 outline-none"
                                />
                                <Search size={16} className="absolute left-3.5 top-3 text-blue-200" />
                            </div>

                            <button
                                onClick={toggleTheme}
                                className="rounded-xl bg-blue-500/30 px-3 py-2 text-xs font-bold text-white border border-blue-400/20"
                            >
                                {theme === "light" ? "Dark" : "Light"}
                            </button>

                            <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/30 text-blue-50 border border-blue-400/20">
                                <ShoppingBag size={20} />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 text-xs text-white font-bold">
                    {cartCount}
                  </span>
                                )}
                            </button>

                            <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/30 text-blue-50 border border-blue-400/20">
                                <User size={20} />
                            </button>

                            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/30 text-blue-50 border border-blue-400/20">
                                <Menu size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;