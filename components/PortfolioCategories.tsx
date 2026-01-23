import Link from "next/link"
import Image from "next/image"
import { portfolioData } from "@/lib/data/portfolio"
import RevealWrapper from "@/components/RevealWrapper"

export default function PortfolioCategories() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-light mb-10">Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {Object.entries(portfolioData).map(([slug, category], i) => (
            <RevealWrapper key={slug} index={i}>
              <Link
                href={`/portfolio/${slug}`}
                className="group flex flex-col h-full rounded-lg overflow-hidden bg-stone-100 border border-amber-200 transition hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <Image
                    src={category.thumbnail}
                    alt={`Portfolio category: ${category.title}`}
                    width={600}
                    height={320}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center flex-grow">
                  <span className="text-xl tracking-wide uppercase text-gray-700 group-hover:text-black transition">
                    {category.title}
                  </span>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}