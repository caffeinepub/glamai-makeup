import ProductCard, { type Product } from './ProductCard';

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
  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium collection of makeup essentials, carefully curated for every beauty enthusiast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
