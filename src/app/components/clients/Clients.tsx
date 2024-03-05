import React from "react";
import Image from "next/image";

const Cravings = () => {
  return (
    <div className="pt-40">
      <div
        className="py-10 relative min-h-screen bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dt3czltxx/image/upload/v1709545401/IMG_6361_qacxiu.jpg')",
        }}
      >
        <div className="h-full flex items-center justify-center pt-60">
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <Image
                src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709551295/_S4A9222_csfh9m.jpg"
                alt="Chioma Ezenwafor"
                width={160}
            height={1600}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">About Me</h2>
              <p>Chioma Ezenwafor is a seasoned journalist and media consultant with over ten years of experience...</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cravings;
