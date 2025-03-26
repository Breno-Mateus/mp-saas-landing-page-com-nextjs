import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Prices = () => {
  return(
    <section className="flex flex-col items-center gap-20 pt-28 pb-32">
      <div className="flex flex-col gap-4 items-center max-w-4xl p-4 md:p-12 lg:p-0">
        <h1 className="font-bold text-2xl lg:text-6xl text-center">Preço Simples e Transparente</h1>
        <h2 className="font-normal text-xs lg:text-xl text-gray-500 text-center">Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? Assine o nosso plano mensal <span className="underline">Pro Premium VIP</span> e garanta mensalmente um ebook novo de programação. E por menos de um café por dia.</h2>
      </div>
      <Card className="w-xs lg:w-md flex flex-col gap-12">
        <CardHeader>
          <CardTitle className="font-semibold text-xl lg:text-2xl">Plano Pro Premium VIP</CardTitle>
          <CardDescription className="text-xs lg:text-base text-gray-500">Tudo que você precisa para seus estudos</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center">
            <CardTitle className="font-semibold text-2xl lg:text-4xl">R$29</CardTitle>
            <CardDescription className="font-medium text-gray-500 text-sm lg:text-xl">/mês</CardDescription>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-8 items-center">
                <Check className="text-green-500"/>
                <CardDescription className="font-medium text-xs lg:text-sm">1 ebook por mês</CardDescription>
              </li>
              <li className="flex gap-8 items-center">
                <Check className="text-green-500"/>
                <CardDescription className="font-medium text-xs lg:text-sm">Curadoria especial</CardDescription>
              </li>
              <li className="flex gap-8 items-center">
                <Check className="text-green-500"/>
                <CardDescription className="font-medium text-xs lg:text-sm">Acesso ilimitado</CardDescription>
              </li>
              <li className="flex gap-8 items-center">
                <Check className="text-green-500"/>
                <CardDescription className="font-medium text-xs lg:text-sm">Cancele a qualquer momento</CardDescription>
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="default" className="w-5/6">Assine Agora</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Prices;