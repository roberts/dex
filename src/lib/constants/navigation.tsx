import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoGithub, IoFlash, IoPlanet } from 'react-icons/io5';

// Navbar links
export const navLinks = [
  {
    label: 'Website',
    href: '',
  },
  {
    label: 'Swap',
    href: '/swap',
  },
];

// Footer social links
export const socialLinks = [
  {
    href: 'https://github.com/roberts',
    icon: <IoLogoGithub className="w-5 h-5" />,
    label: 'Github',
    hoverColor: 'hover:text-black hover:dark:text-black',
  },
  {
    href: 'https://x.com/DrewRoberts',
    icon: <FaXTwitter className="w-5 h-5" />,
    label: 'Twitter',
    hoverColor: 'hover:text-blue-600 hover:dark:text-blue-600',
  },
];

// Navigation items (from your existing navigation.ts)
export const navigation = [
  {
    name: 'Home',
    href: '/',
    icon: IoLogoGithub,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/roberts',
    icon: IoLogoGithub,
  },
  {
    name: 'Website',
    href: '',
    icon: IoPlanet,
  },
];