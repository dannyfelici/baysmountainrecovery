// Single source of truth for business info (NAP), navigation, and staging status.

export const site = {
  name: 'Bays Mountain Recovery',
  url: 'https://baysmountainrecovery.com',
  tagline: 'Compassionate detox and residential care for addiction and co-occurring mental health conditions in Tennessee.',
  phone: '(423) 214-1113',
  phoneHref: 'tel:+14232141113',
  address: {
    street: '2000 Greenway Street',
    city: 'Kingsport',
    state: 'TN',
    zip: '37660',
  },
  beds: 25,
  // While true, every page is noindex and robots.txt blocks crawling.
  // Set to false at launch.
  staging: true,
  // Google Tag Manager container
  gtmId: 'GTM-W4TTKVHJ',
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  {
    label: 'About',
    href: '/about/',
    children: [
      { label: 'Our Team', href: '/about/our-team/' },
      { label: 'Our Facility', href: '/about/facility/' },
    ],
  },
  {
    label: 'Detox',
    href: '/detox/',
    children: [
      { label: 'Alcohol Detox', href: '/detox/alcohol/' },
      { label: 'Opioid Detox', href: '/detox/opioids/' },
      { label: 'Benzodiazepine Detox', href: '/detox/benzodiazepine/' },
      { label: 'Meth Detox', href: '/detox/meth/' },
    ],
  },
  { label: 'Residential Treatment', href: '/residential-treatment/' },
  {
    label: 'Addiction Treatment',
    href: '/addiction/',
    children: [
      { label: 'Alcohol Addiction', href: '/addiction/alcohol/' },
      { label: 'Opioid Addiction', href: '/addiction/opioids/' },
      { label: 'Heroin Addiction', href: '/addiction/heroin/' },
      { label: 'Meth Addiction', href: '/addiction/meth/' },
    ],
  },
  { label: 'Therapies', href: '/therapies/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerLinks = [
  { label: 'About', href: '/about/' },
  { label: 'Detox', href: '/detox/' },
  { label: 'Residential Treatment', href: '/residential-treatment/' },
  { label: 'Addiction Treatment', href: '/addiction/' },
  { label: 'Therapies', href: '/therapies/' },
  { label: 'Contact', href: '/contact/' },
];

// Breadcrumb labels for section roots
export const sectionLabels: Record<string, string> = {
  about: 'About',
  detox: 'Detox',
  'residential-treatment': 'Residential Treatment',
  addiction: 'Addiction Treatment',
  therapies: 'Therapies',
  contact: 'Contact',
};

// Logo files in public/images/insurance/. `h` is the display height in px,
// tuned so the logos look balanced at their different aspect ratios.
export const payers = [
  { name: 'Blue Cross Blue Shield', logo: '/images/insurance/bcbs.svg', h: 38 },
  { name: 'Aetna', logo: '/images/insurance/aetna.svg', h: 26 },
  { name: 'Cigna Healthcare', logo: '/images/insurance/cigna.svg', h: 48 },
  { name: 'UnitedHealthcare', logo: '/images/insurance/unitedhealthcare.svg', h: 40 },
  { name: 'Humana', logo: '/images/insurance/humana.svg', h: 24 },
];

export const mapEmbed =
  'https://www.google.com/maps?q=2000+Greenway+Street,+Kingsport,+TN+37660&output=embed';

export const imageAlt: Record<string, string> = {
  'bays-mountain-skyline': 'Bays Mountain rising above Kingsport, Tennessee',
  'kingsport-sunset-aerial': 'Downtown Kingsport at sunset with Bays Mountain in the distance',
  'kingsport-downtown': 'Tree-lined street in downtown Kingsport, Tennessee',
  'fall-lake-bridge': 'Fall color around a lake near Kingsport, Tennessee',
};
