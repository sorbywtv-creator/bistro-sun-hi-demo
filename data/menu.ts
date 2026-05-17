import type { Language } from "./translations";

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  highlight?: boolean;
};

export type MenuSection = {
  category: string;
  note?: string;
  items: MenuItem[];
};

export const menuSectionsByLanguage: Record<Language, MenuSection[]> = {
  de: [
    {
      category: "Highlights",
      note: "Auf Basis der vorhandenen Restaurant-Referenzen angelegt. Preise können nach der finalen Menü-Auswertung ersetzt werden.",
      items: [
        {
          name: "Sommerrollen",
          price: "Preis folgt",
          description: "Frische Reispapierrollen mit Kräutern, Gemüse und Dip.",
          highlight: true,
        },
        {
          name: "Frühlingsrollen",
          price: "Preis folgt",
          description: "Knusprige Rollen, ideal als Vorspeise oder Snack zum Mitnehmen.",
          highlight: true,
        },
        {
          name: "Pho Ga",
          price: "Preis folgt",
          description: "Vietnamesische Hühner-Nudelsuppe mit Kräutern und warmer Brühe.",
          highlight: true,
        },
        {
          name: "Pad Thai",
          price: "Preis folgt",
          description: "Gebratene Nudeln mit Gemüse, Limette, Kräutern und Erdnüssen.",
          highlight: true,
        },
      ],
    },
    {
      category: "Vorspeisen",
      items: [
        {
          name: "Sommerrollen",
          price: "Preis folgt",
          description: "Frische Rollen mit Kräutern und leichtem Dip.",
        },
        {
          name: "Frühlingsrollen",
          price: "Preis folgt",
          description: "Goldbraun gebackene Frühlingsrollen, knusprig serviert.",
        },
      ],
    },
    {
      category: "Sushi",
      note: "Sushi-Bezeichnungen und Preise können nach der finalen Auswertung der Menüfotos ergänzt werden.",
      items: [
        {
          name: "Sushi Auswahl",
          price: "Preis folgt",
          description: "Frische Sushi-Auswahl für den Besuch vor Ort oder zum Mitnehmen.",
        },
        {
          name: "Maki / Nigiri / Rolls",
          price: "Preis folgt",
          description: "Details werden aus dem originalen Menüfoto ergänzt.",
        },
      ],
    },
    {
      category: "Vietnamesische Gerichte",
      items: [
        {
          name: "Pho Ga",
          price: "Preis folgt",
          description: "Hühner-Nudelsuppe mit frischen Kräutern.",
        },
        {
          name: "Vietnamesisches Nudelgericht",
          price: "Preis folgt",
          description: "Der genaue Menüname wird nach der finalen Kartenauswertung ergänzt.",
        },
      ],
    },
    {
      category: "Koreanische Gerichte",
      items: [
        {
          name: "Koreanisches Gericht",
          price: "Preis folgt",
          description: "Warmes koreanisch inspiriertes Tellergericht oder Bowl aus der Speisekarte.",
        },
        {
          name: "Koreanisches Reisgericht",
          price: "Preis folgt",
          description: "Der exakte Menütitel wird nach der finalen Kartenauswertung ergänzt.",
        },
      ],
    },
    {
      category: "Nudeln",
      items: [
        {
          name: "Gebratene Nudeln",
          price: "Preis folgt",
          description: "Gebratene Nudeln mit Gemüse und Sauce.",
        },
        {
          name: "Pad Thai",
          price: "Preis folgt",
          description: "Nudeln mit Limette, Kräutern, Gemüse und Erdnüssen.",
        },
      ],
    },
    {
      category: "Reisgerichte",
      items: [
        {
          name: "Reisgericht",
          price: "Preis folgt",
          description: "Reisteller mit Gemüse, Sauce und Proteinoptionen.",
        },
        {
          name: "Reis-Bowl",
          price: "Preis folgt",
          description: "Details werden aus dem originalen Menüfoto ergänzt.",
        },
      ],
    },
    {
      category: "Getränke",
      items: [
        {
          name: "Softdrinks",
          price: "Preis folgt",
          description: "Kalte Getränke für den Besuch vor Ort und zum Mitnehmen.",
        },
        {
          name: "Tee / warme Getränke",
          price: "Preis folgt",
          description: "Die genaue Getränkeliste wird aus dem Menüfoto ergänzt.",
        },
      ],
    },
  ],
  en: [
    {
      category: "Highlights",
      note: "Built from the available restaurant references. Prices can be replaced after final menu extraction.",
      items: [
        {
          name: "Summer rolls",
          price: "Price pending",
          description: "Fresh rice paper rolls with herbs, vegetables, and dipping sauce.",
          highlight: true,
        },
        {
          name: "Spring rolls",
          price: "Price pending",
          description: "Crisp rolls, ideal as a starter or takeaway snack.",
          highlight: true,
        },
        {
          name: "Pho Ga",
          price: "Price pending",
          description: "Vietnamese chicken noodle soup with herbs and warm broth.",
          highlight: true,
        },
        {
          name: "Pad Thai",
          price: "Price pending",
          description: "Stir-fried noodles with vegetables, lime, herbs, and peanuts.",
          highlight: true,
        },
      ],
    },
    {
      category: "Appetizers",
      items: [
        {
          name: "Summer rolls",
          price: "Price pending",
          description: "Fresh rolls with herbs and a light dipping sauce.",
        },
        {
          name: "Spring rolls",
          price: "Price pending",
          description: "Golden spring rolls served crisp.",
        },
      ],
    },
    {
      category: "Sushi",
      note: "Sushi names and prices can be completed after final extraction from the menu photos.",
      items: [
        {
          name: "Sushi selection",
          price: "Price pending",
          description: "Fresh sushi selection for dine-in or takeaway.",
        },
        {
          name: "Maki / Nigiri / Rolls",
          price: "Price pending",
          description: "Details to be completed from the original menu photo.",
        },
      ],
    },
    {
      category: "Vietnamese Dishes",
      items: [
        {
          name: "Pho Ga",
          price: "Price pending",
          description: "Chicken noodle soup with fresh herbs.",
        },
        {
          name: "Vietnamese noodle dish",
          price: "Price pending",
          description: "The exact menu name will be added after the final menu extraction.",
        },
      ],
    },
    {
      category: "Korean Dishes",
      items: [
        {
          name: "Korean dish",
          price: "Price pending",
          description: "Warm Korean-inspired plate or bowl from the restaurant menu.",
        },
        {
          name: "Korean rice dish",
          price: "Price pending",
          description: "The exact menu title will be added after the final menu extraction.",
        },
      ],
    },
    {
      category: "Noodles",
      items: [
        {
          name: "Fried noodles",
          price: "Price pending",
          description: "Stir-fried noodles with vegetables and sauce.",
        },
        {
          name: "Pad Thai",
          price: "Price pending",
          description: "Noodles with lime, herbs, vegetables, and peanuts.",
        },
      ],
    },
    {
      category: "Rice Dishes",
      items: [
        {
          name: "Rice dish",
          price: "Price pending",
          description: "Rice plate with vegetables, sauce, and protein options.",
        },
        {
          name: "Rice bowl",
          price: "Price pending",
          description: "Details to be completed from the original menu photo.",
        },
      ],
    },
    {
      category: "Drinks",
      items: [
        {
          name: "Soft drinks",
          price: "Price pending",
          description: "Cold drinks for dine-in and takeaway.",
        },
        {
          name: "Tea / hot drinks",
          price: "Price pending",
          description: "The exact drink list will be completed from the menu photo.",
        },
      ],
    },
  ],
};
