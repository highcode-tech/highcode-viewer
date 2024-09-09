import { Feedback } from "@/types/Feedback";

const FeedbackData: Feedback[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "TTTTTTTTTTTTTTTTTT sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/feedback/feedback-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/feedback/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "TTTTTTTTTTTTTTTTTT sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/feedback/feedback-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/feedback/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "TTTTTTTTTTTTTTTTTT sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/feedback/feedback-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/feedback/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default FeedbackData;
