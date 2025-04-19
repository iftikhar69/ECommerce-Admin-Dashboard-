import { Bell, User, ChevronDown, MenuIcon } from "lucide-react";

export default function Header({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-indigo-100/50 bg-white/80 backdrop-blur-md px-4 sm:px-6 shadow-sm">
      <button 
        className="rounded-md border border-gray-200 p-2 text-gray-500 hover:bg-indigo-50 hover:text-purple-700 transition-colors duration-300 md:hidden" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <MenuIcon className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </button>
      
      <div className="w-full flex-1">
        <h1 className="text-lg font-semibold bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 bg-clip-text text-transparent md:text-xl">
          Dashboard
        </h1>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="relative rounded-full p-2 hover:bg-indigo-50/80 transition-colors duration-300 group">
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          <Bell className="h-5 w-5 text-gray-500 group-hover:text-purple-700 transition-colors duration-300" />
        </button>
        
        <div className="relative">
          <button className="flex items-center gap-2 rounded-full border border-gray-200 p-1 pr-3 hover:bg-indigo-50/80 hover:border-indigo-200 transition-all duration-300">
            <div className="h-8 w-8 overflow-hidden rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 shadow-md">
              <User className="h-full w-full p-1.5 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">Admin</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
}