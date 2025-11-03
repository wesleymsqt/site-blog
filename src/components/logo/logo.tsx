import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <footer className="border-t border-white/10 dark">
      <div className="mx-auto max-2-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex md:flex-row justify-between gap-8 py-8">
          <Link href={"/"} title="Pagina inicial">
            <Image src="/logo.svg" alt="Logo site" width={116} height={32} />
          </Link>
        </div>
      </div>
    </footer>
  );
};
