'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, MapPin, Wrench, Clock, ShieldCheck, ArrowRight, Star, ChevronDown } from 'lucide-react';


const DADOS_OFICINA = {
  nome: "Store Motopeças",
  whatsapp: "5562992233968",
  telefone: "+556232957070",
  telefoneDisplay: "(62) 3295-7070",
  endereco: "Avenida Trindade, Qd-12 Lt-17 Nº 1818, Goiânia - GO, 74496-080",
  email: "contato@store_motopecas.com.br",
  googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.894254421111!2d-49.36219462402174!3d-16.682052983842148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935efc1064a38569%3A0x24250e3c07c7c8a1!2sStore%20Moto%20Pe%C3%A7as%20Eireli!5e0!3m2!1spt-BR!2sbr",
  horario: "Seg-Sex: 8h às 18h | Sáb: 8h às 12h",
  mensagemWhatsapp: "Olá! Vi o site da Store Motopeças e gostaria de agendar uma revisão para minha moto.",
};

// --- Lista de Serviços ---
const SERVICOS = [
  {
    icone: <Wrench size={32} className="text-red-500" />,
    titulo: "Revisão Completa",
    descricao: "Check-up detalhado de todos os componentes vitais. Garantimos sua segurança e o funcionamento perfeito da sua moto.",
  },
  {
    icone: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M12 2.69l.13.12a10 10 0 0 1 5.23 5.23l.12.13A10 10 0 0 1 12 21.31l-.13-.12a10 10 0 0 1-5.23-5.23l-.12-.13A10 10 0 0 1 12 2.69z"/><path d="M12 8v4l2 2"/></svg>,
    titulo: "Troca de Óleo e Filtros",
    descricao: "Utilizamos apenas óleos e filtros recomendados pela fabricante para maximizar a vida útil do seu motor.",
  },
  {
    icone: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M12 12v-2"/><path d="M16 6V4H8v2"/><path d="M12 12H8"/><path d="M12 12h4"/><path d="M16 18v-2h-8v2z"/><path d="M12 12v6"/></svg>,
    titulo: "Elétrica e Injeção",
    descricao: "Diagnóstico preciso e reparo de sistemas elétricos e de injeção eletrônica com equipamentos de ponta.",
  },
  {
    icone: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.8.6-3.39-1.21-3.39-1.21-.36-.91-.89-1.15-.89-1.15-.73-.5.05-.49.05-.49.81.06 1.23.83 1.23.83.72 1.22 1.89.87 2.35.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.94-.01 2.2 0 .21.15.46.55.38A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>,
    titulo: "Pneus e Alinhamento",
    descricao: "Troca, calibragem e alinhamento de rodas para garantir estabilidade, segurança e uma pilotagem suave.",
  },
  {
    icone: <Star size={32} className="text-red-500" />,
    titulo: "Capacetes & Acessórios",
    descricao: "Varios modelos de capacetes e todos os tipos de acessórios para sua moto .",
  },
  {
    icone: <ShieldCheck size={32} className="text-red-500" />,
    titulo: "Motor e Transmissão",
    descricao: "Reparos complexos e manutenção preventiva de motor e câmbio, realizados por mecânicos experientes.",
  },
];

// --- Componentes da Página ---

// Componente reutilizável para a seta de rolagem
const ScrollArrow = ({ targetId, bgColor = 'bg-red-700' }) => (
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
      <a href={`#${targetId}`} aria-label={`Rolar para a seção ${targetId}`}>
        <div className={`${bgColor} p-3 rounded-full shadow-lg animate-bounce`}>
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </a>
    </div>
);

