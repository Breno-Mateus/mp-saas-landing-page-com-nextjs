import Image from "next/image";

const Footer = () => {
  return(
    <footer className="bg-white flex flex-col items-center gap-4 py-10">
      <Image
        src="/images/Logo.svg"
        alt="Logo da LivroSaaS"
        width={129}
        height={40}
      />
      <p className="font-light text-gray-500 text-xs">© 2025 LivroSaaS. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;