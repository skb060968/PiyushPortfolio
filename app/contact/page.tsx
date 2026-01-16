"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { content } from "@/lib/data"

export default function ContactPage() {
  const { contact, faq } = content

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="section-padding bg-fashion-gray">
        <div className="container-max text-center max-w-3xl">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-fashion-black mb-6">
            {contact.heading}
          </h1>
          <div className="w-20 h-1 bg-fashion-gold mx-auto mb-6" />
          <p className="text-gray-700 text-lg leading-relaxed">
            {contact.description}
          </p>
        </div>
      </section>

      {/* ================= CONTACT MAIN ================= */}
      <section className="section-padding bg-white">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-fashion-black mb-4">
                {contact.subHeading}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {contact.subDescription}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-fashion-gold mt-1" />
                <div>
                  <p className="font-semibold text-fashion-black">Email</p>
                  <p className="text-gray-600">{contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-fashion-gold mt-1" />
                <div>
                  <p className="font-semibold text-fashion-black">Phone</p>
                  <p className="text-gray-600">{contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-fashion-gold mt-1" />
                <div>
                  <p className="font-semibold text-fashion-black">Location</p>
                  <p className="text-gray-600">{contact.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-fashion-gold mt-1" />
                <div>
                  <p className="font-semibold text-fashion-black">
                    Availability
                  </p>
                  <p className="text-gray-600">{contact.availability}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-fashion-gray rounded-xl p-8 lg:p-10 shadow-sm">
            <h3 className="font-serif text-2xl font-semibold text-fashion-black mb-6">
              {contact.formHeading}
            </h3>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-4"
            >
              <input
                type="hidden"
                name="access_key"
                value={contact.web3formKey}
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fashion-gold"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fashion-gold"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fashion-gold"
              />

              <button
                type="submit"
                className="w-full bg-fashion-gold text-white py-3 rounded-md font-semibold hover:bg-opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="section-padding bg-fashion-gray">
        <div className="container-max">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faq.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="font-semibold text-fashion-black mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
