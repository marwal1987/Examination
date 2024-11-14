// Represents each item in the menu
export type MenuItem = {
  id: number;
  type: "wonton" | "dip" | "drink" | string;
  name: string;
  description: string;
  price: number;
  ingredients?: string[];
};

// Represents each item in the cart, extending MenuItem with quantity
export type CartItemType = MenuItem & {
  quantity: number;
};

export type CartItemProps = {
  item: CartItemType;
};

export type CartContextType = {
  cart: CartItemType[];
  addToCart: (item: MenuItem) => void;
  updateQuantity: (id: number, delta: number) => void;
  clearCart: () => void;
};

export type CartProviderProps = {
  children: React.ReactNode;
};

// Represents the tenant information
export type Tenant = {
  id: string;
  name: string;
};

// Request body when submitting an order (only item IDs are needed)
export type OrderRequest = {
  items: number[]; // List of item IDs
};

// Response after submitting an order
export type OrderResponse = {
  id: string;
  items: MenuItem[];
  orderValue: number;
  eta: number;
  timestamp: string;
  state: "waiting" | "in_progress" | "completed" | string;
};

export type EtaPageState = {
  id: string;
  eta: number;
}