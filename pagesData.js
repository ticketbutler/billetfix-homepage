export default [
  {
    path: '/',
    title: 'BilletFix Homepage',
    sections: [
      {
        type: 'hero_section',
        heading: "It's never been easier to manage events",
        image: './img/lights.jpg',
        spanText: [
          'Free to use for the organizer',
          'Ultra low fees',
          'Ready to receive payments in seconds',
          'Integrate for free on your website',
        ],
      },
      {
        type: 'partners',
        image: [
          '../img/dtu.png',
          '../img/cse.jpg',
          '../img/fonden.png',
          '../img/ticketbutler.png',
          '../img/tiny-rhino.png',
        ],
      },
      {
        type: 'picture_right',
        heading: 'Are you organizing an event for your fellow students?',
        paragraphs: [
          "Regardsless if it's to the christmas lunch, intro trip or end of semester party, we have made it easy for students.",
          'Forget about complicated spreadsheets and time consuming sale in the breaks. Just do it online - for free!',
        ],
      },
    ],
  },
  {
    path: '/about',
    title: 'About us',
    ...more,
  },
]
