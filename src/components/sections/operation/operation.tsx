import { Check } from "lucide-react";
import Image from "next/image";

const Operation = () => {
  return (
    <section className="bg-white flex flex-col items-center pt-9 pb-20">
      <h1 className="font-bold text-xl md:text-4xl">Como funciona?</h1>
      <div className="flex p-7 gap-6 md:gap-8 lg:gap-16 items-center">
        <Image
          src="/images/woman.svg"
          alt="Mulher carregando caixas"
          width={392}
          height={392}
          className="hidden lg:block"
        />
        <Image
          src="/images/woman-1.png"
          alt="Mulher carregando caixas"
          width={130}
          height={130}
          className="lg:hidden"
        />
        <div>
          <ul className="flex flex-col gap-3 md:gap-9 w-44 md:w-72 lg:w-md">
            <li className="flex justify-between items-center">
              <p className="font-normal text-xs md:text-xl lg:text-3xl text-gray-500">Acesso a 1 ebook por mês</p>
              <Check className="text-green-500"/>
            </li>
            <li className="flex justify-between items-center">
              <p className="font-normal text-xs md:text-xl lg:text-3xl text-gray-500">Curadoria especial</p>
              <Check className="text-green-500"/>
            </li>
            <li className="flex justify-between items-center">
              <p className="font-normal text-xs md:text-xl lg:text-3xl text-gray-500">Cancele quando quiser</p> 
              <Check className="text-green-500"/>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Operation;
