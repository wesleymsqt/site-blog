import { Button } from "../ui/button";
import Link from "next/link";
import { ActiveLink } from "../active-link";

export const Header = () => {
  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-backgorund/95 backdrop:blur 
    supports-[backdrop-filter]:bg-background/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">Logo</Link>

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Incio</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button variant={"secondary"} asChild>
              <Link href="/comecar">Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
