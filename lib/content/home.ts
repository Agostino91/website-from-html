import type { Locale } from "@/lib/i18n"

type Room = { name: string; desc: string; img: string }
type Partner = { name: string; note?: string }

export type HomeContent = {
  statementTitle: string
  statementBody: string[]
  discover: string
  roomsLabel: string
  rooms: Room[]
  roomsCta: string
  landLabel: string
  videoLabel: string
  landText: string[]
  landCta: string
  landImg: string
  fullPhoto: string
  kitchenLabel: string
  kitchenImg: string
  kitchenText: string[]
  kitchenCta: string
  whereLabel: string
  mapText: string[]
  mapCta: string
  partners: Partner[]
  newsletterText: string
  newsletterPlaceholder: string
  newsletterButton: string
  newsletterConsent: string
}

const IMG = {
  coloni:
    "https://res.cloudinary.com/amenitiz/image/upload/w_1200,q_auto:best,f_auto,c_fill/v1748883380/wmqlr3wb2j77th21ud8s.jpg",
  family:
    "https://res.cloudinary.com/amenitiz/image/upload/w_1200,q_auto:best,f_auto,c_fill/v1748886624/hbchtblkcpiq0wppbbgo.jpg",
  deluxe:
    "https://res.cloudinary.com/amenitiz/image/upload/w_1200,q_auto:best,f_auto,c_fill/v1748887785/uunospsvhbmxd2bhnu27.jpg",
  land: "https://res.cloudinary.com/amenitiz/image/upload/w_1400,q_auto:best,f_auto,c_fill/v1748365479/bao85el3tzzrazwmnjtl.jpg",
  full: "https://res.cloudinary.com/amenitiz/image/upload/w_2400,q_auto:best,f_auto,c_fill/v1679928587/vt7xxd7g2xxn5sqk3mkt.jpg",
  kitchen:
    "https://res.cloudinary.com/amenitiz/image/upload/w_1400,q_auto:best,f_auto,c_fill/v1748888055/nxskbhvgtpuxzfoqavfb.jpg",
}

