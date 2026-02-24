import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onShopNow: () => void;
}

export default function HeroSection({ onShopNow }: HeroSectionProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.pixabay.com/video/2023/05/02/160632-822893896_large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative h-full container flex items-center px-4">
        <div className="max-w-2xl space-y-6 text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-pink-400" />
            <span className="text-sm font-semibold uppercase tracking-wider text-pink-400">
              AI-Powered Beauty
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Discover Your
            <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Perfect Shade
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-xl">
            Experience the future of makeup with our AI-powered shade scanner. 
            Find your ideal foundation, lipstick, and more with precision technology.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              onClick={onShopNow}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8"
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20"
            >
              Try AI Scanner
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
