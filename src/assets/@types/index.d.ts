export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: Category;
  tag: Tag;
}

export interface Category {
  id: number;
  title: string;
  slug: string;
  image: string;
}

export interface Tag {
  id: number;
  type: string;
  text: string;
}
