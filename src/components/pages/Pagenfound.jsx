import React from 'react';
import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';

const Pagenfound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-6 max-w-md">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track!
        </p>
        <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
          Go to Home
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenfound;
