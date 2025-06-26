
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  benefits: string;
  ingredients: string;
  category: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
