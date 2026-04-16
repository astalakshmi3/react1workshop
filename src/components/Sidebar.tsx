import { Filter } from "lucide-react";

type SidebarProps = {
    categories: string[];
};

const Sidebar = ({ categories }: SidebarProps) => {
    return (
        <aside className="lg:col-span-3">
            <div className="rounded-xl border bg-white p-5">
                <div className="mb-4 flex items-center gap-2">
                    <Filter size={18} className="text-blue-600" />
                    <h2 className="text-lg font-bold">Categories</h2>
                </div>

                <div className="space-y-3">
                    {categories.map((category) => (
                        <label key={category} className="flex items-center gap-2">
                            <input type="checkbox" />
                            <span>{category}</span>
                        </label>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;