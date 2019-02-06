exports.topNav = [
  {
    type: "buttonLink",
    buttonText_en: "create event",
    buttonText_da: "opret arrangement"
  },
  {
    type: "gatsbyLink",
    link_en: "/en/about/",
    link_da: "/da/om-os",
    caption_en: "About",
    caption_da: "Om os"
  },

  {
    type: "gatsbyLink",
    link: "https://billetfix.freshdesk.com/",
    caption_en: "Help Center",
    caption_da: "Hjælpecenter",
    attributes: {
      target: "_blank",
      rel: "noopener noreferrer"
    }
  },
  {
    type: "gatsbyLink",
    link: "https://ticketbutler.io/da/",
    caption_en: "Enterprise solution",
    caption_da: "Erhvervsløsning",
    attributes: {
      target: "_blank",
      rel: "noopener noreferrer"
    }
  },
  {
    type: "gatsbyLink",
    link: "https://billetfix.dk/user/login/",
    caption_en: "My tickets",
    caption_da: "Mine billetter"
  },
  {
    type: "gatsbyLinkBilletfix",
    link: "https://billetfix.dk/user/login/",
    caption_en: "Login",
    caption_da: "Log ind"
  }
];
