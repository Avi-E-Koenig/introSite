import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

import LinkBtn from './link-btn';

const LINKS = [
  {
    href: 'https://github.com/Avi-E-Koenig',
    label: 'GitHub',
    Icon: AiFillGithub,
  },
  {
    href: 'https://www.linkedin.com/in/avi-koenig/',
    label: 'LinkedIn',
    Icon: FaLinkedinIn,
  },
];

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
};

const SocialLinks = ({ className, iconSize = 40 }: SocialLinksProps) => {
  const gap = Math.max(12, iconSize / 2);

  return (
    <ul
      className={`flex flex-wrap justify-center ${className ?? ''}`}
      style={{ gap }}
    >
      {LINKS.map(({ href, label, Icon }) => (
        <li key={label}>
          <LinkBtn
            href={href}
            aria-label={label}
            variant="icon"
            className="size-16 text-purple-500 transition-colors duration-200 hover:text-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
          >
            <Icon size={iconSize} aria-hidden />
            <span className="sr-only">{label}</span>
          </LinkBtn>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;

