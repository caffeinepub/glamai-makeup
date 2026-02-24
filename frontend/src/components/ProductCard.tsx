import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../hooks/useCart';
import { toast } from 'sonner';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleQuickAdd = () => {
    addItem(product);
    toast.success(`${product.name} added to cart!`, {
      description: `$${product.price.toFixed(2)}`,
    });
  };

  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Quick Add Button - Slides in on hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button
            onClick={handleQuickAdd}
            className="w-full rounded-none bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-6"
          >
            <Plus className="h-5 w-5 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
