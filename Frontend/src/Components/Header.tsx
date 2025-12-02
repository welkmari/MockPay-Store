import {Search , ShoppingCart }from 'lucide-react'

export const Header: React.FC = () => {
    return (
      <div>
        <p>Laptops</p>
        <p>Desktops PCs</p>
        <p>Networkings Devices</p>
        <p>Pc Parts</p>
        <p>All Other Produtcs</p>
        <p>Repairs</p>
        <p>Our Details</p>
        <Search/>
        <ShoppingCart/>
        <hr />
      </div>
    );
  };

