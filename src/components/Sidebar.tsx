type SidebarProps = {
    categories: string[];
};

const Sidebar = ({ categories }: SidebarProps) => {
    return (
        <aside className="lg:col-span-3 lg:sticky lg:top-20 self-start">
            <div className="border border-slate-200 rounded-[1.25rem] bg-slate-50/50 p-5 shadow-sm">
                <section className="space-y-4">
                    <h2 className="text-sm font-bold text-slate-900">Categories</h2>

                    <div className="space-y-3">
                        {categories.map((category) => (
                            <label key={category} className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="h-4 w-4 accent-blue-600" />
                                <span className="text-sm text-slate-700">{category}</span>
                            </label>
                        ))}
                    </div>
                </section>

                <div className="my-5 h-px bg-slate-100"></div>

                <section className="space-y-3">
                    <h2 className="text-sm font-bold text-slate-900">Price Range</h2>
                    <input type="range" min="0" max="1800" defaultValue="900" className="w-full accent-blue-500" />
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