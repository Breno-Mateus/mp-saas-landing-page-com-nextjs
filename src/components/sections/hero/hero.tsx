import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="flex flex-col gap-16 items-center pt-20 pb-28">
      <div className="flex flex-col gap-4 max-w-2xs md:max-w-2xl lg:max-w-3xl">
        <h1 className="font-bold text-black text-2xl md:text-6xl text-center">
          Simplifique Seus Estudos
        </h1>
        <h2 className="font-normal text-xs md:text-xl text-gray-500 text-center">
          Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e
          receba todos os meses um ebook novo de programação.
        </h2>
      </div>

      <div className="flex flex-col items-center gap-7 md:gap-2">
        <div className="flex gap-4">
          <Input
            placeholder="Coloque seu email"
            className="bg-white text-xs md:text-base md:w-xs shadow-xs"
          />
          <Button variant="default" className="text-xs md:text-base">Assine Agora</Button>
        </div>
        <p className="text-[10px] md:text-xs text-gray-500">
          Comece sua assinatura agora mesmo. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
};

export default Hero;
