import { Filter } from "lucide-react";

type SidebarProps = {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (selectedCategory: string) => void;
};

const Sidebar = ({
                     categories,
                     selectedCategory,
                     onCategoryChange,
                 }: SidebarProps) => {
    return (
        <aside className="lg:col-span-3 lg:sticky lg:top-20 self-start">
            <div className="border border-slate-200 rounded-[1.25rem] bg-slate-50/50 p-5 shadow-sm">
                <section className="space-y-4">
                    <h2 className="flex items-center gap-2 text-sm font-bold text-slate-900">
                        <Filter className="h-4 w-4" />
                        Categories
                    </h2>

                    <div className="space-y-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => onCategoryChange(category)}
                                className={`block w-full rounded-lg border px-3 py-2 text-left text-sm ${
                                    selectedCategory === category
                                        ? "bg-slate-900 text-white border-slate-900"
                                        : "bg-white text-slate-700 border-slate-200"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                <div className="my-5 h-px bg-slate-100"></div>

                <section className="space-y-3">
                    <h2 className="text-sm font-bold text-slate-900">Price Range</h2>
                    <input
                        type="range"
                        min="0"
                        max="1800"
                        defaultValue="900"
                        className="w-full accent-blue-500"
                    />
                </section>

                <div className="my-5 h-px bg-slate-100"></div>

                <section className="space-y-4">
                    <h2 className="text-sm font-bold text-slate-900">Availability</h2>
                    <label className="flex items-center gap-3">
                        <input type="checkbox" className="h-4 w-4 accent-blue-600" />
                        <span className="text-sm text-slate-700">In Stock</span>
                    </label>
                    <label className="flex items-center gap-3">
                        <input type="checkbox" className="h-4 w-4 accent-blue-600" />
                        <span className="text-sm text-slate-700">On Sale</span>
                    </label>
                </section>
            </div>
        </aside>
    );
};

export default Sidebar;