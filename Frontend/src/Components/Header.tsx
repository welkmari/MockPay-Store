import { Search, ShoppingCart } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <>
      <div className="flex items-center gap-10 text-sm font-semibold">
        <a href="">ICONE</a>
        <a href="">Laptops</a>
        <a href="">Desktop PCs</a>
        <a href="">Networking Devices</a>
        <a href="">Printers & Scanners</a>
        <a href="">PC Parts</a>
        <a href="">All Other Products</a>
        <a href="">Repairs</a>
        <a href="">Our Deals</a>

        <Search className="cursor-pointer" />
        <ShoppingCart className="cursor-pointer" />
      </div>
      <hr  />
    </>
  );
};


