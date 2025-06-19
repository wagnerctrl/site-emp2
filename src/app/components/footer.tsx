"use client";

import React from 'react';
import { 
  IconMail, 
  IconPhone, 
  IconMapPin, 
  IconBrandLinkedin, 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconBrandTwitter 
} from '@tabler/icons-react';

/**
 * Componente Footer Institucional
 * 
 * Footer completo com informações de contato, mapa do site,
 * links legais e redes sociais. Totalmente responsivo e acessível.
 */
export default function Footer() {
  // Ano atual para copyright dinâmico
  const currentYear = new Date().getFullYear();

  // Dados de contato da empresa
  const contactInfo = {
    address: "Rua das Tecnologias, 123 - Sala 456\nCentro Empresarial Tech\nSão Paulo, SP - CEP: 01234-567",
    phone: "+55 (11) 9 9999-9999",
    email: "contato@primecodesolutions.com.br"
  };

  // Links do mapa do site organizados por categoria
  const siteMapLinks = {
    empresa: [
      { name: "Sobre Nós", href: "/sobre" },
      { name: "Nossa Equipe", href: "/equipe" },
      { name: "Missão e Valores", href: "/missao" },
      { name: "Carreiras", href: "/carreiras" }
    ],
    servicos: [
      { name: "Desenvolvimento Web", href: "/servicos/web" },
      { name: "Aplicativos Mobile", href: "/servicos/mobile" },
      { name: "Consultoria Tech", href: "/servicos/consultoria" },
      { name: "Suporte Técnico", href: "/servicos/suporte" }
    ],
    recursos: [
      { name: "Blog", href: "/blog" },
      { name: "Cases de Sucesso", href: "/cases" },
      { name: "Downloads", href: "/downloads" },
      { name: "FAQ", href: "/faq" }
    ],
    contato: [
      { name: "Fale Conosco", href: "/contato" },
      { name: "Orçamento", href: "/orcamento" },
      { name: "Suporte", href: "/suporte" },
      { name: "Localização", href: "/localizacao" }
    ]
  };

  // Links das redes sociais
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/primecodesolutions",
      icon: IconBrandLinkedin,
      ariaLabel: "Siga-nos no LinkedIn"
    },
    {
      name: "Facebook",
      href: "https://facebook.com/primecodesolutions",
      icon: IconBrandFacebook,
      ariaLabel: "Curta nossa página no Facebook"
    },
    {
      name: "Instagram",
      href: "https://instagram.com/primecodesolutions",
      icon: IconBrandInstagram,
      ariaLabel: "Siga-nos no Instagram"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/primecodesol",
      icon: IconBrandTwitter,
      ariaLabel: "Siga-nos no Twitter"
    }
  ];

  // Links legais
  const legalLinks = [
    { name: "Política de Privacidade", href: "/privacidade" },
    { name: "Termos de Uso", href: "/termos" },
    { name: "Cookies", href: "/cookies" },
    { name: "LGPD", href: "/lgpd" }
  ];

  return (
    <footer className="bg-neutral-900 text-white" role="contentinfo">
      {/* Seção principal do footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Seção de Contato */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Entre em Contato
            </h3>
            
            {/* Endereço */}
            <div className="mb-4 flex items-start space-x-3">
              <IconMapPin 
                className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" 
                aria-hidden="true"
              />
              <address className="text-sm text-neutral-300 not-italic leading-relaxed">
                {contactInfo.address.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < contactInfo.address.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </address>
            </div>

            {/* Telefone */}
            <div className="mb-4 flex items-center space-x-3">
              <IconPhone 
                className="h-5 w-5 text-blue-400 flex-shrink-0" 
                aria-hidden="true"
              />
              <a 
                href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                className="text-sm text-neutral-300 hover:text-white transition-colors duration-200"
                aria-label={`Ligar para ${contactInfo.phone}`}
              >
                {contactInfo.phone}
              </a>
            </div>

            {/* E-mail */}
            <div className="mb-6 flex items-center space-x-3">
              <IconMail 
                className="h-5 w-5 text-blue-400 flex-shrink-0" 
                aria-hidden="true"
              />
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-sm text-neutral-300 hover:text-white transition-colors duration-200 break-all"
                aria-label={`Enviar e-mail para ${contactInfo.email}`}
              >
                {contactInfo.email}
              </a>
            </div>

            {/* Redes Sociais */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-white">
                Siga-nos nas Redes Sociais
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                      aria-label={social.ariaLabel}
                    >
                      <IconComponent className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mapa do Site - Empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Empresa
            </h3>
            <ul className="space-y-3">
              {siteMapLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mapa do Site - Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Serviços
            </h3>
            <ul className="space-y-3">
              {siteMapLinks.servicos.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mapa do Site - Recursos e Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Recursos
            </h3>
            <ul className="space-y-3 mb-8">
              {siteMapLinks.recursos.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-6 text-white">
              Atendimento
            </h3>
            <ul className="space-y-3">
              {siteMapLinks.contato.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Seção inferior com links legais e copyright */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Links Legais */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-neutral-600 hidden md:inline">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-sm text-neutral-400 text-center md:text-right">
              <p>
                © {currentYear} PrimeCode Solutions. Todos os direitos reservados.
              </p>
              <p className="mt-1">
                Desenvolvido com ❤️ pela nossa equipe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}