import Hero from "./components/hero/Hero";
import Image from "next/image";
import Register from "./components/register/Register";
import Courses from "./components/courses/Courses";
import Clients from "./components/clients/Clients";
import Blog from "./components/blog/Blog";
import ProjectsCta from "./components/projects-cta/ProjectsCta";
// import Countdwown from "./components/countdown/Countdown";
import TestimonialSection from "./components/testimonial/Testimonial";
// import Count from "./components/count/Count";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div>
        {/* <Countdwown /> */}
        {/* <Count /> */}
      </div>
      <div className="pt-20 pb-20">
        <Courses />
      </div>
         <div>
        <Register />
      </div>
      <Clients />
      <div>
        <ProjectsCta />
      </div>
      <div>
        <Blog />
      </div>
      <div>
        <TestimonialSection />
      </div>
    </main>
  );
}
