import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShieldCheck, Copy, ArrowLeft } from 'lucide-react';

export default function PaymentPage() {
  const pixKey = "16 992793300";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24 bg-background">
      <div className="z-10 w-full max-w-md items-center justify-center text-center space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">Pagamento seguro</CardTitle>
            <CardDescription>
              <div className="flex items-center justify-center gap-2 mt-2">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span>Garantia de 30 dias</span>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">Para concluir sua compra de R$15,50, faça um Pix para a chave abaixo:</p>
            <div className="flex items-center justify-center w-full">
              <div className="flex items-center gap-2 rounded-md border bg-muted p-3">
                <span className="font-mono text-lg text-foreground">{pixKey}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">A chave é um número de celular.</p>
            <p className="text-sm text-muted-foreground pt-4">Após o pagamento, volte para a página inicial, utilize o formulário de contato no final da página para nos enviar o comprovante via WhatsApp e receber seu acesso.</p>
            <Button asChild className="w-full">
              <Link href="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Voltar para a Página Inicial
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
