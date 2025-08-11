// Types for category data structure
export type CatalogImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type CatalogItem = {
  name: string;
  description: string;
  images: CatalogImage[];
};

export type CategoryData = {
  number: string;
  title: string;
  category: string;
  description: string;
  items: CatalogItem[];
};

// Category data for all portfolio items
export const categoryData: Record<string, CategoryData> = {
  "branding-ac-mint": {
    number: "01",
    title: "Branding - AC Mint",
    category: "Category",
    description:
      "Visual identity system for Auto Centar Mint, based on an existing logo and color palette. Expanded into a full brand guidelines book with defined typography, layout, iconography, visual elements, and usage rules. Applied across business cards, letterheads, branded materials like mugs and clothing.",
    items: [
      {
        name: "AC Mint",
        description: "Brand identity",
        images: [
          {
            src: "/branding/branding-ac-mint/1.jpg",
            alt: "AC Mint brand identity",
            caption: "Logo design and visual identity",
          },
          {
            src: "/branding/branding-ac-mint/2.jpg",
            alt: "AC Mint logo design",
            caption: "Logo variations and applications",
          },
          {
            src: "/branding/branding-ac-mint/3.jpg",
            alt: "AC Mint brand applications",
            caption: "Brand applications and stationery",
          },
          {
            src: "/branding/branding-ac-mint/4.jpg",
            alt: "AC Mint packaging design",
            caption: "Packaging design solutions",
          },
          {
            src: "/branding/branding-ac-mint/5.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/6.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/7.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/8.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/9.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/10.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/11.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/12.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/13.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/14.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/15.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/16.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/17.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/18.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/19.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/20.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/21.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/22.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/23.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/24.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
          {
            src: "/branding/branding-ac-mint/25.jpg",
            alt: "AC Mint brand guidelines",
            caption: "Brand style guide and standards",
          },
        ],
      },
    ],
  },
  "branding-shams-travel": {
    number: "02",
    title: "Branding - Shams Travel",
    category: "Category",
    description:
      "Visual identity system for Shams Travel, based on an existing logo and color palette. Expanded into a full brand guidelines book with defined typography, layout, iconography, visual elements, and usage rules. Applied across business cards, letterheads, branded materials like mugs and clothing.",
    items: [
      {
        name: "Shams Travel",
        description: "Brand identity",
        images: [
          {
            src: "/branding/branding-shams-travel/1.jpg",
            alt: "Shams Travel brand identity",
          },
          {
            src: "/branding/branding-shams-travel/2.jpg",
            alt: "Shams Travel brand identity",
          },
          {
            src: "/branding/branding-shams-travel/3.jpg",
            alt: "Shams Travel brand identity",
          },
          {
            src: "/branding/branding-shams-travel/4.jpg",
            alt: "Shams Travel brand identity",
          },
          {
            src: "/branding/branding-shams-travel/5.jpg",
            alt: "Shams Travel brand identity",
          },
          {
            src: "/branding/branding-shams-travel/6.jpg",
            alt: "Shams Travel brand identity",
          },
        ],
      },
    ],
  },
  "branding-upscale": {
    number: "03",
    title: "Branding - Upscale",
    category: "Category",
    description:
      "Visual identity system for Upscale, based on an existing logo and color palette. Expanded into a full brand guidelines book with defined typography, layout, iconography, visual elements, and usage rules. Applied across business cards, letterheads, branded materials like mugs and clothing.",
    items: [
      {
        name: "UpScale",
        description: "Brand identity",
        images: [
          {
            src: "/branding/branding-upscale/1.jpg",
            alt: "Upscale brand identity",
          },
          {
            src: "/branding/branding-upscale/2.jpg",
            alt: "Upscale brand identity",
          },
          {
            src: "/branding/branding-upscale/3.jpg",
            alt: "Upscale brand identity",
          },
          {
            src: "/branding/branding-upscale/4.jpg",
            alt: "Upscale brand identity",
          },
          {
            src: "/branding/branding-upscale/5.jpg",
            alt: "Upscale brand identity",
          },
          {
            src: "/branding/branding-upscale/6.jpg",
            alt: "Upscale brand identity",
          },
          {
            src: "/branding/branding-upscale/7.jpg",
            alt: "Upscale brand identity",
          },
          {
            src: "/branding/branding-upscale/8.jpg",
            alt: "Upscale brand identity",
          },
          {
            src: "/branding/branding-upscale/9.jpg",
            alt: "Upscale brand identity",
          },
          {
            src: "/branding/branding-upscale/10.jpg",
            alt: "Upscale brand identity",
          },
        ],
      },
    ],
  },
  catalogs: {
    number: "04",
    title: "Brochures and Catalogs",
    category: "Category",
    description:
      "This section features print materials such as brochures, catalogs, reports, and guides from various fields. Each project reflects the brand's style, tone, and visual language tailored to its context.",
    items: [
      {
        name: "iForm",
        description: "Carbon Footprint Report",
        images: [
          {
            src: "/catalogs/catalog-iform/1.png",
            alt: "iform catalog page 1",
            caption: "Product showcase page",
          },
          {
            src: "/catalogs/catalog-iform/2.png",
            alt: "iform catalog page 2",
            caption: "Technical specifications",
          },
        ],
      },
      {
        name: "Ležaj Trade",
        description: "Catalog for Industrial Sales Program",
        images: [
          {
            src: "/catalogs/catalog-lezaj-trade/2.png",
            alt: "Lezaj Trade catalog page 1",
          },
          {
            src: "/catalogs/catalog-lezaj-trade/3.png",
            alt: "Lezaj Trade catalog page 3",
          },
        ],
      },
      {
        name: "Mega Trans",
        description: "Carbon Footprint Report",
        images: [
          { src: "/catalogs/catalog-mega/1.png", alt: "Mega catalog page 1" },
          { src: "/catalogs/catalog-mega/2.png", alt: "Mega catalog page 2" },
        ],
      },
      {
        name: "Stanić",
        description: "Carbon Footprint Report",
        images: [
          {
            src: "/catalogs/catalog-stanic/1.png",
            alt: "Stanic catalog page 1",
          },
          {
            src: "/catalogs/catalog-stanic/3.jpg",
            alt: "Stanic catalog page 3",
          },
        ],
      },
      {
        name: "ZGI",
        description: "Carbon Footprint Report for ZGI 2023. and 2024.",
        images: [
          { src: "/catalogs/catalog-zgi/1.jpg", alt: "ZGI catalog page 1" },
          { src: "/catalogs/catalog-zgi/2.jpg", alt: "ZGI catalog page 2" },
          { src: "/catalogs/catalog-zgi/3.jpg", alt: "ZGI catalog page 3" },
          {
            src: "/catalogs/catalog-zgi2/1.jpg",
            alt: "ZGI Vol.2 catalog page 1",
          },
          {
            src: "/catalogs/catalog-zgi2/2.jpg",
            alt: "ZGI Vol.2 catalog page 2",
          },
          {
            src: "/catalogs/catalog-zgi2/3.jpg",
            alt: "ZGI Vol.2 catalog page 3",
          },
        ],
      },
    ],
  },
  "visit-cards": {
    number: "05",
    title: "Visit Cards",
    category: "Category",
    description:
      "Business card designs combining clear structure, strong typography, and material detail to leave a lasting impression. Each card reflects the brands identity while staying functional, readable, and visually distinct.",
    items: [
      {
        name: "Ležaj Trade Business Card Design",
        description: "",
        images: [
          {
            src: "/visit-cards/visit-card-lezaj-trade/1.jpg",
            alt: "Ležaj Trade visit card",
            caption: "Front design",
          },
        ],
      },
      {
        name: "ZerroMax Business Card Design",
        description: "",
        images: [
          {
            src: "/visit-cards/visit-card-zerro-max/2.jpg",
            alt: "ZerroMax visit card",
            caption: "Complete business card design",
          },
        ],
      },
    ],
  },
  books: {
    number: "06",
    title: "Cover Design",
    category: "Category",
    description:
      "This section showcases my book design work, where I focus on creating covers. In my designs, I pay close attention to typography, composition, and aesthetics, while adhering to standards for both print and digital formats.",
    items: [
      {
        name: "Dramaturgija Evropskog Lutkarstva Fragmenti",
        description: "Cover design for a book about puppetry",
        images: [
          {
            src: "/books/book/1.jpg",
            alt: "Book design page 1",
            caption: "Cover design",
          },
          {
            src: "/books/book/2.jpg",
            alt: "Book design page 2",
            caption: "Internal layout",
          },
          {
            src: "/books/book/3.jpg",
            alt: "Book design page 3",
            caption: "Chapter opening page",
          },
        ],
      },
    ],
  },
  "print-media": {
    number: "07",
    title: "Various Print Media Works",
    category: "Category",
    description:
      "My print media portfolio showcases versatile design solutions across various formats including flyers, folders, and trifold brochures. Each piece is thoughtfully designed to effectively communicate the client's message through strategic use of layout, typography, and visual elements. I prioritize both aesthetic appeal and practical functionality, ensuring that each design serves its intended purpose while maintaining visual impact.",
    items: [
      {
        name: "Express Wood",
        description: "Letterhead design",
        images: [
          {
            src: "/print-media/memorandum-express/1.jpg",
            alt: "Express Wood memorandum page 1",
            caption: "Letterhead design",
          },
        ],
      },
      {
        name: "ZerroMax",
        description: "Folder design",
        images: [
          {
            src: "/print-media/fascicle-zerromax/1.jpg",
            alt: "Zerromax folder design page 1",
            caption: "Front cover design",
          },
          {
            src: "/print-media/fascicle-zerromax/2.jpg",
            alt: "Zerromax folder design page 2",
            caption: "Interior spread",
          },
        ],
      },
      {
        name: "Begović BH d.o.o.",
        description: "Promotional flyer",
        images: [
          {
            src: "/print-media/flyer-adblue/1.jpg",
            alt: "AdBlue flyer design",
            caption: "Single page promotional flyer",
          },
        ],
      },
      {
        name: "Pogrebno Preduzeće Palma",
        description: "Promotional flyer",
        images: [
          {
            src: "/print-media/flyer-palma/1.jpg",
            alt: "Palma flyer design",
            caption: "Product promotion flyer",
          },
        ],
      },
      {
        name: "Phoenix Restaurant",
        description: "Promotional flyer",
        images: [
          {
            src: "/print-media/flyer-phoenix/1.jpg",
            alt: "Phoenix flyer design",
            caption: "Event promotional material",
          },
        ],
      },
      {
        name: "Artane d.o.o. Sarajevo",
        description: "Trifold brochure",
        images: [
          {
            src: "/print-media/trifold-artane/1.jpg",
            alt: "Artane trifold brochure page 1",
            caption: "Front panel design",
          },
          {
            src: "/print-media/trifold-artane/2.jpg",
            alt: "Artane trifold brochure page 2",
            caption: "Interior panels layout",
          },
          {
            src: "/print-media/trifold-artane/3.jpg",
            alt: "Artane trifold brochure page 3",
            caption: "Back panel design",
          },
        ],
      },
    ],
  },
  "social-media": {
    number: "08",
    title: "Social Media Design",
    category: "Category",
    description:
      "My social media design work focuses on creating engaging and visually appealing content that effectively communicates brand messages across various platforms. Each design is crafted to capture attention, drive engagement, and maintain brand consistency while adapting to the unique requirements of different social media channels.",
    items: [
      {
        name: "Begović BH d.o.o.",
        description: "Social media content",
        images: [
          {
            src: "/social-media/social-adblue/1.jpg",
            alt: "AdBlue social media design 1",
          },
          {
            src: "/social-media/social-adblue/2.jpg",
            alt: "AdBlue social media design 2",
          },
          {
            src: "/social-media/social-adblue/4.jpg",
            alt: "AdBlue social media design 3",
          },
          {
            src: "/social-media/social-adblue/3.jpg",
            alt: "AdBlue social media design 4",
          },
          {
            src: "/social-media/social-adblue/5.jpg",
            alt: "AdBlue social media design 5",
          },
        ],
      },
      {
        name: "Doma d.o.o.",
        description: "Social media content",
        images: [
          {
            src: "/social-media/social-doma/3.jpg",
            alt: "Doma social media design 1",
          },
          {
            src: "/social-media/social-doma/4.jpg",
            alt: "Doma social media design 2",
          },
          {
            src: "/social-media/social-doma/5.jpg",
            alt: "Doma social media design 3",
          },
          {
            src: "/social-media/social-doma/1.jpg",
            alt: "Doma social media design 4",
          },
          {
            src: "/social-media/social-doma/2.jpg",
            alt: "Doma social media design 5",
          },
        ],
      },
      {
        name: "Eurotim Company d.o.o.",
        description: "Social media content",
        images: [
          {
            src: "/social-media/social-eurotim/1.jpg",
            alt: "Eurotim social media design 1",
          },
          {
            src: "/social-media/social-eurotim/4.jpg",
            alt: "Eurotim social media design 2",
          },
          {
            src: "/social-media/social-eurotim/2.jpg",
            alt: "Eurotim social media design 3",
          },
          {
            src: "/social-media/social-eurotim/3.jpg",
            alt: "Eurotim social media design 4",
          },
          {
            src: "/social-media/social-eurotim/5.jpg",
            alt: "Eurotim social media design 5",
          },
        ],
      },
      {
        name: "Mehanizmi.ba",
        description: "Social media content",
        images: [
          {
            src: "/social-media/social-mehanizmi/1.png",
            alt: "Mehanizmi social media design 1",
          },
          {
            src: "/social-media/social-mehanizmi/2.png",
            alt: "Mehanizmi social media design 2",
          },
          {
            src: "/social-media/social-mehanizmi/3.png",
            alt: "Mehanizmi social media design 3",
          },
          {
            src: "/social-media/social-mehanizmi/4.png",
            alt: "Mehanizmi social media design 4",
          },
          {
            src: "/social-media/social-mehanizmi/5.png",
            alt: "Mehanizmi social media design 5",
          },
        ],
      },
      {
        name: "Rework",
        description: "Social media content",
        images: [
          {
            src: "/social-media/social-rework/1.jpg",
            alt: "Rework social media design 1",
          },
          {
            src: "/social-media/social-rework/2.jpg",
            alt: "Rework social media design 2",
          },
          {
            src: "/social-media/social-rework/3.jpg",
            alt: "Rework social media design 3",
          },
          {
            src: "/social-media/social-rework/4.jpg",
            alt: "Rework social media design 4",
          },
          {
            src: "/social-media/social-rework/5.jpg",
            alt: "Rework social media design 5",
          },
        ],
      },
    ],
  },
};

// Generate static paths for all categories
export function getStaticPaths() {
  return Object.keys(categoryData).map((id) => ({
    params: { id },
    props: {
      category: categoryData[id],
    },
  }));
}
