import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { products } from "./data/products";
import { useState } from "react";
import type {Product} from "./types/Product.ts";
import {useTheme}  from "./context/ThemeContext.tsx";

const categories = ["All Products", "Outerwear", "Footwear", "Accessories"];

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Products");
    // How many products were added
    const [cartCount, setCardCount]= useState<Product [] > ([]);
    const { theme} = useTheme();

    // Create add to cart function
    const handleAddToCart = (product : Product) => {
        setCardCount((prevCount) => [...prevCount, product]);
    };
    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "All Products" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });
    // This approach ensures that the filtering logic is straightforward and efficient, without the need for an additional state variable to hold the filtered products.
    // The UI will automatically update whenever the search term or selected category changes, providing a seamless user experience.
    // useEffect(() => {
    // start with all products and apply filters based on search term and selected category
     //       let result = allProducts;
    // filter by category
       //     if (selectedCategory !== "All") {
     //           result = result.filter((product) => product.category === selectedCategory);
        //    }
// filter by search text
          //  if (searchTerm.trim() !== "") {
            //    result = result.filter((product) =>
              //      product.name.toLowerCase().includes(searchTerm.toLowerCase())
               // );
           // }
// update the state and save
           // setFilteredProducts(result);
        // }, [searchTerm, selectedCategory]);
    return (
        <div className={`${theme === "dark" ? "dark" : "bg-slate-900 text-white min-h-screen"}`}>
            <h1> Hello </h1>
        <div className="min-h-screen bg-slate-100/30 text-slate-950 antialiased font-sans">
            <Header
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                // pass cart count to header
                cartCount = {cartCount.length}
            />

            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <Sidebar
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />

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

                            <ProductGrid products={filteredProducts}
                            onAddToCart = {handleAddToCart} />
                        </div>
                    </section>
                </div>
            </main>

            <Newsletter />
            <Footer />
        </div>
        </div>

    );
}

export default App;