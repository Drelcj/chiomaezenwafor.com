import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="mb-6 md:mb-0 md:mr-8">
          <Image
            src="https://res.cloudinary.com/dt3czltxx/image/upload/v1710130365/_S4A9174_jdekpq.jpg"
            alt="Chioma Ezenwafor"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="text-gray-600 w-full">
          <h1 className="text-3xl text-center md:text-left font-semibold text-gray-900 mb-6">About Chioma Ezenwafor</h1>
          <p className="mb-4">
            Chioma Ezenwafor is a journalist with a decade-long experience in the media industry, and a Media and Communications Consultant. The News Manager of the foremost audio-visual news and talk radio stations, 92.3 Nigeria Info FM and Music stations, 95.9 Cool FM and 94.1 Wazobia FM in Port Harcourt. She is an alumna of the 2022 The Edward R. Murrow Program for Journalists of the International Visitor Leadership Program (IVLP) of the U.S Department of State.
          </p>
          <p className="mb-4">
            A member of the Society of Nigerian Broadcasters (SNB), Nigerian Union of Journalists (NUJ), African Council for Communication Education (ACCE), International Communication Association (ICA) and the Journalism Educators Foundation (JEF). The host of the business show, Talking Figures on 92.3 Nigeria Info FM.
          </p>
          <p className="mb-4">
            She is the author of "Becoming A News Titan" and co-authored "Dream Nation by Design." She is the convener of "Ink and Insights," a book signing hybrid event that holds every quarter. Her articles have been published on nigeriainfo.fm, newstimedaily.ng, reportingmigration.org and isparkng.com. Her work on radio news spans over a decade and has impacted so many lives.
          </p>
          <p className="mb-4">
            She is the creator of the Reporting Political and Civic Participation Course for the African Women in Media (AWiM) organisation. She also created a Content Writing and Content Creation Course. Her contributions have led to the success of events and Media Projects like the Startup Port Harcourt Week and a reality TV show for Entrepreneurs, the Grind TV Show.
          </p>
          <p className="mb-4">
            She won The Media Awards prize for News Editor of the Year 2019 edition and was listed among 50 African Women in Media celebrated for working actively in media and journalism across the continent of Africa and leading change, fostering development across sectors and impacting their local communities.
          </p>
          <p className="mb-4">
            She was announced the Prize Winner of the Reporting Migration Competition in 2020 launched by the UN Migration, that's the International Organization for Migration, IOM. She is a TEDx speaker and UN75 Speaker. She has several training certificates in various areas like Writing for the Web, social media and Journalism, Gender Reporting, Conflict Sensitive Reporting, Family Planning Reporting, Common Ground Journalism, Peace Journalism, Investigative Journalism, Solution Journalism to mention a few.
          </p>
          <p className="mb-4">
            She has a Bachelor's Degree in Mass communication from the Nnamdi Azikiwe University, Awka Anambra state, and a Masters degree in Communication from the University of Port Harcourt. She is currently pursuing a Ph.D. in Journalism and Media Studies. She is married to Engineer Chukwudi Ezenwafor and they both live in Port Harcourt, Rivers State, Nigeria with their three amazing kids, Zina, Sineto, and Aiyima.
          </p>
          <div className="flex justify-center md:justify-start mt-4">
            {/* Social Media Links */}
            <Link href="/social-media">
              <button className="text-red-500 hover:text-red-600 mr-4">Social Media</button>
            </Link>
            {/* Contact Me Button */}
            <Link href="/contact">
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