// Componente do Cabeçalho/Navegação
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <header className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-blue-950 shadow-lg' : 'bg-red-900'}`}>
        <div className="container mx-auto max-w-6xl px-6 flex justify-center items-center h-20 relative text-white">

          {/* Logo Central Flutuante (Desktop) */}
          <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 z-10 transition-all duration-300 ease-in-out ${scrolled ? 'top-1 w-24' : 'top-0 w-[250px]'}`}>
            <a href="#">
              <Image
                  src="/gallery/logo-top.png"
                  alt="Logo Store Motopeças"
                  width={250}
                  height={144}
                  className="filter drop-shadow-lg"
              />
            </a>
          </div>

          {/* Navegação (Desktop) */}
          <nav className="hidden md:flex w-full items-center justify-center">
            <div className="flex items-center space-x-8">
              <a href="#servicos" className="hover:text-red-500 transition-colors duration-300">Serviços</a>
              <a href="#diferenciais" className="hover:text-red-500 transition-colors duration-300">Diferenciais</a>
            </div>
            <div className="w-[280px]"></div> {/* Espaço para a logo */}
            <div className="flex items-center space-x-8">
              <a href="#galeria" className="hover:text-red-500 transition-colors duration-300">Galeria</a>
              <a href="#contato" className="hover:text-red-500 transition-colors duration-300">Contato</a>
            </div>
          </nav>

          {/* Botão WhatsApp (Desktop) - Posicionado absolutamente */}
          <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2">
            <a
                href={`https://api.whatsapp.com/send?phone=${DADOS_OFICINA.whatsapp}&text=${encodeURIComponent(DADOS_OFICINA.mensagemWhatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition-transform duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              <Image
                  src="/gallery/WhatsApp.png"
                  alt="WhatsApp Icon"
                  width={24}
                  height={24}
                  className="mr-3"
              />
              <span>Whatsapp</span>
            </a>
          </div>

          {/* Mobile view */}
          <div className={`md:hidden flex justify-between w-full items-center transition-colors duration-300 ${scrolled ? '' : 'bg-blue-950 bg-opacity-80 p-2 rounded-lg'}`}>
            <a href="#">
              <Image src="/gallery/logo-top.png" width={80} height={80} alt="Logo Store Motopeças" />
            </a>
            <a href={`https://api.whatsapp.com/send?phone=${DADOS_OFICINA.whatsapp}&text=${encodeURIComponent(DADOS_OFICINA.mensagemWhatsapp)}`} target="_blank" rel="noopener noreferrer" className="bg-green-600 p-2 rounded-full">
              <Phone className="text-white h-5 w-5" />
            </a>
          </div>
        </div>
      </header>
  );
};


// Componente da Seção Herói (Principal)
const Hero = () => (
    <div className="bg-blue-950 pt-10 pb-7 sm:pb-11 relative">
      <section className="container mx-auto max-w-6xl grid md:grid-cols-2">
        <div className="w-full rounded-lg overflow-hidden">
          <Image
              src="/oficina.png"
              alt="Frente da oficina Store Motopeças"
              width={960}
              height={720}
              className="w-full h-full object-cover"
              priority
          />
        </div>
        <div className="bg-blue-950 text-white flex items-center justify-center p-8 md:p-12">
          <div className="max-w-md text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 uppercase hidden md:block">
              Cuidamos da sua moto como se fosse nossa.
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Oficina especializada em motos de todas as cilindradas. Mais de 10 anos de experiência para garantir sua segurança e performance.
            </p>
            <div className="flex justify-center md:justify-start items-center space-x-6 mb-10 text-sm">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="text-red-500" />
                <span>+20 Anos de Experiência</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.94 0l.02-.02 1.5-1.5.02-.02c.82-.82.82-2.13 0-2.94L12 5Z" /></svg>
                <span>Serviço Leva e Traz</span>
              </div>
            </div>
            <a
                href={`https://api.whatsapp.com/send?phone=${DADOS_OFICINA.whatsapp}&text=${encodeURIComponent(DADOS_OFICINA.mensagemWhatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              <Image
                  src="/gallery/WhatsApp.png"
                  alt="WhatsApp Icon"
                  width={40}
                  height={40}
                  className="mr-3 shadow-2xs"
              />
              <span>(62) 99223-3968</span>
            </a>
          </div>
        </div>
      </section>
      <ScrollArrow targetId="servicos" bgColor="bg-red-700" />
    </div>
);

// Componente da Seção de Serviços
const Services = () => (
    <div className="relative">
      <section id="servicos" className="pt-28 pb-20 bg-gray-200">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950">Nossos Principais Serviços</h2>
            <p className="text-gray-600 mt-2">Soluções completas para todos os tipos de moto.</p>
            <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
          </div>
          {/* Visualização para Desktop */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICOS.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-3 bg-red-400 transition-transform duration-300">
                  <div className="flex justify-center mb-4">
                    {service.icone}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-950 mb-2">{service.titulo}</h3>
                  <p className="text-gray-600">{service.descricao}</p>
                </div>
            ))}
          </div>
          {/* Visualização para Mobile */}
          <div className="md:hidden bg-white p-6 rounded-lg shadow-lg">
            <ul className="space-y-3 list-disc list-inside text-blue-950">
              {SERVICOS.map((service, index) => (
                  <li key={index} className="text-xl font-semibold">{service.titulo}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <ScrollArrow targetId="diferenciais" bgColor="bg-red-700" />
    </div>
);

// Componente da Seção de Diferenciais
const Differentiators = () => (
    <div className="relative">
      <section id="diferenciais" className="pt-28 pb-20 bg-blue-950 text-white">
        <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
                src="/gallery/2-scaled.png"
                alt="Serviço de busca e entrega de motos"
                className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 hidden md:block">Sua Comodidade é Nossa Prioridade</h2>
            <div className="w-24 h-1 bg-red-500 mb-6 mx-auto md:mx-0"></div>
            <p className="text-lg mb-6 text-gray-300">
              Não tem tempo de trazer sua moto? Nós resolvemos. Oferecemos o serviço <strong>Busca e Entrega</strong> em toda a região. Agende a retirada e cuidamos de todo o resto com a máxima segurança e praticidade.
            </p>
            <a
                href={`https://api.whatsapp.com/send?phone=${DADOS_OFICINA.whatsapp}&text=${encodeURIComponent("Olá! Gostaria de saber mais sobre o serviço Busca e Entrega.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-3 px-6 rounded-lg text-lg uppercase transition-all duration-300 inline-flex items-center"
            >
              Saber Mais <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      <ScrollArrow targetId="galeria" bgColor="bg-red-700" />
    </div>
);

// Componente da Galeria de Fotos
const Gallery = () => {
  const images = [
    'foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg',
    'foto5.jpg', 'foto6.jpg', 'foto7.jpg', 'foto8.webp',
  ];

  return (
      <div className="relative">
        <section id="galeria" className="pt-28 pb-20 bg-gray-200">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-950 hidden md:block">Qualidade Garantida!</h2>
              <p className="text-gray-600 mt-2">Confira alguns dos nossos trabalhos e nossa estrutura.</p>
              <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1">
                    <img
                        src={`/gallery/${image}`}
                        alt={`Trabalho realizado ${index + 1}`}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 cursor-pointer"
                    />
                  </div>
              ))}
            </div>
          </div>
        </section>
        <ScrollArrow targetId="contato" bgColor="bg-red-700" />
      </div>
  );
};


