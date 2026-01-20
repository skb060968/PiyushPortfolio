import Link from "next/link"
import { portfolioData } from "@/lib/data/portfolio"

export default function PortfolioCategories() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-light mb-10">Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(portfolioData).map(([slug, category]) => (
            <Link
              key={slug}
              href={`/portfolio/${slug}`}
              className="group block rounded-lg overflow-hidden bg-amber-100 border border-amber-200 hover:shadow-lg transition"
            >
              <div className="overflow-hidden">
                <img
                  src={category.thumbnail}
                  alt={category.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6 text-center">
                <span className="text-xl tracking-wide uppercase text-gray-700 group-hover:text-black transition">
                  {category.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
