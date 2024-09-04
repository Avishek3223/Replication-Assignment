import React, { useState } from 'react';
import question from './utils/question.svg';
import menu from './utils/menu-box.svg';
import image1 from './utils/image1.jpg'
import Gallery from './components/gallery';

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
    ...(window.innerWidth <= 1600 && { padding: '0.8rem 1.9rem' }), // Adjust padding for max-width 1600px
  });

  const content = {
    'About Me': (
      <>
        Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
        <br /><br />
        I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters—Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.
        <br /><br />
        Outside of work, I’m a huge fan of outdoor activities. I enjoy hiking, especially in the Sierra Nevada mountains, and spend most weekends exploring new trails. I’m also a big fan of football and follow the NFL closely, cheering for the New York Giants.
        <br /><br />
        When it comes to my role at Salesforce, I’m passionate about helping clients unlock the full potential of our platform. Whether it’s optimizing sales processes or integrating new technologies, I’m here to make sure you get the most out of our tools.
        <br /><br />
        Looking forward to working closely with you to achieve your business goals!
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
      <div className="flex w-full justify-evenly items-center flex-wrap">
        <div className="w-[50%] h-[80vh] border border-white max1600:h-[85vh]"></div>
        <div className="flex flex-col h-[80vh] justify-between max1600:h-[85vh]">
          <div className="relative max-w-[720px] rounded-[19px] p-3 h-[316px] bg-[#363C43] max1600:w-[600px] max1600:h-[290px]"
            style={{ boxShadow: '5.67px 5.67px 3.78px 0px #00000066' }}
          >
            <img className="absolute top-5 left-3" src={question} alt="" />
            <img className='absolute top-1/2' src={menu} alt="" />
            <div className="flex flex-col h-full justify-between items-center">
              <div className="bg-[#171717] py-[6px] px-[3px] w-[87%] rounded-[23px]">
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
              <div
                className="scrollbar-container w-[91%] ml-5 text-left text-[18px] text-[#969696] px-4 rounded-[8px] flex items-start justify-start max1600:mt-5"
                style={{ maxHeight: '200px', overflowY: 'auto' }}
              >
                {content[activeSection]}
              </div>
            </div>
          </div>
          <div
            className="h-[4px] mx-auto w-[90%]"
            style={{
              background: `linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), 
                 linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))`,
              boxShadow: '0px 4px 4px 0px #00000054',
            }}
          ></div>

          <Gallery />
          <div
            className="h-[4px] mx-auto w-[90%]"
            style={{
              background: `linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), 
                 linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))`,
              boxShadow: '0px 4px 4px 0px #00000054',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
