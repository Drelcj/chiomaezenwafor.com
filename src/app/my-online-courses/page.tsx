import React from 'react'
import Image from 'next/image'

const MyOnlineCourses = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
    <h1>My Online Courses Page</h1>
    <Image src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709706463/R_1_t8jsrx.png" alt='Construction' width={800}
  height={800} />
  </div>
  )
}

export default MyOnlineCourses