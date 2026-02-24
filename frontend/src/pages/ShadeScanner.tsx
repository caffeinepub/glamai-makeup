import AIShadeScanner from '../components/AIShadeScanner';
import { Sparkles } from 'lucide-react';

export default function ShadeScanner() {
  return (
    <div className="py-12 px-4">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20">
            <Sparkles className="h-4 w-4 text-pink-500" />
            <span className="text-sm font-semibold text-pink-600 dark:text-pink-400">
              AI Technology
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold">
            AI Shade Scanner
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your photo and let our advanced AI analyze your skin tone to recommend 
            the perfect makeup shades tailored just for you.
          </p>
        </div>

        <AIShadeScanner />

        <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border">
          <h3 className="font-bold text-lg mb-3">How It Works</h3>
          <ol className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="font-bold text-pink-500">1.</span>
              <span>Upload a clear photo of your face in natural lighting</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-pink-500">2.</span>
              <span>Our AI analyzes your skin tone, undertones, and complexion</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-pink-500">3.</span>
              <span>Receive personalized shade recommendations for foundation, lipstick, and more</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-pink-500">4.</span>
              <span>Shop confidently knowing you've found your perfect match</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
