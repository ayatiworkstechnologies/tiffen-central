export const DATA = {
  site: {
    brand: {
      name: "Tiffen Central",
      tagline: "Authentic South Indian tiffins and cafe comforts.",
    },
    contact: {
      addressLines: ["Govindasamy Nagar", "Perungudi"],
      cityRegion: "Chennai, Tamil Nadu 600096",
      email: "tiffencentral@gmail.com",
      phone: "+91 91768 39842",
      mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36757.199422413825!2d80.22238872824276!3d12.985986647910096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525ddbd385b09b%3A0xf3b13b5446f48a4!2sTiffen%20central!5e0!3m2!1sen!2sin!4v1783945293596!5m2!1sen!2sin",
    },
    socials: {
      instagram: "https://www.instagram.com/tiffen.central/",
      // facebook: "",
      // x: "",
    },
    hours: [
      { label: "Mon - Thu", value: "8:00 AM - 10:00 PM" },
      { label: "Fri - Sat", value: "8:00 AM - 11:30 PM" },
      { label: "Sunday", value: "9:00 AM - 9:00 PM" },
    ],
    images: {
      logo: "/logo.png",
      logoMark: "/vector-logo.svg",
      heroVideo: "/hero-video.mp4",
      welcomeDish: "/img-1.png",
      heroRight: "/img-2.png",
      cateringHero: "/img-3.jpeg",
    },
  },

  header: {
    desktopLinks: [
      { title: "About", href: "#about" },
      { title: "Flavours", href: "#feast" },
      { title: "Delights", href: "#delights" },
      { title: "Catering", href: "#catering" },
      { title: "Signature", href: "#signature" },
      { title: "Contact", href: "#contact" },
    ],
    drawerLinks: [
      { title: "About", href: "#about" },
      { title: "Flavours", href: "#feast" },
      { title: "Delights", href: "#delights" },
      { title: "Catering", href: "#catering" },
      { title: "Signature", href: "#signature" },
      { title: "Contact", href: "#contact" },
    ],
  },

  footer: {
    exploreLinks: [
      { title: "Our Menu", href: "#feast" },
      { title: "Catering", href: "#catering" },
      { title: "Contact", href: "#contact" },
    ],
  },

  sections: {
    hero: {
      eyebrow: "South Indian Restaurant in Perungudi, Chennai",
      title: "Tiffen Central",
      subtitle:
        "Fresh dosa, idli, vada, pongal and filter coffee inspired by Tamil Nadu's tiffin traditions, served in the heart of Perungudi, Chennai.",
      badges: [
        "Open 7 days - see hours below",

        "Chennai authentic",
      ],
      ctas: [
        { label: "Explore Menu", action: "open_menu" },
        { label: "Book Table", action: "scroll_contact", subject: "Table Reservation" },
      ],
    },
    about: {
      chip: "Our Legacy",
      titleLine1: "Welcome to",
      titleLine2: "Tiffen Central",
      body:
        "A warm South Indian restaurant in Perungudi where cafe comfort meets relaxed dining. From crispy dosas and fluffy idlis to medhu vada, pongal and filter coffee, every dish is prepared fresh and rooted in Tamil Nadu's food heritage.",
      ctas: [
        { label: "Explore Delights", action: "scroll_delights" },
        { label: "Book Table", action: "scroll_contact", subject: "Table Reservation" },
      ],
    },
    feast: {
      eyebrow: "Signature Menu",
      titleLine1: "A Feast of",
      titleLine2: "Flavours",
      body:
        "Explore freshly prepared Chennai tiffin favourites and cafe classics. Dosas, idlis, vadas, pongal, poori, kesari and coffee bring traditional South Indian flavours together for breakfast, dinner and every craving in between.",
      cta: { label: "View Full Menu", action: "open_menu" },
    },
    catering: {
      eyebrow: "Catering",
      titleLine1: "Bring the feast",
      titleLine2: "to your event",
      body:
        "New catering content will be added here once the client shares the final package details, menu options, and service inclusions.",
      cta: { label: "Enquire Now", action: "scroll_contact", subject: "Private Catering" },
    },
    contact: {
      eyebrow: "Get In Touch",
      title: "Contact Us",
      leftTitle: "We would love to hear from you.",
      leftBody:
        "Whether you have a question about our menu, want to book a private event, or simply wish to share your dining experience, our team is ready to assist you.",
    },
  },

  menu: {
    modalTitle: "Flavours of South India",
    categories: [
      {
        title: "Signature Dosas",
        items: [
          "Plain Dosa",
          "Masala Dosa",
          "Ghee Roast",
          "Ghee Podi Dosa",
          "Ghee Podi Masala Dosa",
          "Rava Dosa",
          "Kal Dosa",
        ],
        image: "/menu/menu-1.png",
        imageAlt: "Signature Dosas",
        themeColor: "#004f34",
        iconCode: "dosa",
      },
      {
        title: "Benne Specials",
        items: [
          "Benne Dosa",
          "Benne Podi Dosa",
          "Benne Masala Dosa",
          "Benne Podi Masala Dosa",
        ],
        image: "/menu/menu-1.png",
        imageAlt: "Benne Specials",
        themeColor: "#d49b00",
        iconCode: "butter",
      },
      {
        title: "South Indian Combos",
        items: [
          "Parota with Kurma",
          "Chappathi with Kurma",
          "Poori with Masala",
        ],
        image: "/menu/menu-2.png",
        imageAlt: "South Indian Combos",
        themeColor: "#c4512a",
        iconCode: "combos",
      },
      {
        title: "Traditional Breakfast",
        items: [
          "Ghee Pongal",
          "Tomato Sevai",
        ],
        image: "/menu/menu-5.png",
        imageAlt: "Traditional Breakfast",
        themeColor: "#0a3d2c",
        iconCode: "breakfast",
      },
      {
        title: "Vada Varieties",
        items: [
          "Medhu Vada",
          "Masala Vada",
          "Sambar Vada",
          "Curd Vada",
        ],
        image: "/menu/menu-3.png",
        imageAlt: "Vada Varieties",
        themeColor: "#6b4423",
        iconCode: "vada",
      },
      {
        title: "Idly Corner",
        items: [
          "Idly (Single)",
          "Idly Set",
          "Sambar Idly",
          "Ghee Mini Sambar Idly",
        ],
        image: "/menu/menu-8.png",
        imageAlt: "Idly Corner",
        themeColor: "#7c1a22",
        iconCode: "idly",
      },
      {
        title: "Sweet Delight",
        items: [
          "Pineapple Kesari",
        ],
        image: "/menu/menu-4.png",
        imageAlt: "Sweet Delight",
        themeColor: "#a82c5a",
        iconCode: "sweet",
      },
      {
        title: "Beverages",
        items: [
          "Tea",
          "Coffee",
        ],
        image: "/menu/menu-6.png",
        imageAlt: "Beverages",
        themeColor: "#5e3c25",
        iconCode: "beverages",
      },
    ],
  },
};

// Compatibility exports (old imports still work if needed)
export const SITE = DATA.site;
export const MENU = DATA.menu.categories;
