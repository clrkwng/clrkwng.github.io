module.exports = {
  siteTitle: 'Clark Wang | Software Engineer',
  siteDescription:
    'Clark Wang is a software engineer based in Berkeley, CA who specializes in developing (and occasionally designing) exceptional, high-quality code.',
  siteKeywords:
    'Clark Wang, Clark, Wang, clrkwng, software engineer, front-end engineer, web developer, javascript, berkeley, machine learning',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk', //Change later

  name: 'Clark Wang',
  location: 'Berkeley, CA',
  email: 'clwang07733@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/clrkwng/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/clark-wang-247b97164/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/clrkwng/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/klarcwang/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ClarkWa21062387',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@ClarkWa21062387',
  googleAnalyticsID: 'UA-45666519-2', //to do later

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
