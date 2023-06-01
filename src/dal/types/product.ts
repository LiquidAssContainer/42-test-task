import { Category } from './category';

export type Product = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  category: Category;
  popularity: number;
};
