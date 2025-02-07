import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <motion.h1
        className="text-7xl font-bold text-red-500 mb-4"
        animate={{ scale: [0.8, 1.1, 1] }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 mb-6"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        Oops! The page you are looking for doesn’t exist.
      </motion.p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
