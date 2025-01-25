export const Resume = () => (
  <div className="card" style={{maxWidth: '90vw', width: '1200px'}}>
    <div className="flex justify-between items-center mb-4">
      <h2 className="title title-small">Resume</h2>
      <a href="/img/Bella_Le_Resume.pdf" download className="button">
        Download PDF
      </a>
    </div>
    <iframe
      src="/img/Bella_Le_Resume.pdf"
      className="iframe"
      title="Resume PDF"
    />
  </div>
);