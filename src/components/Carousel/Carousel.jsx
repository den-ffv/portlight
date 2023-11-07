import React from "react";
import "./Carousel.scss";

import foto1 from "/foto/photo1.png";
import foto2 from "/foto/photo2.png";
import foto3 from "/foto/photo3.png";
import foto4 from "/foto/photo4.png";
import foto5 from "/foto/photo5.png";
import foto6 from "/foto/photo6.png";

function Carousel() {
  const carouselItems = [
    { id: 1, foto: foto1, alt: "foto1" },
    { id: 2, foto: foto2, alt: "foto2" },
    { id: 3, foto: foto3, alt: "foto3" },
    { id: 4, foto: foto4, alt: "foto4" },
    { id: 5, foto: foto5, alt: "foto5" },
    { id: 6, foto: foto6, alt: "foto6" },
  ];

  return (
    <div className='carousel'>
      {carouselItems.reverse().map((carouselItem) => (
        <div className='carousel__element' key={carouselItem.id}>
          <img src={carouselItem.foto} alt={carouselItem.alt} />
        </div>
      ))}
    </div>
  );
}

export default Carousel;
