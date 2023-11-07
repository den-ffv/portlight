import React from "react";
import "./Partner.scss";
import partner1 from "/partner/partner1.svg";
import partner2 from "/partner/partner2.svg";
import partner3 from "/partner/partner3.svg";
import partner4 from "/partner/partner4.svg";
import partner5 from "/partner/partner5.svg";


function Partner() {
  const partnerItems = [
    { id: 1, img: partner1, alt: "partner1" },
    { id: 2, img: partner2, alt: "partner2" },
    { id: 3, img: partner3, alt: "partner3" },
    { id: 4, img: partner4, alt: "partner4" },
    { id: 5, img: partner5, alt: "partner5" },
  ];
  return (
    <div className='partner'>
      <h3 className='partner__title'>WE PARTNER WITH FORWARD</h3>
      <div className='partner__logo'>
        {partnerItems.map((partnerItem) => (
          <img
            key={partnerItem.id}
            src={partnerItem.img}
            alt={partnerItem.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default Partner;
