import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";

export const SupportSection = () => {
  return (
    <section className="relative bg-gray-500 pb-8 md:py-10">
      <div className="absolute inset-0 hidden bg-[url('/assets/landing-page/background-support-feature.svg')] bg-cover bg-center bg-no-repeat opacity-90 md:block" />

      <div className="container relative z-10 flex flex-col items-center gap-12">
        
        <h2 className="font-sans text-heading-xl text-center text-gray-100 text-balance">
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col gap-2 rounded-lg bg-blue-400 p-6 text-left md:p-12">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300">
              <PaintbrushVertical className="h-6 w-6 text-white" />
            </div>

            <strong className="text-heading-sm text-gray-100">
              Personalize seu site
            </strong>
            <p className="text-body-sm text-gray-200">
              Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com
              a sua cara.
            </p>
          </div>

          {/* Card 2 - Destaque */}
          <div className="flex flex-col gap-2 rounded-lg bg-cyan-300 p-6 text-left md:p-12">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-200">
              <Store className="h-6 w-6 text-white" />
            </div>

            <strong className="text-heading-sm text-gray-100">
              Vender de qualquer loja
            </strong>
            <p className="text-body-sm text-gray-200">
              Não importa de onde vem o produto, você pode vender de qualquer
              loja usando nossa plataforma.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-2 rounded-lg bg-blue-400 p-6 text-left md:p-12">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300">
              <HeartHandshake className="h-6 w-6 text-white" />
            </div>

            <strong className="text-heading-sm text-gray-100">
              Receba suporte amigável
            </strong>
            <p className="text-body-sm text-gray-200">
              Nossa equipe está sempre pronta para ajudar você com qualquer
              dúvida ou problema que surgir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};