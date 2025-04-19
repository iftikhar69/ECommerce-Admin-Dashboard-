import { useState } from "react";
import { 
  ShoppingBag, 
  Home, 
  ShoppingCart, 
  Package, 
  Users, 
  CreditCard, 
  BarChart3, 
  Settings 
} from "lucide-react";

export default function Sidebar({ isMobileMenuOpen }) {
  const [activeLink, setActiveLink] = useState("dashboard");

  const links = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "products", label: "Products", icon: Package },
    { id: "customers", label: "Customers", icon: Users },
    { id: "transactions", label: "Transactions", icon: CreditCard },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];
  
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white/90 backdrop-blur-md shadow-xl transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-16 items-center border-b border-indigo-100 px-6">
        <a href="#" className="flex items-center gap-2 font-semibold group">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-70 blur-sm group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
          </div>
          <span className="text-lg bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-600 bg-clip-text text-transparent font-bold">
            Shpoy
          </span>
        </a>
      </div>
      
      <div className="flex-1 overflow-auto py-6">
        <nav className="grid items-start px-4 text-sm gap-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = activeLink === link.id;
            
            return (
              <a
                key={link.id}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.id);
                }}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 text-purple-900 shadow-sm"
                    : "text-slate-500 hover:text-purple-900 hover:bg-indigo-50/50"
                }`}
              >
                <Icon className={`h-4 w-4 transition-colors duration-300 ${isActive ? "text-purple-600" : ""}`} />
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
      
      <div className="mt-auto p-4">
        <div className="rounded-xl overflow-hidden">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 animate-gradient-x"></div>
            <div className="relative p-5 text-white">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Upgrade to Pro</p>
                <p className="text-xs opacity-90">Get exclusive features and priority support</p>
                <button className="mt-2 w-full rounded-md bg-white/90 backdrop-blur px-3 py-2 text-sm font-medium text-purple-700 hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}