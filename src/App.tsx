import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { products } from "./data/products";
import {useState} from "react";

const categories = ["All Products", "Outerwear", "Footwear", "Accessories"];

function App() {
// Add state and pass props to header
const [searchTerm, setSearchTeam] = useState("");
    return (
        <div className="min-h-screen bg-slate-100/30 text-slate-950 antialiased font-sans">
            <Header
            searchTerm={searchTerm}
            onSearchChange={setSearchTeam}/>

            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <Sidebar categories={categories} />

                    <section className="lg:col-span-9">
                        <div className="border border-slate-200 rounded-[1.25rem] bg-slate-50/50 p-5 shadow-sm">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <h1 className="text-xl font-bold tracking-tight text-slate-900">
                                    Recommended for you
                                </h1>

                                <select className="border border-slate-200 bg-white rounded-xl py-2 px-3 text-sm text-slate-950">
                                    <option>Newest</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Best Selling</option>
                                </select>
                            </div>

                            <div className="mt-5 h-px bg-slate-100"></div>

                            <ProductGrid products={products} />
                        </div>
                    </section>
                </div>
            </main>

            <Newsletter />
            <Footer />
        </div>
    );
}

export default App;