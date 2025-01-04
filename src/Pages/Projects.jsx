import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaLink } from 'react-icons/fa';
import { CgDetailsLess } from "react-icons/cg";
import { Link } from 'react-router-dom';

// const projects = [
//     {
//       title: 'Project 1',
//       description: 'A brief description of project 1.',
//       images: [
//         'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
//         'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
//         'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
//         'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp',
//       ],
//       liveLink: 'https://example.com',
//       github: 'https://github.com/example/project1',
//     },
//     // Add more projects as needed
//   ];

const Projects = () => {
    const [projects,setProjects]=useState([]);
    useEffect(()=>{
        fetch('../../public/Projects.json')
        .then(res=>res.json())
        .then(data=>setProjects(data.projects));
    },[])
    const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects[0].images.length); // Wrap around to first image
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + projects[0].images.length) % projects[0].images.length
    );
}
    return (
        <div className="min-h-screen bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
            <Helmet>
                <title>Projects</title>
            </Helmet>
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group transform transition duration-500 hover:scale-105"
              >
                <div className="relative w-full">
                  <img
                    src={project.images[currentSlide]} // Dynamically set the image
                    alt="Project"
                    className="w-full object-cover h-60"
                  />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <button
                      onClick={handlePrevSlide}
                      className="btn btn-circle text-white"
                    >
                      ❮
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="btn btn-circle text-white"
                    >
                      ❯
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description.slice(0,100)}</p>
                  <div className="flex justify-between items-center">
                    <a
                    title='Live Link'
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-500 transition duration-300"
                    >
                      <FaLink size={24} />
                    </a>
                    <Link to={`/details/${project.id}`}
                    title='Details'
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-500 transition duration-300"
                    >
                      <CgDetailsLess size={24} />
                    </Link>
                    <a
                    title='github repository'
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-gray-400 transition duration-300"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
};

export default Projects;