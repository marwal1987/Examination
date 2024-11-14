import { CartItemType, MenuItem } from "../types";

const API_BASE = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com";
const API_KEY = import.meta.env.VITE_API_KEY;
const TENANT_ID = import.meta.env.VITE_TENANT_ID;

type MenuResponse = {
  items: MenuItem[];
};

const headers = {
  "Content-Type": "application/json",
  "x-zocom": API_KEY,
};

// Fetch menu items 
export const fetchMenuItems = async (): Promise<MenuItem[]> => {
  const response = await fetch(`${API_BASE}/menu`, { headers });
  if (!response.ok) throw new Error("Failed to fetch menu items");

  const data: MenuResponse = await response.json();
  if (!Array.isArray(data.items)) {
    throw new Error("Unexpected response format");
  }

  return data.items;
};

export const placeOrder = async (
  orderItems: CartItemType[]
): Promise<{ id: string; eta: number }> => {
  const itemIds = orderItems.map((item) => item.id);
  const response = await fetch(`${API_BASE}/${TENANT_ID}/orders`, {
    method: "POST",
    headers,
    body: JSON.stringify({ items: itemIds }),
  });
  if (!response.ok) throw new Error("Failed to place order");

  const data = await response.json();
  const order = data.order;

  // Calculate ETA in minutes
  const orderTimestamp = new Date(order.timestamp).getTime();
  const etaTimestamp = new Date(order.eta).getTime();
  const etaMinutes = Math.round((etaTimestamp - orderTimestamp) / 60000);

  return { id: order.id, eta: etaMinutes  }; // Return order ID and ETA in minutes
};
