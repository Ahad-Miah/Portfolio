import React, { useEffect, useState,useRef } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Helmet } from "react-helmet-async";

const Details = () => {
    const { id } = useParams();
    const allProjectsData = useLoaderData();
  
    const [project, setProject] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
    useEffect(() => {
      const singleProject = allProjectsData?.projects.find(
        (project) => project.id === parseInt(id)
      );
      setProject(singleProject);
    }, [id, allProjectsData]);
  
    if (!project) {
      return <div>Loading...</div>; // Show a loading state if `project` is undefined
    }
  
    return (
      <div className="min-h-screen bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
            <Helmet>
                <title>{`Details,${project.title}`}</title>
            </Helmet>
          <h2 className="text-4xl font-bold text-center mb-12">{project.title}</h2>
          <div className="grid grid-cols-1 justify-center lg:grid-cols-2 gap-8">
            {/* Image Swiper Section */}
            <div>
              {project.images && project.images.length > 0 ? (
                <>
                  {/* Main Swiper */}
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    {project.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={image}
                          alt={`Project Image ${index + 1}`}
                          className="rounded-lg"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {/* Thumbnail Swiper */}
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    {project.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={image}
                          alt={`Thumbnail Image ${index + 1}`}
                          className="rounded-md"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              ) : (
                <p>No images available</p>
              )}
            </div>
  
            {/* Project Details */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4">{project.description}</p>
              <h3 className="text-xl font-semibold mb-2">Main Tech Stack:</h3>
              <ul className="list-disc ml-5 text-gray-300">
                {project.techStack?.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
  
              <h3 className="text-xl font-semibold mt-4 mb-2">Details:</h3>
              <p className="text-gray-300">{project.details}</p>
  
              <h3 className="text-xl font-semibold mt-4 mb-2">Challenges:</h3>
              <p className="text-gray-300">{project.challenges}</p>
  
              <h3 className="text-xl font-semibold mt-4 mb-2">Shortcomings:</h3>
              <p className="text-gray-300">{project.shortcomings}</p>
  
              <h3 className="text-xl font-semibold mt-4 mb-2">Future Improvements:</h3>
              <p className="text-gray-300">{project.futureImprovements}</p>
  
              <div className="mt-6 flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default Details;
