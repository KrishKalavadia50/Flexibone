import React from "react";

const images = [
  "/img/i.jpeg",
  "/img/i1.jpeg",
  "/img/i2.jpeg",
  "/img/i3.jpeg",
  "/img/i4.jpeg",
  "/img/i5.jpeg",
  "/img/i6.jpeg",
  "/img/i7.jpeg",
  "/img/i8.jpeg",
  "/img/i9.jpeg",
  "/img/i10.jpeg",
  "/img/i11.jpeg",
  "/img/i12.jpeg",
  "/img/i13.jpeg",
  "/img/i14.jpeg",
  "/img/i15.jpeg",
  "/img/i16.jpeg",
  "/img/i17.jpeg",
  "/img/i18.jpeg",
  "/img/i19.jpeg",
  "/img/i20.jpeg",
  "/img/i21.jpeg",
  "/img/i22.jpeg",
  "/img/i23.jpeg",
  "/img/i24.jpeg",
  "/img/i25.jpeg",
  "/img/i26.jpeg",
  "/img/i27.jpeg",
  "/img/i28.jpeg",
  "/img/i29.jpeg",
  "/img/i30.jpeg"
];

const fullImageSet = [...images, ...images];
const shuffledImageSet = [...images].sort(() => Math.random() - 0.5);
const fullShuffledSet = [...shuffledImageSet, ...shuffledImageSet];

export default function Awards() {
  return (
    <div className="awards-section">
      <h2 className="awards-title">
        <span className="highlight-green">Doctor’s Awards</span> &{" "}
        <span className="highlight-blue">Seminars Highlights</span>
      </h2>

      <div className="multi-row-slider">
        {[0, 1, 2].map((row) => (
          <div className="slider-row-wrapper" key={row}>
            <div
              className={`slider-row ${row % 2 === 1 ? "reverse" : "forward"} delay-${row}`}
            >
              {(row === 2 ? fullShuffledSet : fullImageSet).map((src, idx) => (
                <div className="slider-item" key={`${row}-${idx}`}>
                  <img src={src} alt={`award-${idx}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}