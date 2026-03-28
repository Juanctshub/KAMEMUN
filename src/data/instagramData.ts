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
    likes: "482",
    comments: "32",
    image: "/images/post1.jpg", 
    link: "https://www.instagram.com/_kamemun/",
    caption: "¡Bienvenidos a la nueva era de la diplomacia larense! 🏛️ KAMEMUN nace como un espacio para el debate de alto nivel y la formación de líderes con resiliencia.",
    date: "1 DÍA"
  },
  {
    id: 2,
    likes: "612",
    comments: "18",
    image: "/images/post2.jpg",
    link: "https://www.instagram.com/_kamemun/",
    caption: "¿Estás listo para el Camino de la Tortuga? 🐢 El proceso de inscripciones para delegados y autoridades académicas está a punto de ser revelado.",
    date: "4 DÍAS"
  },
  {
    id: 3,
    likes: "894",
    comments: "105",
    image: "/images/post3.jpg",
    link: "https://www.instagram.com/_kamemun/",
    caption: "Liderazgo Institucional. Nuestra Secretaría General trabaja incansablemente para garantizar que este modelo supere todas las expectativas académicas del país. ✨",
    date: "1 SEMANA"
  }
];
