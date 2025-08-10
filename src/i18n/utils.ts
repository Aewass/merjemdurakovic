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
      "A graphic designer and visual artist crafting purposeful, visually coherent identities. My work spans across brand development, digital and print media, with a refined sense for typographic systems and color dynamics. I create everything from logos and social media content to brochures, catalogs, and editorial design — always with clarity, function, and aesthetic balance in mind.",
    "hero.view_work": "View My Work",
    "hero.lets_talk": "Let's Talk",
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
    "portfolio.branding": "Branding",
    "portfolio.brochures_catalogs": "Brochures and Catalogs",
    "portfolio.visit_cards": "Visit Cards",
    "portfolio.cover_design": "Cover Design",
    "portfolio.print_media_works": "Various Print Media Works",
    "portfolio.social_media_content": "Social Media Content",
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
      "Grafički dizajner i vizuelni umjetnik koji stvara svrhovite, vizuelno koherentne identitete. Moj rad obuhvata razvoj brenda, digitalne i štampane medije, s rafiniranim osjećajem za tipografske sisteme i dinamiku boja. Stvaram sve od logotipa i sadržaja za društvene mreže do brošura, kataloga i uredničkog dizajna — uvijek s jasnoćom, funkcijom i estetskom ravnotežom na umu.",
    "hero.view_work": "Pogledaj Moj Rad",
    "hero.lets_talk": "Hajde da Pričamo",
    "portfolio.featured_work": "Istaknuti Rad",
    "portfolio.brand_identity": "Identitet Brenda",
    "portfolio.social_media": "Društvene Mreže",
    "portfolio.print_media": "Štampani Mediji",
    "portfolio.travel_catalog": "Turistički Katalog",
    "portfolio.professional_brochure": "Profesionalni dizajn brošure",
    "portfolio.complete_brand_system": "Kompletan sistem brenda",
    "portfolio.creative_campaigns": "Kreativne kampanje",
    "portfolio.trifold_brochures": "Trosklopne brošure i letci",
    "portfolio.category": "Kategorija",
    "portfolio.view_category": "Pogledaj Kategoriju",
    "portfolio.branding": "Brending",
    "portfolio.brochures_catalogs": "Brošure i Katalozi",
    "portfolio.visit_cards": "Vizit Karte",
    "portfolio.cover_design": "Dizajn Naslovnica",
    "portfolio.print_media_works": "Razni Štampani Mediji",
    "portfolio.social_media_content": "Sadržaj Društvenih Mreža",
    "category.back_to_portfolio": "Nazad na Portfolio",
    "category.brand_identity": "Identitet Brenda",
    "category.brand_guidelines": "Smernice Brenda",
    "category.logo_design": "Dizajn Logotipa",
    "category.visual_identity": "Vizuelni Identitet",
    "category.brand_applications": "Primjene Brenda",
    "category.packaging_design": "Dizajn Ambalaže",
    "category.brand_style_guide": "Vodič Stila Brenda",
    "category.brand_standards": "Standardi Brenda",
    "category.image": "slika",
    "category.images": "slika",
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
