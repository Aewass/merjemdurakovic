// Types for main category structure
export type MainCategoryId =
  | "2d-design"
  | "3d-character"
  | "photography"
  | "traditional-art";

export type SubCategory = {
  id: string;
  titleKey: string;
  thumbnail: string;
  itemCount: number;
  thumbnailType?: 'image' | 'video';
};

export type CategoryImage = {
  src: string;
  alt: string;
};

export type ArtworkItem = {
  name: string; // Year and artwork name
  description: string; // Type of art or festival location
  images: CategoryImage[];
};

export type MainCategoryData = {
  id: MainCategoryId;
  titleKey: string;
  descriptionKey: string;
  color: {
    primary: string;
    gradient: string;
    hover: string;
  };
  subCategories: SubCategory[];
  // Direct images for categories without subcategories (like photography)
  images?: CategoryImage[];
  // Flag to show images in vertical layout (like branding)
  showDirectImages?: boolean;
  // Artwork items for categories with individual pieces (like traditional art, visit cards)
  artworkItems?: ArtworkItem[];
  // Flag to show artwork items layout (like visit cards)
  showArtworkItems?: boolean;
};

// Main category data configuration
export const mainCategoryData: Record<MainCategoryId, MainCategoryData> = {
  "2d-design": {
    id: "2d-design",
    titleKey: "main_categories.2d-design.title",
    descriptionKey: "main_categories.2d-design.page_description",
    color: {
      primary: "text-purple-600",
      gradient: "from-purple-400/20 to-violet-400/20",
      hover: "hover:text-purple-600",
    },
    subCategories: [
      {
        id: "branding-pumpkin",
        titleKey: "portfolio.branding.pumpkin",
        thumbnail: "/branding/branding-pumpkin/01.mp4",
        itemCount: 19,
        thumbnailType: 'video',
      },
      {
        id: "branding-ac-mint",
        titleKey: "portfolio.branding.ac_mint",
        thumbnail: "/branding/branding-ac-mint/1.jpg",
        itemCount: 25,
      },
      {
        id: "branding-shams-travel",
        titleKey: "portfolio.branding.shams_travel",
        thumbnail: "/branding/branding-shams-travel/1.jpg",
        itemCount: 6,
      },
      {
        id: "branding-upscale",
        titleKey: "portfolio.branding.upscale",
        thumbnail: "/branding/branding-upscale/1.jpg",
        itemCount: 10,
      },
      {
        id: "catalogs",
        titleKey: "portfolio.brochures_catalogs",
        thumbnail: "/catalogs/catalog-iform/1.png",
        itemCount: 5,
      },
      {
        id: "visit-cards",
        titleKey: "portfolio.visit_cards",
        thumbnail: "/visit-cards/visit-card-mehanizmi-ba/1.jpg",
        itemCount: 3,
      },
      {
        id: "books",
        titleKey: "portfolio.cover_design",
        thumbnail: "/books/book/2.jpg",
        itemCount: 1,
      },
      {
        id: "print-media",
        titleKey: "portfolio.print_media_works",
        thumbnail: "/print-media/fascicle-zerromax/1.jpg",
        itemCount: 6,
      },
      {
        id: "social-media",
        titleKey: "portfolio.social_media_content",
        thumbnail: "/social-media/social-adblue/0.jpg",
        itemCount: 5,
      },
    ],
  },
  "3d-character": {
    id: "3d-character",
    titleKey: "main_categories.3d-character.title",
    descriptionKey: "main_categories.3d-character.page_description",
    color: {
      primary: "text-cyan-600",
      gradient: "from-cyan-400/20 to-blue-400/20",
      hover: "hover:text-cyan-600",
    },
    subCategories: [
      {
        id: "3d-medieval-man",
        titleKey: "portfolio.3d.medieval_man",
        thumbnail: "/3d/3d-medieval-man/1.png",
        itemCount: 16,
      },
      {
        id: "3d-facial-anatomy",
        titleKey: "portfolio.3d.facial_anatomy",
        thumbnail: "/3d/3d-facial-anatomy/1.png",
        itemCount: 12,
      },
    ],
  },
  photography: {
    id: "photography",
    titleKey: "main_categories.photography.title",
    descriptionKey: "main_categories.photography.page_description",
    color: {
      primary: "text-rose-600",
      gradient: "from-rose-400/20 to-pink-400/20",
      hover: "hover:text-rose-600",
    },
    subCategories: [],
    showDirectImages: true,
    images: [
      { src: "/photography/01.jpg", alt: "Photography 01" },
      { src: "/photography/02.jpg", alt: "Photography 02" },
      { src: "/photography/03.jpg", alt: "Photography 03" },
      { src: "/photography/04.jpg", alt: "Photography 04" },
      { src: "/photography/05.jpg", alt: "Photography 05" },
      { src: "/photography/06.jpg", alt: "Photography 06" },
      { src: "/photography/07.jpg", alt: "Photography 07" },
      { src: "/photography/08.jpg", alt: "Photography 08" },
      { src: "/photography/09.jpg", alt: "Photography 09" },
      { src: "/photography/10.jpg", alt: "Photography 10" },
      { src: "/photography/11.jpg", alt: "Photography 11" },
      { src: "/photography/12.jpg", alt: "Photography 12" },
      { src: "/photography/13.jpg", alt: "Photography 13" },
      { src: "/photography/14.jpg", alt: "Photography 14" },
      { src: "/photography/15.jpg", alt: "Photography 15" },
      { src: "/photography/16.jpg", alt: "Photography 16" },
      { src: "/photography/17.jpg", alt: "Photography 17" },
      { src: "/photography/18.jpg", alt: "Photography 18" },
      { src: "/photography/19.jpg", alt: "Photography 19" },
      { src: "/photography/20.jpg", alt: "Photography 20" },
      { src: "/photography/21.jpg", alt: "Photography 21" },
      { src: "/photography/22.jpg", alt: "Photography 22" },
      { src: "/photography/23.jpg", alt: "Photography 23" },
    ],
  },
  "traditional-art": {
    id: "traditional-art",
    titleKey: "main_categories.traditional-art.title",
    descriptionKey: "main_categories.traditional-art.page_description",
    color: {
      primary: "text-amber-600",
      gradient: "from-amber-400/20 to-orange-400/20",
      hover: "hover:text-amber-600",
    },
    subCategories: [],
    showArtworkItems: true,
    artworkItems: [
      {
        name: "2021 — XI. International Miniature Art Biennale Tuzla",
        description: "Bosnian Cultural Center Tuzla, BiH",
        images: [
          {
            src:
              "/traditional-art/2021. XI. International Miniature Art Biennale Tuzla, Bosnian Cultural Center Tuzla, BiH.jpg",
            alt: "XI. International Miniature Art Biennale Tuzla, 2021",
          },
          {
            src:
              "/traditional-art/2021.-XI.-International-Miniature-Art-Biennale-Tuzla,-Bosnian-Cultural-Center-Tuzla,-BiH.jpg",
            alt:
              "XI. International Miniature Art Biennale Tuzla, 2021 (alt version)",
          },
        ],
      },
      {
        name: "2021 — 'Artistička radna akcija' Art Colony",
        description: "Acrylic on canvas — Bosnian Cultural Center Tuzla, BiH",
        images: [
          {
            src:
              "/traditional-art/Acrylic on canvas, 2021. Art Colony 'Artistička radna akcija', Bosnian Cultural Center Tuzla, BiH.jpg",
            alt: "Acrylic on canvas, Artistička radna akcija, 2021",
          },
        ],
      },
      {
        name: "2022 — Vortex",
        description: "Acrylic on canvas",
        images: [
          {
            src: "/traditional-art/Acrylic on canvas, Vortex, 2022.jpg",
            alt: "Acrylic on canvas, Vortex, 2022",
          },
        ],
      },
      {
        name: "2020 — Javorwood Art Festival",
        description: "Everything is One, One is Everything - Acrylic on canvas",
        images: [
          {
            src:
              "/traditional-art/Acrylic-on-canvas,-Everything-is-One,-One-is-Everything-Javorwood Art Festival 2020.jpg",
            alt:
              "Everything is One, One is Everything - Javorwood Art Festival 2020",
          },
        ],
      },
      {
        name: "2023 — Distortion of Still Life",
        description: "Acrylic on canvas",
        images: [
          {
            src:
              "/traditional-art/Art piece Distortion of Still Life  2023..jpg",
            alt: "Distortion of Still Life, 2023",
          },
        ],
      },
      {
        name: "2022 — Javorwood Art Festival",
        description:
          "Play of Children's Imagination - Sculpture, material: wood",
        images: [
          {
            src:
              "/traditional-art/Artwork Play of Children's Imagination, 2022, created at the Javorwood Art Festival 2022, 01.jpg",
            alt:
              "Play of Children's Imagination, Javorwood Art Festival 2022 - 01",
          },
          {
            src:
              "/traditional-art/Artwork Play of Children's Imagination, 2022, created at the Javorwood Art Festival 2022, 02.jpg",
            alt:
              "Play of Children's Imagination, Javorwood Art Festival 2022 - 02",
          },
          {
            src:
              "/traditional-art/Artwork-Play-of-Children's-Imagination,-2022,-created-at-the-Javorwood-Art-Festival-2022.jpg",
            alt: "Play of Children's Imagination, Javorwood Art Festival 2022",
          },
        ],
      },
      {
        name: "2022 — Calm as Stone",
        description: "Sculpture",
        images: [
          {
            src: "/traditional-art/Calm as Stone, 2022.jpg",
            alt: "Calm as Stone, 2022",
          },
        ],
      },
      {
        name: "2023 — Dance",
        description: "Acrylic on canvas",
        images: [
          {
            src: "/traditional-art/Dance, 2023..jpg",
            alt: "Dance, 2023",
          },
        ],
      },
      {
        name: "2022 — Exhibition at the Academy of Fine Arts Sarajevo",
        description: "Interactive art piece — Shadows",
        images: [
          {
            src:
              "/traditional-art/Interactive-art-piece-Shadows.-Exhibition-at-the-Academy-of-Fine-Arts,-2022.-01.jpg",
            alt:
              "Interactive art piece Shadows, Academy of Fine Arts Exhibition, 2022",
          },
        ],
      },
      {
        name: "2022 - The Wildlife and Human Life",
        description: "Mixed media printmaking",
        images: [
          {
            src:
              "/traditional-art/Mixed media printmaking – The Wildlife and Human Life..jpg",
            alt: "Mixed media printmaking - The Wildlife and Human Life",
          },
        ],
      },
      {
        name: "2020 — Short Film 'Mother'",
        description: "Behind the scene",
        images: [
          {
            src:
              "/traditional-art/Movie 'Mother' - Film 'Majka' (behind the scene 07.10.2020.).jpg",
            alt: "Movie Mother - Film Majka, behind the scene, 2020",
          },
        ],
      },
      {
        name: "2022 — Study of Human Anatomy",
        description: "Acrylic on paper",
        images: [
          {
            src: "/traditional-art/Study of Human Anatomy, 2022..jpg",
            alt: "Study of Human Anatomy, 2022",
          },
        ],
      },
    ],
  },
};

// Generate static paths for all main categories
export function getStaticPaths() {
  return Object.keys(mainCategoryData).map((id) => ({
    params: { id },
    props: {
      mainCategory: mainCategoryData[id as MainCategoryId],
    },
  }));
}
