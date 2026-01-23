import Link from "next/link"
import { notFound } from "next/navigation"
import { portfolioData } from "@/lib/data/portfolio"
import RevealWrapper from "@/components/RevealWrapper"

/**
 * Portfolio Project Page
 * ----------------------
 * - Displays project overview and its creative fields
 * - Acts as an editorial bridge between category and field detail pages
 */

export function generateStaticParams() {
  const params: { category: string; subProject: string }[] = []

  for (const category of Object.keys(portfolioData)) {
    const projects = portfolioData[category].projects
    for (const subProject of Object.keys(projects)) {
      params.push({ category, subProject })
    }
  }

  return params
}

export default function ProjectPage({
  params,
}: {
  params: { category: string; subProject: string }
}) {
  const { category, subProject } = params
  const projectData = portfolioData[category]?.projects?.[subProject]

  if (!projectData) return notFound()

  return (
    <>
      {/* ============================= */}
      {/* PROJECT NAVIGATION */}
      {/* ============================= */}
      <section className="bg-stone-50 pt-20 pb-10">
        <div className="container-max">
          <Link
            href={`/portfolio/${category}`}
            className="inline-block mb-6 text-sm text-gray-600 hover:text-fashion-gold transition-colors duration-300"
          >
            ← BACK TO {portfolioData[category].title}
          </Link>

          {/* Project Title */}
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-fashion-black mb-4">
            {projectData.title}
          </h1>

          {/* Project Description */}
          {projectData.description && (
            <p className="max-w-2xl text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              {projectData.description}
            </p>
          )}

          {/* Divider Bar */}
          <div className="w-16 h-1 bg-fashion-gold"></div>
        </div>
      </section>

      {/* ============================= */}
      {/* PROJECT FIELDS GRID */}
      {/* ============================= */}
      <section className="bg-stone-50 py-12">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
            {Object.entries(projectData.fields).map(([fieldKey, field], i) => (
              <RevealWrapper key={fieldKey} index={i}>
                <Link
                  href={`/portfolio/${category}/${subProject}/${fieldKey}`}
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
                  {/* Field Thumbnail */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={field.thumbnail}
                      alt={`${field.title} thumbnail`}
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

                  {/* Field Meta */}
                  <div className="p-6 text-left flex-grow">
                    <h3
                      className="
                        font-serif
                        text-lg sm:text-xl
                        font-semibold
                        text-fashion-black
                        tracking-wide
                        group-hover:text-fashion-gold
                        transition-colors
                        duration-300
                      "
                    >
                      {field.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {field.description}
                    </p>
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