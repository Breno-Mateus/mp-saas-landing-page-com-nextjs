"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavigation = (id: string) => {
    setMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="flex justify-between p-3.5 md:p-11">
      <a href="#" onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}>
        <Image
          src="/images/Logo.svg"
          alt="Logo da LivroSaaS"
          width={129}
          height={40}
          priority
        />
      </a>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-6">
          <li>
            <a 
              href="#funcionamento" 
              className="hover:underline"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("funcionamento");
              }}
            >
              Funcionamento
            </a>
          </li>
          <li>
            <a 
              href="#preço" 
              className="hover:underline"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("preço");
              }}
            >
              Preço
            </a>
          </li>
          <li>
            <Button 
              variant="secondary" 
              className="border border-gray-400"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("login");
              }}
            >
              Login
            </Button>
          </li>
        </ul>
      </nav>

      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
            <div 
              ref={menuRef}
              className="fixed inset-y-0 right-0 w-3/4 bg-background p-6 shadow-lg animate-in slide-in-from-right-80"
            >
              <div className="flex justify-end mb-8">
                <button 
                  onClick={() => setMenuOpen(false)}
                  aria-label="Fechar menu"
                  className="p-2 rounded-full hover:bg-accent"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <nav>
                <ul className="space-y-6">
                  <li>
                    <a
                      href="#funcionamento"
                      className="block py-3 text-lg hover:text-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation("funcionamento");
                      }}
                    >
                      Funcionamento
                    </a>
                  </li>
                  <li>
                    <a
                      href="#preço"
                      className="block py-3 text-lg hover:text-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation("preço");
                      }}
                    >
                      Preço
                    </a>
                  </li>
                  <li className="mt-8">
                    <Button
                      variant="secondary"
                      className="border border-gray-400 w-full"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation("login");
                      }}
                    >
                      Login
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;