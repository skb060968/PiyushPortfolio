// app/portfolio/[category]/[subProject]/[field]/page.tsx
import Link from "next/link"
import { portfolioData } from "@/lib/data/portfolio"

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
      {/* HEADER / NAV */}
      {/* ============================= */}
      <section className="bg-zinc-50 pt-24 pb-14">
        <div className="container-max">
          <Link
            href={`/portfolio/${category}/${subProject}`}
            className="inline-block mb-6 text-sm text-gray-600 hover:text-fashion-black transition-colors"
          >
            ← BACK TO {subProject}
          </Link>

          <h1 className="font-serif text-5xl font-bold text-fashion-black mb-6">
            {fieldData.title}
          </h1>

          <p className="max-w-3xl text-lg text-gray-700 leading-relaxed">
            {fieldData.description}
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* FEATURED / HERO IMAGE */}
      {/* ============================= */}
      <section className="bg-zinc-50 py-24">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-3xl shadow-xl group animate-fadeInUp">
            {/* subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60 z-10" />

            <img
               src={fieldData.hero ?? fieldData.thumbnail}
               alt={`${fieldData.title} hero`}
              className="
                w-full
                max-h-[80vh]
                object-cover
                transition-transform
                duration-1000
                ease-out
                group-hover:scale-105
              "
            />
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* IMAGE GALLERY */}
      {/* ============================= */}
      <section className="bg-zinc-50 py-28">
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
                  className="
                    mb-6
                    break-inside-avoid
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-md
                    transition-all
                    duration-500
                    hover:shadow-2xl
                    animate-fadeInUp
                  "
                >
                  <img
                    src={src}
                    alt={`${fieldData.title} ${i + 1}`}
                    className="
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      hover:scale-110
                    "
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
