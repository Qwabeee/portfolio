"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="text-white hover:bg-transparent hover:text-purple-500"
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </Button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>}

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#121212] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-transparent hover:text-purple-500"
              aria-label="Close menu"
            >
              <X size={24} />
            </Button>
          </div>

          <nav className="flex flex-col space-y-6">
            <a href="#" className="text-white hover:text-purple-500 transition-colors">
              Home
            </a>
            <a href="#" className="text-white hover:text-purple-500 transition-colors">
              About
            </a>
            <a href="#" className="text-white hover:text-purple-500 transition-colors">
              Services
            </a>
            <a href="#" className="text-white hover:text-purple-500 transition-colors">
              Portfolio
            </a>
            <a href="#" className="text-white hover:text-purple-500 transition-colors">
              Contact
            </a>
          </nav>

          <div className="mt-8 flex justify-center">
          </div>
        </div>
      </div>
    </div>
  )
}
