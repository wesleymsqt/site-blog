import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 dark">
      <div className="mx-auto max-2-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex md:flex-row justify-between gap-8 py-8">
          <Link href={"/"}>
            <Image src="/logo" alt="Logo site" width={116} height={32} />
          </Link>

          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <Link href="/termos-de-uso" className="hover:text-primary">Termos de uso</Link>
            <Link href="/politica_de_privacidade" className="hover:text-primary">Politica de privacidade</Link>
            <Link href="/feedback" className="hover:text-primary">Feedback</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
