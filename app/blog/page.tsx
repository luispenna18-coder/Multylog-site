import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Multylog Empilhadeiras",
  description: "Notícias, dicas e cases da Multylog Empilhadeiras. Fique por dentro do mundo da intralogística.",
};

// Adicionar posts reais com Tereza — Projeto Parafusinho, Dia da Cultura, etc.
const POSTS = [
  {
    slug: "projeto-parafusinho",
    title: "Projeto Parafusinho",
    excerpt: "A Multylog abre as portas da sua oficina para jovens das comunidades do Recife e os transforma em mecânicos especializados. Porque o melhor mecânico pode ser o que ainda não teve a chance de provar.",
    date: "2026-04-07",
    category: "Responsabilidade Social",
    image: "/images/blog/parafusinho/capa.jpg",
  },
  {
    slug: "dia-da-cultura",
    title: "Dia da Cultura na Multylog",
    excerpt: "Dinâmica de grupo, alinhamento de valores e muita energia: a Multylog reuniu toda a equipe para um dia especial de cultura.",
    date: "2026-03-09",
    category: "Cultura",
    image: "/imagens/dia-da-cultura/DSC06968.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#1C1C1E] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#CC0000] text-sm font-semibold uppercase tracking-widest">
            Conteúdo
          </span>
          <h1 className="font-display text-5xl sm:text-6xl text-white mt-3 mb-4 tracking-wide">
            Blog
          </h1>
          <p className="text-gray-400 text-lg">
            Notícias, projetos e a cultura da Multylog.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#F5F5F7] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {POSTS.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-gray-400 text-lg">Posts em breve. Aguarde!</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {POSTS.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all group"
                >
                  <div className="aspect-[16/9] bg-gray-100 relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      
                    />
                    <span className="absolute top-3 left-3 bg-[#CC0000] text-white text-xs font-bold px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                    </div>
                    <h2 className="font-display text-2xl text-[#1C1C1E] tracking-wide mb-2 group-hover:text-[#CC0000] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-1 text-[#CC0000] text-sm font-semibold">
                      Ler mais <ArrowRight size={14} />
                    </div>
                  </div>
                </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
