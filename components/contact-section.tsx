"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // This is a placeholder for the actual email sending functionality
      // You can integrate with services like EmailJS, Formspree, or your own backend
      console.log("Sending email to nhloniphom397@gmail.com with data:", formData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitError("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#0a0a0a] py-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <div className="inline-block w-3 h-3 bg-purple-600 rounded-full mb-4"></div>
            <h2 className="text-3xl font-bold">GET IN TOUCH</h2>
            <h1 className="text-4xl font-bold mt-2">Contact</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#1e2029] p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send Me A Message</h3>

            {submitSuccess && (
              <div className="bg-green-500 bg-opacity-20 border border-green-500 text-green-500 px-4 py-3 rounded mb-6">
                Your message has been sent successfully!
              </div>
            )}

            {submitError && (
              <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-500 px-4 py-3 rounded mb-6">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Hello, I'd like to discuss a project..."
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Google Map */}
          <div className="bg-[#1e2029] p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Find Me Here</h3>
            <div className="h-[400px] w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55901.62301848732!2d31.38999695!3d-28.32999925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef6b5a7c3162e7d%3A0x3c5b8d8c0a61f0d5!2sUlundi%2C%203838!5e0!3m2!1sen!2sza!4v1682345678901!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="bg-purple-600 p-2 rounded-full mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-gray-400">Mashona Area, Ulundi, KwaZulu-Natal, South Africa</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-600 p-2 rounded-full mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-400">(+27) 067 9745 761</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-600 p-2 rounded-full mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-400">nhloniphom397@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
