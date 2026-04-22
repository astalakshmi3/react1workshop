export type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    oldPrice?: number;
    rating: number;
    image: string;
    status: string;
    badge: string;
    inStock: boolean;
};