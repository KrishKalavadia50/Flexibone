import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Banner from "./Banner";
import Articles from "./Articles";
import Contact from "./Contact";

const testimonials = [
  {
    name: "Ravi Sharma",
    role: "Heart Patient",
    message:
      "After my surgery, I received such compassionate care. Dr. Verma and the team saved my life.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Meera Joshi",
    role: "Knee Replacement Patient",
    message:
      "I can walk pain-free after years of suffering. I'm deeply thankful.",
    video: "https://www.w3schools.com/html/movie.mp4",
    image: "https://i.pravatar.cc/150?img=22",
  },
  {
    name: "Ahmed Khan",
    role: "Cancer Survivor",
    message:
      "With the advanced treatment and continuous support, I’m now cancer-free!",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    image: "https://i.pravatar.cc/150?img=32",
  },
];

const TestimonialCarousel = () => {
  const containerRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY - containerRef.current.offsetTop;
      setScrollY(offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Banner />
      <div
        className="overlap-wrapper"
        ref={containerRef}
        style={{ height: `${testimonials.length * 100}vh` }}
      >
        {testimonials.map((t, idx) => {
          const start = idx * window.innerHeight;
          const end = (idx + 1) * window.innerHeight;
          const visible = scrollY >= start && scrollY < end;

          const opacity = visible ? 1 : 0;
          const translateY = visible ? 0 : 50;

          return (
            <section
              key={idx}
              className={`testimonial-slide ${idx % 2 === 0 ? "zig" : "zag"}`}
              style={{
                top: `${idx * 100}vh`,
                opacity,
                transform: `translateY(${translateY}px)`,
              }}
            >
              <div className="testimonial-media">
                <video
                  src={t.video}
                  controls
                  className="testimonial-video"
                  muted
                  autoPlay
                  loop
                />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">"{t.message}"</p>
                <h2 className="testimonial-name">{t.name}</h2>
                <p className="testimonial-role">{t.role}</p>
              </div>
            </section>
          );
        })}
      </div>
      <Articles />
      <Contact />
      <Footer />
    </>
  );
};

export default TestimonialCarousel;
