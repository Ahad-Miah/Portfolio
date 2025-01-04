import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent!");
        setFormData({ name: '', email: '', message: '' });
      };
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-8">Contact Me</h2>

        <div className="lg:flex lg:justify-between">
          {/* Contact Form */}
          <div className="lg:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-purple-400"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-500 rounded-lg text-xl font-bold transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/3 mt-8 lg:mt-0 bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold mb-4">Reach Me On</h3>
            <div className='flex flex-col'>
                <a className="text-gray-300 hover:text-gray-400 transition duration-300" href="tel:01745007673">Phone:01745007673</a>
                <a className="text-gray-300 hover:text-gray-400 transition duration-300" href="mailto:ahadahmedcc@gmail.com">Email:ahadahmedcc@gmail.com</a>
              </div>
            <div className="flex space-x-6 text-3xl">
              <a
                href="https://www.facebook.com/bappa.miah.98/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Ahad-Miah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Contact;