import React, { useState } from 'react';
import { Nav } from './components/Nav.tsx';
import { About } from './components/About.tsx';
import { Contact } from './components/Contact.tsx';
import { Resume } from './components/Resume.tsx';
import './styles.css';
import ASCIIText from './components/blocks/TextAnimations/ASCIIText/ASCIIText.jsx';
import { Things } from './components/Things.tsx';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = (view: string) => {
    if (currentView === 'home' || view === 'home') {
      setIsTransitioning(true);
    }
    if (view === 'blog') {
      window.location.href = 'https://blog.bella-le.com';
    } else {
      setTimeout(() => {
        setCurrentView(view);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const getContent = () => {
    switch(currentView) {
      case 'about': return <About />;
      case 'resume': return <Resume />;
      case 'contact': return <Contact />;
      case 'things': return <Things />;
      default: return null;
    }
  };

  return (
    <div className="container">
      <div
        className={`title ${currentView === 'home' ? 'title-large' : 'title-small'} ${
          isTransitioning ? 'title-fade-up' : ''
        }`}
        onClick={() => currentView !== 'home' && handleClick('home')}
        style={currentView === 'home' ? 
          {width: '100%', maxWidth: 800, height: 200} : 
          {width: 'auto', height: 'auto'}}
      >
        {currentView === 'home' ? (
          <ASCIIText
            text='bella'
            textFontSize={40}
            enableWaves={true}
          />
        ) : (
          <h1 className="text-4xl font-bold text-center text-[#d692a3]">bella</h1>
        )}
      </div>      
      <div className={`content ${isTransitioning ? 'content-transitioning' : ''}`}>
        {currentView !== 'home' && getContent()}
      </div>

      <Nav currentView={currentView} handleClick={handleClick} />
    </div>
  );
};

export default App;