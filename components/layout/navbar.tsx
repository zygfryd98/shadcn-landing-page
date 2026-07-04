"use client";

import { Menu } from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Strona główna",
  },
  {
    href: "#services",
    label: "Obsługiwane systemy",
  },
  {
    href: "#about",
    label: "O mnie",
  },
  {
    href: "#contact",
    label: "Kontakt",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="flex items-center gap-3">
  <Image
    src="/logo.svg"
    alt="naklikane industries"
    width={36}
    height={36}
  />

  <span className="font-bold text-lg">naklikane industries</span>
</Link>

      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle>
                  <Link href="/">naklikane industries</Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <nav className="hidden lg:flex items-center gap-6">
        {routeList.map(({ href, label }) => (
          <Link key={href} href={href} className="text-base hover:text-primary">
            {label}
          </Link>
        ))}
      </nav>

      <div className="hidden lg:flex">
        <ToggleTheme />
      </div>
    </header>
  );
};