"use client"

import Link from "next/link"
import { Star } from "lucide-react"
import { content } from "@/lib/data"

export default function Testimonials() {
  const { testimonials } = content

  return (
    <section className="section-padding bg-fashion-gray">
      <div className="container-max">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
            {testimonials.heading}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {testimonials.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-fashion-gold fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                “{testimonial.content}”
              </p>

              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            {testimonials.ctaText}
          </p>

          <Link
            href="/contact"
            className="inline-block border border-fashion-gold text-fashion-gold
              px-8 py-3 rounded-lg font-semibold
              hover:bg-fashion-gold hover:text-white transition"
          >
            {testimonials.ctaButtonText}
          </Link>
        </div>
      </div>
    </section>
  )
}
