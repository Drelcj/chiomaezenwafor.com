import Hero from "./components/hero/Hero";
import Image from "next/image";
import Register from "./components/register/Register";
import Courses from "./components/courses/Courses";
import Clients from "./components/clients/Clients";
import Blog from "./components/blog/Blog";
import Countdwown from "./components/countdown/Countdown";
import TestimonialSection from "./components/testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div>
        <Countdwown />
      </div>
      <div className="pt-20 pb-20">
        <Courses />
      </div>
      <div>
        <Register />
      </div>
      <Clients />
      <div>
        <Blog />
      </div>
      <div>
        <TestimonialSection />
      </div>
    </main>
  );
}
