export interface InstagramPost {
  id: number;
  likes: string;
  comments: string;
  image: string;
  link: string;
  caption: string;
  date: string;
}

export const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    likes: "1.2k",
    comments: "45",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
    link: "https://www.instagram.com/p/C1234567890/",
    caption: "#KAMEMUN: Preparándonos para elevar el talento de Lara al siguiente nivel.",
    date: "2 DÍAS"
  },
  {
    id: 2,
    likes: "2.5k",
    comments: "82",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop",
    link: "https://www.instagram.com/p/D2345678901/",
    caption: "Diplomacia y resiliencia en cada palabra. El camino de la tortuga.",
    date: "1 SEMANA"
  },
  {
    id: 3,
    likes: "3.1k",
    comments: "156",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    link: "https://www.instagram.com/p/E3456789012/",
    caption: "¿Estás listo para trascender? Nuestras convocatorias están por llegar.",
    date: "2 SEMANAS"
  }
];
