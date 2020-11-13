import React from "react";

const ImageCard = ({ image }) => {
  return <img alt={image.description} src={image.urls.regular} />;
};

export default ImageCard;
