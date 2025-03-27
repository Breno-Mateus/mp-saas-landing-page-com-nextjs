import { Button } from "@/components/ui/button";

const End = () => {
  return(
    <section className="bg-white flex flex-col items-center gap-14 pt-28 pb-32">
      <div className="flex flex-col gap-4 items-center max-w-4xl p-4 md:p-12 lg:p-0">
        <h1 className="font-bold text-2xl lg:text-6xl text-center">Pronto Para Mudar Sua Vida?</h1>
        <h2 className="font-normal text-xs lg:text-xl text-gray-500 text-center max-w-2xl">Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos.</h2>
      </div>
      <Button variant="default" className="w-xs lg:w-md">Assine Agora</Button>
      <p className="font-light text-xs text-gray-500">Comece sua assinatura agora mesmo. Cancele quando quiser.</p>
    </section>
  );
};

export default End;