// Componente da Seção de Localização e Contato
const Location = () => (
    <section id="contato" className="pt-28 pb-20 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-950 hidden md:block">Venha conhecer nossa oficina</h2>
          <p className="text-gray-600 mt-2">Estamos prontos para te receber!</p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 bg-gray-200 p-8 rounded-lg shadow-xl">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Nossa Localização</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                  src={DADOS_OFICINA.googleMapsLink}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Oficina"
              ></iframe>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Informações de Contato</h3>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center">
                <MapPin className="mr-3 text-red-500" /> {DADOS_OFICINA.endereco}
              </p>
              <p className="flex items-center">
                <Phone className="mr-3 text-red-500" /> {DADOS_OFICINA.telefoneDisplay}
              </p>
              <p className="flex items-center">
                <Clock className="mr-3 text-red-500" /> {DADOS_OFICINA.horario}
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                  href={DADOS_OFICINA.googleMapsLink.replace('/embed', '/place/Store+Moto+Peças+Eireli')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors duration-300"
              >
                Ver Rota no Google Maps
              </a>
              <a
                  href={`tel:${DADOS_OFICINA.telefone}`}
                  className="bg-gray-700 hover:bg-blue-950 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors duration-300"
              >
                Ligar para a Oficina
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
);

// Componente do Rodapé
const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
      <footer className="bg-blue-950 text-gray-400 py-8">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <p>&copy; {currentYear} {DADOS_OFICINA.nome}. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">
            Desenvolvido por:  <a className="hover: text-red-500" href='{https://www.linkedin.com/in/vandersonhsantos/}'>BioOlegari</a>
          </p>
        </div>
      </footer>
  );
};


// Página Principal que renderiza todos os componentes
export default function HomePage() {
  return (
      <main className="bg-white font-sans">
        <Navbar />
        <Hero />
        <Services />
        <Differentiators />
        <Gallery />
        <Location />
        <Footer />
      </main>
  );
}
