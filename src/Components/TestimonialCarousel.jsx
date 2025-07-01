
import {
  GiLeg,
  GiShoulderArmor,
  GiPelvisBone,
  GiKneeCap,
  GiBodyBalance,
  GiBrokenBone,
  GiFootTrip,
  GiArm,
} from "react-icons/gi";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import ClientsT from "./ClientsT";

function Flexibone_info() {
  const servicesData = [
    {
      title: "Knee Arthroscopy",
      description: "Minimally invasive knee joint treatment.",
      icon: <GiLeg className="sicon" />,
      isBlue: false,
    },
    {
      title: "Shoulder Arthroscopy",
      description: "Keyhole surgery for shoulder issues.",
      icon: <GiShoulderArmor className="siconb"/>,
      isBlue: true,
    },
    {
      title: "Hip Arthroscopy",
      description: "Minimally invasive hip joint repair.",
      icon: <GiPelvisBone className="sicon" />,
      isBlue: false,
    },
    {
      title: "Total Knee Replacement",
      description: "Surgical knee joint replacement.",
      icon: <GiKneeCap className="siconb" />,
      isBlue: true,
    },
    {
      title: "Complex Trauma Surgery",
      description: "Advanced treatment for severe injuries.",
      icon: <GiBodyBalance className="sicon" />,
      isBlue: false,
    },
    {
      title: "Hemi Replacement",
      description: "Partial joint replacement surgery.",
      icon: <GiBrokenBone className="siconb" />,
      isBlue: true,
    },
    {
      title: "Knee Sports Injuries",
      description: "Treatment for knee-related sports injuries.",
      icon: <GiFootTrip className="sicon" />,
      isBlue: false,
    },
    {
      title: "Elbow Replacement",
      description: "Artificial implant for elbow joint.",
      icon: <GiArm className="siconb" />,
      isBlue: true,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const itemsPerSlide = isMobile ? 1 : 4;
  const groupedData = [];

  for (let i = 0; i < servicesData.length; i += itemsPerSlide) {
    groupedData.push(servicesData.slice(i, i + itemsPerSlide));
  }

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const totalSlides = groupedData.length;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [groupedData]);

  return (
    <div>
      <Nav />
      <section className="Bannertesti" style={{ gap: "10px"}}>
        <div className="overlay"></div>
        <h2 className="Flexibone-info-title">
          We'd Love To <span className="highlight">See You Smile</span>
        </h2>
        <div className="line"></div>

        <div className="Flexibone-content">
          <div className="Flexibone-text-section">
            <p>
            Every Step Forward Begins with Trust. From joint pain to joyful movement our patients share their powerful journeys of healing, hope, and renewed mobility. These stories reflect more than recovery. They reflect the care, expertise, and dedication behind every treatment we provide. Read real experiences from real people who regained their freedom and their smiles through orthopedic excellence.
            </p>
          </div>
          <div className="Flexibone-image-section">
            <img src="/img/TesttiBanner.jpeg" alt="Flexibone visual" />
          </div>
        </div>

        {/* Auto Scrolling Slider */}
        <div style={{ zIndex: 100, width: "90vw", overflow: "hidden", marginTop: "95px" }}>
          <div
            className="slider-track"
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${currentIndex * 90}vw)`,
              width: `${groupedData.length * 90}vw`,
            }}
          >
            {groupedData.map((group, index) => (
              <div key={index} className="slide-wrapper" style={{ display: "flex", gap: "10px" }}>
                {group.map((service, i) => (
                  <div
                    className="service-box2"
                    style={{ width: isMobile ? "100%" : "22vw" }}
                    key={i}
                  >
                    <div className={service.isBlue ? "service-icon-blue" : "service-icon"}>
                      {service.icon}
                    </div>
                    <div className="service-text">
                      <div className="service-title">{service.title}</div>
                      <div className="service-descriptionn" style={{color:"rgb(255 255 255 / 64%)", fontSize:"14px"}}>{service.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientsT />
    </div>
  );
}

export default Flexibone_info;




