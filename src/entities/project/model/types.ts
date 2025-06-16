export interface Category {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  categories: Category[];
}
