export const About = () => (
  <div className="card">
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden flex-shrink-0">
        <img 
          src="/img/bella-headshot.png" 
          alt="Bella Le"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h2 className="section-heading">about ✨</h2>
        <p>
          bella/bel/bels
        </p>
        <p>
          she/her tea-powered yappy full-stack developer living in San Francisco with 🐈🐈‍⬛
        </p>
        <p>
          speaks 🇺🇸🇻🇳🇫🇷🇯🇵
        </p>
        <p><a href="mailto:hello@bella-le.com" className="email">hello@bella-le.com</a></p>
      </div>
    </div>
  </div>
);
