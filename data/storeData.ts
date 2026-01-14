// src/data/storeData.ts

export const STORE_CONTENT = {
  en: {
    ui: {
      title: "Our Bookstore",
      subtitle: "Discover stories that celebrate African heritage and wisdom.",
      filterAll: "All Books",
      filterKids: "Kids",
      filterAdults: "Adults",
      buyButton: "Add to cart",
      pricePrefix: "$",
    },
    books: [
      {
        id: 1,
        title: "The Winds of Napata",
        author: "Dr. Kheftusa Akhiba",
        price: 24.99,
        category: "Adults",
        image: "/discoverbook1.png",
      },
      {
        id: 2,
        title: "The Legend of the First Rainbow",
        author: "Wakanyi Hoffman",
        price: 18.5,
        category: "Kids",
        image: "/discoverbook2.png",
      },
      {
        id: 3,
        title: "The Lady of the Sea",
        author: "Ioanna Pogiland",
        price: 15.0,
        category: "Kids",
        image: "/discoverbook3.png",
      },
      // Add more English books here...
    ],
  },

  es: {
    ui: {
      title: "Nuestra Librería",
      subtitle:
        "Descubre historias que celebran la herencia y sabiduría africana.",
      filterAll: "Todos",
      filterKids: "Niños",
      filterAdults: "Adultos",
      buyButton: "Añadir al carrito",
      pricePrefix: "€",
    },
    books: [
      {
        id: 1,
        title: "Los Vientos de Napata",
        author: "Dr. Kheftusa Akhiba",
        price: 22.99,
        category: "Adultos",
        image: "/discoverbook1.png",
      },
      {
        id: 2,
        title: "La Leyenda del Primer Arcoíris",
        author: "Wakanyi Hoffman",
        price: 17.5,
        category: "Niños",
        image: "/discoverbook2.png",
      },
      {
        id: 3,
        title: "La Dama del Mar",
        author: "Ioanna Pogiland",
        price: 14.0,
        category: "Niños",
        image: "/discoverbook3.png",
      },
    ],
  },

  fr: {
    ui: {
      title: "Notre Librairie",
      subtitle:
        "Découvrez des histoires célébrant l'héritage et la sagesse africaine.",
      filterAll: "Tous",
      filterKids: "Enfants",
      filterAdults: "Adultes",
      buyButton: "Ajouter au panier",
      pricePrefix: "€",
    },
    books: [
      {
        id: 1,
        title: "Les Vents de Napata",
        author: "Dr. Kheftusa Akhiba",
        price: 22.99,
        category: "Adultes",
        image: "/discoverbook1.png",
      },
      {
        id: 2,
        title: "La Légende du Premier Arc-en-ciel",
        author: "Wakanyi Hoffman",
        price: 17.5,
        category: "Enfants",
        image: "/discoverbook2.png",
      },
      {
        id: 3,
        title: "La Dame de la Mer",
        author: "Ioanna Pogiland",
        price: 14.0,
        category: "Enfants",
        image: "/discoverbook3.png",
      },
    ],
  },
};
