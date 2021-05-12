export interface Restaurant {
  name: string;
  delivery: Delivery;
  menu: Menu[];
  opinions: Opinion[];
  location: string;
}

export interface Menu {
  name: string;
  description: string;
  price: number;
  imagePath: string;
}

export interface Delivery {
  amount: string;
  time: string;
}

export interface Opinion {
  description: string;
  star: number;
}

export interface SelectedDish {
  dish: Menu;
  amount: number;
}
