'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { ShieldCheck, Star, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  const staircaseImage = PlaceHolderImages.find(p => p.id === 'staircase');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleContactSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/5516992793300?text=${encodeURIComponent(contactMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-24 bg-background">
      <div className="z-10 w-full max-w-3xl items-center justify-between text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
          <span className="text-primary">Slumber Secrets</span> para noites em paz!
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Sua solução para um sono profundo e restaurador.
        </p>
      </div>
      <div className="mt-12 w-full max-w-3xl space-y-8">
        {staircaseImage && (
          <div className="mt-8 flex justify-center">
          <Image
            src={staircaseImage.imageUrl}
            alt={staircaseImage.description}
            width={600}
            height={400}
            data-ai-hint={staircaseImage.imageHint}
            className="rounded-lg shadow-lg"
          />
          </div>
        )}

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-foreground">O que nossos clientes dizem</h2>
          <p className="mt-2 text-muted-foreground">
            Veja como os rituais noturnos transformaram a vida de pessoas como você
          </p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">"O Slumber Secrets mudou minhas noites. Finalmente consigo dormir profundamente e acordar revigorado. Recomendo a todos que sofrem de insônia."</p>
            </CardContent>
            <CardFooter>
              <p className="font-bold text-foreground">Carlos Silva</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">"Estava cética no início, mas depois de uma semana usando os rituais, a diferença é notável. Durmo mais rápido e meu sono é muito mais tranquilo."</p>
            </CardContent>
            <CardFooter>
              <p className="font-bold text-foreground">Mariana Costa</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">"Simplesmente o melhor investimento que fiz para minha saúde. Acordo com mais energia e disposição. Vale cada centavo!"</p>
            </CardContent>
            <CardFooter>
              <p className="font-bold text-foreground">João Pereira</p>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-foreground">Pronto para dormir bem?</h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            adquira o Slumber Secrets agora por um pagamento único e tenha acesso vitalício aos 7 rituais que transformarão suas noites
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 max-w-md mx-auto">
          <Button size="lg" className="w-full font-bold text-lg animate-pulse bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="/payment">Comprar por R$15,50</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full">
            <ShieldCheck className="mr-2 h-5 w-5" />
            Garantia de 30 dias
          </Button>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full mt-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Como vou receber acesso ao Slumber Secrets?</AccordionTrigger>
              <AccordionContent>
                O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções e o link para acessar os 7 rituais noturnos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Os rituais são complicados ou demorados?</AccordionTrigger>
              <AccordionContent>
              Não! Os rituais foram projetados para serem simples, práticos e se encaixarem facilmente na sua rotina noturna. A maioria leva apenas alguns minutos para ser concluída.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>E se não funcionar para mim?</AccordionTrigger>
              <AccordionContent>
              Oferecemos uma garantia incondicional de 30 dias. Se você não sentir uma melhora significativa na qualidade do seu sono, basta nos enviar um e-mail e nós devolveremos 100% do seu dinheiro, sem perguntas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>O pagamento é único?</AccordionTrigger>
              <AccordionContent>
                Sim, o pagamento é único. Você paga apenas uma vez e tem acesso vitalício a todo o material do Slumber Secrets, incluindo futuras atualizações.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-12 w-full max-w-2xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Ou entre em contato</h2>
          </div>
          <form className="mt-8 space-y-4">
            <div>
              <Label htmlFor="name">Seu nome</Label>
              <Input 
                id="name" 
                placeholder="João Silva" 
                value={contactName} 
                onChange={(e) => setContactName(e.target.value)} 
              />
            </div>
            <div>
              <Label htmlFor="email">Seu e-mail</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="joao.silva@email.com" 
                value={contactEmail} 
                onChange={(e) => setContactEmail(e.target.value)} 
              />
            </div>
            <div>
              <Label htmlFor="message">Sua mensagem</Label>
              <Textarea 
                id="message" 
                placeholder="Digite sua dúvida ou mensagem aqui..." 
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
              />
            </div>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white" 
              onClick={handleContactSubmit}>
              <MessageSquare className="mr-2 h-5 w-5" />
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
              }
