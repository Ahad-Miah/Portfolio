import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import picture from '../../assets/picture.png'
import cv from '../../assets/resume_of_web_dev_ahad miah.pdf'

const Banner = () => {

    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 flex flex-col lg:flex-row items-center lg:items-center space-y-10 lg:space-y-0 lg:space-x-12">
          {/* Left Section */}
          <div className="text-center lg:text-left flex-1">
            <h2 className="text-xl font-light">
              Hello, <span className="text-red-500">I&apos;m</span>
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-2">
              Md Ahad Miah
            </h1>
            <h3 className="text-lg md:text-2xl font-medium mt-2">
             Front End Web Developer
            </h3>
            <p className="text-gray-400 mt-6 leading-relaxed">
              I craft stunning and functional digital experiences that bridge the gap between creativity and technology. With expertise in modern web design and development, I help businesses and individuals establish a powerful online presence.  
              From clean and intuitive interfaces to robust and scalable code, I bring ideas to life while ensuring seamless functionality and user engagement. Let’s transform your vision into a digital reality.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-4 mt-8">
              <a
                href="https://www.facebook.com/bappa.miah.98/"
                target="_blank"
                className="text-gray-400 hover:text-white text-2xl transition duration-200"
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com/Ahad-Miah"
                target='_blank'
                className="text-gray-400 hover:text-white text-2xl transition duration-200"
              >
                <FaGithub />
              </a>
              <a
                href="http://www.linkedin.com/in/md-ahad-miah"
                target="_blank"
                className="text-gray-400 hover:text-white text-2xl transition duration-200"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="mt-6">
              <a href={cv} download className="btn  bg-[#7bff0081] hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-200">
                Download Resume
              </a>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="relative flex-1 flex justify-center items-center lg:justify-end">
            <div className="rounded-lg bg-[#7bff0081] shadow-xl w-[250px] sm:w-[300px] md:w-[350px] h-[300px] sm:h-[350px] md:h-[400px] relative">
              {/* Background box */}
            </div>
            <img
              src={picture}
              alt="Md Ahad Miah"
              className="absolute bottom-0 left-4 sm:bottom-14 lg:bottom-0 md:-bottom-0 md:left-6 lg:-right-12 sm:right-auto right-4 w-[500px] sm:w-[250px] md:w-[700px] lg:w-[1000px] lg:left-10  xl:left-28 2xl:left-40 "
            />
          </div>
        </div>
      </div>
    );
};

export default Banner;
