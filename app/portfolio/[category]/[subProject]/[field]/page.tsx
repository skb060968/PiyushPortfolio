import Link from "next/link"
import { portfolioData } from "@/lib/data/portfolio"
import RevealWrapper from "@/components/RevealWrapper"

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
      <section className="bg-zinc-50 pt-20 pb-10">
        <div className="container-max">
          <Link
            href={`/portfolio/${category}/${subProject}`}
            className="inline-block mb-6 text-sm text-gray-600 hover:text-fashion-gold transition-colors duration-300"
          >
            ← BACK TO {portfolioData[category].projects[subProject].title}

          </Link>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-fashion-black mb-4">
            {fieldData.title}
          </h1>

          <p className="max-w-2xl text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            {fieldData.description}
          </p>

          {/* Divider Bar */}
          <div className="w-16 h-1 bg-fashion-gold"></div>
        </div>
      </section>

      {/* ============================= */}
      {/* FEATURED / HERO IMAGE */}
      {/* ============================= */}
      <section className="bg-zinc-50 py-16">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-3xl shadow-lg group">
            {/* subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-50 z-10" />

            <img
              src={fieldData.hero ?? fieldData.thumbnail}
              alt={`${fieldData.title} hero`}
              className="
                w-full
                max-h-[70vh]
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
      <section className="bg-zinc-50 py-20">
        <div className="container-max">
          {fieldData.images.length === 0 ? (
            <p className="text-center text-gray-500">
              No additional images added yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {fieldData.images.map((src, i) => (
                <RevealWrapper key={i} index={i}>
                  <div
                    className="
                      overflow-hidden
                      rounded-2xl
                      bg-white
                      shadow-md
                      transition-all
                      duration-500
                      hover:shadow-xl
                    "
                  >
                    <img
                      src={src}
                      alt={`${fieldData.title} ${i + 1}`}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        hover:scale-105
                      "
                    />
                  </div>
                </RevealWrapper>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}