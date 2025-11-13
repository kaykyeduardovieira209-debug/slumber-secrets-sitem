import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Bed, Wind, Moon, Sun, Leaf, Droplets, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function RitualsPage() {
  const rituals = [
    { title: "Ritual 1: Acalmando a Mente", icon: <Wind className="w-8 h-8 text-primary-foreground" />, description: "Técnicas de respiração profunda para silenciar a mente antes de deitar." },
    { title: "Ritual 2: Desconexão Digital", icon: <Moon className="w-8 h-8 text-primary-foreground" />, description: "Abandone as telas e prepare seu cérebro para um sono reparador." },
    { title: "Ritual 3: Chá do Sono", icon: <Leaf className="w-8 h-8 text-primary-foreground" />, description: "Uma receita de chá com ervas que induzem o relaxamento e o sono." },
    { title: "Ritual 4: Escrita Terapêutica", icon: <Sparkles className="w-8 h-8 text-primary-foreground" />, description: "Libere as preocupações do dia e organize seus pensamentos no papel." },
    { title: "Ritual 5: Banho Relaxante", icon: <Droplets className="w-8 h-8 text-primary-foreground" />, description: "Um banho morno com sais e óleos essenciais para relaxar os músculos." },
    { title: "Ritual 6: Preparando o Santuário", icon: <Bed className="w-8 h-8 text-primary-foreground" />, description: "Como otimizar seu quarto para uma noite de sono perfeita." },
    { title: "Ritual 7: Despertar Suave", icon: <Sun className="w-8 h-8 text-primary-foreground" />, description: "Dicas para começar o dia com calma e energia, preservando a qualidade do sono." },
  ];

  return (
    <div className="relative min-h-screen w-full">
      <Image
        src="https://picsum.photos/seed/nightsky/1920/1080"
        alt="Céu noturno estrelado"
        fill
        className="object-cover -z-10"
        data-ai-hint="night sky"
      />
      <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-24 bg-black/30">
        <div className="z-10 w-full max-w-4xl items-center justify-center text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Os 7 Rituais <span className="text-primary-foreground drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Slumber Secrets</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Seu guia para noites de sono profundas e restauradoras.
          </p>
        </div>

        <div className="mt-12 w-full max-w-5xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rituals.map((ritual, index) => (
            <Card 
              key={index} 
              className="flex flex-col bg-white/10 backdrop-blur-sm border-white/20 text-white transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-105 hover:shadow-2xl"
            >
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                <div className="bg-primary/80 p-3 rounded-full">
                  {ritual.icon}
                </div>
                <CardTitle className="text-lg font-bold text-left text-primary-foreground">{ritual.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-200 text-left">{ritual.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-background">
            <Link href="/">Voltar para a página inicial</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
