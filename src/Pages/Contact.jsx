import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zwvgozt', 'template_vqm750o', form.current, {
        publicKey: 'JJX8KZZDsmdJgM7cF',
      })
      .then(
        () => {
          toast.success("Email send Successfully")
          // console.log('SUCCESS!');
        },
        (error) => {
          toast.error(`Error ${error.text}`)
          // console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Helmet>
          <title>Contact</title>
        </Helmet>
        <h2 className="text-4xl font-extrabold text-center mb-8">Contact Me</h2>

        <div className="lg:flex lg:justify-between">
          {/* Contact Form */}
          <div className="lg:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto"
            >
              <div className="mb-6">
                <label className="block text-gray-300 text-lg font-medium mb-2" htmlFor="user_name">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="user_name"
                  className="w-full p-3 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-300 text-lg font-medium mb-2" htmlFor="user_email">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="user_email"
                  className="w-full p-3 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-300 text-lg font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="w-full p-3 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <input
                  type="submit"
                  value="Send"
                  className="px-6 py-3 w-full bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold rounded-md cursor-pointer transition duration-300"
                />
              </div>
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
      <Toaster />
    </div>
  );
};

export default Contact;