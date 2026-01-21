import Image from "next/image"
import {
  Award,
  Users,
  Camera,
  Sparkles,
  GraduationCap,
} from "lucide-react"
import { content } from "@/lib/data"

const iconMap: { [key: string]: any } = {
  "Best Indian Fashion Stylist": Award,
  "Excellence in Bridal Styling": Camera,
  "Bollywood Stylist Recognition": Users,
  "Traditional Wear Innovation": Sparkles,
}

export default function AboutPage() {
  const { aboutPage, experience, achievements, skills } = content

  return (
    <div>

      {/* ================= HERO + PHILOSOPHY ================= */}
      <section className="section-padding bg-stone-50">
        <div className="container-max space-y-20">

          {/* HERO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-fashion-black mb-6">
                {aboutPage.heroTitle}
              </h1>
              <div className="w-20 h-1 bg-fashion-gold mb-6" />
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                {aboutPage.heroParagraph1}
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                {aboutPage.heroParagraph2}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition">
              <Image
                src="/images/about/piyush1.jpg"
                alt="Piyush Bholla"
                width={600}
                height={900}
                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* PHILOSOPHY */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-fashion-black mb-8">
              {aboutPage.philosophyHeading}
            </h2>
            <blockquote className="text-xl lg:text-2xl text-gray-800 italic leading-relaxed mb-6">
              “{aboutPage.philosophyQuote}”
            </blockquote>
            <p className="text-gray-700 text-lg">
              {aboutPage.philosophyDescription}
            </p>
          </div>

        </div>
      </section>

      {/* ================= JOURNEY + EDUCATION ================= */}
      <section className="section-padding bg-stone-50">
        <div className="container-max space-y-20">

          {/* JOURNEY */}
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-fashion-black text-center mb-12">
              {aboutPage.journeyHeading}
            </h2>

            <div className="max-w-4xl mx-auto border-l-2 border-fashion-gold pl-6">
              {experience.map((item, index) => (
                <div key={index} className="mb-10 last:mb-0">
                  <span className="text-fashion-gold font-semibold text-lg">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-fashion-black mt-1 mb-2">
                    {item.role}
                  </h3>
                  <p className="text-gray-700 font-medium mb-3">
                    {item.company}
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-fashion-black text-center mb-10">
              Education & Qualifications
            </h3>

            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-fashion-gold mt-1" />
                <div>
                  <h4 className="font-serif text-xl font-semibold text-fashion-black">
                    Bachelor’s of Design (Fashion Design)
                  </h4>
                  <p className="text-gray-700">
                    National Institute of Fashion Technology (NIFT), Bengaluru
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-fashion-gold mt-1" />
                <div>
                  <h4 className="font-serif text-xl font-semibold text-fashion-black">
                    Associate of Applied Science (Fashion Design)
                  </h4>
                  <p className="text-gray-700">
                    Fashion Institute of Technology (FIT), New York
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= AWARDS + SKILLS ================= */}
      <section className="section-padding bg-stone-50">
        <div className="container-max space-y-20">

          {/* AWARDS */}
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-fashion-black text-center mb-12">
              Awards & Recognition
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = iconMap[achievement.title] || Award
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-fashion-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-fashion-black mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-fashion-gold font-medium text-sm mb-1">
                      {achievement.year}
                    </p>
                    <p className="text-gray-700 text-sm">
                      {achievement.organization}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <h3 className="font-serif text-3xl font-bold text-center mb-12 text-fashion-black">
              {aboutPage.skillsHeading}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([key, list]) => (
                <div key={key}>
                  <h4 className="font-serif text-xl font-semibold mb-4 capitalize text-fashion-black">
                    {key}
                  </h4>
                  <ul className="space-y-2 text-gray-800">
                    {(list as string[]).map((skill, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-fashion-gold" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
