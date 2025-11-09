import type { MainCategoryData, MainCategoryId } from "./main-category";

// Bosnian translations for main categories
export const mainCategoryDataBs: Record<MainCategoryId, MainCategoryData> = {
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
      { src: "/photography/01.jpg", alt: "Fotografija 1" },
      { src: "/photography/02.jpg", alt: "Fotografija 2" },
      { src: "/photography/03.jpg", alt: "Fotografija 3" },
      { src: "/photography/04.jpg", alt: "Fotografija 4" },
      { src: "/photography/05.jpg", alt: "Fotografija 5" },
      { src: "/photography/06.jpg", alt: "Fotografija 6" },
      { src: "/photography/07.jpg", alt: "Fotografija 7" },
      { src: "/photography/08.jpg", alt: "Fotografija 8" },
      { src: "/photography/09.jpg", alt: "Fotografija 9" },
      { src: "/photography/10.jpg", alt: "Fotografija 10" },
      { src: "/photography/11.jpg", alt: "Fotografija 11" },
      { src: "/photography/12.jpg", alt: "Fotografija 12" },
      { src: "/photography/13.jpg", alt: "Fotografija 13" },
      { src: "/photography/14.jpg", alt: "Fotografija 14" },
      { src: "/photography/15.jpg", alt: "Fotografija 15" },
      { src: "/photography/16.jpg", alt: "Fotografija 16" },
      { src: "/photography/17.jpg", alt: "Fotografija 17" },
      { src: "/photography/18.jpg", alt: "Fotografija 18" },
      { src: "/photography/19.jpg", alt: "Fotografija 19" },
      { src: "/photography/20.jpg", alt: "Fotografija 20" },
      { src: "/photography/21.jpg", alt: "Fotografija 21" },
      { src: "/photography/22.jpg", alt: "Fotografija 22" },
      { src: "/photography/23.jpg", alt: "Fotografija 23" },
      { src: "/photography/24.jpg", alt: "Fotografija 24" },
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
        name: "2021 — XI. Međunarodno Bienale Minijature Tuzla",
        description: "Bosanski Kulturni Centar Tuzla, BiH",
        images: [
          {
            src:
              "/traditional-art/2021. XI. International Miniature Art Biennale Tuzla, Bosnian Cultural Center Tuzla, BiH.jpg",
            alt: "XI. Međunarodno Bienale Minijature Tuzla, 2021",
          },
          {
            src:
              "/traditional-art/2021.-XI.-International-Miniature-Art-Biennale-Tuzla,-Bosnian-Cultural-Center-Tuzla,-BiH.jpg",
            alt:
              "XI. Međunarodno Bienale Minijature Tuzla, 2021 (alternativna verzija)",
          },
        ],
      },
      {
        name: "2021 — Umjetnička Kolonija 'Artistička radna akcija'",
        description: "Akril na platnu — Bosanski Kulturni Centar Tuzla, BiH",
        images: [
          {
            src:
              "/traditional-art/Acrylic on canvas, 2021. Art Colony 'Artistička radna akcija', Bosnian Cultural Center Tuzla, BiH.jpg",
            alt: "Akril na platnu, Artistička radna akcija, 2021",
          },
        ],
      },
      {
        name: "2022 — Vortex",
        description: "Akril na platnu",
        images: [
          {
            src: "/traditional-art/Acrylic on canvas, Vortex, 2022.jpg",
            alt: "Akril na platnu, Vortex, 2022",
          },
        ],
      },
      {
        name: "2020 — Umjetnički Festival Javorwood",
        description: "Sve je Jedno, Jedno je Sve - Akril na platnu",
        images: [
          {
            src:
              "/traditional-art/Acrylic-on-canvas,-Everything-is-One,-One-is-Everything-Javorwood Art Festival 2020.jpg",
            alt:
              "Sve je Jedno, Jedno je Sve - Javorwood Art Festival 2020",
          },
        ],
      },
      {
        name: "2023 — Distorzija Mrtve Prirode",
        description: "Akril na platnu",
        images: [
          {
            src:
              "/traditional-art/Art piece Distortion of Still Life  2023..jpg",
            alt: "Distorzija Mrtve Prirode, 2023",
          },
        ],
      },
      {
        name: "2022 — Umjetnički Festival Javorwood",
        description:
          "Igra Dječije Mašte - Skulptura, materijal: drvo",
        images: [
          {
            src:
              "/traditional-art/Artwork Play of Children's Imagination, 2022, created at the Javorwood Art Festival 2022, 01.jpg",
            alt:
              "Igra Dječije Mašte, Javorwood Art Festival 2022 - 01",
          },
          {
            src:
              "/traditional-art/Artwork Play of Children's Imagination, 2022, created at the Javorwood Art Festival 2022, 02.jpg",
            alt:
              "Igra Dječije Mašte, Javorwood Art Festival 2022 - 02",
          },
          {
            src:
              "/traditional-art/Artwork-Play-of-Children's-Imagination,-2022,-created-at-the-Javorwood-Art-Festival-2022.jpg",
            alt: "Igra Dječije Mašte, Javorwood Art Festival 2022",
          },
        ],
      },
      {
        name: "2022 — Miran kao Kamen",
        description: "Skulptura",
        images: [
          {
            src: "/traditional-art/Calm as Stone, 2022.jpg",
            alt: "Miran kao Kamen, 2022",
          },
        ],
      },
      {
        name: "2023 — Ples",
        description: "Akril na platnu",
        images: [
          {
            src: "/traditional-art/Dance, 2023..jpg",
            alt: "Ples, 2023",
          },
        ],
      },
      {
        name: "2022 — Izložba na Akademiji Likovnih Umjetnosti Sarajevo",
        description: "Interaktivno umjetničko djelo — Sjene",
        images: [
          {
            src:
              "/traditional-art/Interactive-art-piece-Shadows.-Exhibition-at-the-Academy-of-Fine-Arts,-2022.-01.jpg",
            alt:
              "Interaktivno umjetničko djelo Sjene, Izložba na Akademiji Likovnih Umjetnosti, 2022",
          },
        ],
      },
      {
        name: "2022 - Divlji Svijet i Ljudski Život",
        description: "Grafika mješovite tehnike",
        images: [
          {
            src:
              "/traditional-art/Mixed media printmaking – The Wildlife and Human Life..jpg",
            alt: "Grafika mješovite tehnike - Divlji Svijet i Ljudski Život",
          },
        ],
      },
      {
        name: "2020 — Kratki Film 'Majka'",
        description: "Iza scene",
        images: [
          {
            src:
              "/traditional-art/Movie 'Mother' - Film 'Majka' (behind the scene 07.10.2020.).jpg",
            alt: "Film Majka, iza scene, 2020",
          },
        ],
      },
      {
        name: "2022 — Studija Ljudske Anatomije",
        description: "Akril na papiru",
        images: [
          {
            src: "/traditional-art/Study of Human Anatomy, 2022..jpg",
            alt: "Studija Ljudske Anatomije, 2022",
          },
        ],
      },
    ],
  },
};

// Generate static paths for all main categories - Bosnian version
export function getStaticPathsBs() {
  return Object.keys(mainCategoryDataBs).map((id) => ({
    params: { id },
    props: {
      mainCategory: mainCategoryDataBs[id as MainCategoryId],
    },
  }));
}
