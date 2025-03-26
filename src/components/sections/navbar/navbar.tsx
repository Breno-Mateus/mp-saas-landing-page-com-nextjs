"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between p-3.5 md:p-11">
      <Image
        src="/images/Logo.svg"
        alt="Logo da LivroSaaS"
        width={129}
        height={40}
      />

      <nav className="hidden md:block">
        <ul className="flex items-center gap-6">
          <li>
            <a href="#funcionamento" className="hover:underline">
              Funcionamento
            </a>
          </li>
          <li>
            <a href="#preço" className="hover:underline">
              Preço
            </a>
          </li>
          <li>
            <Button variant="secondary" className="border border-gray-400">
              Login
            </Button>
          </li>
        </ul>
      </nav>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <ul className="flex flex-col items-center gap-4 space-y-6 mt-24">
            <li>
              <a
                href="#funcionamento"
                className="hover:underline"
                onClick={() => setOpen(false)}
              >
                Funcionamento
              </a>
            </li>
            <li>
              <a
                href="#preço"
                className="hover:underline"
                onClick={() => setOpen(false)}
              >
                Preço
              </a>
            </li>
            <li>
              <Button
                variant="secondary"
                className="border border-gray-400"
                onClick={() => setOpen(false)}
              >
                Login
              </Button>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
