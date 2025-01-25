import { useState } from 'react';

export const Resume = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card">
      <div className="resume-header">
        <h2 className="section-heading mb-0">resume 📄</h2>
        <div className="resume-buttons">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="button"
          >
            {isOpen ? 'close' : 'view'}
          </button>
          <a href="/img/Bella_Le_Resume.pdf" download className="button">
            pdf download
          </a>
        </div>
      </div>
      {isOpen && (
        <iframe
          src="/img/Bella_Le_Resume.pdf"
          className="iframe"
          title="Resume PDF"
        />
      )}
    </div>
  );
};