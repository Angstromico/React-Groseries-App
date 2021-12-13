import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://twitter.com/MoralesZuarez28',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.facebook.com/manuel.moraleszuarez/',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/manuel-esteban-morales-zuarez-68573b189/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://github.com/Angstromico',
    icon: <BsGithub />,
  },
];
