import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

const App = () => {
    const categories = [
        "All Products",
        "Outerwear",
        "Footwear",
        "Accessories",
    ];

    const products = [
        {
            id: 1,
            title: "Technical Shell Jacket",
            price: "890 kr",
            image:
                "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800",
        },
        {
            id: 2,
            title: "Speedster Running Shoes",
            price: "1,200 kr",
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
        },
        {
            id: 3,
            title: "Minimalist Quartz Watch",
            price: "1,850 kr",
            image:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-100/30 text-slate-950">
            <Header brand="LITE.SHOP" />

            <main className="mx-auto max-w-7xl px-4 py-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <Sidebar categories={categories} />
                    <ProductGrid products={products} />
                </div>
            </main>

            <Footer brand="LITE.SHOP" />
        </div>
    );
};

export default App;