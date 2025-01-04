import React from 'react';

const Education = () => {
    const educationData = [
        {
          year: "Running",
          degree: "Bachelor of Science in Computer Science and Engineering",
          institution: "City University",
          description:
            "Focused on web development, data structures, and database management systems",
        },
        {
          year: "2019 - 2021",
          degree: "Higher secondary School Certificate",
          institution: "Govt.Sayad Mohabbat Ali College",
          description:
            "",
        },
        {
          year: "2017 - 2019",
          degree: "Secondary School certificate",
          institution: "Sadrunnessa High School",
          description:
            "Excelled in computer science, mathematics, and physics",
        },
      ];
    return (
        <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Education
          </h2>
          <div className="space-y-10">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <div className="bg-[#7bff00] text-white text-lg font-bold px-4 py-2 rounded-md">
                    {item.year}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.degree}</h3>
                  <p className="text-gray-400 italic">{item.institution}</p>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Education;