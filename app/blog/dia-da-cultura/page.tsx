import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Dia da Cultura: Dinâmica de Grupo e Alinhamento de Valores | Multylog",
  description:
    "A Multylog reuniu toda a equipe para um dia especial de dinâmicas de grupo e alinhamento da cultura da empresa — fortalecendo vínculos e reforçando os valores que nos guiam.",
};

export default function DiaDaCulturaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1C1C1E] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Voltar ao Blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="bg-[#CC0000] text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wide">
              Cultura
            </span>
            <span className="flex items-center gap-1 text-gray-400 text-sm">
              <Calendar size={13} />
              08 de novembro de 2024
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl text-white tracking-wide leading-tight mb-4">
            DIA DA CULTURA: DINÂMICA DE GRUPO E ALINHAMENTO DE VALORES
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            A Multylog reuniu toda a equipe para um dia especial de dinâmicas,
            reflexões e alinhamento dos valores que constroem nossa cultura
            todos os dias.
          </p>
        </div>
      </section>

      {/* Foto de abertura */}
      <div className="relative w-full aspect-[16/7] bg-gray-900">
        <Image
          src="/imagens/dia-da-cultura/DSC06842.jpg"
          alt="Apresentação de abertura do Dia da Cultura Multylog"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Conteúdo */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="font-display text-3xl text-[#1C1C1E] tracking-wide mb-5">
            UM DIA PARA CELEBRAR QUEM SOMOS
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Em novembro de 2024, a Multylog realizou o seu <strong>Dia da Cultura</strong> —
            um encontro pensado para reunir colaboradores de todos os setores em torno
            de um propósito comum: fortalecer os laços da equipe e alinhar os valores
            que orientam o nosso jeito de trabalhar.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            O evento aconteceu nas próprias instalações da empresa, no showroom e galpão
            da Multylog em Recife, transformados em palco para um dia diferente — longe
            da rotina operacional e focado nas pessoas.
          </p>

          {/* Foto galpão */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4">
            <Image
              src="/imagens/dia-da-cultura/DSC06903.jpg"
              alt="Equipe reunida no galpão da Multylog para o Dia da Cultura"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-gray-400 text-sm text-center mb-12 italic">
            Equipe reunida no showroom da Multylog para o início das atividades.
          </p>

          <h2 className="font-display text-3xl text-[#1C1C1E] tracking-wide mb-5">
            A DINÂMICA: CONSTRUINDO JUNTOS
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            O ponto alto do evento foi a <strong>dinâmica de grupo com blocos de montar</strong>.
            Os colaboradores foram divididos em equipes e desafiados a construir estruturas
            coletivamente — cada grupo com seus próprios objetivos, mas todos dependendo
            da comunicação, da escuta e da colaboração para chegar ao resultado.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            A atividade foi uma metáfora viva da cultura que a Multylog busca construir:
            ninguém entrega sozinho. É a soma das habilidades de cada um, alinhada a um
            propósito claro, que gera resultados extraordinários.
          </p>

          {/* Fotos da dinâmica */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/imagens/dia-da-cultura/DSC06857.jpg"
                alt="Colaboradores participando da dinâmica de blocos"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/imagens/dia-da-cultura/DSC06882.jpg"
                alt="Detalhe da dinâmica de construção em equipe"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="font-display text-3xl text-[#1C1C1E] tracking-wide mb-5">
            ALINHAMENTO DE CULTURA: MAIS QUE UM EVENTO
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Além das dinâmicas, o dia incluiu uma rodada de apresentações sobre os
            pilares da cultura Multylog — os valores que guiam decisões, relações com
            clientes e o comportamento esperado de todos dentro da empresa.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Para a liderança, o Dia da Cultura é um investimento contínuo: construir uma
            empresa sólida começa com uma equipe que compartilha os mesmos valores e se
            orgulha de onde trabalha.
          </p>

          {/* Foto grupo pequeno */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4">
            <Image
              src="/imagens/dia-da-cultura/DSC06953.jpg"
              alt="Grupo de colaboradores posando ao final do Dia da Cultura"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-gray-400 text-sm text-center mb-12 italic">
            Parte da equipe ao final do encontro — energia e engajamento que definem a Multylog.
          </p>

          {/* Foto equipe feminina */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4">
            <Image
              src="/imagens/dia-da-cultura/DSC06988.jpg"
              alt="Equipe feminina da Multylog em frente à fachada"
              fill
              className="object-cover object-top"
            />
          </div>
          <p className="text-gray-400 text-sm text-center mb-12 italic">
            As mulheres da Multylog, parte fundamental da nossa equipe.
          </p>

          {/* Foto grande final */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4">
            <Image
              src="/imagens/dia-da-cultura/DSC06970.jpg"
              alt="Foto de grupo de toda a equipe Multylog no Dia da Cultura"
              fill
              className="object-cover object-center"
            />
          </div>
          <p className="text-gray-400 text-sm text-center mb-12 italic">
            A equipe Multylog reunida — esse é o time que move o Nordeste.
          </p>

          {/* CTA */}
          <div className="border-t border-gray-100 pt-10 mt-10 text-center">
            <p className="text-gray-500 mb-4">
              Quer fazer parte desse time?
            </p>
            <Link
              href="/trabalhe-conosco"
              className="inline-block bg-[#CC0000] text-white font-semibold px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Trabalhe Conosco
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
