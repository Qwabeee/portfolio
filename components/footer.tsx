import { Github, Linkedin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Nhlonipho Mondli Makhanya. All Rights Reserved.</p>
          </div>

          <div className="flex space-x-6">
            <a
             href="https://wa.me/278207491438"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="#"
              target="https://www.linkedin.com/in/nhlonipho-makhanya-a1a756258"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              href="https://github.com/Qwabeee"
              target="_blank"
              className="text-gray-400 hover:text-purple-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
