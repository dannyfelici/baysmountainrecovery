// Single source of truth for business info (NAP) and navigation.
// Update here, and every page, header, footer, and schema picks it up.

export const site = {
  name: 'Blue Ridge Behavioral Health',
  url: 'https://blueridgebhtn.com',
  tagline: 'Inpatient detox and residential addiction treatment in Kingsport, TN',
  status: 'Coming in 2027',
  phone: '865-272-4000',
  phoneHref: 'tel:+18652724000',
  address: {
    street: '2000 Greenway Street',
    city: 'Kingsport',
    state: 'TN',
    zip: '37660',
  },
  beds: 25,
};

// Launch pages only. Admissions, Areas We Serve, and Resources pillars
// roll out with the SEO campaign after launch.
// TODO: Align slugs with the approved sitemap.
export const nav = [
  { label: 'About', href: '/about' },
  {
    label: 'Treatment',
    href: '/treatment',
    children: [
      { label: 'Medical Detox', href: '/treatment/detox' },
      { label: 'Residential Treatment', href: '/treatment/residential' },
    ],
  },
  { label: 'What We Treat', href: '/what-we-treat' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'Contact', href: '/contact' },
];
