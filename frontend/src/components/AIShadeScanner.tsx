import { useState, useRef } from 'react';
import { Upload, Loader2, Sparkles, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export default function AIShadeScanner() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('Please select an image file');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStartScan = async () => {
    if (!selectedImage) {
      toast.error('Please select an image first');
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    // Simulate AI analysis (2.5 seconds)
    // In production, this would call the backend analyzeShadeFromImage method
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // Simulated results - in production, this would come from backend
    const shades = [
      { name: 'Neutral Olive', description: 'Perfect balance of warm and cool undertones with olive depth' },
      { name: 'Warm Beige', description: 'Golden undertones with peachy warmth, ideal for sun-kissed looks' },
      { name: 'Cool Porcelain', description: 'Pink undertones with fair complexion, perfect for rosy finishes' },
      { name: 'Deep Mahogany', description: 'Rich, warm undertones with deep pigmentation' },
      { name: 'Medium Tan', description: 'Balanced neutral-warm undertones with medium depth' },
    ];

    const randomShade = shades[Math.floor(Math.random() * shades.length)];
    setResult(`${randomShade.name}|${randomShade.description}`);
    setIsAnalyzing(false);
    
    toast.success('Analysis complete!', {
      description: 'Your perfect shade has been identified',
    });
  };

  const handleReset = () => {
    setSelectedImage(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const [shadeName, shadeDescription] = result?.split('|') || ['', ''];

  return (
    <div className="space-y-6">
      <Card className="border-2 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5 text-pink-500" />
            Upload Your Photo
          </CardTitle>
          <CardDescription>
            Upload a clear photo of your face in natural lighting for the most accurate shade recommendation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!selectedImage ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-border rounded-xl p-12 text-center cursor-pointer hover:border-pink-500 hover:bg-pink-500/5 transition-all duration-300"
            >
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium mb-2">Click to upload image</p>
              <p className="text-sm text-muted-foreground">
                Supports JPG, PNG, WEBP (Max 10MB)
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden border-2 border-border">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-auto max-h-96 object-contain bg-muted"
                />
              </div>
              
              <div className="flex gap-3">
                <Button
                  onClick={handleStartScan}
                  disabled={isAnalyzing}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold"
                  size="lg"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5 mr-2" />
                      Start Scan
                    </>
                  )}
                </Button>
                
                <Button
                  onClick={handleReset}
                  variant="outline"
                  disabled={isAnalyzing}
                  size="lg"
                >
                  Reset
                </Button>
              </div>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </CardContent>
      </Card>

      {result && (
        <Card className="border-2 border-pink-500/50 bg-gradient-to-br from-pink-500/5 to-purple-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-pink-500" />
              Your Perfect Shade
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-6 rounded-xl bg-card border-2 border-pink-500/30">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-3">
                {shadeName}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {shadeDescription}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Pro Tip:</strong> This shade works best with our Flawless Foundation. 
                Check out our product collection to find your perfect match!
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
