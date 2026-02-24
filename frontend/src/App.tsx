import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ShadeScanner from './pages/ShadeScanner';
import MobileMenu from './components/MobileMenu';
import CartDrawer from './components/CartDrawer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'shade-scanner'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navigateTo = (page: 'home' | 'shade-scanner') => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
        <Header 
          onMenuClick={() => setIsMobileMenuOpen(true)}
          onCartClick={() => setIsCartOpen(true)}
        />
        
        <MobileMenu 
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          onNavigate={navigateTo}
          currentPage={currentPage}
        />
        
        <CartDrawer 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
        
        <main className="flex-1">
          {currentPage === 'home' && <Home onOpenCart={() => setIsCartOpen(true)} />}
          {currentPage === 'shade-scanner' && <ShadeScanner />}
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
