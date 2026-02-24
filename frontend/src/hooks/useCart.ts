import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: { id: string; name: string; price: number; image: string }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,

      addItem: (product) => {
        const items = get().items;
        const existingItem = items.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            items: [...items, { ...product, quantity: 1 }],
          });
        }

        // Update total
        const newItems = get().items;
        const newTotal = newItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        set({ total: newTotal });
      },

      removeItem: (id) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        });

        // Update total
        const newItems = get().items;
        const newTotal = newItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        set({ total: newTotal });
      },

      updateQuantity: (id, quantity) => {
        if (quantity < 1) return;

        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        });

        // Update total
        const newItems = get().items;
        const newTotal = newItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        set({ total: newTotal });
      },

      clearCart: () => {
        set({ items: [], total: 0 });
      },
    }),
    {
      name: 'glamai-cart-storage',
    }
  )
);
