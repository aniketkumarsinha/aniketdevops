
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Youtube } from "lucide-react";
import { ThemeToggle } from "./ThemeProvider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-bold text-devops-700 dark:text-devops-400">
          Aniket<span className="text-devops-500">@DevOps</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-devops-600 dark:hover:text-devops-400 transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="https://www.youtube.com/playlist?list=PLL4TUV2Y6CBNa_C0MkfjIlR1YS-WTHTxR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors"
            >
              <Youtube size={18} />
              <span>YouTube</span>
            </a>
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMenu}
          className="md:hidden"
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-lg py-4">
          <nav className="flex flex-col gap-2">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
            <a 
              href="https://www.youtube.com/playlist?list=PLL4TUV2Y6CBNa_C0MkfjIlR1YS-WTHTxR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
              onClick={toggleMenu}
            >
              <Youtube size={18} className="text-red-600" />
              <span>YouTube</span>
            </a>
            <div className="px-4 py-2 flex items-center gap-2">
              <span className="text-gray-700 dark:text-gray-300">Theme:</span>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
