import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProjectCarousel from "@/components/project-carousel";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import MobileMenu from "@/components/mobile-menu";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Mondli Logo"
            width={120}
            height={120}
            className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[190px] lg:h-[190px] object-contain mr-4"
          />
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-purple-500">
            Home
          </a>
          <a href="#" className="hover:text-purple-500">
            About
          </a>
          <a href="#" className="hover:text-purple-500">
            Services
          </a>
          <a href="#" className="hover:text-purple-500">
            Portfolio
          </a>
          <a href="#" className="hover:text-purple-500">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button - Only visible on small screens */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </nav>

      {/* Hero Section*/}
      <div className="container mx-auto px-6 pt-2 pb-8 md:pt-4 md:pb-16 lg:pt-6 lg:pb-20 relative bg-black">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <h3 className="text-lg mb-2">HELLO I'M</h3>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Nhlonipho Makhanya
            </h1>
            <p className="text-purple-500 text-xl mb-4">Web & App Developer</p>

            <div className="flex space-x-4">
              <Button
                variant="outline"
                className="rounded-full border-white text-white hover:bg-purple-600 hover:text-white hover:border-purple-600 text-xs sm:text-sm"
              >
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
                  className="mr-2 w-3 h-3 sm:w-4 sm:h-4"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download CV
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 relative mt-8 md:mt-0">
            {/* Large M letter in background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 z-0">
              <span className="text-[30rem] font-bold text-purple-600">M</span>
            </div>

            {/* Profile image */}
            <div className="relative z-10">
              <Image
                src="https://i.postimg.cc/x1fXs4P7/IMG-20250322-WA0033-removebg-preview.png"
                alt="Nhlonipho Makhanya"
                width={500}
                height={600}
                className="object-contain"
              />
            </div>

            {/* Purple circle decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full opacity-20 blur-sm"></div>
            <div className="absolute top-0 right-0 w-48 h-48">
              <div className="w-full h-full border-4 border-purple-600 rounded-full relative">
                <div className="absolute w-6 h-6 bg-purple-600 rounded-full -top-3 left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-6 py-16 bg-black">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              I Develop & Create Digital Innovations of tomorrow.
            </h1>
            <p className="text-gray-400 mb-6">
              I transform ideas into cutting-edge digital experiences. With
              every project, I push the boundaries of what's possible in the
              digital landscape.
            </p>
          </div>

          <div className="md:w-1/2 space-y-8">
            {/* React */}
            <div>
              <div className="flex justify-between mb-2">
                <span>React</span>
                <span>80%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            {/* React Native */}
            <div>
              <div className="flex justify-between mb-2">
                <span>React Native</span>
                <span>74%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: "74%" }}
                ></div>
              </div>
            </div>

            {/* Git & GitHub */}
            <div>
              <div className="flex justify-between mb-2">
                <span>Git & GitHub</span>
                <span>82%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: "82%" }}
                ></div>
              </div>
            </div>

            {/* HTML & CSS */}
            <div>
              <div className="flex justify-between mb-2">
                <span>HTML & CSS</span>
                <span>85%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            {/* JavaScript */}
            <div>
              <div className="flex justify-between mb-2">
                <span>JavaScript</span>
                <span>85%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16 bg-black">
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <div className="inline-block w-3 h-3 bg-purple-600 rounded-full mb-4"></div>
            <h2 className="text-3xl font-bold">WHO I AM</h2>
            <h1 className="text-4xl font-bold mt-2">About My Resume</h1>
          </div>
        </div>

        <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-center leading-relaxed">
          I am a self-taught Web and App Developer specializing in building
          modern, responsive websites and mobile applications. With a strong
          foundation in React, React Native, HTML, CSS, JavaScript, and version
          control using Git/GitHub, I deliver clean, efficient, and
          user-centered solutions.
          <br />
          <br />
          Driven by a passion for problem-solving and continuous learning, I
          approach every project with professionalism, adaptability, and a focus
          on high-quality results. I take pride in turning ideas into
          functional, polished digital experiences that meet real-world needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Age:</span>
              <span>27</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Residence:</span>
              <span>RSA</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Willingness to relocate:</span>
              <span>Yes</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Freelance:</span>
              <span>Available</span>
            </div>
          </div>

          <div>
            <Image
              src="/images/computer.jpg"
              alt="Computer"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-[#1e2029] p-6 rounded-lg border-t-4 border-purple-600 text-center">
            <h3 className="text-3xl font-bold mb-2">70%</h3>
            <p className="text-sm text-gray-400">Graphic Design</p>
          </div>

          <div className="bg-[#1e2029] p-6 rounded-lg border-t-4 border-purple-600 text-center">
            <h3 className="text-3xl font-bold mb-2">80%</h3>
            <p className="text-sm text-gray-400">Development</p>
          </div>

          <div className="bg-[#1e2029] p-6 rounded-lg border-t-4 border-purple-600 text-center">
            <h3 className="text-3xl font-bold mb-2">58%</h3>
            <p className="text-sm text-gray-400">UI Design</p>
          </div>

          <div className="bg-[#1e2029] p-6 rounded-lg border-t-4 border-purple-600 text-center">
            <h3 className="text-3xl font-bold mb-2">70%</h3>
            <p className="text-sm text-gray-400">Web Management</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-6 py-16 bg-black">
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <div className="inline-block w-3 h-3 bg-purple-600 rounded-full mb-4"></div>
            <h2 className="text-3xl font-bold">MY WORK</h2>
            <h1 className="text-4xl font-bold mt-2">Recent Projects</h1>
          </div>
        </div>

        <ProjectCarousel />
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
