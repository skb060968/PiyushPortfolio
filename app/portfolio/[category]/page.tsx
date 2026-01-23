import Link from "next/link"
import { notFound } from "next/navigation"
import { portfolioData } from "@/lib/data/portfolio"
import RevealWrapper from "@/components/RevealWrapper"

/**
 * Portfolio Category Page
 * -----------------------
 * - Displays all projects within a selected category
 * - Acts as a visual index before drilling into projects
 */

export function generateStaticParams() {
  return Object.keys(portfolioData).map((category) => ({ category }))
}

export default function CategoryPage({
  params,
}: {
  params: { category: string }
}) {
  const category = portfolioData[params.category]
  if (!category) return notFound()

  return (
    <>
      {/* ============================= */}
      {/* CATEGORY HERO / INTRO */}
      {/* ============================= */}
      <section className="bg-stone-50 pt-20 pb-10">
        <div className="container-max">
          {/* Back Navigation */}
          <Link
            href="/portfolio"
            className="inline-block mb-6 text-sm text-gray-600 hover:text-fashion-gold transition-colors duration-300"
          >
            ← BACK TO PORTFOLIO
          </Link>

          {/* Category Title */}
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-fashion-black mb-4">
            {category.title}
          </h1>

          {/* Optional Description */}
          <p className="max-w-xl text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Selected works and creative projects under the {category.title} category.
          </p>

          {/* Divider Bar */}
          <div className="w-16 h-1 bg-fashion-gold"></div>
        </div>
      </section>

      {/* ============================= */}
      {/* PROJECT GRID */}
      {/* ============================= */}
      <section className="bg-stone-50 py-12">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {Object.entries(category.projects).map(([slug, project], i) => (
              <RevealWrapper key={slug} index={i}>
                <Link
                  href={`/portfolio/${params.category}/${slug}`}
                  className="
                    group
                    flex flex-col h-full
                    overflow-hidden
                    rounded-2xl
                    bg-stone-100
                    shadow-sm
                    hover:shadow-xl
                    transition-all
                    duration-500
                  "
                >
                  {/* Project Thumbnail */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* Project Meta */}
                  <div className="p-6 text-left flex-grow">
                    <h2
                      className="
                        text-lg sm:text-xl
                        font-semibold
                        text-fashion-black
                        tracking-wide
                        group-hover:text-fashion-gold
                        transition-colors
                        duration-300
                      "
                    >
                      {project.title}
                    </h2>

                    <span className="mt-3 inline-block text-sm text-gray-500 tracking-widest uppercase">
                      View Project
                    </span>
                  </div>
                </Link>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}