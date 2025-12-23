export interface ProductVariation {
  name: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  category: string;
  origin: string;
  features: string[];
  varieties?: string[];
  variationImages?: ProductVariation[];
  processing?: string;
  packaging?: string;
  storage?: string;
  transportation?: string;
  destinations?: string[];
  certifications?: string;
  tradeRoute?: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "kinnow",
    name: "Fresh Mandarin (Kinnow)",
    shortName: "Kinnow",
    description: "Premium quality citrus from Sargodha, Punjab. Bright orange skin, high juice content, and balanced sweetness.",
    image: "/images/kinnow.jpg",
    category: "Fruits",
    origin: "Sargodha, Punjab — globally known for premium-quality citrus.",
    features: [
      "Bright orange skin",
      "High juice content",
      "Balanced sweetness"
    ],
    processing: "Harvested at peak maturity, washed, waxed, graded, and packed in ventilated cartons.",
    transportation: "Shipped through Quetta–Chaman–Kandahar route for Central Asian distribution.",
    destinations: [
      "Afghanistan",
      "Uzbekistan",
      "Turkmenistan",
      "Kazakhstan",
      "Tajikistan",
      "Kyrgyzstan"
    ],
    badge: "Premium"
  },
  {
    id: "potato",
    name: "Fresh Potatoes",
    shortName: "Potatoes",
    description: "Export-grade potatoes from Okara, Punjab. Available in multiple varieties with excellent quality control.",
    image: "/images/potato.jpg",
    category: "Vegetables",
    origin: "Okara, Punjab — Pakistan's leading potato-growing region.",
    features: [
      "Multiple varieties available",
      "Sorted by size and quality",
      "Export-grade standards"
    ],
    varieties: [
      "Lady Rosetta",
      "Mozika",
      "Sante",
      "Esmee"
    ],
    variationImages: [
      {
        name: "Lady Rosetta",
        image: "/images/Lady-Rosetta-Potato.webp"
      },
      {
        name: "Mozika",
        image: "/images/moziqa.jpg"
      },
      {
        name: "Sante",
        image: "/images/sante.png"
      },
      {
        name: "Esmee",
        image: "/images/Esmee-potato-seeds.jpg"
      }
    ],
    processing: "Sorted by size, skin smoothness, and internal quality.",
    packaging: "Exported in 20 kg to 50 kg jute or mesh bags, labeled as per buyer needs.",
    storage: "Stored in controlled facilities before transit to maintain freshness.",
    destinations: [
      "Afghanistan",
      "Central Asian Republics"
    ],
    badge: "Export Grade"
  },
  {
    id: "rice",
    name: "Rice (Basmati & IRRI Varieties)",
    shortName: "Rice",
    description: "Basmati and IRRI varieties. Hygienically processed and export-certified with full documentation.",
    image: "/images/rice.jpg",
    category: "Grains",
    origin: "Punjab's fertile rice-growing regions.",
    features: [
      "Premium Basmati varieties",
      "Hygienically processed",
      "Export-certified"
    ],
    varieties: [
      "Super Basmati",
      "1121 Basmati",
      "1509 Basmati",
      "IRRI-6"
    ],
    variationImages: [
      {
        name: "Super Basmati",
        image: "/images/Super_Basmati.jpg"
      },
      {
        name: "1121 Basmati",
        image: "/images/1121.jpg"
      },
      {
        name: "1509 Basmati",
        image: "/images/1509-basmati-rice-491.jpg"
      },
      {
        name: "IRRI-6",
        image: "/images/iri-6-rice.jpg"
      }
    ],
    processing: "Hygienically milled, cleaned, and packed in 5–50 kg export-standard bags.",
    certifications: "Fumigation and phytosanitary documentation provided per shipment.",
    tradeRoute: "Transported by road via Afghanistan to Central Asian markets.",
    destinations: [
      "Central Asian Markets"
    ],
    badge: "Certified"
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

