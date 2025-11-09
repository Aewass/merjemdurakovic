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

// Category data for all portfolio items - Bosnian version
export const categoryDataBs: Record<string, CategoryData> = {
  "branding-ac-mint": {
    number: "01",
    title: "Brending - AC Mint",
    category: "Kategorija",
    description: "",
    items: [
      {
        name: "AC Mint",
        description: "Brending",
        images: [
          {
            src: "/branding/branding-ac-mint/1.jpg",
            alt: "AC Mint identitet brenda",
            caption: "Dizajn logotipa i vizuelni identitet",
          },
          {
            src: "/branding/branding-ac-mint/2.jpg",
            alt: "AC Mint dizajn logotipa",
            caption: "Varijacije logotipa i primene",
          },
          {
            src: "/branding/branding-ac-mint/3.jpg",
            alt: "AC Mint primene brenda",
            caption: "Primene brenda i pismovni materijal",
          },
          {
            src: "/branding/branding-ac-mint/4.jpg",
            alt: "AC Mint dizajn pakovanja",
            caption: "Rješenja dizajna pakovanja",
          },
          {
            src: "/branding/branding-ac-mint/5.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/6.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/7.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/8.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/9.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/10.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/11.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/12.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/13.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/14.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/15.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/16.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/17.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/18.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/19.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/20.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/21.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/22.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/23.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/24.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-ac-mint/25.jpg",
            alt: "AC Mint smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
        ],
      },
    ],
  },
  "branding-shams-travel": {
    number: "02",
    title: "Brending - Shams Travel",
    category: "Kategorija",
    description: "",
    items: [
      {
        name: "Shams Travel",
        description: "Brending",
        images: [
          {
            src: "/branding/branding-shams-travel/1.jpg",
            alt: "Shams Travel identitet brenda",
          },
          {
            src: "/branding/branding-shams-travel/2.jpg",
            alt: "Shams Travel identitet brenda",
          },
          {
            src: "/branding/branding-shams-travel/3.jpg",
            alt: "Shams Travel identitet brenda",
          },
          {
            src: "/branding/branding-shams-travel/4.jpg",
            alt: "Shams Travel identitet brenda",
          },
          {
            src: "/branding/branding-shams-travel/5.jpg",
            alt: "Shams Travel identitet brenda",
          },
          {
            src: "/branding/branding-shams-travel/6.jpg",
            alt: "Shams Travel identitet brenda",
          },
        ],
      },
    ],
  },
  "branding-upscale": {
    number: "03",
    title: "Brending - Upscale",
    category: "Kategorija",
    description: "",
    items: [
      {
        name: "Upscale",
        description: "Brending",
        images: [
          {
            src: "/branding/branding-upscale/1.jpg",
            alt: "Upscale identitet brenda",
            caption: "Dizajn logotipa i vizuelni identitet",
          },
          {
            src: "/branding/branding-upscale/2.jpg",
            alt: "Upscale dizajn logotipa",
            caption: "Varijacije logotipa i primene",
          },
          {
            src: "/branding/branding-upscale/3.jpg",
            alt: "Upscale primene brenda",
            caption: "Primene brenda i pismovni materijal",
          },
          {
            src: "/branding/branding-upscale/4.jpg",
            alt: "Upscale dizajn pakovanja",
            caption: "Rješenja dizajna pakovanja",
          },
          {
            src: "/branding/branding-upscale/5.jpg",
            alt: "Upscale smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-upscale/6.jpg",
            alt: "Upscale smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-upscale/7.jpg",
            alt: "Upscale smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-upscale/8.jpg",
            alt: "Upscale smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-upscale/9.jpg",
            alt: "Upscale smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
          {
            src: "/branding/branding-upscale/10.jpg",
            alt: "Upscale smernice brenda",
            caption: "Vodič za stil brenda i standardi",
          },
        ],
      },
    ],
  },
  catalogs: {
    number: "04",
    title: "Brošure i Katalozi",
    category: "Kategorija",
    description:
      "Ova sekcija prikazuje štampane materijale poput brošura, kataloga, izvještaja i vodiča. Svaki projekat odražava stil brenda, ton i vizuelni jezik.",
    items: [
      {
        name: "iForm",
        description: "Izvještaj o ugljičnom otisku",
        images: [
          {
            src: "/catalogs/catalog-iform/1.png",
            alt: "iform katalog strana 1",
            caption: "Stranica za prikaz proizvoda",
          },
          {
            src: "/catalogs/catalog-iform/2.png",
            alt: "iform katalog strana 2",
            caption: "Tehničke specifikacije",
          },
        ],
      },
      {
        name: "Industrijski prodajni program",
        description: "Katalog za program industrijskih prodaja",
        images: [
          {
            src: "/catalogs/catalog-lezaj-trade/2.png",
            alt: "Lezaj Trade katalog strana 1",
          },
          {
            src: "/catalogs/catalog-lezaj-trade/3.png",
            alt: "Lezaj Trade katalog strana 3",
          },
        ],
      },
      {
        name: "Mega Trans",
        description: "Izvještaj o ugljičnom otisku",
        images: [
          { src: "/catalogs/catalog-mega/1.png", alt: "Mega katalog strana 1" },
          { src: "/catalogs/catalog-mega/2.png", alt: "Mega katalog strana 2" },
        ],
      },

      {
        name: "Stanić",
        description: "Izvještaj o ugljičnom otisku",
        images: [
          {
            src: "/catalogs/catalog-stanic/1.png",
            alt: "Stanic katalog strana 1",
          },
          {
            src: "/catalogs/catalog-stanic/3.jpg",
            alt: "Stanic katalog strana 3",
          },
        ],
      },
      {
        name: "ZGI",
        description: "Izvještaj o ugljičnom otisku za ZGI 2023. i 2024.",
        images: [
          { src: "/catalogs/catalog-zgi/1.jpg", alt: "ZGI katalog strana 1" },
          { src: "/catalogs/catalog-zgi/2.jpg", alt: "ZGI katalog strana 2" },
          { src: "/catalogs/catalog-zgi/3.jpg", alt: "ZGI katalog strana 3" },
          {
            src: "/catalogs/catalog-zgi2/1.jpg",
            alt: "ZGI Vol.2 katalog strana 1",
          },
          {
            src: "/catalogs/catalog-zgi2/2.jpg",
            alt: "ZGI Vol.2 katalog strana 2",
          },
          {
            src: "/catalogs/catalog-zgi2/3.jpg",
            alt: "ZGI Vol.2 katalog strana 3",
          },
        ],
      },
    ],
  },
  "visit-cards": {
    number: "05",
    title: "Poslovne Kartice",
    category: "Kategorija",
    description:
      "Dizajni poslovnih kartica koji kombinuju jasnu strukturu, snažnu tipografiju i kvalitetan dizajn kako bi ostavili trajan utisak. Svaka kartica odražava identitet brenda dok ostaje funkcionalna, čitljiva i vizuelno izrazita.",
    items: [
      {
        name: "Mehanizmi.ba dizajn poslovne kartice",
        description: "",
        images: [
          {
            src: "/visit-cards/visit-card-mehanizmi-ba/1.jpg",
            alt: "Mehanizmi.ba poslovna kartica",
            caption: "Prednja strana",
          },
        ],
      },
      {
        name: "Ležaj Trade dizajn poslovne kartice",
        description: "",
        images: [
          {
            src: "/visit-cards/visit-card-lezaj-trade/1.jpg",
            alt: "Ležaj Trade poslovna kartica",
            caption: "Prednja strana",
          },
        ],
      },
      {
        name: "ZerroMax dizajn poslovne kartice",
        description: "",
        images: [
          {
            src: "/visit-cards/visit-card-zerro-max/2.jpg",
            alt: "ZerroMax poslovna kartica",
            caption: "Kompletan dizajn poslovne kartice",
          },
        ],
      },
    ],
  },
  books: {
    number: "06",
    title: "Dizajn Korica",
    category: "Kategorija",
    description:
      "Ova sekcija prikazuje moj rad na izradi dizajna korica knjiga, s pažnjom na tipografiju, kompoziciju i estetiku, uz poštovanje standarda za štampane formate.",
    items: [
      {
        name: "Dramaturgija Evropskog Lutkarstva Fragmenti",
        description: "Dizajn korica za knjigu o lutkarstvu",
        images: [
          {
            src: "/books/book/2.jpg",
            alt: "Dizajn knjige strana 2",
            caption: "Unutrašnji layout",
          },
          {
            src: "/books/book/3.jpg",
            alt: "Dizajn knjige strana 3",
            caption: "Stranica otvaranja poglavlja",
          },
          {
            src: "/books/book/1.jpg",
            alt: "Dizajn knjige strana 1",
            caption: "Dizajn korica",
          },
        ],
      },
    ],
  },
  "print-media": {
    number: "07",
    title: "Razni Štampani Mediji",
    category: "Kategorija",
    description:
      "U ovoj sekciji prikazujem dizajnerska rješenja za štampane medije, kao što su letci, fascikle i brošure. Svaki komad pažljivo je osmišljen kako bi učinkovito prenio poruku.",
    items: [
      {
        name: "Express Wood",
        description: "Memorandum za express wood",
        images: [
          {
            src: "/print-media/memorandum-express/1.jpg",
            alt: "Express Wood memorandum strana 1",
            caption: "Dizajn pismovnog papira",
          },
        ],
      },
      {
        name: "ZerroMax",
        description: "Dizajn fascikle",
        images: [
          {
            src: "/print-media/fascicle-zerromax/1.jpg",
            alt: "Zerromax fascikla strana 1",
            caption: "Dizajn prednje korice",
          },
          {
            src: "/print-media/fascicle-zerromax/2.jpg",
            alt: "Zerromax fascikla strana 2",
            caption: "Unutrašnji raspored",
          },
        ],
      },
      {
        name: "Begović BH d.o.o.",
        description: "Promotivni letak",
        images: [
          {
            src: "/print-media/flyer-adblue/1.jpg",
            alt: "AdBlue dizajn letka",
            caption: "Jednostranični promotivni letak",
          },
        ],
      },
      {
        name: "Pogrebno Preduzeće Palma",
        description: "Promotivni letak",
        images: [
          {
            src: "/print-media/flyer-palma/1.jpg",
            alt: "Palma dizajn letka",
            caption: "Letak za promociju proizvoda",
          },
        ],
      },
      {
        name: "Phoenix Restaurant",
        description: "Promotivni letak",
        images: [
          {
            src: "/print-media/flyer-phoenix/1.jpg",
            alt: "Phoenix dizajn letka",
            caption: "Promotivni materijal za događaj",
          },
        ],
      },
      {
        name: "Shams Travel",
        description: "Promotivni letak",
        images: [
          {
            src: "/print-media/flyer-shams/1.jpg",
            alt: "Shams dizajn letka",
            caption: "Letak za prikaz proizvoda",
          },
        ],
      },
      {
        name: "Artane d.o.o. Sarajevo",
        description: "Promotivni letak",
        images: [
          {
            src: "/print-media/trifold-artane/1.jpg",
            alt: "Artane trostruka brošura strana 1",
            caption: "Dizajn prednje strane",
          },
          {
            src: "/print-media/trifold-artane/2.jpg",
            alt: "Artane trostruka brošura strana 2",
            caption: "Layout unutrašnjih strana",
          },
          {
            src: "/print-media/trifold-artane/3.jpg",
            alt: "Artane trostruka brošura strana 3",
            caption: "Dizajn zadnje strane",
          },
        ],
      },
    ],
  },
  "social-media": {
    number: "08",
    title: "Dizajn Društvenih Mreža",
    category: "Kategorija",
    description:
      "Kreiram moderne i popularne vizuale za društvene mreže, fokusirajući se na stvaranje sadržaja koji je atraktivan i relevantan za publiku. Pokušavam da uhvatim svaki trend i uklopim ga na način koji čini feed profila mojih klijenata privlačnim i angažujućim za sve uzraste, održavajući istovremeno dosljednost brenda.",
    items: [
      {
        name: "Begović BH d.o.o.",
        description: "Sadržaj za društvene mreže",
        images: [
          {
            src: "/social-media/social-adblue/1.jpg",
            alt: "AdBlue dizajn društvenih mreža 1",
          },
          {
            src: "/social-media/social-adblue/2.jpg",
            alt: "AdBlue dizajn društvenih mreža 2",
          },
          {
            src: "/social-media/social-adblue/4.jpg",
            alt: "AdBlue dizajn društvenih mreža 3",
          },
          {
            src: "/social-media/social-adblue/3.jpg",
            alt: "AdBlue dizajn društvenih mreža 4",
          },
          {
            src: "/social-media/social-adblue/5.jpg",
            alt: "AdBlue dizajn društvenih mreža 5",
          },
        ],
      },
      {
        name: "Doma d.o.o.",
        description: "Sadržaj za društvene mreže",
        images: [
          {
            src: "/social-media/social-doma/3.jpg",
            alt: "Doma dizajn društvenih mreža 1",
          },
          {
            src: "/social-media/social-doma/4.jpg",
            alt: "Doma dizajn društvenih mreža 2",
          },
          {
            src: "/social-media/social-doma/5.jpg",
            alt: "Doma dizajn društvenih mreža 3",
          },
          {
            src: "/social-media/social-doma/1.jpg",
            alt: "Doma dizajn društvenih mreža 4",
          },
          {
            src: "/social-media/social-doma/2.jpg",
            alt: "Doma dizajn društvenih mreža 5",
          },
        ],
      },
      {
        name: "Eurotim Company d.o.o.",
        description: "Sadržaj za društvene mreže",
        images: [
          {
            src: "/social-media/social-eurotim/1.jpg",
            alt: "Eurotim dizajn društvenih mreža 1",
          },
          {
            src: "/social-media/social-eurotim/4.jpg",
            alt: "Eurotim dizajn društvenih mreža 2",
          },
          {
            src: "/social-media/social-eurotim/2.jpg",
            alt: "Eurotim dizajn društvenih mreža 3",
          },
          {
            src: "/social-media/social-eurotim/3.jpg",
            alt: "Eurotim dizajn društvenih mreža 4",
          },
          {
            src: "/social-media/social-eurotim/5.jpg",
            alt: "Eurotim dizajn društvenih mreža 5",
          },
        ],
      },
      {
        name: "Mehanizmi.ba",
        description: "Sadržaj za društvene mreže",
        images: [
          {
            src: "/social-media/social-mehanizmi/1.png",
            alt: "Mehanizmi dizajn društvenih mreža 1",
          },
          {
            src: "/social-media/social-mehanizmi/2.png",
            alt: "Mehanizmi dizajn društvenih mreža 2",
          },
          {
            src: "/social-media/social-mehanizmi/3.png",
            alt: "Mehanizmi dizajn društvenih mreža 3",
          },
          {
            src: "/social-media/social-mehanizmi/4.png",
            alt: "Mehanizmi dizajn društvenih mreža 4",
          },
          {
            src: "/social-media/social-mehanizmi/5.png",
            alt: "Mehanizmi dizajn društvenih mreža 5",
          },
        ],
      },
      {
        name: "Rework",
        description: "Sadržaj za društvene mreže",
        images: [
          {
            src: "/social-media/social-rework/1.jpg",
            alt: "Rework dizajn društvenih mreža 1",
          },
          {
            src: "/social-media/social-rework/2.jpg",
            alt: "Rework dizajn društvenih mreža 2",
          },
          {
            src: "/social-media/social-rework/3.jpg",
            alt: "Rework dizajn društvenih mreža 3",
          },
          {
            src: "/social-media/social-rework/4.jpg",
            alt: "Rework dizajn društvenih mreža 4",
          },
          {
            src: "/social-media/social-rework/5.jpg",
            alt: "Rework dizajn društvenih mreža 5",
          },
        ],
      },
    ],
  },
  "3d-medieval-man": {
    number: "09",
    title: "Čovjek iz Srednjeg Vijeka",
    category: "3D Umjetnost Karaktera",
    description: "3D modeliranje i dizajn karaktera",
    items: [
      {
        name: "Čovjek iz Srednjeg Vijeka",
        description: "3D modeliranje karaktera",
        images: [
          {
            src: "/3d/3d-medieval-man/1.png",
            alt: "Čovjek iz Srednjeg Vijeka 3D model 1",
          },
          {
            src: "/3d/3d-medieval-man/2.png",
            alt: "Čovjek iz Srednjeg Vijeka 3D model 2",
          },
          {
            src: "/3d/3d-medieval-man/3.png",
            alt: "Čovjek iz Srednjeg Vijeka 3D model 3",
          },
          {
            src: "/3d/3d-medieval-man/4.png",
            alt: "Čovjek iz Srednjeg Vijeka 3D model 4",
          },
          {
            src: "/3d/3d-medieval-man/5.jpg",
            alt: "Čovjek iz Srednjeg Vijeka 3D model 5",
          },
          {
            src: "/3d/3d-medieval-man/6.png",
            alt: "Čovjek iz Srednjeg Vijeka 3D model 6",
          },
          {
            src: "/3d/3d-medieval-man/7.jpg",
            alt: "Čovjek iz Srednjeg Vijeka 3D model 7",
          },
          {
            src: "/3d/3d-medieval-man/8.jpg",
            alt: "Čovjek iz Srednjeg Vijeka 3D model 8",
          },
          {
            src: "/3d/3d-medieval-man/9.png",
            alt: "Čovjek iz Srednjeg Vijeka 3D model 9",
          },
          {
            src: "/3d/3d-medieval-man/10.png",
            alt: "Čovjek iz Srednjeg Vijeka 3D model 10",
          },
          {
            src: "/3d/3d-medieval-man/11.png",
            alt: "Čovjek iz Srednjeg Vijeka 3D model 11",
          },
          {
            src: "/3d/3d-medieval-man/12.png",
            alt: "Čovjek iz Srednjeg Vijeka 3D model 12",
          },
          {
            src: "/3d/3d-medieval-man/13.png",
            alt: "Čovjek iz Srednjeg Vijeka 3D model 13",
          },
          {
            src: "/3d/3d-medieval-man/14.png",
            alt: "Čovjek iz Srednjeg Vijeka 3D model 14",
          },
          {
            src: "/3d/3d-medieval-man/15.png",
            alt: "Čovjek iz Srednjeg Vijeka 3D model 15",
          },
          {
            src: "/3d/3d-medieval-man/16.png",
            alt: "Čovjek iz Srednjeg Vijeka 3D model 16",
          },
        ],
      },
    ],
  },
  "3d-facial-anatomy": {
    number: "10",
    title: "Studija Anatomije Lica",
    category: "3D Umjetnost Karaktera",
    description: "3D anatomske studije i modeliranje karaktera",
    items: [
      {
        name: "Studija Anatomije Lica",
        description: "3D anatomsko modeliranje",
        images: [
          {
            src: "/3d/3d-facial-anatomy/1.png",
            alt: "Anatomija lica 3D model 1",
          },
          {
            src: "/3d/3d-facial-anatomy/2.png",
            alt: "Anatomija lica 3D model 2",
          },
          {
            src: "/3d/3d-facial-anatomy/4.png",
            alt: "Anatomija lica 3D model 4",
          },
          {
            src: "/3d/3d-facial-anatomy/5.png",
            alt: "Anatomija lica 3D model 5",
          },
          {
            src: "/3d/3d-facial-anatomy/6.png",
            alt: "Anatomija lica 3D model 6",
          },
          {
            src: "/3d/3d-facial-anatomy/7.png",
            alt: "Anatomija lica 3D model 7",
          },
          {
            src: "/3d/3d-facial-anatomy/8.png",
            alt: "Anatomija lica 3D model 8",
          },
          {
            src: "/3d/3d-facial-anatomy/9.png",
            alt: "Anatomija lica 3D model 9",
          },
          {
            src: "/3d/3d-facial-anatomy/10.png",
            alt: "Anatomija lica 3D model 10",
          },
          {
            src: "/3d/3d-facial-anatomy/11.png",
            alt: "Anatomija lica 3D model 11",
          },
        ],
      },
    ],
  },
};

// Generate static paths for all categories - Bosnian version
export function getStaticPathsBs() {
  return Object.keys(categoryDataBs).map((id) => ({
    params: { id },
    props: {
      category: categoryDataBs[id],
    },
  }));
}
