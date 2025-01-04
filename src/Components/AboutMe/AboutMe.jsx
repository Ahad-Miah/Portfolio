import React from 'react';
import picture from '../../assets/picture.png'

const AboutMe = () => {
    return (
        <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12 space-y-10 lg:space-y-0">
          {/* Left Section - Text */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-red-500">Me</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Hi there! I’m a passionate <span className="text-red-500 font-semibold">Frontend Developer</span> dedicated to creating engaging and intuitive user experiences. My expertise lies in turning complex designs into pixel-perfect, responsive, and functional websites. With a knack for problem-solving and a love for creativity, I constantly push the boundaries of web development.
            </p>
            <p className="text-gray-400 mt-6 leading-relaxed">
              Beyond coding, I’m an avid <span className="text-red-500 font-semibold">cricket enthusiast</span> and love spending weekends playing matches with friends. Traveling is my escape—exploring new destinations inspires me and fuels my creativity. Each journey brings a fresh perspective to my work.
            </p>
          </div>

          {/* Right Section - Image and Highlights */}
          <div className="lg:w-1/2 flex justify-center items-center relative">
            <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-red-500 to-pink-600 rounded-full relative">
              <img
                src={picture}
                alt="About Me"
                className="w-[90%] h-[90%] object-cover rounded-full absolute top-[5%] left-[5%] shadow-lg"
              />
            </div>
            <div className="absolute bottom-4 right-4 sm:right-10 flex flex-col items-center space-y-4">
              {/* <div className="bg-gray-700 p-4 rounded-lg shadow-lg text-center">
                <h4 className="font-bold text-lg">Favorite Sport</h4>
                <p className="text-gray-300">Cricket</p>
              </div> */}
              {/* <div className="bg-gray-700 p-4 rounded-lg shadow-lg text-center">
                <h4 className="font-bold text-lg">Hobby</h4>
                <p className="text-gray-300">Traveling</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default AboutMe;