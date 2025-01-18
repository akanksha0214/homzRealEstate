import { useState } from "react";


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-full w-full">
      {/* Left and Right Arrows */}
      <div>
        <div onClick={goToPrevious} className="absolute top-1/2 transform -translate-y-1/2 left-8 text-5xl text-white cursor-pointer z-10">
          ❰
        </div>
        <div onClick={goToNext} className="absolute top-1/2 transform -translate-y-1/2 right-8 text-5xl text-white cursor-pointer z-10">
          ❱
        </div>
      </div>

      {/* Slide Image */}
      <div
        className="w-full h-64 md:h-80 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>

      {/* Title under Image */}
      <h3 className="text-center mt-4 mb-4 text-lg md:text-xl font-bold text-gray-800 font-cursive animate-fadeInUp">
        {slides[currentIndex].title}
      </h3>

      {/* Dots for Slide Navigation */}
      <div className="flex justify-center space-x-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`cursor-pointer text-xl ${currentIndex === slideIndex ? 'text-black' : 'text-gray-400'}`}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
