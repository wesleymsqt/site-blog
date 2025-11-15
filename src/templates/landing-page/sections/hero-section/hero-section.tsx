import { ArrowBigRight, Clock, Store } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="container relative mt-16 flex items-center justify-center">
      <div className="grid min-h-[20rem] grid-cols-1 items-center gap-8 md:h-[36rem] md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start">
          <h1 className="text-heading-hg text-gray-100 font-sans text-center md:text-left">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-cyan-100" />
              <span className="text-body-md text-gray-200">
                Crie o seu site em menos de 5 minutos
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Store className="h-4 w-4 text-cyan-100" />
              <span className="text-body-md text-gray-200">
                Acompanhe e otimize seu negócio online
              </span>
            </div>

            <div className="mt-5 flex flex-col items-center gap-2 text-white md:items-start">
              <Button className="w-fit rounded-full" asChild>
                <Link href="/criar-loja">
                  {" "}
                  Criar loja grátis
                  <ArrowBigRight className="ml-2 h-4 w-4" />{" "}
                </Link>
              </Button>
              <p className="text-body-xs text-gray-300">
                Não precisa de cartão de crédito
              </p>
            </div>
          </div>
        </div>

        <div className="relative hidden h-full w-full items-center justify-center md:flex">
          <Image
            src="/assets/landing-page/hero-section.svg"
            alt="Ilustração da plataforma Site.Set"
            width={600}
            height={600}
            className="h-full w-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};
