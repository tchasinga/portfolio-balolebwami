import { useState, useEffect } from 'react';

function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    'https://cdn.pixabay.com/photo/2021/12/21/06/11/iphone-6884672_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/02/02/11/08/office-620817_1280.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="image-slider">
      <img
        src={images[imageIndex]}
        alt={`Image ${imageIndex}`}
        className="image-slider__image"
      />
    </div>
  );
}

export default ImageSlider;