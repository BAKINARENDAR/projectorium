import React, { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import demop1 from "../../images/demop1.jpg";
import demop2 from "../../images/demop2.jpg";
import demop3 from "../../images/demop3.jpg";
import demop4 from "../../images/demop4.jpg";

const Projectzoom = () => {
  const [selectedImage, setSelectedImage] = useState(demop1);

  return (
    <div className="details-sidebar">
      <div>
        {/* Main Image */}
        <div className="thumbnail-major">
          <InnerImageZoom
            src={selectedImage} // Use the selectedImage state here
            alt="Product"
            hideHint={true}
            zoomType="hover"
            zoomScale={2}
            className="thumbnail-major-image"
          />
        </div>

        {/* Thumbnail Gallery */}
        <div className="thumbnail-gallery">
          <img
            className="thumbnail"
            src={demop1}
            alt="Thumbnail 1"
            onClick={() => setSelectedImage(demop1)} // Update correctly
          />
          <img
            className="thumbnail"
            src={demop2}
            alt="Thumbnail 2"
            onClick={() => setSelectedImage(demop2)} // Corrected
          />
          <img
            className="thumbnail"
            src={demop3}
            alt="Thumbnail 3"
            onClick={() => setSelectedImage(demop3)} // Use appropriate image
          />
          <img
            className="thumbnail"
            src={demop4}
            alt="Thumbnail 4"
            onClick={() => setSelectedImage(demop4)} // Use appropriate image
          />
           <img
            className="thumbnail"
            src={demop2}
            alt="Thumbnail 5"
            onClick={() => setSelectedImage(demop2)} // Use appropriate image
          />
           <img
            className="thumbnail"
            src={demop2}
            alt="Thumbnail 6"
            onClick={() => setSelectedImage(demop2)} // Use appropriate image
          />
        </div>
      </div>
    </div>
  );
};

export default Projectzoom;
