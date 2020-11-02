import React from "react";

import "../css/style.css";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const imagesList = images.map((img) => (
    <ImageCard key={img.id} image={img} />
  ));

  return <div className='image-list'>{imagesList}</div>;
};

export default ImageList;
