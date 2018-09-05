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
        button1Text: 'start selling',
        button2Text: 'see video',
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
        texts: [
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
        type: 'picture_left',
        heading: 'Guests can pay with MobilePay or their credit card',
        strong_text: '50% of our users pay with MobilePay.',
        text:
          'After the event has competed, your money is deposited directly into your bank account.',
      },
      {
        type: 'mockup_right_first',
        heading: 'Sell tickets from your own website',
        strong_text: 'Attendees can signup from your own website',
        text:
          "It's as easy as copy & paste to start selling tickets on your own website - and it's free!",
        button_text: 'view the live demo example',
      },
      {
        type: 'mockup_right_second',
        heading: 'A unique event link, so you can share it anywhere',

        text:
          'Paste into your Facebook event, Facebook group, newsletter or a private email.',
        button_text: 'view the live demo example',
      },
      {
        type: 'picture_right_second',
        heading: 'Custom information about the attendee',
        srtong_text: 'Do you want to know something during signup?',
        text:
          'Get all the information you would like with custom fields. What field of study? What year are you on? Is it the first time you attend? Just contact us here for help!',
      },
      {
        type: 'pricing_cards',
        heading: 'The cheapest signup system in the market!',
      },
      {
        type: 'picture_left',
        heading: 'Give discounts to guests with coupons',
        text:
          'Do you give discounts to particular members of the student organization, or perhaps give a few free tickets out? As an organizer, you can create coupons that provides a discount in the purchasing process.',
      },
      {
        type: 'app',
        heading: 'Download your new best friend',
        text:
          'Follow the ticket sales and scan tickets at the event through the BilletFix app.',
      },
      {
        type: 'languages',
        heading: 'Language support',
        strong_text: 'Everything is in both English and Danish.',
      },
    ],
  },
  {
    path: '/about',
    title: 'About us',
    sections: [
      {
        type: '/about',
        heading: 'About',
        text: [
          'BilletFix offers a ticketing system to students who volunteer a lot of time and energy into organising events for their fellow students. Our stupidly simple ticketing system is designed to provide these volunteering heroes with more time and energy to concentrate on their events awesome - instead of managing the hassle of signups and payments',

          "We know that students don't have a lot of money to spend - so BilletFix is free for organisers. The guests pay the lowest service fee possible of 3 kr per paid ticket (only a bottle deposit) - AND your guests can pay with MobilePay! Too good to be true, right? Well, to keep the servers running and fuel our developers with energy drinks we find advertisers to support the project.",

          'The founders of BilletFix are to brothers who together are eager to make your life as a volunteer organiser easier and your guests happier.',

          'So forget complicated spreadsheets and time consuming ticket sales. Do it all online – simple and for free!',
        ],
      },
    ],
  },
  {
    path: '/faq',
    title: 'FAQ',
    sections: [
      {
        type: 'faq',
        heading: 'FAQ',
        content: [
          {
            id: 1,
            question:
              'How can BilletFix have such low service fee in comparison to other ticket systems/providers?',
            type: 'organiser',
            answer:
              'BilletFix is for students on SU, and the price is therefor as low as possible! The servicefee is as low as bottle depost! We can do this since we in the future will display advertisement for the signups.',
          },
          {
            id: 2,
            question: 'How do I integrate the signup on my own website?>',
            type: 'organiser',
            answer:
              'Just send an email to info@billetfix.dk, and ask for access to the integration on your own website. Then we’ll give you the directions.',
          },
          {
            id: 3,
            question: 'How do I link the signup to my Facebook event?',
            type: 'organiser',
            answer:
              'To link your sign-up from a Facebook event, when you create the event on your Facebook page or Facebook group. In the event list on BilletFix you’ll find the unique signup link which you copy/paste to “web-address for tickets”. If you’ve already created the event, go to “Edit” and find the field “web-address for tickets”. If you haven’t created the event from a Facebook page or Facebook group, just copy the link to the sign-up page to the description of the event. Don’t hesitate emailing info@billetfix.dk and get help with this.',
          },
          {
            id: 4,
            question: 'How do I cancel an event?',
            type: 'organiser',
            answer:
              'First and foremost inform your attendees the event is cancelled. You can always find the list of emails people have signed up with under “Order list” for the event. Hereafter find the with the event ID. You find it in the event list -- it starts with “#”. Write an email to info@billetfix.dk and inform you would like to cancel the event. Then we’ll take care of refunding the tickets.',
          },
          {
            id: 5,
            question:
              "How do I ask for extra information during attendee's signup?",
            type: 'organiser',
            answer:
              'First find the event id for the event in the event list -- it starts with “#”. Write an email to info@billetfix.dk stating the event ID and tell us what you would like to know about the guest. Then we’ll ensure the questions are asked during signup.',
          },
          {
            id: 6,
            question: "How do I scan the guest's tickets?",
            type: 'organiser',
            answer:
              'BilletFix offer a simple live check-in which you’ll access via the event list. The attendees either show the ticket on their smartphone or as a printed ticket. Just find the name or email and click “Check in”. You don’t have to install anything on your computer or download an app -- it doesn’t get more simple.',
          },
          {
            id: 7,
            question:
              'If I create an event on the Danish site, will it also be in English?',
            type: 'organiser',
            answer:
              'Yes, everyone can always change the language on the flag on the top right hand corner, regardless of which language you’ve created the event in.',
          },
          {
            id: 8,
            question: "I'm not a student, can I use BilletFix anyway?",
            type: 'organiser',
            answer:
              'You can use BilletFix for any type of event. Write an email to info@billetfix.dk if you have particular needs or functionalities for your event. We have things hidden behind the scene ;-)',
          },
          {
            id: 9,
            question: 'How much does it cost to use BilletFix?',
            type: 'organiser',
            answer:
              'It is always free for the organizer to use BilletFix! For free events there is no signup fee. For paid events we’ve set the fee the same as bottle deposit, 3 kr per ticket for the guest regardless of ticket price!',
          },
          {
            id: 10,
            question: 'When do I receive the money collected for an event?',
            type: 'organiser',
            answer:
              'To protect the rights for attendee’s refund in case the event will not take place we’ll transfer the money collected to the organizer within three working days after the conclusion of the event.',
          },
          {
            id: 11,
            question: 'Can I provide a description of an event?',
            type: 'organiser',
            answer:
              'The concept of BilletFix is simplicity, so you as an organizer don’t have to do more work than strictly needed. You’ve already given the information about the event on your Facebook group, website or newsletter so why should you add it to the event page again? Though, if you insist on having extra text on the event page, just send us an email on info@billetfix.dk.',
          },
          {
            id: 12,
            question: 'Can I limit the amount of tickets someone can buy?',
            type: 'organiser',
            answer:
              'Yes, first find the event id for the event in the event list -- it starts with “#”. Write an email to info@billetfix.dk stating the event ID and tell us what limitations you would like, then we’ll set it up for you.',
          },
          {
            id: 13,
            question:
              'Can I send a message to all the attendees before the event?',
            type: 'organiser',
            answer:
              'Sure, first find the event id for the event in the event list -- it starts with “#”. Write an email to info@billetfix.dk stating the event ID and tell us the event ID, then we’ll automatically send an email to everyone 1 day before the event.',
          },
          {
            id: 14,
            question: 'Do you have an API?',
            type: 'organiser',
            answer:
              'Yes, we have an API in private Beta. Just write an email to info@billetfix.dk if you’re interested in getting access.',
          },
          {
            id: 15,
            question: "I haven't received my ticket what do I do?",
            type: 'guest',
            answer:
              'Write a message or call the organizer of the event. The contact information is on the event page where you’ve signed up.',
          },
          {
            id: 16,
            question: 'How do I find the address of the event?',
            type: 'guest',
            answer:
              'The address is where you found the description about the event. e.g. on Facebook, website or newsletter.',
          },
          {
            id: 17,
            question: 'The event has been cancelled, what do I do?',
            type: 'guest',
            answer:
              'If you haven’t received your money within a few days after the event informed you about the cancellation, don’t hesitate emailing us on info@billetfix.dk with the name of the event and the link to the signup page. Then we’ll help you.',
          },
          {
            id: 18,
            question: 'Do I need to print out the ticket?',
            type: 'guest',
            answer:
              'No, you don’t have to print it out unless the organizer has told you so. Just show the ticket on your smartphone.',
          },
        ],
      },
    ],
  },
  {
    path: '/privacy-policy',
    title: 'Privacy policy',
    sections: [
      {
        type: 'privacy_policy',
        heading: 'Privacy Policy (Cookie- og privatlivspolitik)',

        content:
          '<section > <h1>Privacy Policy (Cookie- og privatlivspolitik)</h1> <p>Date of enactment 25th May 2018.</p> <p>The ticketing system is provided by:<br> Ticketbutler IVS<br> Porcelænshaven 26, 1., 2000 Frederiksberg<br> CVR: 38404687<br> Hereafter called "Ticketbutler"</p> <p>On the behalf of:<br> BilletFix IVS<br> Porcelænshaven 26,<br> 2000 Frederiksberg, <br> CVR: 37073911<br> Tlf: 89 80 12 80<br> Email: info@billetfix.dk<br> Hereafter called “BilletFix”</p> <h2>WORD LIST</h2> <p><strong>Consent</strong> of the data subject means any freely given, specific, informed and unambiguous indication of the data subject\'s wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her.</p> <p><strong>Organiser</strong> is the organization or person which alone or in the collaboration with others is planning/coordinating the event/collection.</p> <p><strong>Pseudonymisation</strong> means the processing of personal data in such a manner that the personal data can no longer be attributed to a specific data subject without the use of additional information, provided that such additional information is kept separately and is subject to technical and organisational measures to ensure that the personal data are not attributed to an identified or identifiable natural person.</p> <h2>INTRODUCTION</h2> <p>It is very important to BilletFix and Ticketbutler that you feel safe in using the BilletFix Services and Ticketbutlers services. It is important that you understand what information Ticketbutler collects when you use the Services and what Ticketbutler may do with that information. Therefore, Ticketbutler has a clear and fair privacy policy (“Privacy Policy”) complying with the EU General Data Protection Regulation (2016/EC/679), or “GDPR”. </p> <h2>ORGANISERS, TICKET BUYERS REGISTRANTS, AND DONORS</h2> <p>By using the BilletFix website, app and connected services (jointly the “BilletFix Services”), you are entering into a binding contract with BilletFix with the Organiser and Ticketbutler as third-parties. BilletFix is the intermediary party between the Organiser and ticket buyers, registrants and donors with Ticketbutler as ticketing provider. The agreement includes this Privacy Policy and BilletFix’s standard terms and conditions.</p> <h2>CHANGES TO POLICY</h2> <p>BilletFix may, at its sole discretion, make changes to the Privacy Policy. If any such changes are considered material by BilletFix, you will be notified of such changes via the BilletFix Services. By continuing to use the BilletFix Service after such changes are made, you are expressing and acknowledging your acceptance of the changes.</p> <h2>INFORMATION COLLECTED AND PROCESSED</h2> <p>By using BilletFix, Ticketbutler may collect Personal Data which may be both on the behalf of Ticketbutler, BilletFix and Organiser who uses BilletFix to promote and manage events. An explanation of the distinction will be explained later in this Privacy Policy. Ticketbutler collects and processes the following types of information via your use of the Ticketbutler Services: </p><ol> <li>Contractual Data. Ticketbutler gathers following contractual Personal Data from the ticket buyers, registrants, and donors: Full name, e-mail, and phone number.</li> <li>Other Personal Data. Ticketbutler may gather other Personal Data. This can for example but not limited to be your nick-name, age, birthday, sex, address, photo, GPS-position, and other information that enables users to be personally identified. etc.</li> <li>Information about use of the BilletFix Services. This can for example be frequency of visits, time spent on each page, cursor location and movements, link usage, etc.</li> <li>Information from interactions with social media platforms. Ticketbutler receives data on the interaction between the BilletFix Services and certain social media platforms (for example Facebook), such information can include your identification information on the platform, post to the platform via the BilletFix Services and your connections’ reactions to the posts (i.e. comments or likes).</li> <li>When a user pays for a ticket financial information is provided e.g. processing card information or billing address. This information might be Personal Data. All data on your payment is handled by external payment process providers and hereby never handled nor accessible by Ticketbutler or BilletFix.</li> <li>Organisers can ask to collect information from tickets buyers, registrants, and/or donors about virtually any information through BilletFix Services. BilletFix og Ticketbutler does not control what Personal Data Ticketbutler collect on behalf of the Organiser. The data collected on behalf of the Organiser will be available for the Organiser to use.</li> <li>Ticketbutler will collect the necessary financial information from the Organisers for the purpose of facilitating payouts.</li> <li>Ticketbutler may request and collect Personal Data from third-party sources including websites, payment processing partners, Organisers bank etc.</li> Ticketbutler will not collect information on race, ethnicity, political views, religion, sexual preferences or philosophical views unless you choose to enter such information into the Ticketbutler Services. If Ticketbutler or BilletFix become aware that information might be considered wrong or misleading, Ticketbutler or BilletFix will delete or amend such information. </ol> <p></p> <h2>HOW WE USE YOUR DATA</h2> <p></p><ol> <li>Services. We use your personal data for the purpose of providing the ticketing service and ensuring you receive the service you have paid for or ordered and analyse your use of the Services.</li> <li>The Organisers. The collection of data is done on the behalf of the event organisers and BilletFix.</li> <li>Marketing. All data used in marketing will be pseudonymized and no other Organiser will get access to your data without your consent. Ticketbutler doesn’t share your data with anyone but BilletFix and the event organizers of the events you have entered information through. BilletFix or the Organiser will use your Personal Data for advertising and marketing purposes if you actively have agreed upon receiving such material.</li> <li>Development of services and research. Ticketbutler and BilletFix use data, including public feedback and surveys, to understand our users and conduct research and development, to further develop our services to provide you and others with a better experience of the service.</li> <li>Customer support. BilletFix and Ticketbutler use your data to investigate and respond to support inquiries, complaints and service issues (such as errors).</li> <li>Security and surveys. Ticketbutler and BilletFix use your data if considered necessary for security reasons or to investigate potential fraud or other violations of our User Agreement or this Privacy Policy and/or attempt to harm our members or visitors. In cases of investigating fraud your data might be shared with our payment service providers.</li> <li>Other. If any Personal Data is provided to Ticketbutler or BilletFix with a specific purpose, Ticketbutler and BilletFix use the data in connection with the purpose. E.g. if you contact BilletFix support via e-mail we will use your e-mail to respond to your support question.</li> <li>You should be aware that BilletFix may choose to use your information and other users’ information to generate reports and statistics with the purpose of selling such reports and statistics to third parties. In such case, your information will as far as possible be made pseudonymised before the reports and statistics are transferred to any third party. BilletFix does this for commercial purposes, but also to show and promote the success of the BilletFix Services. BilletFix believes that being upfront about this is just good business.</li> </ol><p></p> <h2>HOW WE SHARE YOUR DATA</h2> <p></p><ol> <li>Sharing data with organisers. Personal data entered by a ticket buyer, registrant or donor through an event in BilletFix Services will be transferred to the Organiser of such event. The Organiser may create an event on behalf of a third-party Organiser. In such circumstances Ticketbutler and/or BilletFix may provide your personal data to the third-party organiser. Ticketbutler or BilletFix has no responsibility for the actions of the use of your personal data by the Organiser or third-party Organiser.</li> <li>Statutory disclosure. It is possible that Ticketbutler or BilletFix will need to disclose information about you when required by law, application or other judicial processes or if Ticketbutler or BilletFix suspect it is necessary to disclose the information in order to: <ol> <li>prevent or respond to suspected or actual illegal activities or to assist public authorities;</li> <li>enforce our agreements with you,</li> <li>investigate and defend ourselves against third party claims or allegations, </li> <li>protect the security or integrity of our service (e.g. by sharing information with companies facing similar threats), </li> <li>enforce or protect Ticketbutler’s, BilletFix’s, our members, employees, or others’; rights and security. </li> </ol> Ticketbutler and BilletFix try to inform its members of the legal requirement for disclosure of their personal data if, in our discretion, it is appropriate, unless the law or legal order prohibits this or if the request is urgent. Ticketbutler and BilletFix can contest such claims when we believe that the requests are excessive, insignificant or inadequate, but Ticketbutler and BilletFix will not promise to challenge all requests. Ticketbutler and BilletFix may need to share your data if we have a presumption that it is a legal requirement or to protect your, our or others’; rights and security. </li> <li>Transfer of business. BilletFix and Ticketbutler may share your Personal Data as part of an acquisition, merger or change of management, or in preparation for these. An external party that acquire a part of BilletFix or Ticketbutler or BilletFix or Ticketbutler as a whole is entitled to continue to use your data, but only in a manner specified in this Privacy Policy, unless you accept otherwise. BilletFix or Ticketbutler may share your data if BilletFix or Ticketbutler is acquired, but your Personal data will continue to be used in accordance with this Privacy Policy. </li> <li>Service providers. Ticketbutler or BilletFix may share your data with third-party services who process data on behalf of Ticketbutler or BilletFix to conduct certain business-relation processes. These companies includes but not limited to email service providers, database service providers and marketing agencies. Ticketbutler may share, but not limited to, your data with the following sub-processors: <ul> <li>QuickPay – Payment Service Processor</li> <li>Clearhaus – Acquirer</li> <li>NETS – Acquirer</li> <li>Stripe – Acquirer and Payment Service Processor</li> <li>Sentry – error logging</li> <li>Nexmo – SMS service</li> <li>Apple Store – app store</li> <li>Google Play – app store</li> <li>Cloudflare – security service</li> <li>Amazon Web Services – hosting and email sending</li> </ul> </li> <li>Third countries. Ticketbutler or BilletFix may transfer your data to other countries than the country in which you are resident. Ticketbutler and BilletFix use third-party service providers and partners that operates in countries outside EU including US. This means that we may process your data outside in a country outside EU. Our website servers are all located within EU.</li> </ol><p></p> <h2>COOKIES</h2> <p>BilletFix may use “cookies” to store data on your computer or mobile device or internet connected device. We may also link information stored on your computer/device in cookies with data stored on our servers. If you set up your web browser or device so that cookies are not allowed, you might not be able to use some or all of the features of the BilletFix Services. Analytics and customisation cookies may be used to collect information about the use of the Services to help BilletFix and its Organisers to understand how the Service is used. Cookies may be used for targeted advertising both on behalf of BilletFix and the Organisers using the BilletFix Services. Cookies may be used by Organisers to measure how effective their advertisement is. No information collected in such activities allow BilletFix, Ticketbutler or Organisers to identify your name, contract information, or other Personal Data unless you choose to provide these.</p> <h2>PURPOSE OF COLLECTING INFORMATION</h2> <p>The purpose of collecting the above mentioned information for Ticketbuter, BilletFix and its Organisers is (i) to identify you as the user, (ii) to optimize the BilletFix Services, (iii) to better service you as a user, (iv) to abide applicable law and regulations, (v) to enforce the agreement between you, BilletFix, Ticketbutler, and the organisers or a third party with whom you enter agreements via the BilletFix Services, (vi) to protect the rights, safety and property of BilletFix, the users, others, (vii) to create statistics, reports and conduct data mining on pseudonymised data and (iv) to target advertising either directly or through third party providers.</p> <h2>DATA STORAGE AND YOUR RIGHTS</h2> <p>Ticketbutler store data on ticket purchasers, registrants, and donors for five years after the event has concluded (as prescribed under Danish law), as long as the User is registered to use the services, or if chargebacks are still a possibility. You may close your account at any time by contacting us. If your account is closed we will delete your personal data, but will keep pseudonymised data based on your use of BilletFix Services.<br> You have all the rights afforded to you under the law, including: </p><ol> <li>You are entitled to be informed of what information Ticketbutler and BilletFix collect in relation to you and your use of the BilletFix Services.</li> <li>You are entitled to demand amendments or deletion of Personal Data pertaining to you that is gathered by Ticketbutler. However, ticket buyers, registrants, and donors should understand that even if their Personal data is deleted, pseudonymized, or anonymized in this manner, that data may still be available in the Organiser’s own databases, in cases where Ticketbutler or BilletFix have transmitted such data to the Organiser before receiving the Users’s request to delete, pseudonymize, or anonymise it.</li> <li>You can object to Ticketbutler gathering information pertaining to you. Further details about objection in Complain section.</li> <li>You are entitled to object against your information being transferred to third parties.</li> <li>You may ask us to stop using all or some of your Personal Data (e.g. if we are no longer allowed to use them) or to restrict our use of your Personal Data (e.g. if your personal information is inaccurate or stored in an illegal manner).</li> <li>You have the right to retrieve a copy (in a machine-readable form) of your Personal Data Ticketbutler has stored.</li> You can make use of your rights by writing BilletFix at the below address. However, use of the BilletFix Services and provision of information to Ticketbutler is voluntary, if you object to Ticketbutler gathering information on you or demand deletion of all or substantially all information on you, BilletFix might not be able to, or might refuse to, continue providing the BilletFix Services to you. </ol> <p></p> <h2>SECURITY MEASURES IN PROTECTING THE INFORMATION</h2> <p>Ticketbutler provides physical, electronic, and procedural safeguards to protect information that Ticketbutler collects and processes. Only trusted employees and contractors of Ticketbutler and BilletFix will have access to the gathered information. When communicating information electronically, Ticketbutler and BilletFix will encrypt such information. Ticketbutler and BilletFix implement security measures designed to protect your data (e.g. HTTPS). Ticketbutler and BilletFix regularly monitor its systems to find possible vulnerabilities. Ticketbutler and BilletFix monitor and try to prevent security holes and attacks. However, there Ticketbutler and BilletFix cannot guarantee the security of the information you send. There is no guarantee that data cannot be accessed and that they cannot be disclosed, altered or destroyed in violation of Ticketbutlers and BilletFix’s physical, technical or administrative precautions.</p> <h2>LEGITIMATE BASIS FOR PROCESSING</h2> <p>Ticketbutler and BilletFix only collect and process personal information about you if having a legitimate basis. A legitimate basis may include consent (where you have given your consent), contract (where processing is required to fulfill the contract with you e.g. to deliver the BilletFix services you have requested) and “legitimate interests”.</p> <p>When BilletFix need your consent to process your personal information, you have the right to withdraw or refuse your consent at any time, and when we use legitimate interests, you are entitled to protest. If you have questions about the basis we use for collecting and using your personal information, please contact us using the contact details below. </p> <h2>CONTACT DETAILS</h2> <p>If you have questions or complaints regarding this policy, first contact BilletFix online. You can also send us a letter. Online contact: DPO@billetfix.dk.</p> <h2>COMPLAINTS</h2> <p>Apart from complaining directly to BilletFix at the above address, you are also entitled to complain to the Danish Data Protection Agency (“Datatilsynet”). You can do so via the following Link or you can write the agency at:</p> <p>Datatilsynet<br> Borgergade 28, 5. <br> 1300 Copenhagen K<br> Denmark</p> </section>',
      },
      {
        type: 'tandc',
        heading: 'BETINGELSER',

        content: '<section><h1>BETINGELSER</h1><h2>Prisstruktur</h2> <p>Hvis billetprisen overstiger DKK 0, bliver der pålagt et billetgebyr på DKK 3.00 per billet (inkl. moms) og dertil 2.50% (inkl. moms) af den samlede pris.</p><br> <hr><h2>Generelle Forretningsbetingelser for Arrangører</h2> <p>BilletFix er en online handelsplatform, som formidler billetter og associerede ydelser. Eventarrangører fremviser herigennem arrangementer og kan sælge billetter mv. til arrangementerne. BilletFix benytter sig af et tilmeldingssystem leveret af Ticketbutler, hvor nedenstående betingelser derfor er gældende.</p> <p>BilletFix IVS<br> Porcelænshaven 26,<br> 2000 Frederiksberg, <br> CVR: 37073911<br> Tlf: 89 80 12 80<br> Email: info@billetfix.dk</p><p>Herefter benævnt “BilletFix”</p><p>Billetsystem er leveret af:<br> Ticketbutler IVS<br> Porcelænshaven 26<br> 2000 Frederiksberg<br> CVR: 38404687<br> Tlf: +45 89 80 12 80<br> Email: hello@ticketbutler.io</p><p>Herefter benævnt “Ticketbutler”.</p><p>Disse generelle betingelser er gældende mellem Ticketbutler og dennes eventarrangører. Ingen andre betingelser er gældende for dette forhold med mindre andet er aftalt på skrift af en autoriseret repræsentant fra Ticketbutler.</p><h4>1. DEFINITIONER</h4> <p>\'Ticketbutler\' repræsenterer Ticketbutler IVS, som er en dansk registreret virksomhed (CVR nr: 38404687) med adresse på Porcenlænshaven 26, 2300 Frederiksberg, Danmark. “Arrangør” repræsenterer en person eller en juridisk enhed som benytter Ticketbutlers services med hensigt på at fremvise arrangementer og sælge billetter til arrangementer såvel som associerede produkter/services. “Aftalen” repræsenterer aftalen indgået mellem Ticketbutler og arrangøren angående leverancen af Ticketbutlers services til arrangøren, hvor disse betingelser er gældende. “Ticketbutler services” repræsenterer de services Ticketbutler leverer til arrangøren i overensstemmelse med aftalen og disse betingelser inklusiv, men ikke begrænset til, Ticketbutler platformen på dennes hjemmeside(r), domæne(r) og mobile applikation(er).</p><h4>2. OPKRÆVNING AF BETALINGER</h4> <p>Ticketbutler vil modtage betalinger fra kunder inklusiv moms og gebyrer på vegne af arrangøren. Hvis billetprisen overstiger DKK 0, vil Ticketbutler opkræve et gebyr på DKK 3.00 per billet (inkl. moms) og dertil 2.50% (inkl. moms) af den samlede pris. Betalingen vil blive opkrævet direkte efter billetten og/eller associerede produkter/services er leveret til kunden inklusiv elektronisk levering.</p><h4>3. UDBETALING TIL ARRANGØR</h4> <p>Det er nødvendigt at Ticketbutler har muligheden for at kunne refundere billetprisen til køberen hvis det pågældende arrangement er aflyst. Derfor vil Ticketbutler udbetale billetomsætningen til arrangøren efter arrangementet er afholdt. Udbetalingen vil ske indenfor 14 kalenderdage efter datoen for arrangementet, under forudsætning af at arrangør har leveret de nødvendige bankoplysninger til at gennemføre transaktionen. Dog bestræber Ticketbutler sig på, at pengene overføres inden for 3 arbejdsdage efter arrangementets afslutning. En rente på 3,0% bliver pålagt ved for sent overførte udbetalinger. Billetomsætningen bliver udbetalt til den af arrangøren specificeret konto på Ticketbutler platformen; til denne udbetaling associerede gebyrer og lignende bliver fratrukket billetomsætningen og betalt af arrangøren.</p> <h4>4. DATABEHANDLER, -EJER FORHOLD OG DPA</h4> <p>Som en del af denne kontrakt indgår en behandleraftale. Når du gennem BilletFix Services opretter arrangementer bliver du databehandler i relation til GDPR. Ticketbutler er ligeså databehandler og BilletFix er data-ejer. Denne kontrakt beskriver hvilke rettigheder og forpligtelser de indgående parter har. Databehandlingen undergår gældende love og regler med hensyn til GDPR (EU/2016/679).</p><p>Arrangøren skal kun behandle personlig data med henblik på at kunne levere den tilbudte service til de registrerede og/eller billetkøbere til det pågældende arrangement eller hvis behandling af personlig data er krævet grundet lovmæssige krav. Instruktion i behandling af data er oplyst gennem denne kontrakt samt vores <a href="/en/privacy-policy/">Privacy Policy</a>.</p><p>Arrangøren forsikrer, at den personlige data ikke deles med andre medmindre andet er aftalt med BilletFix.</p> <p>Arrangøren skal som databehandler ved forespørgsel fra BilletFix inden for rimelig tid fremvise beviser for overholdelse af artikel 28 i GDPR samt overholdelse af denne kontrakt. Arrangøren vil tillade og bidrage til revisioner inklusiv inspektioner udarbejdet af BilletFix eller andre af BilletFix godkendte inspektører.</p><p>Arrangøren skal tage alle nødvendige forhold for at overholde Artikel 32 af GDPR hvor det kræves. Dette betyder, at med hensyn til aktuelle situation, implementerings-udgifter og natur, afgrænsning, og kontekst og formål med databehandling, skal dataejer og databehandler implementere passende tekniske og organisatoriske forhold til at sikre et passende sikkerhedsniveau til risikoen.</p><p>Ved ophævelse af kontrakten er arrangøren forpligtet til at slette eller returnere personlig data til BilletFix og slette eksisterende kopier medmindre EU lov eller pågældende lands lov kræver lagring af dataen.</p> <p>Al teknisk information og data vedrørende Ticketbutler services er Ticketbutlers ejendom inklusiv data genereret på baggrund af en brugers interaktion med Ticketbutler Services. Al data leveret af arrangøren eller indsamlet i forbindelse med et arrangement, er BilletFix ejendom. Hvis brugeren allerede har eller opretter en profil deler Ticketbutler ejerskab af denne data med BilletFix.</p><p>Arrangøren kan forespørge sine billetkøbere, registranter og/eller donorer om yderligere data under købet, registreringen og/eller donationen. Denne må dog ikke være obligatorisk indsamlet hvis dataen omhandler etnicitet, politisk overbevisning, religion, sexuelle præferencer, filosofiske overbevisning eller foreningsmedlemskaber medmindre andet er aftalt med Ticketbutler.</p><h4>5. INTELLEKTUELLE RETTIGHEDER</h4> <p>Alle intellektuelle rettigheder i forbindelse med Ticketbutler services er Ticketbutlers ejendom inklusiv men ikke begrænset til alle rettigheder associeret med Ticketbutler hjemmeside(r) og app og Ticketbutler varemærke.</p><p>Alle intellektuelle rettigheder i forbindelse med BilletFix services er BilletFix’s ejendom inklusiv men ikke begrænset til alle rettigheder associeret med Billetfix hjemmeside(r) og app og BilletFix varemærke.</p><h4>6. BRUG AF BILLETFIX SERVICES</h4> <p>BilletFix bevilliger arrangøren en ikke-eksklusiv, ikke uigenkaldelig, begrænset rettighed til at tilgå og bruge BilletFix services med henblik på registrering af gæster til arrangementer og fremvisning af billetter til arrangementer som vel associerede produkter og services.</p><h4>7. ARRANGØRS ANSVAR</h4> <p>I kraft af at arrangøren er data-ejer forudsætter Ticketbutler at arrangøren overholder gældende datalovgivning inklusiv GDPR. Det er arrangørens ansvar at formidle korrekt, præcis, opdateret og relevant information om sine events, billetter, priser, betingelser, associerede produkter/services osv. via Ticketbutler services. Arrangøren forpligter sig til at de opslåede arrangementer gennem Ticketbutler services og gennemførslen af arrangementerne imødekommer gældende love, regler og regulationer, og alle produkter og services beskrevet på opslåede arrangementssider er leveret på en tilfredsstillende måde.</p><h4>8. REFUNDERINGER OG REKLAMATIONER</h4> <p>Da alle transaktioner er mellem arrangøren og dens respektive kunde(r) beder Ticketbutler alle kunder at henvende sig til den respektive arrangør ved henvendelser omkring refunderinger eller reklamationer. Arrangøren indvilliger i at overholde en refunderings-, klage- og reklamationspolitik i overensstemmelse med gældende love og generelle standarder. Ticketbutler må efter eget skøn forsøge at optræde som mægler vedrørende refunderinger, klager og reklamationer; dog vil Ticketbutler intet ansvar have for en arrangørs uhensigtsmæssige adfærd i forbindelse med refunderinger, reklamationer og klager. Arrangøren indvilliger i at forsvare og holde Ticketbutler, dets associerede selskaber og agenter skadesløs fra og mod alle erstatningskrav og udgifter inklusiv udgifter til advokater opstået fra eller relateret til transaktioner mellem kunder eller brugerer og arrangøren gennem Ticketbutler services.</p><h4>9. ERSTATNINGSKRAV FRA ARRANGØREN</h4> <p>Alle erstatningskrav fra arrangøren mod Ticketbutler skal formidles skriftlig for at være gyldig. Erstatningskrav for tab eller skader mod Ticketbutler skal fremlægges senest 30 kalenderdage efter arrangøren er blevet opmærksom eller skulle have været blevet opmærksom på de givne tab eller skader.</p><h4>10. ANSVARSBEGRÆSNING</h4> <p>Ticketbutler kan kun gøres ansvarlig for tab eller skader ved udvisning af grov uagtsomhed eller uhensigtsmæssig hensigt af Ticketbutler. Ticketbutler kan ikke gøres ansvarlig for indirekte tab eller skader. Ticketbutler kan ikke gøres ansvarlig for tab eller skader opstået fra arrangørens afvigelser fra Ticketbutlers instruktioner eller vejledning i brugen af Ticketbutler services.</p> <h4>11. ARRANGØRENS INFORMATIONER</h4> <p>Arrangøren indvilliger i at Ticketbutler må lagre og bruge arrangørens kontaktinformationer til at give arrangøren relevant og af arrangøren efterspurgt information og dele arrangørens kontaktinformation med brugere og kunder. Ticketbutler må også bruge arrangørens kontaktinformationer til at bekræfte arrangørens identitet, anmode om arrangørens mening på Ticketbutlers services, udvikle nye tilbud og til markedsundersøgelse. Ticketbutler forbeholder sig retten til at videregive kontaktinformation og personlig data for at: </p><ol type="i"> <li>efterleve gældende love;</li> <li>svare på henvendelser fra offentlige myndigheder (eller fra henvendelser fra retslige, statslige, stats-støttede eller lokale myndigheder);</li> <li>efterleve gældende juridiske processer eller procedurer; eller</li> <li>forsvare Ticketbutlers rettigheder og ejendom, Ticketbutler services og/eller andre brugere af Ticketbutler services.</li> </ol> <p></p><h4>12. ANSVARSFRASKRIVELSE</h4> <p>Medmindre udtrykkeligt er angivet i Aftalen eller i disse vilkår og betingelser, giver Ticketbutler ingen garantier, udtrykkelige eller underforståede, herunder ingen garanti for ikke-overtrædelse eller egnethed til et bestemt formål. Ticketbutler garanterer eller garanterer ikke, at Ticketbutler Services vil være uafbrudt eller fejlfri, eller at Ticketbutler Services vil medføre nogen indtjening eller fortjeneste for arrangøren.</p><h4>13. OPHØR AF AFTALEN</h4> <p>Ticketbutler og arrangør er berettiget til at opsige aftalen, disse betingelser og afslutte brugen af Ticketbutler servicen ved en skriftlig opsigelse med 24 timers varsel. Arrangøren er forpligtet til at betale pågældende gæld tilhørende brugen af Ticketbutler services før aftalens ophør og dertil efterkomme pågældende forpligtelser indgået med kunder inden aftalens ophør. Ticketbutler er forpligtet til at levere dele af Ticketbutler services som allerede er betalt for.</p><h4>14. ÆNDRINGER I AFTALEN</h4> <p>Ticketbutler forbeholder sig ret til enhver tid at ændre disse standardvilkår og Ticketbutlers privatlivspolitik. Alle ændringer vil blive offentliggjort online. Ved at fortsætte med at gøre brug af Ticketbutler Services efter ændringer af disse handelsvilkår eller privatlivspolitikken, udtrykker arrangøren sin forståelse og accept af de ændrede standardvilkår og/eller privatlivspolitik.</p><h4>15. FORCE MAJEURE</h4> <p>Såfremt der indtræder uventede og ekstraordinære forhold uden for parternes kontrol, og som parterne ikke ved aftalens indgåelse burde have taget i betragtning, og ej heller burde have undgået eller overvundet, herunder, men ikke begrænset til, strejker, lock-out, krig, it-nedbrud, m.v., suspenderes aftalens rettigheder og pligter for parterne i det tidsrum force majeure består. Hver af parterne er forpligtet til at gøre sit yderste for at begrænse tab og således overholde sin tabsbegrænsningspligt. Ticketbutler kan ikke gøres ansvarlig for tab eller skader som resultat af eksterne internetbaserede platforme eller lignende som hævder restriktioner eller forbud mod Ticketbutler eller Ticketbutler services.</p><h4>16. LOVVALG OG VÆRNETING</h4> <p>Aftalen og disse betingelser reguleres og fortolkes i henhold til dansk lov uden hensyn til reglerne i dansk ret om lovvalg eller lovkonflikter. Eksklusivt værneting for enhver tvist skal være domstolene i Danmark.</p> <br> <hr> <h2>Standardvilkår for kunder (billetkøber)</h2><p>BilletFix benytter sig af et tilmeldingssystem leveret af Ticketbutler, hvor nedenstående betingelser derfor er gældende.</p><p> BilletFix IVS<br> Porcelænshaven 26, 1., 2000 Frederiksberg, <br> CVR: 37073911<br> Tlf: <a href="tel:89 80 12 80">89 80 12 80</a><br> Email: <a href="mailto:info@billetfix.dk">info@billetfix.dk</a> </p><p> Billetsystem er leveret af:<br> Ticketbutler IVS<br> Porcelænshaven 26<br> 2000 Frederiksberg<br> CVR: 38404687<br> Tlf: <a href="tel:+4589801280">+45 89 80 12 80</a><br> Email: <a href="mailto:hello@ticketbutler.io">hello@ticketbutler.io</a> </p> <p>Herefter benævnt “Ticketbutler”.</p><h4>1. GENERELT</h4> <p>Ticketbutler har til BilletFix leveret en online handelsplatform, som formidler billetter og associerede ydelser. Eventarrangører fremviser herigennem arrangementer og kan sælge billetter mv. til arrangementerne.</p> <p>Ved din brug af BilletFix website, app eller forbundne tjenesteydelser (herefter samlet: ”Ticketbutler Services”) indgår du en bindende formidlingsaftale med Ticketbutler på de betingelser, som følger af nærværende standardvilkår samt af BilletFix\’ privatlivspolitik.</p> <p>Ved at købe en billet eller anden ydelse gennem Ticketbutler Services køber du derfor din billet/ydelse direkte af arrangøren og Ticketbutler er alene formidler heraf.</p> <p>I forbindelse med oprettelsen som bruger af Ticketbutler Services bekræfter du at have læst og accepteret disse betingelser samt BilletFix\’ privatlivspolitik, og du bekræfter samtidigt, at du er myndig og over 18 år.</p> <p>Ticketbutler forbeholder sig ret til enhver tid at ændre disse standardvilkår og privatlivspolitik. Alle ændringer vil blive offentliggjort online. Ved at fortsætte med at gøre brug af Ticketbutler Services efter ændringer af disse handelsvilkår eller privatlivspolitikken, herunder ved køb et billetter via Ticketbutler Services, udtrykker du din forståelse og accept af de ændrede standardvilkår og/eller privatlivspolitik.</p> <h4>2. BESTILLING OG BETALING</h4> <p>Billetter mv. købes via Ticketbutler Services til den der angivne pris plus eventuelle gebyrer og omkostninger, som oplyses førend købet effektueres. Ved at klikke på "Køb billetter"-knappen afgiver du et ønske til Ticketbutler og eventarrangøren om at købe en eller flere billetter eller anden ydelse. Købet er imidlertid ikke endeligt afsluttet, førend du modtager en ordrebekræftelse eller den bestilte ydelse pr. e-mail. Ticketbutler forbeholder sig ret til at afvise dit køb med eller uden begrundelse.</p> <p>Du kan betale med Visa, MasterCard samt MobilePay. Betaling kan kun ske ved online betaling via Ticketbutler Services. Ticketbutler henleder din opmærksomhed på, at du efter reglerne i lov om betalingstjenester og elektroniske penge har indsigelsesret med henblik på at standse eller tilbageføre betalingstransaktioner i Ticketbutler Services.</p> <p>Hvis billetprisen overstiger DKK 0, bliver der pålagt et billetgebyr på DKK DKK 3.00 per billet (inkl. moms) og dertil 2.50% (inkl. moms) af den samlede pris. Moms udgør 20% af billetsummen såfremt der er pålagt moms på arrangementet. Ved gratis billetter pålægges ikke billet- eller kortgebyr. Billet- og kortgebyr refunderes ikke.</p> <p>Din betaling vil blive hævet fra dit betalingskort eller konto, når billetten eller anden ydelse er afsendt til dig via e-mail. Hvis betaling ikke modtages, vil billetten eller den eventuelle anden ydelse blive annulleret.</p><h4>3. LEVERING</h4> <p>Levering af billet sker via e-mail afsendt af BilletFix i form af en PDF-fil. Levering vil ske til den e-mail, du har oplyst i forbindelse med bestillingen, og levering anses for sket, når billetten er afsendt fra BilletFix pr. e-mail.</p> <h4>4. REFUNDERING AF BILLETTER OG AFLYSNING</h4> <p>Efter ”Lov om visse forbrugeraftaler” kan du have en fortrydelsesret vedr. dine køb. Vi gør opmærksom på, at din fortrydelsesret er et forhold mellem dig og arrangøren.</p> <p>Billetter. Du skal være opmærksom på, at billetter i henhold til ”Lov om visse forbrugeraftaler § 17” som udgangspunkt ikke er omfattet af en fortrydelsesret. I tilfælde af aflysning henvises der til den ansvarlige arrangør for yderligere information og eventuel refundering. Billetter refunderes i sådanne tilfælde som udgangspunkt altid. Vi gør særligt opmærksom på, at vi som formidler af billetten ikke hæfter for aflysninger ol.</p> <p>Andre ydelser. For andre ydelser har du efter forbrugeraftaleloven ret til at fortryde dit køb inden for 14 kalenderdage uden begrundelse. Fristen beregnes forskelligt alt efter, om der er tale om køb af en vare eller køb af en tjenesteydelse. Ved køb af en vare løber fortrydelsesfristen fra det tidspunkt, hvor du får varen i fysisk besiddelse. Ved køb af tjenesteydelser løber fortrydelsesfristen fra aftalens indgåelse.</p> <p>Fortrydelsesretten er betinget af, at ydelsen leveres tilbage til arrangøren i væsentlig samme stand og mængde, som den var ved leveringen til dig.</p> <p>Hvis du ønsker at gøre brug af din fortrydelsesret over for arrangøren, skal du tage direkte kontakt til arrangøren og derefter returnere varen til samme. Arrangøren vil derefter tilbagebetale købesummen til dig. Du kan også vælge at give BilletFix meddelelse om, at du ønsker at bruge din fortrydelsesret ved fx at udfylde denne formular, og BilletFix vil herefter tage kontakt til arrangøren herom.</p> <p>Det fremhæves, at du har 2 års reklamationsret under købeloven vedrørende varer og 3 år vedrørende tjenesteydelser, som du har købt via BilletFix. Du skal imidlertid reklamere inden rimelig tid efter at du opdager en mangel.</p> <h4>5. ANSVARSBEGRÆNSNING</h4> <p>BilletFix har ikke mulighed for at genfremsende en billet ved bortkomst deraf. Ønske om genfremsendelse af eventuelt bortkommen billet skal ske til arrangøren.</p> <p>Ticketbutler eller BilletFix hæfter ikke og kan ikke gøres ansvarlig i tilfælde af betalingsstandsning, konkurs, aflysning eller flytning af dato for afholdelse af et arrangement eller andre reklamationer vedrørende det aktuelle arrangement. Al henvendelse herom rettes til arrangøren, som er din direkte kontraktpart.</p> <p>Ticketbutler eller BilletFix hæfter ikke og kan ikke gøres ansvarlig for eventuelle krav i forbindelse med kopiering eller videresalg af billetter. </p><h4>6. LOVVALG OG VÆRNETING</h4> <p>Vores aftale reguleres og fortolkes i henhold til dansk lov uden hensyn til reglerne i dansk ret om lovvalg eller lovkonflikter. Eksklusivt værneting for enhver tvist skal være domstolene i Danmark.</p> <h4>7. ØVRIGE VIGTIGE BESTEMMELSER</h4> <p>BilletFix tager forbehold for eventuelle skrive- og/eller trykfejl i Ticketbutler Services, herunder i priser og vedrørende udsolgte events.</p> <p>Vi tager også forbehold om at annullere din(e) billet(ter) mod tilbagebetaling af billettens pris (billet- og kortgebyr refunderes ikke).</p> </section>',
      },
    ],
  },
]
