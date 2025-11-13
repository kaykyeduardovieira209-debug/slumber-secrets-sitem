import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24 bg-background">
      <div className="z-10 w-full max-w-2xl items-center justify-center text-center space-y-6">
        <CheckCircle className="mx-auto h-24 w-24 text-green-500" />
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
          Compra Realizada com Sucesso!
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Obrigado por adquirir o Slumber Secrets. Clique no botão abaixo para acessar o conteúdo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/rituals">Acessar Conteúdo</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Voltar para a página inicial</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
