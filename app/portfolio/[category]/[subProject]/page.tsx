// app/portfolio/[category]/[subProject]/page.tsx
import Link from "next/link"
import { notFound } from "next/navigation"
import { portfolioData } from "@/lib/data/portfolio"

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
      <section className="bg-white pt-24 pb-10">
        <div className="container-max">
          <Link
            href={`/portfolio/${category}`}
            className="inline-block mb-6 text-sm text-gray-500 hover:text-fashion-black transition-colors"
          >
            ← Back to {portfolioData[category].title}
          </Link>

          {/* Project Title */}
          <h1 className="font-serif text-5xl font-bold text-fashion-black">
            {projectData.title}
          </h1>

          {/* Project Description */}
          {projectData.description.map((desc, i) => (
            <p
              key={i}
              className="mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed"
            >
              {desc}
            </p>
          ))}
        </div>
      </section>

      {/* ============================= */}
      {/* PROJECT FIELDS GRID */}
      {/* ============================= */}
      <section className="bg-fashion-gray py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
            {Object.entries(projectData.fields).map(([fieldKey, field]) => (
              <Link
                key={fieldKey}
                href={`/portfolio/${category}/${subProject}/${fieldKey}`}
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
                <div className="p-6 text-center">
                  <h3
                    className="
                      font-serif
                      text-xl
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

                  <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                    {field.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
