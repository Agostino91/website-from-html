export type Fact = { label: string; value: string }
export type TimelineItem = { time: string; title: string; body: string }
export type IncludedItem = { text: string; not?: boolean }
export type OtherCard = { img: string; name: string; meta: string }

export type OliveHarvestContent = {
  counter: string
  breadcrumbRoot: string
  breadcrumbCurrent: string
  heroEyebrow: string
  title: string
  statementTitle: string
  statementBody: string[]
  facts: Fact[]
  curvedLabel: string
  timeline: TimelineItem[]
  photos: [string, string]
  includedEyebrow: string
  includedTitle: string
  included: IncludedItem[]
  priceLabel: string
  priceAmount: string
  priceUnit: string
  priceNote: string
  bookingEyebrow: string
  bookingTitle: string
  bookingText: string
  bookingCta: string
  otherEyebrow: string
  otherTitle: string
  other: OtherCard[]
}

const P = {
  olive: "https://res.cloudinary.com/amenitiz/image/upload/w_1400,q_auto:best,f_auto,c_fill/v1748888083/omou7cxhd8opgelkbeuz.jpg",
  wine: "https://res.cloudinary.com/amenitiz/image/upload/w_1400,q_auto:best,f_auto,c_fill/v1748365479/bao85el3tzzrazwmnjtl.jpg",
  cooking: "https://res.cloudinary.com/amenitiz/image/upload/w_1000,q_auto:best,f_auto,c_fill/v1748888055/nxskbhvgtpuxzfoqavfb.jpg",
  dawn: "https://res.cloudinary.com/amenitiz/image/upload/w_1000,q_auto:best,f_auto,c_fill/v1679928579/czk5bwys9xduwfefummm.jpg",
  alberobello: "https://res.cloudinary.com/amenitiz/image/upload/w_1000,q_auto:best,f_auto,c_fill/v1747243212/wj7lc1n5p7gpmqnwredd.jpg",
}

