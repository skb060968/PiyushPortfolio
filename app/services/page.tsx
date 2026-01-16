import Link from "next/link"
import {
  Sparkles,
  Scissors,
  Ruler,
  Users,
  Briefcase,
  Leaf,
} from "lucide-react"
import { content } from "@/lib/data"

const iconMap: { [key: string]: any } = {
  "Creative Design": Sparkles,
  "Technical Design": Ruler,
  "Production & Sourcing": Scissors,
  "Styling & Personal Services": Users,
  "Consulting & Brand Development": Briefcase,
  "Specialized Services": Leaf,
}

export default function ServicesPage() {
  const { services, servicesPage } = content

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="section-padding bg-fashion-gray">
        <div className="container-max text-center max-w-3xl">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold mb-6">
            {servicesPage.heroTitle}
          </h1>
          <p className="text-gray-700 text-lg">
            {servicesPage.heroDescription}
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="section-padding bg-white">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.title] || Sparkles
            return (
              <div
                key={index}
                className="bg-fashion-gray p-8 rounded-lg space-y-6 hover:shadow-lg transition"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-fashion-gold rounded-full flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-700">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-600"
                    >
                      <Sparkles className="w-4 h-4 text-fashion-gold mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section-padding bg-fashion-gray">
        <div className="container-max text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
            {servicesPage.processHeading}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            {servicesPage.processDescription}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {servicesPage.processSteps.map((step, i) => (
              <div key={i}>
                <div className="w-14 h-14 bg-fashion-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">
                    {i + 1}
                  </span>
                </div>
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <p className="text-gray-700 mb-6">
            {servicesPage.ctaText}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-fashion-gold text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition"
          >
            {servicesPage.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  )
}
