import type { Locale } from "@/lib/i18n"

export type Product = {
  id: string
  name: string
  meta: string
  price: string
  img: string
}

export type ShopContent = {
  eyebrow: string
  title: string
  intro: string
  addLabel: string
  addedLabel: string
  products: Product[]
  note: string
}

const IMG = {
  oil: "/shop/olive-oil.png",
  almonds: "/shop/almonds.png",
  wine: "/shop/wine.png",
  soap: "/shop/soap.png",
  honey: "/shop/honey.png",
  taralli: "/shop/taralli.png",
}

export const shop: Record<Locale, ShopContent> = {
  en: {
    eyebrow: "The Shop",
    title: "A little of the estate, sent to your table",
    intro:
      "Everything here is grown, pressed or made on the estate, or by neighbours we have known for years. Order a taste of Lama di Luna to keep the valley close, wherever you are.",
    addLabel: "Add",
    addedLabel: "Added",
    products: [
      {
        id: "oil",
        name: "Extra Virgin Olive Oil",
        meta: "Cold-pressed from our organic groves. 500ml tin.",
        price: "€18",
        img: IMG.oil,
      },
      {
        id: "almonds",
        name: "Raw Murgia Almonds",
        meta: "Harvested in late summer, sun-dried. 400g.",
        price: "€12",
        img: IMG.almonds,
      },
      {
        id: "wine",
        name: "Estate Red Wine",
        meta: "Still made on these grounds, unfiltered. 750ml.",
        price: "€22",
        img: IMG.wine,
      },
      {
        id: "soap",
        name: "Olive-Oil Soap",
        meta: "Made with the first pressing and Murgian herbs.",
        price: "€9",
        img: IMG.soap,
      },
      {
        id: "honey",
        name: "Wildflower Honey",
        meta: "From hives in the hills above the masseria. 250g.",
        price: "€11",
        img: IMG.honey,
      },
      {
        id: "taralli",
        name: "Pugliese Taralli",
        meta: "Baked with our olive oil and a little white wine. 300g.",
        price: "€7",
        img: IMG.taralli,
      },
    ],
    note: "This is a preview shop. Orders and secure checkout can be connected to Stripe whenever you are ready to sell online.",
  },
  it: {
    eyebrow: "Lo Shop",
    title: "Un po' della tenuta, portato alla tua tavola",
    intro:
      "Tutto qui è coltivato, spremuto o prodotto in tenuta, o da vicini che conosciamo da anni. Ordina un assaggio di Lama di Luna per tenere vicina la valle, ovunque tu sia.",
    addLabel: "Aggiungi",
    addedLabel: "Aggiunto",
    products: [
      {
        id: "oil",
        name: "Olio Extravergine d'Oliva",
        meta: "Spremuto a freddo dai nostri uliveti biologici. Latta da 500ml.",
        price: "€18",
        img: IMG.oil,
      },
      {
        id: "almonds",
        name: "Mandorle della Murgia",
        meta: "Raccolte a fine estate, essiccate al sole. 400g.",
        price: "€12",
        img: IMG.almonds,
      },
      {
        id: "wine",
        name: "Vino Rosso della Tenuta",
        meta: "Ancora prodotto su queste terre, non filtrato. 750ml.",
        price: "€22",
        img: IMG.wine,
      },
      {
        id: "soap",
        name: "Sapone all'Olio d'Oliva",
        meta: "Fatto con la prima spremitura ed erbe murgiane.",
        price: "€9",
        img: IMG.soap,
      },
      {
        id: "honey",
        name: "Miele Millefiori",
        meta: "Dagli alveari sulle colline sopra la masseria. 250g.",
        price: "€11",
        img: IMG.honey,
      },
      {
        id: "taralli",
        name: "Taralli Pugliesi",
        meta: "Sfornati con il nostro olio e un po' di vino bianco. 300g.",
        price: "€7",
        img: IMG.taralli,
      },
    ],
    note: "Questo è uno shop di anteprima. Ordini e pagamento sicuro possono essere collegati a Stripe quando sarai pronto a vendere online.",
  },
}
