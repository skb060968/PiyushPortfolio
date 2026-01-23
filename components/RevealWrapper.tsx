"use client"

import { useEffect, ReactNode } from "react"

interface RevealWrapperProps {
  children: ReactNode
  className?: string
  index?: number
}

export default function RevealWrapper({ children, className = "", index = 0 }: RevealWrapperProps) {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // staggered delay: use index if passed, fallback to loop index
            const delay = (index || i) * 0.2
            entry.target.setAttribute("style", `animation-delay: ${delay}s`)
            entry.target.classList.add("reveal-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    revealElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [index])

  return (
    <div className={`reveal ${className}`}>
      {children}
    </div>
  )
}