export const siteConfig = {
  // General site settings
  siteName: "iLanding",
  siteDescription: "Your modern landing page solution",
  
  // Header configuration
  header: {
    logo: {
      text: "iLanding",
      // If you want to use an image logo instead
      // image: "/img/logo.png"
    },
    navigation: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Features", path: "/features" },
      { name: "Services", path: "/services" },
      { name: "Pricing", path: "/pricing" },
      {
        name: "Dropdown",
        children: [
          { name: "Dropdown 1", path: "#" },
          {
            name: "Deep Dropdown",
            children: [
              { name: "Deep Dropdown 1", path: "#" },
              { name: "Deep Dropdown 2", path: "#" },
              { name: "Deep Dropdown 3", path: "#" },
              { name: "Deep Dropdown 4", path: "#" },
              { name: "Deep Dropdown 5", path: "#" }
            ]
          },
          { name: "Dropdown 2", path: "#" },
          { name: "Dropdown 3", path: "#" },
          { name: "Dropdown 4", path: "#" }
        ]
      },
      { name: "Contact", path: "/contact" }
    ],
    ctaButton: {
      text: "Get Started",
      path: "/about"
    }
  },

  // Footer configuration
  footer: {
    about: {
      logo: "iLanding",
      contact: {
        address: "A108 Adam Street",
        city: "New York, NY 535022",
        phone: "+1 5589 55488 55",
        email: "info@example.com"
      },
      social: [
        { name: "twitter-x", url: "#" },
        { name: "facebook", url: "#" },
        { name: "instagram", url: "#" },
        { name: "linkedin", url: "#" }
      ]
    },
    links: [
      {
        title: "Useful Links",
        items: [
          { name: "Home", url: "#" },
          { name: "About us", url: "#" },
          { name: "Services", url: "#" },
          { name: "Terms of service", url: "#" },
          { name: "Privacy policy", url: "#" }
        ]
      },
      {
        title: "Our Services",
        items: [
          { name: "Web Design", url: "#" },
          { name: "Web Development", url: "#" },
          { name: "Product Management", url: "#" },
          { name: "Marketing", url: "#" },
          { name: "Graphic Design", url: "#" }
        ]
      },
      {
        title: "Our Services",
        items: [
          { name: "Web Design", url: "#" },
          { name: "Web Development", url: "#" },
          { name: "Product Management", url: "#" },
          { name: "Marketing", url: "#" },
          { name: "Graphic Design", url: "#" }
        ]
      },
      {
        title: "Our Services",
        items: [
          { name: "Web Design", url: "#" },
          { name: "Web Development", url: "#" },
        ]
      }
    ],
    copyright: {
      text: "© Copyright",
      company: "iLanding",
      rights: "All Rights Reserved",
      credits: {
        text: "Designed by",
        link: {
          name: "BootstrapMade",
          url: "https://bootstrapmade.com/"
        }
      }
    }
  },

  // Page Banners
  pageBanners: {
    about: {
      title: "About Us",
      description: "Learn more about our company and mission"
    },
    features: {
      title: "Features",
      description: "Discover what makes our product special"
    },
    services: {
      title: "Services",
      description: "Explore our range of professional services"
    },
    pricing: {
      title: "Pricing",
      description: "Choose the perfect plan for your needs"
    },
    contact: {
      title: "Contact",
      description: "Get in touch with our team"
    }
  }
} 