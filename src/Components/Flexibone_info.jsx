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
import Service_info from "./Services_info";
import { useEffect, useState } from "react";

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
      <section className="Banner" style={{ gap: "10px"}}>
        <div className="overlay"></div>
        <h2 className="Flexibone-info-title">
          We'd Love To <span className="highlight">See You Smile</span>
        </h2>
        <div className="line"></div>

        <div className="Flexibone-content">
          <div className="Flexibone-text-section">
            <p>
              Distinctively re-engineer revolutionary meta-services and premium
              architectures. Intrinsically incubate intuitive opportunities and
              real-time potentialities.Appropriately communicate one-to-one technology after
              plug-and-play networks. Quickly aggregate B2B users and worldwide
              potentialities.Quickly cultivate optimal processes and tactical architectures.
              Completely iterate covalent strategic theme areas via accurate
              e-markets. Quickly aggregate B2B users and worldwide
              potentialities.Quickly cultivate optimal processes and tactical architectures.
              Completely iterate covalent strategic theme areas via accurate
              e-markets.
            </p>
          </div>
          <div className="Flexibone-image-section">
            <img src="/img/Banner_2.png" alt="Flexibone visual" />
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

      {/* <Service_info /> */}
    </div>
  );
}

export default Flexibone_info;
