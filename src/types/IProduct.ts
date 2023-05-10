export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IProductBasket extends IProduct {
  qty?:number;
}

export enum ProductType {
  DEFAULT = "default",
  BASKET = "basket",
}
