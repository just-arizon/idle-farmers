export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Idle Farmer",
  description: "Access tractors, bullk inputs, and farm support exclusively",
  navItems: [
    {
      label: "Blog",
      href: "/",
    },
    // {
    //   label: "Privacy Policy",
    //   href: "/docs",
    // },

  ],
  navMenuItems: [
    {
      label: "Blog",
      href: "/financial-inclusion",
    },
    // {
    //   label: "Privacy Policy",
    //   href: "/privacy",
    // }
  ],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
