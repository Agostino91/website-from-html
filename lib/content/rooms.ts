export type RoomCard = {
  name: string
  meta: string
  price: string
  img: string
}

export type RoomsContent = {
  eyebrow: string
  title: string
  intro: string
  guests: string
  price: string
  any: string
  feature: {
    tag: string
    name: string
    meta: string
    cta: string
    img: string
  }
  group1: RoomCard[]
  divider1: string
  group2: RoomCard[]
  divider2: string
  group3: RoomCard[]
  divider3: string
  group4: RoomCard[]
  from: string
  perNight: string
  viewRoom: string
  viewSuite: string
}

const IMG = {
  feature: "https://res.cloudinary.com/amenitiz/image/upload/w_2400,q_auto:best,f_auto,c_fill/v1748887785/uunospsvhbmxd2bhnu27.jpg",
  coloni: "https://res.cloudinary.com/amenitiz/image/upload/w_1200,q_auto:best,f_auto,c_fill/v1748883380/wmqlr3wb2j77th21ud8s.jpg",
  coloniculla: "https://res.cloudinary.com/amenitiz/image/upload/w_1200,q_auto:best,f_auto,c_fill/v1748884208/xgwzffptgm1qkgtcvdui.jpg",
  murgia: "https://res.cloudinary.com/amenitiz/image/upload/w_1200,q_auto:best,f_auto,c_fill/v1748886419/acne2tsiqjmmpf3te2ue.jpg",
  family: "https://res.cloudinary.com/amenitiz/image/upload/w_1400,q_auto:best,f_auto,c_fill/v1748886624/hbchtblkcpiq0wppbbgo.jpg",
  masseriaFamily: "https://res.cloudinary.com/amenitiz/image/upload/w_1400,q_auto:best,f_auto,c_fill/v1748887225/cq1y0jr2zkiplvrdo97q.jpg",
  sauna: "https://res.cloudinary.com/amenitiz/image/upload/w_1200,q_auto:best,f_auto,c_fill/v1679928110/vw8ib8dqkcchw9nqco39.jpg",
  bio: "https://res.cloudinary.com/amenitiz/image/upload/w_1200,q_auto:best,f_auto,c_fill/v1748888083/omou7cxhd8opgelkbeuz.jpg",
  bioEsclusiva: "https://res.cloudinary.com/amenitiz/image/upload/w_1200,q_auto:best,f_auto,c_fill/v1748888055/nxskbhvgtpuxzfoqavfb.jpg",
  olivo: "https://res.cloudinary.com/amenitiz/image/upload/w_1400,q_auto:best,f_auto,c_fill/v1747243212/wj7lc1n5p7gpmqnwredd.jpg",
  mandorlo: "https://res.cloudinary.com/amenitiz/image/upload/w_1400,q_auto:best,f_auto,c_fill/v1748887583/eaukvqvyz6k0vcqpnnz7.jpg",
}

