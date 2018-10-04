exports.topNav = [
  {
    type: 'buttonLink',
    buttonText_en: 'create event',
    buttonText_da: 'opret arrangement',
  },
  {
    type: 'gatsbyLink',
    link_en: '/en/about/',
    link_da: '/da/om-os',
    caption_en: 'About',
    caption_da: 'Om os',
    target: '_self',
  },

  {
    type: 'gatsbyLink',
    link_en: '/en/faq/',
    link_da: '/da/faq/',
    caption_en: 'FAQ',
    caption_da: 'FAQ',
    target: '_self',
  },
  {
    type: 'gatsbyLink',
    link: 'https://ticketbutler.io/da/',
    caption_en: 'Enterprise solution',
    caption_da: 'Erhvervsløsning',
    target: '_blank',
  },
  {
    type: 'gatsbyLink',
    link: 'https://billetfix.dk/user/login/',
    caption_en: 'My tickets',
    caption_da: 'Mine billetter',
    target: '_self',
  },
  {
    type: 'gatsbyLinkBilletfix',
    link: 'https://billetfix.dk/user/login/',
    caption_en: 'Login',
    caption_da: 'Log ind',
    target: '_self',
  },
]
