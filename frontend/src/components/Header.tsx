import { Moon, Sun, Menu, ShoppingCart } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCart } from '../hooks/useCart';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onMenuClick: () => void;
  onCartClick: () => void;
}

export default function Header({ onMenuClick, onCartClick }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const { items } = useCart();
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
          
          <div className="flex items-center gap-3">
            <img 
              src="/assets/generated/logo.dim_200x200.png" 
              alt="GlamAI Logo" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              GlamAI Makeup
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onCartClick}
            className="relative"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-pink-500 text-white text-xs flex items-center justify-center font-semibold">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
