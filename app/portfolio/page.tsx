import { portfolioData } from "@/lib/data/portfolio"
import Link from "next/link"
import Image from "next/image"
import RevealWrapper from "@/components/RevealWrapper"

export default function PortfolioPage() {
  return (
    <>
      {/* ============================= */}
      {/* PORTFOLIO HERO / INTRO */}
      {/* ============================= */}
      <section className="bg-stone-50 pt-24 pb-12">
        <div className="container-max">
          {/* Back Navigation */}
          <Link
            href="/"
            className="inline-block mb-6 text-sm text-gray-600 hover:text-fashion-gold transition-colors duration-300"
          >
            ← BACK TO HOME
          </Link>

          {/* Page Title */}
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-fashion-black mb-4">
            Portfolio
          </h1>

          {/* Intro Description */}
          <p className="max-w-2xl text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            A curated selection of fashion styling, creative direction, and
            visual storytelling across editorials, campaigns, and traditional
            wear.
          </p>

          {/* Divider Bar */}
          <div className="w-16 h-1 bg-fashion-gold mb-4"></div>
        </div>
      </section>

      {/* ============================= */}
      {/* PORTFOLIO CATEGORY GRID */}
      {/* ============================= */}
      <section className="bg-stone-50 py-12">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {Object.entries(portfolioData).map(([categoryKey, category], i) => (
              <RevealWrapper key={categoryKey} index={i}>
                <Link
                  href={`/portfolio/${categoryKey}`}
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
                  {/* Category Thumbnail */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={category.thumbnail}
                      alt={`${category.title} thumbnail`}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* Category Meta */}
                  <div className="p-6 text-left flex-grow">
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-fashion-black tracking-wide">
                      {category.title}
                    </h3>

                    <span className="mt-3 inline-block text-sm text-gray-500 tracking-widest uppercase group-hover:text-fashion-gold transition-colors">
                      View Work
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