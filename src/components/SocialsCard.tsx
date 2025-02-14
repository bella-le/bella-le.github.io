import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import BentoCard from './BentoCard.tsx';

const SocialsCard = () => {
  const socials = [
    {
      icon: <FontAwesomeIcon icon={faEnvelope} size="lg" />,
      href: 'mailto:hello@bella-le.com',
      label: 'Email',
      color: 'text-custom-rose hover:text-custom-rose-light'
    },
    {
      icon: <FontAwesomeIcon icon={faGithub} size="lg" />,
      href: 'https://github.com/bella-le',
      label: 'GitHub',
      color: 'text-custom-purple hover:text-custom-purple/80'
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedin} size="lg" />,
      href: 'https://linkedin.com/in/bella-le',
      label: 'LinkedIn',
      color: 'text-custom-blue hover:text-custom-blue/80'
    },
    {
      icon: <FontAwesomeIcon icon={faInstagram} size="lg" />,
      href: 'https://instagram.com/bhl.bel',
      label: 'Instagram',
      color: 'text-custom-rose hover:text-custom-rose-light'
    },
    {
      icon: <FontAwesomeIcon icon={faFileLines} size="lg" />,
      href: '/img/Bella_Le_Resume.pdf',
      label: 'Resume',
      color: 'text-custom-blue hover:text-custom-blue/80'
    }
  ];

  return (
    <BentoCard colSpan={2} className="bg-custom-rose-light/20 backdrop-blur-sm p-4">
      <div className="flex flex-wrap gap-8 items-center justify-center h-full">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 ${social.color} transition-colors duration-200 text-2xl`}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </BentoCard>
  );
};

export default SocialsCard;
