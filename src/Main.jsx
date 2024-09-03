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
    color: activeSection === section ? '#FFFFFF' : '#A3ADB2',
    padding: '0.8rem 3rem',
    borderRadius: '16px',
    transition: 'background-color 0.5s ease, box-shadow 0.8s ease, color 0.3s ease',
    cursor: 'pointer',
  });

  const content = {
    'About Me': (
      <>
        Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
        <br /><br />
        I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters—Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
      </>
    ),
    Experiences: (
      <>
        I have over 8 years of experience in sales and have worked across multiple industries including tech, finance, and healthcare. At Salesforce, I have managed key accounts, led a team of sales associates, and contributed to a 20% year-over-year growth in my region.
        <br /><br />
        I enjoy working closely with clients to help them leverage our platform to solve their most pressing business challenges.
      </>
    ),
    Recommended: (
      <>
        If you're looking for ways to enhance your CRM experience, I highly recommend our new AI-driven sales tools that can help you forecast sales with 95% accuracy.
        <br /><br />
        Additionally, our new integration with Slack makes communication seamless and keeps the team aligned and focused.
      </>
    ),
  };

  return (
    <div className="poppins w-full h-screen bg-custom-gradient flex items-center justify-center">
      <div className="flex w-full justify-evenly items-center">
        <div className="w-[50%] h-[70vh] border border-white"></div>
        <div className="flex flex-col h-[70vh] justify-between">
          <div className="relative w-[720px] rounded-[19px] p-3 min-h-[316px] bg-[#363C43]">
            <img className="absolute top-5 left-3" src={question} alt="" />
            <img className='absolute top-1/2' src={menu} alt="" />
            <div className="flex flex-col h-full justify-between items-center">
              <div className="bg-[#171717] py-[6px] px-[3px] w-[612px] rounded-[23px]">
                <div className="flex justify-between px-1 items-center h-full font-[500]">
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
              {/* Scrollable content container */}
              <div className="w-[91%] ml-5 text-left text-[18px] mt-5 text-[#969696] p-4 rounded-[8px] flex items-center justify-center"
                   style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {content[activeSection]} {/* Dynamically display content based on selected section */}
              </div>
            </div>
          </div>
          <div className="w-[30rem] min-h-[13rem] bg-[#363C43] border border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
