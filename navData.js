exports.topNav = [
  {
    type: 'gatsbyLink',
    link: '/about/',
    // link_da: '/om-os',
    caption_en: 'About',
    caption_da: 'Om os',
  },

  {
    type: 'gatsbyLink',
    link: '/faq/',
    // link_da: '/faq/',

    caption_en: 'FAQ',
    caption_da: 'FAQ',
  },
  {
    type: 'reguralLink',
    link: 'https://ticketbutler.io/da/',
    caption_en: 'Enterprise solution',
    caption_da: 'Erhvervsløsning',
  },
  {
    type: 'gatsbyLink',
    link: 'https://ticketbutler.io/da/',
    caption_en: 'My tickets',
    caption_da: 'Mine billetter',
  },
  {
    type: 'gatsbyLink',
    link: 'https://billetfix.dk/user/login/',
    caption_en: 'Login',
    caption_da: 'Log ind',
  },
]

exports.footerNav = [
  {
    type: 'leftSection',
    line1_en: 'Ticketing delivered by:',
    line1_da: 'Billetsystem er leveret af:',
    linkText: 'Ticketbutler',
    linkTicketbutler: 'https://ticketbutler.io',
    cvr: '(CVR: 38404687)',
  },
  {
    type: 'centerSection',
    link: '/',
    // link_da: '/',
    caption_en: 'Home',
    caption_da: 'Forside',
  },
  {
    type: 'centerSection',
    link: '/contact/',
    // link_da: '/kontakt/',
    caption_en: 'Contact',
    caption_da: 'Kontakt',
  },
  {
    type: 'centerSection',
    link: '/privacy-policy/',
    // link_da: '/privatpolitik',
    caption_en: 'Privacy Policy',
    caption_da: 'Privatpolitik',
  },
  {
    type: 'centerSection',
    link: '/tandc/',
    // link_da: '/tandc/',
    caption_en: 'Terms & Conditions',
    caption_da: 'Vilkår Og Betingelser',
  },
  {
    type: 'icon',
    // src: require('./src/img/fb-icon.svg'),
    alt: 'fb-icon',
    link: 'https://www.facebook.com/BilletFix/',
    caption_en: 'Find us on Facebook',
    caption_da: 'Find os på Facebook',
  },
  {
    type: 'rightSection',
    text: 'BilletFix IVS',
  },
  {
    type: 'rightSection',
    text: 'CVR: 37073911',
  },
  {
    type: 'rightSection',
    text: 'Porcelænshaven 26 1.',
  },
  {
    type: 'rightSection',
    text: 'Frederiksberg 2000',
  },
  {
    type: 'rightSection',
    text: '89 80 12 80',
  },
  {
    type: 'rightSectionMail',
    href: 'mailto: info@billetfix.dk',
    text: 'info@billetfix.dk',
  },
]