export const oliveHarvest: Record<"en" | "it", OliveHarvestContent> = {
  en: {
    counter: "Experience 01 / 08",
    breadcrumbRoot: "Experiences",
    breadcrumbCurrent: "Olive Harvest",
    heroEyebrow: "October – November · estate experience",
    title: "The Olive Harvest",
    statementTitle: "Walk the groves, watch the cold press, taste the first oil of the year",
    statementBody: [
      "Late October to mid-November, the estate's 210 hectares of olive groves come into harvest. Pickers move along the rows from sunrise; nets are spread beneath the trees; crates are filled and driven to the cold-press mill before the day's heat reaches the fruit. The first oil pressed from each day's olives is unfiltered, bright green, faintly bitter — the most honest taste in Pugliese cooking.",
      "Join the harvest for a morning. You walk the groves with Pietro or one of the estate hands. You learn why we pick by hand on these trees, why cold-press matters, why the first oil is poured cloudy. Then breakfast: warm bread, the just-pressed oil, salt, a glass of wine.",
    ],
    facts: [
      { label: "Season", value: "Late Oct – mid Nov" },
      { label: "Duration", value: "4 hours" },
      { label: "Group size", value: "2 – 8 guests" },
      { label: "Language", value: "EN · IT · DE" },
      { label: "Difficulty", value: "Gentle walk" },
      { label: "From", value: "€85 / person" },
    ],
    curvedLabel: "The Morning",
    timeline: [
      { time: "07:30", title: "Coffee in the courtyard", body: "Espresso, almond pastries from the village, a quick brief on what the day's grove will look like. You're given a basket and walking shoes if you didn't bring your own." },
      { time: "08:00", title: "Into the groves", body: "A 15-minute walk through 500-year-old olive trees to the day's harvest section. The hand-picking begins. You'll see traditional Pugliese rakes used to gently drop ripe olives onto nets — never beaten, never machine-shaken." },
      { time: "09:30", title: "The cold press", body: "The first morning's crates are driven to the on-estate mill. You'll watch the olives go in, the paste come out, the centrifuge separate oil from water. Forty-five minutes from grove to oil." },
      { time: "10:30", title: "The first tasting", body: "A breakfast under the loggia: warm focaccia, salt, the just-pressed oil poured over it, a glass of Negroamaro. We discuss what you've tasted — peppery, grassy, almondy — and what tells you it's been pressed within the hour." },
      { time: "11:30", title: "You leave with a bottle", body: "Each guest leaves with a 500ml bottle of the morning's oil, labelled with the day's date. The freshest extra-virgin olive oil you will ever take home." },
    ],
    photos: [P.olive, P.wine],
    includedEyebrow: "Included",
    includedTitle: "What you get",
    included: [
      { text: "Half-day guided morning, sunrise to late morning" },
      { text: "Walk through the historic olive groves with Pietro or the estate manager" },
      { text: "Visit to the on-estate cold-press mill, in season" },
      { text: "Tasting breakfast: focaccia, oil, wine, almond pastries" },
      { text: "A 500ml bottle of the morning's pressed oil to take home" },
      { text: "Photography permitted throughout" },
      { text: "Transport to/from the masseria (we recommend staying with us)", not: true },
      { text: "Lunch (we can arrange separately)", not: true },
    ],
    priceLabel: "Price",
    priceAmount: "€85",
    priceUnit: "per guest",
    priceNote: "Children under 12 free when accompanied by an adult. Minimum 2 guests. Maximum 8 per session for an intimate experience.",
    bookingEyebrow: "October to November only",
    bookingTitle: "Arrange your harvest morning",
    bookingText: "Best paired with a 2- or 3-night stay during the harvest season. Tell us your dates and we'll confirm availability and the most likely picking day.",
    bookingCta: "Get in touch",
    otherEyebrow: "Continue",
    otherTitle: "Other Experiences",
    other: [
      { img: P.cooking, name: "Orecchiette & Focaccia", meta: "Cooking class · half-day, on request" },
      { img: P.dawn, name: "Dawn Walk in the Groves", meta: "Sunrise · 90 minutes" },
      { img: P.alberobello, name: "Alberobello & the Trulli", meta: "Day trip · 1h 10 min drive" },
    ],
  },
  it: {
    counter: "Esperienza 01 / 08",
    breadcrumbRoot: "Esperienze",
    breadcrumbCurrent: "Raccolta delle Olive",
    heroEyebrow: "Ottobre – Novembre · esperienza in masseria",
    title: "La Raccolta delle Olive",
    statementTitle: "Cammina tra gli ulivi, osserva la spremitura a freddo, assaggia il primo olio dell'anno",
    statementBody: [
      "Da fine ottobre a metà novembre, i 210 ettari di uliveti della masseria entrano nel periodo della raccolta. I raccoglitori si muovono lungo i filari dall'alba; le reti si stendono sotto gli alberi; le cassette si riempiono e vengono portate al frantoio a freddo prima che il calore del giorno raggiunga i frutti. Il primo olio spremuto dalle olive di ogni giornata è non filtrato, verde brillante, leggermente amaro — il sapore più sincero della cucina pugliese.",
      "Unisciti alla raccolta per una mattinata. Cammini tra gli ulivi con Pietro o con uno degli uomini della masseria. Impari perché su questi alberi si raccoglie a mano, perché la spremitura a freddo è importante, perché il primo olio si versa torbido. Poi la colazione: pane caldo, l'olio appena spremuto, sale, un bicchiere di vino.",
    ],
    facts: [
      { label: "Stagione", value: "Fine ott – metà nov" },
      { label: "Durata", value: "4 ore" },
      { label: "Gruppo", value: "2 – 8 ospiti" },
      { label: "Lingua", value: "EN · IT · DE" },
      { label: "Difficoltà", value: "Passeggiata leggera" },
      { label: "Da", value: "€85 / persona" },
    ],
    curvedLabel: "La Mattina",
    timeline: [
      { time: "07:30", title: "Caffè nel cortile", body: "Espresso, dolcetti alle mandorle del paese, una breve introduzione su come sarà l'uliveto della giornata. Ti diamo un cesto e scarpe da camminata se non le hai portate." },
      { time: "08:00", title: "Tra gli ulivi", body: "Una passeggiata di 15 minuti tra ulivi di 500 anni fino alla sezione di raccolta del giorno. Inizia la raccolta a mano. Vedrai i tradizionali rastrelli pugliesi usati per far cadere delicatamente le olive mature sulle reti — mai battute, mai scosse a macchina." },
      { time: "09:30", title: "La spremitura a freddo", body: "Le prime cassette del mattino vengono portate al frantoio della masseria. Vedrai entrare le olive, uscire la pasta, la centrifuga separare l'olio dall'acqua. Quarantacinque minuti dall'uliveto all'olio." },
      { time: "10:30", title: "La prima degustazione", body: "Una colazione sotto la loggia: focaccia calda, sale, l'olio appena spremuto versato sopra, un bicchiere di Negroamaro. Parliamo di ciò che hai assaggiato — piccante, erbaceo, di mandorla — e di cosa ti dice che è stato spremuto da meno di un'ora." },
      { time: "11:30", title: "Parti con una bottiglia", body: "Ogni ospite parte con una bottiglia da 500ml dell'olio del mattino, etichettata con la data del giorno. L'olio extravergine più fresco che porterai mai a casa." },
    ],
    photos: [P.olive, P.wine],
    includedEyebrow: "Incluso",
    includedTitle: "Cosa comprende",
    included: [
      { text: "Mattinata guidata di mezza giornata, dall'alba a tarda mattina" },
      { text: "Passeggiata tra gli uliveti storici con Pietro o il responsabile della masseria" },
      { text: "Visita al frantoio a freddo della masseria, in stagione" },
      { text: "Colazione degustazione: focaccia, olio, vino, dolcetti alle mandorle" },
      { text: "Una bottiglia da 500ml dell'olio spremuto del mattino da portare a casa" },
      { text: "Fotografie consentite ovunque" },
      { text: "Trasporto da/per la masseria (consigliamo di soggiornare da noi)", not: true },
      { text: "Pranzo (possiamo organizzarlo separatamente)", not: true },
    ],
    priceLabel: "Prezzo",
    priceAmount: "€85",
    priceUnit: "a ospite",
    priceNote: "Bambini sotto i 12 anni gratis se accompagnati da un adulto. Minimo 2 ospiti. Massimo 8 per sessione per un'esperienza intima.",
    bookingEyebrow: "Solo da ottobre a novembre",
    bookingTitle: "Organizza la tua mattinata di raccolta",
    bookingText: "Ideale in abbinamento a un soggiorno di 2 o 3 notti durante la stagione della raccolta. Dicci le tue date e confermeremo la disponibilità e il giorno di raccolta più probabile.",
    bookingCta: "Contattaci",
    otherEyebrow: "Continua",
    otherTitle: "Altre Esperienze",
    other: [
      { img: P.cooking, name: "Orecchiette e Focaccia", meta: "Corso di cucina · mezza giornata, su richiesta" },
      { img: P.dawn, name: "Passeggiata all'Alba tra gli Ulivi", meta: "Alba · 90 minuti" },
      { img: P.alberobello, name: "Alberobello e i Trulli", meta: "Gita · 1h 10 min di macchina" },
    ],
  },
}
