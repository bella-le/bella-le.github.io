import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaBluesky } from "react-icons/fa6";
import { HiOutlineDocument } from 'react-icons/hi';

export const Contact = () => (
  <div className="card">
    <h2 className="section-heading">contact 📞</h2>
    <div className="social-icons">
      <a 
        href="mailto:hello@bella-le.com" 
        className="social-icon"
        aria-label="Email"
      >
        <MdEmail size={24} />
      </a>
      <a 
        href="https://github.com/bella-le" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="GitHub"
      >
        <FaGithub size={24} />
      </a>
      <a 
        href="https://linkedin.com/in/bella-le" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
      <a 
        href="https://bsky.app/profile/bella-le.com" 
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Bluesky"
      >
        <FaBluesky size={24} />
      </a>
      {/* <a 
        href="https://open.spotify.com/playlist/7soQr84csviemFMXQO55qS?si=b147b51e77ec41ac" 
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Spotify"
      >
        <FaSpotify size={24} />
      </a> */}
      {/* <a 
        href="https://www.instagram.com/bhl.bel/" 
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Instagram"
      >
        <FaInstagram size={24} />
      </a> */}
      <a 
        href="/img/Bella_Le_Resume.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Resume"
      >
        <HiOutlineDocument size={24} />
      </a>
    </div>
  </div>
);