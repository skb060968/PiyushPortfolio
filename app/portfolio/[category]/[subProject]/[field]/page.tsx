// app/portfolio/[category]/[subProject]/[field]/page.tsx
import Link from "next/link"
import { portfolioData } from "@/lib/data/portfolio"

/**
 * Portfolio Field Detail Page
 * ---------------------------
 * - Immersive visual gallery for a specific creative field
 * - Editorial layout with featured image + gallery flow
 */

export async function generateStaticParams() {
  const params: { category: string; subProject: string; field: string }[] = []

  for (const category of Object.keys(portfolioData)) {
    const projects = portfolioData[category].projects
    for (const subProject of Object.keys(projects)) {
      const fields = projects[subProject].fields
      for (const field of Object.keys(fields)) {
        params.push({ category, subProject, field })
      }
    }
  }

  return params
}

export default function FieldDetailPage({
  params,
}: {
  params: { category: string; subProject: string; field: string }
}) {
  const { category, subProject, field } = params
  const fieldData =
    portfolioData[category]?.projects?.[subProject]?.fields?.[field]

  if (!fieldData) {
    return <div className="pt-24 text-center">Field not found</div>
  }

  return (
    <>
      {/* ============================= */}
      {/* FIELD NAVIGATION */}
      {/* ============================= */}
      <section className="bg-stone-50 pt-24 pb-12">
        <div className="container-max">
          <Link
            href={`/portfolio/${category}/${subProject}`}
            className="inline-block mb-6 text-sm text-gray-500 hover:text-fashion-black transition-colors"
          >
            ← Back to {subProject}
          </Link>

          {/* Field Title */}
          <h1 className="font-serif text-5xl font-bold text-fashion-black mb-6">
            {fieldData.title}
          </h1>

          {/* Field Description */}
          <p className="max-w-3xl text-lg text-gray-600 leading-relaxed">
            {fieldData.description}
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* FEATURED IMAGE */}
      {/* ============================= */}
      <section className="bg-stone-50 py-20">
        <div className="container-max">
          <div className="overflow-hidden rounded-2xl shadow-sm animate-fadeIn">
            <img
              src={fieldData.thumbnail}
              alt={`${fieldData.title} featured`}
              className="w-full max-h-[80vh] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* IMAGE GALLERY */}
      {/* ============================= */}
      <section className="bg-stone-50 py-24">
        <div className="container-max">
          {fieldData.images.length === 0 ? (
            <p className="text-center text-gray-500">
              No additional images added yet.
            </p>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
              {fieldData.images.map((src, i) => (
                <div
                  key={i}
                  className="mb-6 overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 animate-fadeIn"
                >
                  <img
                    src={src}
                    alt={`${fieldData.title} ${i + 1}`}
                    className="w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
