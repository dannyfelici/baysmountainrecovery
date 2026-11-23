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
};

export const nav = [
  { label: 'About', href: '/about/' },
  { label: 'Detox', href: '/detox/' },
  { label: 'Residential Treatment', href: '/residential-treatment/' },
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

export const payers = ['Blue Cross Blue Shield', 'Aetna', 'Cigna', 'UnitedHealthcare', 'Humana'];

export const mapEmbed =
  'https://www.google.com/maps?q=2000+Greenway+Street,+Kingsport,+TN+37660&output=embed';

export const imageAlt: Record<string, string> = {
  'bays-mountain-skyline': 'Bays Mountain rising above Kingsport, Tennessee',
  'kingsport-sunset-aerial': 'Downtown Kingsport at sunset with Bays Mountain in the distance',
  'kingsport-downtown': 'Tree-lined street in downtown Kingsport, Tennessee',
  'fall-lake-bridge': 'Fall color around a lake near Kingsport, Tennessee',
};
