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
      {
        type: 'features',
        features: [
          {
            imgage: '../img/feature1.svg',
            title: '1. Receive payments in 50 seconds',
            text:
              'Tell us your <strong>event name, date, ticket types and price</strong> and immediately start receiving money and collect signups from your attendees via a unique link. Optionally add more ticket types to accomodate for tickets at different prices.',
          },
          {
            imgSrc: '../img/feature2.svg',
            title: '2. Spread the word about your event',
            text:
              'Your attendees signup on a <strong>unique page for the event</strong> in a matter of seconds and pay with <strong>MobilePay</strong> or credit card (if there is an admission fee). Share the link on your <strong>Facebook</strong> event, Facebook group or integrate the ticket sale directly in your website. Meanwhile, <strong>track the signups</strong> and update event details at anytime via your personal dashboard.',
          },
          {
            imgSrc: '../img/feature3.svg',
            title: '3. Maintain overview and receive money',
            text:
              "On the day you'll have a complete list of all attendees who you can <strong>check in on a computer, tablet or smartphone</strong>. The attendees have received the ticket via email, which can be printed or displayed directly from a smartphone. After the event, you’ll automatically receive an <strong>overview of the ticket sales</strong> and the money deposited to your bank account.",
          },
        ],
      },
      {
        type: 'picture_right',
        heading: 'Guests can pay with MobilePay or their credit card',
        strong_paragraph: '50% of our users pay with MobilePay.',
        paragraph:
          'After the event has competed, your money is deposited directly into your bank account.',
      },
    ],
  },
  {
    path: '/about',
    title: 'About us',
    ...more,
  },
]
