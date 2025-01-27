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

export default WorkItem;