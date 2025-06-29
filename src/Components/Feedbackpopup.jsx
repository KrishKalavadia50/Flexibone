import { form } from "framer-motion/client";
import React, { useEffect, useState } from "react";

function Feedbackpopup() {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    role: "",
    feedback: "",
    image: "",
  });


  const handleChange = (e) => {
    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const handlefileupload = async (e) => {
    const file = e.target.files[0];

    console.log(file);

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Web_App");
    formData.append("cloud_name", "dzzkn0ipr");

    try {
      setLoading(true);
      const response = await fetch("https://api.cloudinary.com/v1_1/dzzkn0ipr/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.secure_url) {
        console.log("Image uploaded to Cloudinary:", data.secure_url);

        setFormdata({
          ...formdata,
          image: data.secure_url
        });
      } else {
        console.error("Cloudinary upload failed", data);
      }

    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };


  const handlesubmit = async (e) => {
    e.preventDefault();

    if (formdata.name === "" || formdata.role === "" || formdata.feedback === "" || formdata.image === "") {
      alert("Please fill all the fields");
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyXZvFEzlRNhbLSCPX-Dfvh11e9fIlp37aES2flHl20I-FaJf-5RiyjaLm1q7K4u9V5Ew/exec",
        {
          method: "POST",
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(formdata),
        }
      );

      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  function openPopup() {
    setActive(true);
  }

  function closePopup() {
    setActive(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      let popup = document.getElementById("feedbackPopup");
      let button = document.querySelector(".feedback-button");

      if (popup && !popup.contains(event.target) && event.target !== button) {
        closePopup();
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="feedback-button" onClick={openPopup}>
        Feedback
      </div>
      <div
        id="feedbackPopup"
        className="feedback-popup"
        style={{ left: active ? "calc(0%)" : "-130%", display: "flex", gap: "20px", width: "100vw", justifyContent: "center", alignItems: "center"}}
      >

        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", display:"flex",justifyContent:"center",alignItems:"center", boxShadow:"2px 2px 50px rgba(0, 0, 0, 11.64)" }}>
          <div style={{ width: "500px", height: "450px", backgroundColor: "white"}}>
            <img src="/img/Banner_2.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius:"0.5rem" }} />
          </div>
          <div className="feedback-content" style={{ position: "relative", backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
            <span className="close-btn" onClick={closePopup}>
              &times;
            </span>
            <h2>Patient Feedback</h2>

            <form onSubmit={handlesubmit}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" onChange={handleChange} required />

             <label htmlFor="role">Surgery Type</label>
              <select id="role" name="role" onChange={handleChange} required value={formdata.role}>
                <option value="" disabled>Select Surgery Type</option>
                <option value="Knee Replacement">Knee Replacement</option>
                <option value="Hip Replacement">Hip Replacement</option>
                <option value="Spinal Surgery">Spinal Surgery</option>
                <option value="Arthroscopy">Arthroscopy</option>
                <option value="Other">Other</option>
              </select>

              <label htmlFor="feedback">Your Feedback</label>
              <textarea
                id="feedback"
                name="feedback"
                rows="4"
                placeholder="Share your experience..."
                onChange={handleChange}
                required
              ></textarea>

              <label htmlFor="image">Upload Your Image</label>
              <input type="file" id="image" name="image" accept="image/*" onChange={handlefileupload} />

              <button type="submit">{loading ? 'uploading image...' : 'Submit Feedback'}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedbackpopup;
