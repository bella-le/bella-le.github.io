import React, { useState } from 'react';
import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import { Nav } from './components/Nav.tsx';
import { About } from './components/About.tsx';
import { Contact } from './components/Contact.tsx';
import { Works } from './components/Works.tsx';
import './styles.css';
import ASCIIText from './components/blocks/TextAnimations/ASCIIText/ASCIIText.jsx';
import { Things } from './components/Things.tsx';
import { Now } from './components/Now.tsx';

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isTitleTransitioning, setIsTitleTransitioning] = useState(false);
  const [isContentTransitioning, setIsContentTransitioning] = useState(false);
  const currentView = location.pathname.slice(1) || 'home';

  const handleNavigation = (view: string) => {
    if (view === 'blog') {
      window.location.href = 'https://blog.bella-le.com';
      return;
    }
    
    // If clicking the current view, go back to home
    if (view === currentView) {
      view = 'home';
    }
    
    // Only trigger title transition when switching to/from home
    if (currentView === 'home' || view === 'home') {
      setIsTitleTransitioning(true);
      setTimeout(() => {
        setIsTitleTransitioning(false);
      }, 300);
    }

    // Always trigger content transition
    setIsContentTransitioning(true);
    setTimeout(() => {
      navigate(view === 'home' ? '/' : `/${view}`);
      setIsContentTransitioning(false);
    }, 300);
  };

  const getContent = () => {
    switch(currentView) {
      case 'about': return <About />;
      case 'now': return <Now />;
      case 'contact': return <Contact />;
      case 'toybox': return <Things />;
      case 'works': return <Works />;
      default: return null;
    }
  };

  return (
    <div className="container">
      <div
        className={`title ${currentView === 'home' ? 'title-large' : 'title-small'} ${
          isTitleTransitioning ? 'title-fade-up' : ''
        }`}
        onClick={() => currentView !== 'home' && handleNavigation('home')}
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
          ''
        )}
      </div>      
      <div className={`content ${isContentTransitioning ? 'content-transitioning' : ''}`}>
        {currentView !== 'home' && getContent()}
      </div>

      <Nav currentView={currentView} handleClick={handleNavigation} />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;