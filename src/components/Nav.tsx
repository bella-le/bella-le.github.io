export const Nav = ({ currentView, handleClick }) => (
    <nav className="nav">
      {['about', 'blog', 'resume', 'contact', 'toybox'].map((link) => (
        <button 
          key={link}
          onClick={() => handleClick(link)}
          className={`nav-link ${currentView === link ? 'nav-link-active' : ''}`}
        >
          {link}
        </button>
      ))}
    </nav>
  );