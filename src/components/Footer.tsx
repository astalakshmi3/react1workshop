import {  Package2 , Info, Phone, Shield} from "lucide-react";

type FooterProps = {
    brand: string;
};

const Footer = ({ brand }: FooterProps) => {
    return (
        <footer className="mt-10 border-t bg-white">
            <div className="mx-auto max-w-7xl px-4 py-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                        <Package2 size={18} className="text-blue-600" />
                        <p className="text-sm font-semibold">{brand}</p>
                    </div>

                    <div className="flex items-center gap-4 text-slate-600">
                        <a href="#" className="text-sm hover:underline">
                            <Info size={16} className="inline-block mr-1" />
                            About Us
                        </a>
                        <a href="#" className="text-sm hover:underline">
                            <Phone size={16} className="inline-block mr-1" />
                            Contact
                        </a>
                        <a href="#" className="text-sm hover:underline">
                            <Shield size={16} className="inline-block mr-1" />
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <p className="mt-4 text-sm text-slate-500">
                    © 2026 {brand}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;