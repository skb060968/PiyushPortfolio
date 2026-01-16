import Link from "next/link"
import { content } from "@/lib/data"


export default function Hero() {
  const { hero } = content

  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-150"
        > <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/hero.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fadeIn">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          {hero.title}
        </h1>

        <p className="text-lg sm:text-xl mb-4 font-light tracking-wide">
          {hero.subtitle}
        </p>

        <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto opacity-90">
          {hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/portfolio"
            className="px-6 py-3 rounded-lg font-semibold border border-white
              hover:bg-fashion-gold hover:border-fashion-gold hover:text-black transition"
          >
            {hero.primaryButtonText}
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg font-semibold border border-white
              hover:bg-fashion-gold hover:border-fashion-gold hover:text-black transition"
          >
            {hero.secondaryButtonText}
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-hidden
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
