import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Projeto Parafusinho: formando os mecânicos do futuro em Recife | Multylog",
  description:
    "A Multylog abre as portas da sua oficina para jovens das comunidades do Recife e os transforma em mecânicos especializados. Conheça o Projeto Parafusinho.",
};

export default function ProjetoParafusinhoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5F5F7] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#1C1C1E]/60 hover:text-[#1C1C1E] text-sm font-semibold border border-[#1C1C1E]/20 hover:border-[#1C1C1E]/50 px-4 py-2 rounded-xl mb-8 transition-all"
          >
            <ArrowLeft size={14} /> Voltar ao Blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="bg-[#CC0000] text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wide">
              Responsabilidade Social
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm">
              <Calendar size={13} />
              07 de abril de 2026
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl text-[#1C1C1E] tracking-wide leading-tight mb-4">
            Projeto Parafusinho: Formando os Mecânicos do Futuro Dentro de Casa
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            A Multylog abre as portas da sua oficina para jovens das comunidades do Recife
            e os transforma em mecânicos especializados. Porque o melhor mecânico pode ser
            o que ainda não teve a chance de provar.
          </p>
        </div>
      </section>

      {/* Vídeo de abertura */}
      <div className="bg-[#F5F5F7] py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/P6KvlA0YlsE"
              title="Projeto Parafusinho — Multylog"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="font-display text-3xl text-[#1C1C1E] tracking-wide mb-5">
            De Onde Vem a Ideia
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Na Multylog, a gente acredita que talento não tem endereço. E que
            a melhor forma de construir uma equipe técnica de excelência é
            investir nas pessoas antes que o mercado as descarte por falta de
            oportunidade.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Foi com esse pensamento que nasceu o <strong>Projeto Parafusinho</strong> —
            uma iniciativa que seleciona jovens das comunidades do Recife, sem
            experiência prévia, e os treina diretamente dentro da nossa
            estrutura para se tornarem mecânicos especializados em
            empilhadeiras e equipamentos de movimentação de carga.
          </p>

          <h2 className="font-display text-3xl text-[#1C1C1E] tracking-wide mb-5">
            O Parafusinho na Prática
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            O nome não é por acaso. O parafuso é a peça mais básica da
            mecânica — e dominar o básico com perfeição é o que diferencia
            um bom profissional. O programa começa do zero: como funciona um
            motor elétrico, o que é um circuito hidráulico, como identificar
            uma falha antes que ela vire um problema.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            Os jovens selecionados passam por um ciclo de formação dentro da
            própria oficina da Multylog, acompanhados pelos técnicos
            certificados STILL da equipe. A formação é prática desde o
            primeiro dia: não tem só sala de aula. Tem mão na graxa, ferramenta
            na mão, equipamento real na frente.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Ao longo do programa, os aprendizes passam por manutenção
            preventiva, diagnóstico elétrico, sistemas hidráulicos, carga e
            descarga de baterias tracionárias, e os procedimentos de segurança
            exigidos pelos padrões STILL — a mesma formação que nossos técnicos
            seniores recebem.
          </p>

          <h2 className="font-display text-3xl text-[#1C1C1E] tracking-wide mb-5">
            Por que Recife Precisa Disso
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            O Nordeste vive um crescimento expressivo na demanda por profissionais
            técnicos qualificados — especialmente no setor de logística e
            intralogística, que avança junto com a expansão de centros de
            distribuição, portos e indústrias na região. A demanda por mecânicos
            especializados em equipamentos de movimentação de carga cresce mais
            rápido do que a oferta de formação técnica acessível.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            O Parafusinho existe para fechar essa lacuna — e fazê-lo de dentro
            para fora. Não como caridade. Como um investimento real no futuro
            da nossa equipe e da nossa cidade.
          </p>

          <h2 className="font-display text-3xl text-[#1C1C1E] tracking-wide mb-5">
            O que Muda na Vida de Quem Passa pelo Programa
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Quem entra no Parafusinho não entra só para aprender mecânica.
            Entra para aprender o que é responsabilidade, pontualidade, trabalho
            em equipe e orgulho pelo que faz. São valores que a Multylog leva
            a sério — e que queremos que cada aprendiz carregue para o resto
            da vida, independente de para onde a carreira os leve.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Os melhores do programa têm a chance de integrar o time fixo da
            Multylog — e é assim que o ciclo se fecha: a empresa que treinamos
            ontem, trabalhando conosco amanhã, atendendo nossos clientes com
            excelência.
          </p>

          {/* Foto */}
          <div className="relative w-full max-w-xl mx-auto aspect-[4/3] rounded-xl overflow-hidden my-10">
            <Image
              src="/images/blog/parafusinho/capa.jpg"
              alt="Jovens do Projeto Parafusinho na frente das empilhadeiras STILL na Multylog"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* CTA */}
          <div className="border-t border-gray-100 pt-10 mt-10">
            <p className="text-gray-500 text-lg mb-2 font-medium">
              Quer saber mais sobre o Projeto Parafusinho?
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Entre em contato conosco ou acompanhe as próximas turmas. Se você
              conhece um jovem que merece essa chance, fala com a gente.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/sobre"
                className="inline-block bg-[#CC0000] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#A80000] transition-colors"
              >
                Conheça a Multylog
              </Link>
              <Link
                href="/trabalhe-conosco"
                className="inline-block border border-gray-300 text-[#1C1C1E] font-semibold px-8 py-3 rounded-xl hover:border-gray-500 transition-colors"
              >
                Trabalhe Conosco
              </Link>
            </div>
          </div>

        </div>
      </article>
    </>
  );
}
