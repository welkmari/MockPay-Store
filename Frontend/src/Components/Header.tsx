import React from "react";
import {
  NavigationMenuBase,
  NavigationMenuListBase,
  NavigationMenuItemBase,
  NavigationMenuTriggerBase,
  NavigationMenuContentBase,
  NavigationMenuLinkBase,
} from "@mlw-packages/react-components";
import { Search, ShoppingCart } from "lucide-react";

export default function Header() {
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
        <NavigationMenuBase>
          <NavigationMenuListBase>
            <NavigationMenuItemBase>
              <NavigationMenuTriggerBase>Products</NavigationMenuTriggerBase>
              <NavigationMenuContentBase>
                <NavigationMenuLinkBase href="#shirts">
                  Shirts
                </NavigationMenuLinkBase>
              </NavigationMenuContentBase>
            </NavigationMenuItemBase>
          </NavigationMenuListBase>
        </NavigationMenuBase>

        <Search className="cursor-pointer" />
        <ShoppingCart className="cursor-pointer" />
      </div>
      <hr />
    </>
  );
}
