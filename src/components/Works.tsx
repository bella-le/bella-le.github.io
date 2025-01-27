import React from 'react';
import WorkItem from "./WorkItem.tsx";

export const Works = () => (
  <div className="card">
    <h2 className="section-heading">works 💼</h2>
    <h3 className="work-heading">places i've worked</h3>

    <WorkItem
      company="netflix"
      role="software engineer, games platform reliability"
      location="los gatos"
      description="currently working on observability"
      links={[
        {
          text: "website",
          url: "https://netflix.com/",
        }
      ]}
    />

    <WorkItem
      company="linkedin"
      role="software engineer, billing"
      location="sunnyvale"
      description="built a pipeline for LinkedIn's threshold-based billing system"
      links={[
        {
          text: "website",
          url: "https://linkedin.com/",
        }
      ]}
    />

    <WorkItem
      company="quora"
      role="software engineer, home feed & notifs"
      location="mountain view"
      description="tech lead on home feed and iterated on home feed engagement; was responsible for reliability and speed metrics. implemented a new type of logging for engagement"
      links={[
        {
          text: "website",
          url: "https://quora.com/",
        }
      ]}
    />

    <WorkItem
      company="amazon"
      role="sde intern, management as a service"
      location="nyc"
      description="built frontend components for amazon ads b2b. xi'an famous foods changed my life"
      links={[
        {
          text: "website",
          url: "https://amazon.com/",
        }
      ]}
    />

    <WorkItem
      company="amazon"
      role="sde intern, aaa"
      location="seattle"
      description="internal data pipeline work, ate a lot of bananas, and kayaked."
      links={[
        {
          text: "website",
          url: "https://amazon.com/",
        }
      ]}
    />

    <h3 className="work-heading">schooling</h3>
    <WorkItem
      company="uc san diego"
      role="computer science, b.s."
      location="2016-2020"
      description="cum laude, minor in cognitive science. chancellor's scholar. tutored for CSE 101: algorithms and data structures. gremlin in the labs"
      links={[
        {
          text: "website",
          url: "https://ucsd.edu/",
        }
      ]}
    />

    <h3 className="work-heading">cute fun unserious things</h3>
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

    <WorkItem
      company="bella-le.com"
      role="this website"
      description="built with 💞 with react and tailwind. animated UI components from reactbits.dev. font is Victor Mono, aka my favorite font in the world"
      links={[
        {
          text: "website",
          url: "https://bella-le.github.io/scoopology/",
        },
        {
          text: "github",
          url: "https://github.com/bella-le/scoopology",
        },
        {
          text: "reactbits.dev",
          url: "https://www.reactbits.dev/",
        },
      ]}
    />

    <p className="subtle-text">last updated 01-26-25.</p>
  </div>
);