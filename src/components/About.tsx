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
          full-stack developer who likes cats, tea, and lame jokes. i like making cute things out of my own whims and for others to enjoy!
        </p>
      </div>
    </div>
  </div>
);
