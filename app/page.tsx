import Hero from "@/components/Hero"
import PortfolioCategories from "@/components/PortfolioCategories"
import About from "@/components/About"

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Core content block */}
      <section className="bg-amber-50">
        <PortfolioCategories />
        <About />
      </section>
    </main>
  )
}
