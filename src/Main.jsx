import React, { useState } from 'react';
import question from './utils/question.svg';
import menu from './utils/menu-box.svg';

const Main = () => {
  const [activeSection, setActiveSection] = useState('About Me');

  const sectionStyle = (section) => ({
    backgroundColor: activeSection === section ? '#28292F' : 'transparent',
    boxShadow:
      activeSection === section
        ? '13.49px 16.87px 67.47px 8.43px #0A0A0A, -8.43px -16.87px 50.6px -16.87px #485B71'
        : 'none',
    padding: '1rem 3rem',
    borderRadius: '16px',
    transition: 'background-color 0.5s ease, box-shadow 0.8s ease', // Add smooth transition
    cursor: 'pointer', // Optional: indicate the clickable nature
  });

  return (
    <div className="poppins w-full h-screen bg-custom-gradient flex items-center justify-center">
      <div className="flex w-full justify-evenly items-center">
        <div className="w-[50%] h-[70vh] border border-white"></div>
        <div className="flex flex-col h-[70vh] justify-between">
          <div className="relative w-[36vw] rounded-[19px] p-2 min-h-[13rem] bg-[#363C43]">
            <img className="absolute top-3 left-2" src={question} alt="" />
            <div className="flex flex-col h-full justify-evenly items-center">
              <div className="bg-[#171717] w-[612px] h-[62px] rounded-[23px]">
                <div className="flex justify-between px-1 items-center h-full font-[500] text-[#A3ADB2]">
                  <div
                    style={sectionStyle('About Me')}
                    onClick={() => setActiveSection('About Me')}
                  >
                    About Me
                  </div>
                  <div
                    style={sectionStyle('Experiences')}
                    onClick={() => setActiveSection('Experiences')}
                  >
                    Experiences
                  </div>
                  <div
                    style={sectionStyle('Recommended')}
                    onClick={() => setActiveSection('Recommended')}
                  >
                    Recommended
                  </div>
                </div>
              </div>
              <div className="bg-black w-[80%] h-[2rem]"></div>
            </div>
          </div>
          <div className="w-[30rem] min-h-[13rem] bg-[#363C43] border border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
