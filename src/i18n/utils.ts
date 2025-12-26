import { languages, defaultLang, showDefaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const pathname = url.pathname;
  const segments = pathname.split("/").filter(Boolean);
  const lang = segments[0];
  if (lang && lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslatedPath(lang: keyof typeof languages) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: string) {
    const langTranslations = translations[lang] as Record<string, string>;
    const defaultTranslations = translations[defaultLang] as Record<
      string,
      string
    >;
    return langTranslations[key] || defaultTranslations[key] || key;
  };
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "hero.greeting": "Hello, I'm",
    "hero.name": "Merjem",
    "hero.description":
      "Graphic designer, illustrator, and painter. I work on brand development and visual solutions across digital and print media. My work includes logos, illustrations, social media content, brochures, catalogs, and editorial design, with a focus on clarity, harmony, and expressiveness.",
    "hero.view_work": "View My Work",
    "hero.lets_talk": "Let's Talk",
    "main_categories.title": "Explore My Work",
    "main_categories.subtitle":
      "Browse through different creative disciplines and discover my portfolio",
    "main_categories.2d-design.title": "2D Design & Illustration",
    "main_categories.2d-design.description":
      "Branding, logos, print media, and digital illustrations that bring ideas to life",
    "main_categories.3d-character.title": "3D & Character Art",
    "main_categories.3d-character.description":
      "Three-dimensional designs, character modeling, and creative 3D visualizations",
    "main_categories.photography.title": "Photography",
    "main_categories.photography.description":
      "Capturing moments and stories through the lens with artistic vision",
    "main_categories.traditional-art.title": "Traditional Art",
    "main_categories.traditional-art.description":
      "Paintings, drawings, and handcrafted artwork in various traditional mediums",
    "main_categories.2d-design.page_description":
      "Explore my work in graphic design, branding, illustrations, and print media. From logos and visual identities to social media content and editorial design.",
    "main_categories.3d-character.page_description":
      "Discover three-dimensional artworks, character designs, and creative 3D visualizations.",
    "main_categories.photography.page_description":
      "A collection of captured moments, stories, and artistic photography.",
    "main_categories.traditional-art.page_description":
      "Original paintings, drawings, and handcrafted artwork created with traditional art mediums.",
    "main_categories.explore": "Explore →",
    "main_category.back_to_home": "Back to Home",
    "main_category.back_to_category": "Back to Category",
    "main_category.coming_soon": "Coming Soon",
    "main_category.coming_soon_description":
      "This section is currently being prepared. Check back soon for new content!",
    "hero.summary_bs":
      "Graphic designer, illustrator, and painter. I work on brand development and visual solutions through digital and print media. I create logos, illustrations, social media content, brochures, catalogs, and editorial design, with a focus on clarity, harmony, and expressiveness.",
    "hero.summary_en":
      "Graphic designer, illustrator, and painter. I work on brand development and visual solutions across digital and print media. My work includes logos, illustrations, social media content, brochures, catalogs, and editorial design, with a focus on clarity, harmony, and expressiveness.",
    "portfolio.featured_work": "Featured Work",
    "portfolio.brand_identity": "Brand Identity",
    "portfolio.social_media": "Social Media",
    "portfolio.print_media": "Print Media",
    "portfolio.travel_catalog": "Travel Catalog",
    "portfolio.professional_brochure": "Professional brochure design",
    "portfolio.complete_brand_system": "Complete brand system",
    "portfolio.creative_campaigns": "Creative campaigns",
    "portfolio.trifold_brochures": "Trifold brochures & flyers",
    "portfolio.category": "Category",
    "portfolio.view_category": "View Category",
    "portfolio.branding.ac_mint": "Branding - AC Mint",
    "portfolio.branding.shams_travel": "Branding - Shams Travel",
    "portfolio.branding.upscale": "Branding - UpScale",
    "portfolio.branding.pumpkin": "Branding - Pumpkin",
    "portfolio.brochures_catalogs": "Brochures and Catalogs",
    "portfolio.visit_cards": "Visit Cards",
    "portfolio.cover_design": "Cover Design",
    "portfolio.print_media_works": "Various Print Media Works",
    "portfolio.social_media_content": "Social Media Content",
    "portfolio.3d.medieval_man": "Medieval Man",
    "portfolio.3d.facial_anatomy": "Study of Facial Anatomy",
    "category.back_to_portfolio": "Back to Portfolio",
    "category.brand_identity": "Brand Identity",
    "category.brand_guidelines": "Brand Guidelines",
    "category.logo_design": "Logo Design",
    "category.visual_identity": "Visual Identity",
    "category.brand_applications": "Brand Applications",
    "category.packaging_design": "Packaging Design",
    "category.brand_style_guide": "Brand Style Guide",
    "category.brand_standards": "Brand Standards",
    "category.image": "image",
    "category.images": "images",
    "footer.lets_work_together": "Let's Work Together",
    "footer.send_email": "Send me an email",
    "footer.copy_email": "Copy email",
    "footer.connect_linkedin": "Connect on LinkedIn",
    "footer.copy_linkedin": "Copy LinkedIn URL",
    "footer.download_cv": "Download my CV",
    "footer.open_cv": "Open CV in new tab",
    "footer.copied": "Copied!",
    "footer.copyright": "Merjem Durakovic. All rights reserved.",
  },
  bs: {
    "nav.home": "Početna",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Kontakt",
    "hero.greeting": "Zdravo, ja sam",
    "hero.name": "Merjem",
    "hero.description":
      "Grafički dizajner, ilustrator i slikar. Bavim se razvojem brendova i vizuelnih rješenja kroz digitalne i štampane medije. Radim logotipe, ilustracije, sadržaj za društvene mreže, brošure, kataloge i urednički dizajn, sa fokusom na jasnoću, sklad i izražajnost.",
    "hero.view_work": "Pogledaj moj rad",
    "hero.lets_talk": "Kontaktiraj me",
    "main_categories.title": "Istražite Moj Rad",
    "main_categories.subtitle":
      "Pregledajte različite kreativne discipline i otkrijte moj portfolio",
    "main_categories.2d-design.title": "2D Dizajn i Ilustracija",
    "main_categories.2d-design.description":
      "Brending, logotipi, štampani mediji i digitalne ilustracije koje oživljavaju ideje",
    "main_categories.3d-character.title": "3D i Umjetnost Likova",
    "main_categories.3d-character.description":
      "Trodimenzionalni dizajni, modeliranje likova i kreativne 3D vizualizacije",
    "main_categories.photography.title": "Fotografija",
    "main_categories.photography.description":
      "Hvatanje trenutaka i priča kroz objektiv sa umjetničkom vizijom",
    "main_categories.traditional-art.title": "Tradicionalna Umjetnost",
    "main_categories.traditional-art.description":
      "Slike, crteži i ručno rađena djela u različitim tradicionalnim medijima",
    "main_categories.2d-design.page_description":
      "Istražite moj rad u grafičkom dizajnu, brendingu, ilustracijama i štampanim medijima. Od logotipa i vizuelnih identiteta do sadržaja za društvene mreže i uredničkog dizajna.",
    "main_categories.3d-character.page_description":
      "Otkrijte trodimenzionalna umjetnička djela, dizajne likova i kreativne 3D vizualizacije.",
    "main_categories.photography.page_description":
      "Kolekcija uhvaćenih trenutaka, priča i umjetničke fotografije.",
    "main_categories.traditional-art.page_description":
      "Originalne slike, crteži i ručno rađena umjetnička djela stvorena tradicionalnim umjetničkim medijima.",
    "main_categories.explore": "Istražite →",
    "main_category.back_to_home": "Nazad na Početnu",
    "main_category.back_to_category": "Nazad na Kategoriju",
    "main_category.coming_soon": "Uskoro",
    "main_category.coming_soon_description":
      "Ova sekcija se trenutno priprema. Uskoro provjerite za novi sadržaj!",
    "portfolio.featured_work": "Istaknuti Rad",
    "portfolio.brand_identity": "Brending",
    "portfolio.social_media": "Društvene Mreže",
    "portfolio.print_media": "Štampani Mediji",
    "portfolio.travel_catalog": "Turistički Katalog",
    "portfolio.professional_brochure": "Profesionalni dizajn brošure",
    "portfolio.complete_brand_system": "Kompletan sistem brenda",
    "portfolio.creative_campaigns": "Kreativne kampanje",
    "portfolio.trifold_brochures": "Trosklopne brošure i letci",
    "portfolio.category": "Kategorija",
    "portfolio.view_category": "Pogledaj Kategoriju",
    "portfolio.branding.ac_mint": "Brending - AC Mint",
    "portfolio.branding.shams_travel": "Brending - Shams Travel",
    "portfolio.branding.upscale": "Brending - UpScale",
    "portfolio.branding.pumpkin": "Brending - Pumpkin",
    "portfolio.brochures_catalogs": "Brošure i Katalozi",
    "portfolio.visit_cards": "Vizit Karte",
    "portfolio.cover_design": "Dizajn Naslovnica",
    "portfolio.print_media_works": "Razni Štampani Mediji",
    "portfolio.social_media_content": "Sadržaj Društvenih Mreža",
    "portfolio.3d.medieval_man": "Čovjek iz Srednjeg Vijeka",
    "portfolio.3d.facial_anatomy": "Studija Anatomije Lica",
    "category.back_to_portfolio": "Nazad na Portfolio",
    "category.brand_identity": "Brending",
    "category.brand_guidelines": "Smernice Brenda",
    "category.logo_design": "Dizajn Logotipa",
    "category.visual_identity": "Vizuelni Identitet",
    "category.brand_applications": "Primjene Brenda",
    "category.packaging_design": "Dizajn Ambalaže",
    "category.brand_style_guide": "Vodič Stila Brenda",
    "category.brand_standards": "Standardi Brenda",
    "category.image": "slika",
    "category.images": "slika",
    "category.images_2_3_4": "slike",
    "category.images_5_plus": "slika",
    "footer.lets_work_together": "Hajde da Radimo Zajedno",
    "footer.send_email": "Pošalji mi email",
    "footer.copy_email": "Kopiraj email",
    "footer.connect_linkedin": "Poveži se na LinkedIn",
    "footer.copy_linkedin": "Kopiraj LinkedIn URL",
    "footer.download_cv": "Preuzmi moj CV",
    "footer.open_cv": "Otvori CV u novom tabu",
    "footer.copied": "Kopirano!",
    "footer.copyright": "Merjem Durakovic. Sva prava zadržana.",
  },
};
