import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import { Sparkles, Shield, Truck } from 'lucide-react';

interface HomeProps {
  onOpenCart: () => void;
}

export default function Home({ onOpenCart }: HomeProps) {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HeroSection onShopNow={scrollToProducts} />
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white mb-2">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl">AI-Powered</h3>
              <p className="text-muted-foreground">
                Advanced AI technology to find your perfect shade match
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white mb-2">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl">Premium Quality</h3>
              <p className="text-muted-foreground">
                Cruelty-free, vegan, and dermatologically tested products
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white mb-2">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick and secure delivery right to your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <div id="products">
        <ProductGrid />
      </div>
    </div>
  );
}
