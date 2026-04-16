import { Menu, Search, Sparkles,Shirt,ShoppingBag ,User, Tag } from "lucide-react";

type HeaderProps = {
    brand: string;
};

const Header = ({ brand }: HeaderProps) => {
    return (
        <header className="border-b bg-blue-600 text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-600">
            < Menu size={20} />
          </span>
                    <h1 className="text-xl font-bold">{brand}</h1>
                </div>

                <nav className="hidden gap-6 md:flex items-center gap-2 text-sm font-bold">
                    <a href="#" className="flex items-center gap-2 hover:text-white"> <Sparkles size={16}/>
                        New Arrival</a>
                    <a href="#" className="flex items-center gap-2 hover:text-white">
                        <Shirt />Men</a>

                    <a href="#" className="flex items-center gap-2 hover:text-white">
                        <User /> Women</a>
                    <a href="#" className="flex items-center gap-2 hover:text-white">
                        <Tag /> Sale</a>
                </nav>

                <div className="flex items-center gap-2">
                    <div className="relative hidden sm:block">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="rounded-lg border border-blue-400/20 bg-blue-500/30 py-2 pl-10 pr-3 text-sm text-white placeholder:text-blue-100 outline-none"
                        />
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>

                    <button className="rounded-lg bg-blue-500/30 p-2">
                        <ShoppingBag size={18} />
                    </button>

                    <button className="rounded-lg bg-blue-500/30 p-2">
                        <User size={18} />
                    </button>

                    <button className="rounded-lg bg-blue-500/30 p-2 md:hidden">
                        <Menu size={18} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;