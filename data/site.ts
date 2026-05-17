import type { Language } from "./translations";

export const site = {
  name: "Bistro Sun Hi",
  address: "Erzbergerstraße 2, 39104 Magdeburg",
  phoneHref: "tel:+493910000000",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Erzbergerstra%C3%9Fe%202%2C%2039104%20Magdeburg",
  googleReviewsUrl: "https://maps.app.goo.gl/A2ZUixXMiDCn4Eqh8",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Erzbergerstra%C3%9Fe%202%2C%2039104%20Magdeburg&output=embed",
  facebookUrl: "#",
};

export const hoursByLanguage: Record<Language, Array<{ day: string; time: string }>> = {
  de: [
    { day: "Sonntag", time: "Geschlossen" },
    { day: "Montag", time: "12-20 Uhr" },
    { day: "Dienstag", time: "12-20 Uhr" },
    { day: "Mittwoch", time: "12-20 Uhr" },
    { day: "Donnerstag", time: "12-20 Uhr" },
    { day: "Freitag", time: "12-20 Uhr" },
    { day: "Samstag", time: "12-20 Uhr" },
  ],
  en: [
    { day: "Sunday", time: "Closed" },
    { day: "Monday", time: "12-8 PM" },
    { day: "Tuesday", time: "12-8 PM" },
    { day: "Wednesday", time: "12-8 PM" },
    { day: "Thursday", time: "12-8 PM" },
    { day: "Friday", time: "12-8 PM" },
    { day: "Saturday", time: "12-8 PM" },
  ],
};

export const featuredDishesByLanguage = {
  de: [
    {
      name: "Sommerrollen",
      image: "/images/sommerrollen.png",
      description: "Frische Rollen mit Kräutern, knackigem Gemüse und leichtem Dip.",
    },
    {
      name: "Pho Ga",
      image: "/images/pho-ga.png",
      description: "Warme vietnamesische Nudelsuppe mit Huhn, Kräutern und aromatischer Brühe.",
    },
    {
      name: "Frühlingsrollen",
      image: "/images/spring-rolls.png",
      description: "Knusprige Frühlingsrollen, heiß serviert mit feinem Dip.",
    },
    {
      name: "Sushi",
      image: "/images/sushi.png",
      description: "Frische Sushi-Auswahl für den Besuch vor Ort oder zum Mitnehmen.",
    },
    {
      name: "Pad Thai",
      image: "/images/pad-thai.png",
      description: "Gebratene Nudeln mit Gemüse, Kräutern, Limette und Erdnüssen.",
    },
    {
      name: "Gebratene Nudeln",
      image: "/images/fried-noodles.png",
      description: "Wok-Nudeln mit Gemüse, Kräutern und Sauce.",
    },
    {
      name: "Reisgerichte",
      image: "/images/korean-rice.png",
      description: "Sättigende Reisgerichte mit Gemüse, Saucen und Proteinbeilagen.",
    },
    {
      name: "Koreanische Gerichte",
      image: "/images/korean-rice.png",
      description: "Warme koreanisch inspirierte Bowls und Tellergerichte für die Mittagspause.",
    },
  ],
  en: [
    {
      name: "Summer rolls",
      image: "/images/sommerrollen.png",
      description: "Fresh rolls with herbs, crisp vegetables, and a light dipping sauce.",
    },
    {
      name: "Pho Ga",
      image: "/images/pho-ga.png",
      description: "Warm Vietnamese chicken noodle soup with herbs and aromatic broth.",
    },
    {
      name: "Spring rolls",
      image: "/images/spring-rolls.png",
      description: "Crisp spring rolls served hot with a clean dipping sauce.",
    },
    {
      name: "Sushi",
      image: "/images/sushi.png",
      description: "Fresh sushi selections for dine-in or takeaway.",
    },
    {
      name: "Pad Thai",
      image: "/images/pad-thai.png",
      description: "Stir-fried noodles with vegetables, herbs, lime, and peanuts.",
    },
    {
      name: "Fried noodles",
      image: "/images/fried-noodles.png",
      description: "Wok-style fried noodles with vegetables, herbs, and sauce.",
    },
    {
      name: "Rice dishes",
      image: "/images/korean-rice.png",
      description: "Comforting rice dishes with vegetables, sauces, and protein options.",
    },
    {
      name: "Korean dishes",
      image: "/images/korean-rice.png",
      description: "Warm Korean-inspired bowls and plates for lunch.",
    },
  ],
};

export const galleryImagesByLanguage = {
  de: [
    { src: "/images/sommerrollen.png", alt: "Sommerrollen im Bistro Sun Hi" },
    { src: "/images/spring-rolls.png", alt: "Frühlingsrollen im Bistro Sun Hi" },
    { src: "/images/pho-ga.png", alt: "Pho Ga im Bistro Sun Hi" },
    { src: "/images/sushi.png", alt: "Sushi im Bistro Sun Hi" },
    { src: "/images/pad-thai.png", alt: "Pad Thai im Bistro Sun Hi" },
    { src: "/images/fried-noodles.png", alt: "Gebratene Nudeln im Bistro Sun Hi" },
    { src: "/images/korean-rice.png", alt: "Koreanisches Reisgericht im Bistro Sun Hi" },
  ],
  en: [
    { src: "/images/sommerrollen.png", alt: "Summer rolls at Bistro Sun Hi" },
    { src: "/images/spring-rolls.png", alt: "Spring rolls at Bistro Sun Hi" },
    { src: "/images/pho-ga.png", alt: "Pho Ga at Bistro Sun Hi" },
    { src: "/images/sushi.png", alt: "Sushi at Bistro Sun Hi" },
    { src: "/images/pad-thai.png", alt: "Pad Thai at Bistro Sun Hi" },
    { src: "/images/fried-noodles.png", alt: "Fried noodles at Bistro Sun Hi" },
    { src: "/images/korean-rice.png", alt: "Korean rice dish at Bistro Sun Hi" },
  ],
};

export const reviewsByLanguage = {
  de: [
    {
      name: "Google-Bewertung",
      text: "Frisch zubereitet, freundlich serviert und ideal für eine schnelle Mittagspause in der Innenstadt.",
    },
    {
      name: "Google-Bewertung",
      text: "Gute Auswahl von Sushi bis zu warmen Nudelgerichten. Besonders praktisch zum Mitnehmen.",
    },
    {
      name: "Google-Bewertung",
      text: "Zentrale Lage, faire Portionen und zuverlässiger Geschmack bei jedem Besuch.",
    },
  ],
  en: [
    {
      name: "Google review",
      text: "Freshly prepared, friendly service, and ideal for a quick lunch in the city center.",
    },
    {
      name: "Google review",
      text: "Good variety from sushi to warm noodle dishes. Especially convenient for takeaway.",
    },
    {
      name: "Google review",
      text: "Central location, fair portions, and reliable flavor every time.",
    },
  ],
};
