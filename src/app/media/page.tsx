"use client"
import React from "react";
import MediaItem from "../components/mediaitem/MediaItem";

import { downloadImage } from "../utils/downloadImage"; // Adjust the path as necessary

// Assuming you have an array of images to display
const imageUrls = [
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521900/News%20Titan%20Gallery/_S4A7936_mq1j7e.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521910/News%20Titan%20Gallery/_S4A8028_uhgcir.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521899/News%20Titan%20Gallery/_S4A7948_qobgor.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521915/News%20Titan%20Gallery/_S4A7896_svfipv.jpg",
];

const MediaPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl text-center font-semibold text-gray-900 mb-6">
        Media Gallery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageUrls.map((url, index) => (
          <MediaItem
            key={index}
            src={url}
            alt={`Media Title ${index + 1}`}
            filename={`image${index + 1}.jpg`} // Customize the filename as needed
          />
        ))}
      </div>
    </div>
  );
};

export default MediaPage;
