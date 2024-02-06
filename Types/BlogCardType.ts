export type BlogCardProps = {
  id: number;
  tag: string;
  picture: string;
  title: string;
  date: string;
  author: string;
  authorImage: string;
  aboutAuthor: string;
  designation: string;
  fullBlog?: { paragraph: string; bullets?: string[] }[];
};
