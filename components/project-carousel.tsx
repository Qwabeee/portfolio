"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Project data
const projects = [
  {
    id: 1,
    title: "react portfolio",
    imageUrl: "/images/portfolio.png",
    link: "https://mondli-portfolio.vercel.app/",
    number: "01",
  },
  {
    id: 2,
    title: "Fitness web",
    imageUrl: "/images/fit.png",
    link: "https://fitnessweb-app.vercel.app",
    number: "02",
  },
  {
    id: 3,
    title: "Sweethome web",
    imageUrl: "/images/sweet.png",
    link: "https://qwabeee.github.io/real-estate-website/",
    number: "03",
  },
  {
    id: 4,
    title: "Edu-learn",
    imageUrl: "/images/edu.png",
    link: "https://qwabeee.github.io/education-website/",
    number: "04",
  },
  {
    id: 5,
    title: "Other projects",
    imageUrl: "/images/computer.jpg",
    link: "https://github.com/Qwabeee",
    number: "05",
  },
];

export default function ProjectCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  // Get the current visible projects (3 at a time)
  const getVisibleProjects = () => {
    const visibleProjects = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % projects.length;
      visibleProjects.push(projects[index]);
    }
    return visibleProjects;
  };

  // Handle next slide
  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Handle previous slide
  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {getVisibleProjects().map((project) => (
          <div
            key={project.id}
            className="relative h-[400px] group overflow-hidden rounded-lg"
          >
            {/* Project Image */}
            <a href={project.link} className="block w-full h-full">
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Project
                </span>
              </div>

              {/* Project number */}
              <div className="absolute bottom-6 right-6 text-[80px] font-bold text-white opacity-80">
                {project.number}
              </div>

              {/* Project title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center mt-12 space-x-8">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 transition-colors"
          aria-label="Next project"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
