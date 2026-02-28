export type ProductType = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  quantity?: number;
};

export type OrderType = {
  user_id?: number;
  address: string;
  delivery: string;
  id: number;
  cart: Pick<ProductType, "name" | "price" | "quantity">[];
  created_at: string;
  name: string;
  price: number;
};