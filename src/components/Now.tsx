import WorkItem from "./WorkItem.tsx";

export const Now = () => (
  <div className="card">
    <h2 className="section-heading">now</h2>
    <div>
      <h3 className="work-heading">where to find me</h3>
      <p>living in <a href="https://www.google.com/maps/place/hayes+valley/" className='email'>Hayes Valley, SF</a> with Armin & Io 🐈🐈‍⬛</p>
      <p>occasionally in the <a href="https://netflix.com/" className='email'>Netflix</a> office on Tuesdays and Thursdays</p>
      <h3 className="work-heading">what i'm up to right now</h3>
      <ul>
        <li>improv lessons at <a href="https://leela-sf.com/" className='email'>Leela</a>, because I'm atrociously socially awkward</li>
        <li>singing lessons at <a href="https://songbirdsf.com/" className='email'>Songbird Studios</a>, because I like making music too much but I'm pretty sure I'm not that good at it</li>
        <li>trying to get back into the gym. find me in the mornings because morning workouts feel the best and you can fight me otherwise</li>
        <li>tasting new matcha varieties</li>
        <li><a href="https://www.italki.com/" className='email'>日本語</a>を勉強しています~</li>
        <li>on a quest to become the best <a href="https://blog.bella-le.com/%F0%9F%A5%98+recipes/%F0%9F%8D%9C+b%C3%BAn+th%E1%BB%8Bt+n%C6%B0%E1%BB%9Bng+ch%E1%BA%A3+gi%C3%B2" className="email">Vietnamese restaurant</a> in San Francisco. kind of jk, because I'm not a restaurant</li>
        <li>putting more matcha and miso to everything I bake because why not</li>
        <li>not even eating out because San Francisco is too expensive</li>
        <li>🐐 ???</li>
      </ul>
      <h3 className="work-heading">current employment</h3>
      <WorkItem
        company="netflix"
        role="software engineer"
        location="los gatos"
        description="working on observability. falling asleep every time I go up and down the shuttle"
        links={[
          {
            text: "website",
            url: "https://netflix.com/",
          }
        ]}
      />
      <p className="subtle-text">
        last updated 01-26-25. this is page is a <a href="https://nownownow.com/about">now</a> page!
      </p>
    </div>
  </div>
);