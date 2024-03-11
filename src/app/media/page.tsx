import React from "react";

const MediaPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl text-center font-semibold text-gray-900 mb-6">Media Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example media item */}
        <div className="bg-white rounded shadow p-4 flex flex-col items-center">
          <img className="rounded mb-4" src="https://res.cloudinary.com/dt3czltxx/image/upload/v1710130004/_S4A9111_llp05b.jpg" alt="Media Title" />
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Media Title</h2>
          <p className="text-gray-600 text-sm">Short description of the media content.</p>
        </div>
        {/* Repeat for each media item */}
      </div>
    </div>
  );
};

export default MediaPage;
