// app/portfolio/page.tsx
import { portfolioData } from "@/lib/data/portfolio"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  return (
    <>
      {/* ============================= */}
      {/* PORTFOLIO HERO / INTRO */}
      {/* ============================= */}
      <section className="bg-white pt-28 pb-16">
        <div className="container-max">
          {/* Back Navigation */}
          <Link
            href="/"
            className="inline-block mb-6 text-sm text-gray-500 hover:text-fashion-black transition-colors"
          >
            ← Back to Home
          </Link>

          {/* Page Title */}
          <h1 className="font-serif text-5xl font-bold text-fashion-black mb-4">
            Portfolio
          </h1>

          {/* Intro Description */}
          <p className="max-w-2xl text-gray-600 text-lg leading-relaxed">
            A curated selection of fashion styling, creative direction, and
            visual storytelling across editorials, campaigns, and traditional
            wear.
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* PORTFOLIO CATEGORY GRID */}
      {/* ============================= */}
      <section className="bg-fashion-gray py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
            {Object.entries(portfolioData).map(([categoryKey, category]) => (
              <Link
                key={categoryKey}
                href={`/portfolio/${categoryKey}`}
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
                <div className="p-6 text-center">
                  <h3 className="font-serif text-2xl font-semibold text-fashion-black tracking-wide">
                    {category.title}
                  </h3>

                  <span className="mt-3 inline-block text-sm text-gray-500 tracking-widest uppercase group-hover:text-fashion-gold transition-colors">
                    View Work
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
