interface WorkItemProps {
  company: string;
  role: string;
  location: string;
  description: string;
  links?: Array<{
    text: string;
    url: string;
  }>;
}

const WorkItem = ({ company, role, location, description, links }: WorkItemProps) => (
  <div className="mb-6 bg-[#fcf0f3] p-4 rounded-lg">
    <div className="flex flex-wrap items-baseline gap-2 mb-2">
      <h3 className="text-[#d692a3] font-bold">{company}</h3>
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <span className="text-gray-500 italic">// {role}{location && ", "}{location}</span>
    </div>
    <p className="mb-2">{description}</p>
    {links && links.length > 0 && (
      <div className="text-xs text-gray-500">
        [ {links.map((link, index) => (
          <>
            <a 
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d692a3] hover:underline"
            >
              {link.text}
            </a>
            {index < links.length - 1 && ", "}
          </>
        ))} ]
      </div>
    )}
  </div>
);

export const Works = () => (
  <div className="card">
    <h2 className="section-heading">works 💼</h2>
    <h3 className="work-heading">places i've worked</h3>

    <WorkItem
      company="netflix"
      role="software engineer, games platform reliability"
      location="los gatos"
      description="working on observability"
    />

    <WorkItem
      company="linkedin"
      role="software engineer, billing"
      location="sunnyvale"
      description="built a pipeline for LinkedIn's threshold-based billing system"
    />

    <WorkItem
      company="quora"
      role="software engineer, feed"
      location="mountain view"
      description="lead on home feed and iterated on home feed engagement, responsible for reliability and speed metrics"
    />

    <WorkItem
      company="amazon"
      role="sde intern, management as a service"
      location="nyc"
      description="built frontend components for amazon ads"
    />

    <WorkItem
      company="amazon"
      role="sde intern, aaa"
      location="seattle"
      description="facilitated the migration of internal data with realtime updates, improved data update latency from a 24-hour batch job to a consistent 10 minute stream of data"
    />

    <h3 className="work-heading">cute fun things</h3>
    <WorkItem
      company="fridge magnets"
      role="2025"
      description="you find a cute little fridge on the internet"
      links={[
        {
          text: "website",
          url: "https://fridge-magnets-production.up.railway.app/",
        },
        {
          text: "github",
          url: "https://github.com/bella-le/fridge-magnets",
        },
      ]}
    />

    <WorkItem
      company="scoopology: the ice cream personality test 🍦"
      role="2024"
      description="the cutest ice cream personality quiz!"
      links={[
        {
          text: "website",
          url: "https://bella-le.github.io/scoopology/",
        },
        {
          text: "github",
          url: "https://github.com/bella-le/scoopology",
        },
      ]}
    />

    <p className="subtle-text">last updated 01-26-25. built with 💞 with react and tailwind</p>
  </div>
);