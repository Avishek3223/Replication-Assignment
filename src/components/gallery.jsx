import React, { useState, useRef } from 'react';
import question from '../utils/question.svg';
import menu from '../utils/menu-box.svg';
import left from '../utils/left.svg';
import right from '../utils/right.svg';
import initialImage from '../utils/image1.jpg';
import './gallery.css';

function Gallery() {
  const [images, setImages] = useState([initialImage, initialImage, initialImage]); // Initialize with three images
  const scrollRef = useRef(null);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages([...images, e.target.result]); // Add new image to the array
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const imageWidth = scrollRef.current.firstChild.clientWidth + 16; // Adjust based on image and spacing

      scrollRef.current.classList.add('scroll-transition'); // Add transition class for smooth scrolling

      if (direction === 'left') {
        scrollRef.current.scrollBy({
          left: -imageWidth,
        });
      } else if (direction === 'right') {
        scrollRef.current.scrollBy({
          left: imageWidth,
        });
      }

      // Remove the transition class after the scroll is complete
      setTimeout(() => {
        scrollRef.current.classList.remove('scroll-transition');
      }, 500); // 500ms delay matches the CSS transition
    }
  };

  return (
    <div>
      <div
        className="relative max-w-[720px] rounded-[19px] p-3 h-[316px] bg-[#363C43] max1600:w-[600px] max1600:h-[290px]"
        style={{ boxShadow: '5.67px 5.67px 3.78px 0px #00000066' }}
      >
        <div className="flex flex-col justify-around h-full">
          <img className="absolute top-6 left-3" src={question} alt="Icon" />
          <img className="absolute top-1/2" src={menu} alt="" />
          <div className="flex flex-col justify-between items-center">
            <div className="flex justify-between w-[85%]">
              <button
                className="bg-[#171717] text-white py-4 px-10 rounded-[20px]"
                style={{ boxShadow: '0px 4px 10px 2px #00000040 inset' }}
              >
                Gallery
              </button>
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleAddImage}
                />
                <button
                  className="flex gap-1 mr-3 bg-[#ffffff13] tracking-[1px] text-[#ecececea] p-4 px-5 rounded-full text-[12px] font-[800] text-center"
                  style={{
                    boxShadow: `
                      0px 3.26px 3.26px 0px #FFFFFF26 inset,
                      0px 0px 48.91px 0px #FFFFFF0D inset,
                      9px 10px 7.1px 0px #00000066,
                      -0.5px -0.5px 6.9px 0px #FFFFFF40
                    `,
                  }}
                  onClick={() => document.getElementById('imageUpload').click()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="#FFFF"
                    className="w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  ADD IMAGE
                </button>
                <button
                  className="text-white p-4 rounded-full"
                  style={{
                    background:
                      'linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)',
                    boxShadow:
                      '4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7',
                  }}
                  onClick={() => handleScroll('left')}
                >
                  <img src={left} alt="Previous" />
                </button>
                <button
                  className="text-white p-4 rounded-full"
                  style={{
                    background:
                      'linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)',
                    boxShadow:
                      '4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7',
                  }}
                  onClick={() => handleScroll('right')}
                >
                  <img src={right} alt="Next" />
                </button>
              </div>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="flex space-x-5 overflow-x-scroll no-scrollbar w-[84%] mx-auto"
          >
            {images.map((image, index) => (
              <img
                key={index}
                className="rounded-[10px] w-[11rem] h-[11rem] flex-shrink-0 max1600:w-[9rem] max1600:h-[9rem]"
                src={image}
                alt={`Image ${index + 1}`}
                style={{ filter: 'grayscale(100%)' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
