export const DATA = {
  site: {
    brand: {
      name: "Tiffen Central",
      tagline: "Authentic South Indian tiffins and cafe comforts.",
    },
    contact: {
      addressLines: ["[Address to be updated]"],
      cityRegion: "Chennai, Tamil Nadu",
      email: "[Email to be updated]",
      phone: "[Phone to be updated]",
    },
    socials: {
      instagram: "",
      facebook: "",
      x: "",
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
      cateringHero: "/catering-hero.png",
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
      eyebrow: "Authentic South Indian",
      title: "Tiffen Central",
      subtitle:
        "From Chennai to your table. Fresh tiffins, timeless recipes, and a warm dining atmosphere built around comfort.",
      badges: [
        "Open daily - 7:00 AM to 10:30 PM",
        "Est. 1994",
        "Chennai authentic",
      ],
    },
    about: {
      chip: "Our Legacy",
      titleLine1: "Welcome to",
      titleLine2: "Tiffen Central",
      body:
        "A warm, vibrant space where cafe comfort meets premium dining. From crispy dosas and fluffy idlis to filter coffee and seasonal specials, every dish is prepared fresh and rooted in heritage.",
      ctas: [
        { label: "View Menu", action: "open_menu" },
        { label: "Explore Delights", action: "scroll_delights" },
      ],
    },
    feast: {
      eyebrow: "Signature Menu",
      titleLine1: "A Feast of",
      titleLine2: "Flavours",
      body:
        "Indulge in freshly prepared tiffins and cafe classics, crafted to satisfy every craving. Premium ingredients, traditional spices, and South Indian heritage come together for a comfort-first dining experience.",
      cta: { label: "View Menu", action: "open_menu" },
    },
    catering: {
      eyebrow: "Catering",
      titleLine1: "Bring the feast",
      titleLine2: "to your event",
      body:
        "New catering content will be added here once the client shares the final package details, menu options, and service inclusions.",
      cta: { label: "Enquire Now", action: "scroll_contact" },
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
        title: "Breakfast Specials",
        items: [
          "Idli (2)",
          "Vada",
          "Sambar Combo",
          "Ghee Idli",
          "Pongal",
          "Poori",
        ],
        image: "/menu-2.png",
        imageAlt: "Breakfast Specials",
        imageClassName: "h-[145px]",
      },
      {
        title: "Dosa Varieties",
        items: [
          "Plain Dosa",
          "Masala Dosa",
          "Ghee Roast Dosa",
          "Onion Dosa",
          "Podi Masala",
          "Rava Roast",
          "Onion Uthappam",
          "Rava Uthappam",
          "Butter Masala",
        ],
        image: "/menu-1.png",
        imageAlt: "Dosa Varieties",
        imageClassName: "h-[255px]",
      },
      {
        title: "Rice Varieties",
        items: [
          "Sambar Rice",
          "Curd Rice",
          "Puliogare",
          "Lemon Rice",
          "Tomato Rice",
        ],
        image: "/menu-7.png",
        imageAlt: "Rice Varieties",
        imageClassName: "h-[110px]",
      },
      {
        title: "Snacks",
        items: ["Bonda", "Bajji", "Samosa", "Cutlet", "Popcorn Foods", "Cookies"],
        image: "/menu-6.png",
        imageAlt: "Snacks",
        imageClassName: "h-[120px]",
      },
      {
        title: "Hot Beverages",
        items: [
          "Filter Coffee",
          "Black Coffee",
          "Tea",
          "Boost",
          "Horlicks",
          "Lemon Tea",
          "Badam Milk",
          "Milk",
        ],
        image: "/menu-4.png",
        imageAlt: "Hot Beverages",
        imageClassName: "h-[145px]",
      },
      {
        title: "Cold Beverages",
        items: [
          "Fresh Juices",
          "Milkshakes",
          "Lassi",
          "Falooda",
          "Cold Coffee",
          "Oreo Milkshake",
        ],
        image: "/menu-3.png",
        imageAlt: "Cold Beverages",
        imageClassName: "h-[100px]",
      },
      {
        title: "Sweets",
        items: [
          "Kesari",
          "Badam Halwa",
          "Tender Coconut Pudding",
          "Filter Coffee Cake",
        ],
        image: "/menu-5.png",
        imageAlt: "Sweets",
        imageClassName: "h-[100px]",
      },
    ],
  },
};

// Compatibility exports (old imports still work if needed)
export const SITE = DATA.site;
export const MENU = DATA.menu.categories;
