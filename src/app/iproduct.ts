export interface IProduct {
  id: number;
  title: string;
  price: number;
  description:  string;
  category:  string | Array<string>;
  image:  string;
  rating: { rate: number; count: number };
}