export const home: Record<Locale, HomeContent> = {
  en: {
    statementTitle: "Experience Puglia's nature, agriculture and history at its most authentic",
    statementBody: [
      "Our 18th century farmhouse or masseria, restored to its original glory, is nestled in a 518-acre estate of all organic olive groves, almond groves, vineyards and wildlands. Stay in our rustic rooms, formerly inhabited by settlers and Mezzadri farmers. Immerse yourself in the tranquility and natural beauty of the sprawling Murgia national park. Languish in our panoramic pool overlooking vast olive fields. Taste our high quality extra virgin olive oil, almonds and local produce at The Veranda restaurant.",
      "Let time stand still at Lama di Luna, our Valley of the Moon.",
    ],
    discover: "Read our story",
    roomsLabel: "Our Rooms",
    rooms: [
      {
        name: "Coloni",
        desc: "Once a settler's dwelling, the Coloni room opens onto the inner courtyard. Fireplace, brass bed from the 1800s, terracotta basin, raw cotton sheets.",
        img: IMG.coloni,
      },
      {
        name: "Family Suite",
        desc: "Spacious quarters for families — solid pine and olive-wood beds, a fireplace for cool evenings, walls painted with the red earth of the surrounding fields.",
        img: IMG.family,
      },
      {
        name: "Suite Deluxe",
        desc: "A king bed, private sauna and a panoramic terrace over the olive groves — for those who arrive intending to forget the world for a while.",
        img: IMG.deluxe,
      },
    ],
    roomsCta: "Discover the rooms",
    landLabel: "Our Land",
    videoLabel: "Watch the film",
    landText: [
      "The estate spans 210 hectares of organic olive groves, almond groves and vineyards — all certified by AIAB-ICEA. The first cold-press oil of the season, the almond harvest in late summer, the wine still made on these grounds.",
      "Hot water and heating come from 48 solar panels. Electricity from 400 photovoltaic panels. The masseria has lived without the grid for nearly two decades — quietly, gratefully, on the energy of the same sun that ripens the olives.",
    ],
    landCta: "The story",
    landImg: IMG.land,
    fullPhoto: IMG.full,
    kitchenLabel: "Our Kitchen",
    kitchenImg: IMG.kitchen,
    kitchenText: [
      "Breakfast arrives slowly, beneath the vaulted ceiling of the old refectory: almond pastries from the village, fresh ricotta from a neighbouring farm, jams pressed from the estate's own fruit, eggs from the courtyard hens, our own olive oil on warm bread.",
      "By arrangement, the kitchen will open in the evening — typical Murgian and Pugliese recipes, simply made with what the estate has given that day.",
    ],
    kitchenCta: "Dining & experiences",
    whereLabel: "Where We Are",
    mapText: [
      "Lama di Luna sits in the heart of the Alta Murgia National Park, in Contrada Lama di Luna near Andria — fifteen minutes from Castel del Monte, fifty-five from Bari airport, an hour from the Adriatic coast.",
      "An ideal base for Castel del Monte, Trani, Matera, Polignano a Mare, Alberobello and the long Pugliese coast — and equally well a place to arrive, settle in, and never leave.",
    ],
    mapCta: "How to reach us",
    partners: [
      { name: "National Geographic" },
      { name: "Stanley Tucci", note: "Searching for Italy" },
      { name: "Lonely Planet" },
      { name: "AIAB · ICEA", note: "Certified organic" },
      { name: "Tripadvisor", note: "Travellers' Choice" },
    ],
    newsletterText: "Subscribe to our newsletter to stay close to the masseria.",
    newsletterPlaceholder: "Email address",
    newsletterButton: "Subscribe",
    newsletterConsent: "I accept the terms & conditions and the privacy policy",
  },
  it: {
    statementTitle: "Vivi la natura, l'agricoltura e la storia della Puglia nella loro forma più autentica",
    statementBody: [
      "La nostra masseria del XVIII secolo, riportata al suo antico splendore, è immersa in una tenuta di 210 ettari di uliveti, mandorleti, vigneti e terre selvagge, tutti biologici. Soggiorna nelle nostre camere rustiche, un tempo abitate da coloni e mezzadri. Immergiti nella tranquillità e nella bellezza naturale dell'immenso Parco Nazionale dell'Alta Murgia. Rilassati nella nostra piscina panoramica affacciata su vasti campi di ulivi. Assapora il nostro olio extravergine d'oliva di alta qualità, le mandorle e i prodotti locali al ristorante The Veranda.",
      "Lascia che il tempo si fermi a Lama di Luna, la nostra Valle della Luna.",
    ],
    discover: "Leggi la nostra storia",
    roomsLabel: "Le Camere",
    rooms: [
      {
        name: "Coloni",
        desc: "Un tempo dimora di coloni, la camera Coloni si apre sul cortile interno. Camino, letto in ottone dell'Ottocento, lavabo in terracotta, lenzuola di cotone grezzo.",
        img: IMG.coloni,
      },
      {
        name: "Family Suite",
        desc: "Ampi spazi per le famiglie — letti in pino massello e legno d'ulivo, un camino per le sere fresche, pareti dipinte con la terra rossa dei campi circostanti.",
        img: IMG.family,
      },
      {
        name: "Suite Deluxe",
        desc: "Un letto king, sauna privata e una terrazza panoramica sugli uliveti — per chi arriva con l'intenzione di dimenticare il mondo per un po'.",
        img: IMG.deluxe,
      },
    ],
    roomsCta: "Scopri le camere",
    landLabel: "La Terra",
    videoLabel: "Guarda il film",
    landText: [
      "La tenuta si estende su 210 ettari di uliveti, mandorleti e vigneti biologici — tutti certificati AIAB-ICEA. Il primo olio spremuto a freddo della stagione, la raccolta delle mandorle a fine estate, il vino ancora prodotto su queste terre.",
      "Acqua calda e riscaldamento arrivano da 48 pannelli solari. L'elettricità da 400 pannelli fotovoltaici. La masseria vive fuori dalla rete da quasi vent'anni — silenziosamente, con gratitudine, grazie all'energia dello stesso sole che matura le olive.",
    ],
    landCta: "La storia",
    landImg: IMG.land,
    fullPhoto: IMG.full,
    kitchenLabel: "La Cucina",
    kitchenImg: IMG.kitchen,
    kitchenText: [
      "La colazione arriva lenta, sotto la volta dell'antico refettorio: dolci alle mandorle del paese, ricotta fresca di una fattoria vicina, marmellate della frutta della tenuta, uova delle galline del cortile, il nostro olio d'oliva sul pane caldo.",
      "Su prenotazione, la cucina si apre la sera — ricette tipiche della Murgia e della Puglia, fatte semplicemente con ciò che la tenuta ha dato quel giorno.",
    ],
    kitchenCta: "Ristorazione & esperienze",
    whereLabel: "Dove Siamo",
    mapText: [
      "Lama di Luna sorge nel cuore del Parco Nazionale dell'Alta Murgia, in Contrada Lama di Luna vicino Andria — quindici minuti da Castel del Monte, cinquantacinque dall'aeroporto di Bari, un'ora dalla costa adriatica.",
      "Una base ideale per Castel del Monte, Trani, Matera, Polignano a Mare, Alberobello e la lunga costa pugliese — e allo stesso modo un luogo dove arrivare, sistemarsi e non andarsene più.",
    ],
    mapCta: "Come raggiungerci",
    partners: [
      { name: "National Geographic" },
      { name: "Stanley Tucci", note: "Searching for Italy" },
      { name: "Lonely Planet" },
      { name: "AIAB · ICEA", note: "Certificato biologico" },
      { name: "Tripadvisor", note: "Travellers' Choice" },
    ],
    newsletterText: "Iscriviti alla nostra newsletter per restare vicino alla masseria.",
    newsletterPlaceholder: "Indirizzo email",
    newsletterButton: "Iscriviti",
    newsletterConsent: "Accetto i termini e le condizioni e la privacy policy",
  },
}
