// app/portfolio/[category]/page.tsx
import Link from "next/link"
import { notFound } from "next/navigation"
import { portfolioData } from "@/lib/data/portfolio"

/**
 * Portfolio Category Page
 * -----------------------
 * - Displays all projects within a selected category
 * - Acts as a visual index before drilling into projects
 */

export function generateStaticParams() {
  return Object.keys(portfolioData).map((category) => ({
    category,
  }))
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
      <section className="bg-white pt-28 pb-16">
        <div className="container-max">
          {/* Back Navigation */}
          <Link
            href="/portfolio"
            className="inline-block mb-6 text-sm text-gray-500 hover:text-fashion-black transition-colors"
          >
            ← Back to Portfolio
          </Link>

          {/* Category Title */}
          <h1 className="font-serif text-5xl font-bold text-fashion-black mb-4">
            {category.title}
          </h1>

          {/* Optional Description (future-ready) */}
          <p className="max-w-2xl text-gray-600 text-lg leading-relaxed">
            Selected works and creative projects under the {category.title}{" "}
            category.
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* PROJECT GRID */}
      {/* ============================= */}
      <section className="bg-fashion-gray py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fadeIn">
            {Object.entries(category.projects).map(([slug, project]) => (
              <Link
                key={slug}
                href={`/portfolio/${params.category}/${slug}`}
                className="
                  group
                  block
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-500
                "
              >
                {/* Project Thumbnail */}
                <div className="relative h-80 overflow-hidden">
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
                <div className="p-8 text-center">
                  <h2
                    className="
                      text-xl
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
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
