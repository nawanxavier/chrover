export interface Category {
  id: string;
  name: string;
  label: string;
  tagline: string;
  image: string;
}

export interface Spec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  badge?: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  strap: string[];
  specs: Spec[];
  collection: string;
  flags: {
    featured?: boolean;
    bestseller?: boolean;
    limited?: boolean;
  };
}

export interface CartItem {
  key: string;
  productId: string;
  slug: string;
  name: string;
  image: string;
  strap: string;
  price: number;
  qty: number;
}