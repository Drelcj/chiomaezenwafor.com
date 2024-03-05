import React from 'react'
import Link from 'next/link'

const Courses = () => {
  return (
    <div className="p-40 px-10">
      <div className='flex justify-between'>
      <div>
      <h2 className="text-2xl font-bold pt-4 hover:text-red-500">Trending Posts</h2>
      </div>
      <div className="text-center p-3">
        <Link href="/school">
          <button className="btn bg-red-500 text-white">View blog page</button>
        </Link>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible">
        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl hover:shadow-sm">
          <figure><img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709546492/IMG_63614_i2sxfs.jpg" alt="Course 1" /></figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">How I Became a News Titan</h2>
            <p>In this blog post, I share my story of how I pursued my passion for journalism and media, from a Mass Communication Student to a Media and Communications Consultant and the challenges and opportunities I faced along the way. I also gives tips and advice for aspiring journalists and media professionals who want to make an impact in the industry.
</p>
            <div className="card-actions justify-end">
              <button className="btn text-white bg-red-500">Read More</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure><img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709545976/IMG_63613_sbi3na.jpg" alt="Course 2" /></figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">Ink and Insights: The Book Signing Hybrid Event That Connects Authors and Readers</h2>
            <p>Chioma introduces her quarterly event, Ink and Insights, where she invites authors to share their books and insights with a live and online audience. She explains the concept and benefits of the hybrid event, and how it fosters a community of book lovers and writers.</p>
            <div className="card-actions justify-end">
              <button className="btn text-white bg-red-500">Read More</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure><img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709558731/th_zg0vzt.jpg" alt="Course 3" /></figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">Content Writing and Content Creation</h2>
            <p>Chioma writes on content writing and content creation, where she teaches the fundamentals and best practices of writing for the web and social media platforms. She outlines the content writting intricacies, Web vs Social media content, outcomes, and steps to become a pro writter.</p>
            <div className="card-actions justify-end">
              <button className="btn text-white bg-red-500">Read More</button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure><img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709558897/IMG_6040_gbpatp.jpg" alt="Course 4" /></figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">Reporting Migration: How I Won the Reporting Migration Competition in 2020</h2>
            <p>Chioma recounts how she participated and won the Reporting Migration Competition in 2020, launched by the UN Migration, that is, the International Organization for Migration (IOM). She discusses the topic and approach of her winning article, and the importance of reporting migration issues with accuracy and sensitivity.</p>
            <div className="card-actions justify-end">
              <button className="btn text-white bg-red-500">Register</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Courses
