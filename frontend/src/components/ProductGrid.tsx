import { PackageSearch } from 'lucide-react';
import ProductCard, { type Product } from './ProductCard';
import { useSearch } from '../hooks/useSearch';

const products: Product[] = [
  {
    id: '1',
    name: 'Flawless Foundation',
    price: 45,
    image: '/assets/generated/foundation.dim_400x400.png',
  },
  {
    id: '2',
    name: 'Glossy Lip Gloss',
    price: 28,
    image: '/assets/generated/lipgloss.dim_400x400.png',
  },
  {
    id: '3',
    name: 'Precision Eyeliner',
    price: 22,
    image: '/assets/generated/eyeliner.dim_400x400.png',
  },
];

export default function ProductGrid() {
  const { searchQuery } = useSearch();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium collection of makeup essentials, carefully curated for every beauty enthusiast.
          </p>
          {searchQuery && (
            <p className="text-sm text-muted-foreground">
              Showing results for{' '}
              <span className="font-semibold text-pink-500">"{searchQuery}"</span>
              {' '}— {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 gap-4 text-muted-foreground">
            <PackageSearch className="h-16 w-16 opacity-40" />
            <p className="text-xl font-semibold">No products found</p>
            <p className="text-sm">
              Try searching for "Foundation", "Lip Gloss", or "Eyeliner"
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
