import React, { useState } from 'react';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="about-me">
      <div className="tabs">
        {['About Me', 'Experiences', 'Recommended'].map((tab, index) => (
          <button
            key={index}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {activeTab === 'About Me' && <p>Hello, I’m Vishal Pandey currently 3rd year majoring in metallurgy and materials engineering from punjab engineering college, chandigarh.</p>}
        {activeTab === 'Experiences' && <p>1 years in web developement and coding.</p>}
        {activeTab === 'Recommended' && <p>I recommend CRM tools.</p>}
      </div>
    </div>
  );
};

export default AboutMe;