export const rooms: Record<"en" | "it", RoomsContent> = {
  en: {
    eyebrow: "Eleven rooms, restored",
    title: "Our Rooms",
    intro:
      "Our guest rooms were once settlers' dwellings — spacious and bright, all with fireplaces, opening onto the inner courtyard. Beds in solid pine, olive wood or 1800s brass. Raw cotton sheets. Olive-oil soaps. Power from the sun.",
    guests: "Guests",
    price: "Price",
    any: "Any",
    from: "From",
    perNight: "/ night",
    viewRoom: "View room →",
    viewSuite: "View suite →",
    feature: {
      tag: "The signature suite",
      name: "Suite Deluxe Masseria",
      meta: "A king bed below a vaulted ceiling, a private sauna carved into the masseria stone, and a panoramic terrace over the olive groves. From €380 / night.",
      cta: "View suite →",
      img: IMG.feature,
    },
    group1: [
      { name: "Double Coloni", meta: "A settler's chamber with open fireplace, 1800s brass bed and a courtyard view. Sleeps 2.", price: "€220", img: IMG.coloni },
      { name: "Coloniculla", meta: "A smaller settler's room, on request — quietest in the masseria, with a single iron-framed door. Sleeps 2.", price: "€230", img: IMG.coloniculla },
      { name: "Double Murgia", meta: "Named for the national park whose silence belongs to it. North windows, olive-wood bed, terracotta basin. Sleeps 2.", price: "€240", img: IMG.murgia },
    ],
    divider1: "For families & longer stays",
    group2: [
      { name: "Family Suite", meta: "Two connecting rooms with shared bathroom. Solid pine beds, garden access, room for four. Sleeps 4.", price: "€310", img: IMG.family },
      { name: "Masseria Family Suite", meta: "The largest suite — a sitting room, an open fireplace, two bedrooms, a private courtyard nook. Sleeps 4–5.", price: "€380", img: IMG.masseriaFamily },
    ],
    divider2: "Suites with private comforts",
    group3: [
      { name: "Deluxe Suite with Sauna", meta: "A king-bed suite with an in-room sauna and slow-burn fireplace. For winter weeks. Sleeps 2.", price: "€420", img: IMG.sauna },
      { name: "Biomasseria", meta: "A suite in the converted dairy, opening to the olive grove. Stone walls, brass bed, garden door. Sleeps 2–3.", price: "€280", img: IMG.bio },
      { name: "Biomasseria in Esclusiva", meta: "The most private of the suites — its own entrance, garden, and outdoor breakfast nook. Sleeps 2–3.", price: "€450", img: IMG.bioEsclusiva },
    ],
    divider3: "Smaller doubles, deeply quiet",
    group4: [
      { name: "Olivo", meta: "Named for the 500-year-old olive tree it overlooks. Single window, brass bed, fireplace. Sleeps 2.", price: "€220", img: IMG.olivo },
      { name: "Mandorlo", meta: "Named for the almond tree at its window — pink in spring, gold in autumn. Solid pine bed. Sleeps 2.", price: "€230", img: IMG.mandorlo },
    ],
  },
  it: {
    eyebrow: "Undici camere, restaurate",
    title: "Le Camere",
    intro:
      "Le nostre camere erano un tempo dimore dei coloni — spaziose e luminose, tutte con camino, affacciate sulla corte interna. Letti in pino massello, legno d'ulivo o ottone dell'Ottocento. Lenzuola di cotone grezzo. Saponi all'olio d'oliva. Energia dal sole.",
    guests: "Ospiti",
    price: "Prezzo",
    any: "Tutte",
    from: "Da",
    perNight: "/ notte",
    viewRoom: "Vedi camera →",
    viewSuite: "Vedi suite →",
    feature: {
      tag: "La suite d'autore",
      name: "Suite Deluxe Masseria",
      meta: "Un letto king sotto una volta in pietra, una sauna privata scavata nella pietra della masseria e una terrazza panoramica sugli uliveti. Da €380 / notte.",
      cta: "Vedi suite →",
      img: IMG.feature,
    },
    group1: [
      { name: "Double Coloni", meta: "Una camera dei coloni con camino aperto, letto in ottone dell'Ottocento e vista sulla corte. Per 2.", price: "€220", img: IMG.coloni },
      { name: "Coloniculla", meta: "Una camera dei coloni più piccola, su richiesta — la più silenziosa della masseria, con una porta in ferro. Per 2.", price: "€230", img: IMG.coloniculla },
      { name: "Double Murgia", meta: "Chiamata come il parco nazionale il cui silenzio le appartiene. Finestre a nord, letto in ulivo, catino in terracotta. Per 2.", price: "€240", img: IMG.murgia },
    ],
    divider1: "Per famiglie e soggiorni lunghi",
    group2: [
      { name: "Family Suite", meta: "Due camere comunicanti con bagno condiviso. Letti in pino massello, accesso al giardino, spazio per quattro. Per 4.", price: "€310", img: IMG.family },
      { name: "Masseria Family Suite", meta: "La suite più grande — un salotto, un camino aperto, due camere, un angolo privato sulla corte. Per 4–5.", price: "€380", img: IMG.masseriaFamily },
    ],
    divider2: "Suite con comfort privati",
    group3: [
      { name: "Deluxe Suite con Sauna", meta: "Una suite con letto king, sauna in camera e camino a combustione lenta. Per le settimane d'inverno. Per 2.", price: "€420", img: IMG.sauna },
      { name: "Biomasseria", meta: "Una suite nell'antica stalla, affacciata sull'uliveto. Muri in pietra, letto in ottone, porta sul giardino. Per 2–3.", price: "€280", img: IMG.bio },
      { name: "Biomasseria in Esclusiva", meta: "La più privata delle suite — ingresso proprio, giardino e angolo colazione all'aperto. Per 2–3.", price: "€450", img: IMG.bioEsclusiva },
    ],
    divider3: "Doppie più piccole, profondamente quiete",
    group4: [
      { name: "Olivo", meta: "Chiamata come l'ulivo di 500 anni che domina. Finestra singola, letto in ottone, camino. Per 2.", price: "€220", img: IMG.olivo },
      { name: "Mandorlo", meta: "Chiamata come il mandorlo alla sua finestra — rosa in primavera, oro in autunno. Letto in pino massello. Per 2.", price: "€230", img: IMG.mandorlo },
    ],
  },
}
