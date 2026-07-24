import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Pizza, History, Award, Star, ArrowLeft } from "lucide-react";
import logoImg from "@/assets/pereiras-logo.png";

export const Route = createFileRoute("/sobre")({
  component: SobreNos,
});

function SobreNos() {
  return (
    <div className="min-h-screen bg-background animate-fade-in font-sans text-foreground">
      {/* Hero / Cabeçalho */}
      <section className="relative py-16 md:py-20 overflow-hidden border-b border-border/60">
        <div className="container mx-auto px-4 text-center">
          <img
            src={logoImg}
            alt="Pereira's Pizzas"
            className="w-24 h-24 mx-auto mb-6 rounded-full ring-4 ring-primary/40 shadow-xl"
          />
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-4">
            Nossa <span className="gold-text">História</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg">
            Muito mais que uma pizzaria: um legado de sabor artesanal que nasceu no coração do Lago Jacarey e hoje conquista também o Eusébio.
          </p>
        </div>
      </section>

      {/* Seção Sobre / Início */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center max-w-5xl">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
              <History className="text-primary h-7 w-7" /> O Início de Tudo
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
              A Pereira's Pizzas nasceu com o propósito de resgatar o verdadeiro prazer de saborear uma pizza artesanal, preparada com ingredientes selecionados e muita dedicação.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Nossa massa passa por um processo rústico de fermentação lenta (24 horas), o que garante uma textura crocante por fora, macia por dentro e super leve para o organismo.
            </p>
          </div>
          <div className="card-surface p-6 rounded-3xl text-center border border-border">
            <div className="bg-muted/30 w-full aspect-video rounded-2xl flex flex-col items-center justify-center gap-3">
              <Pizza className="h-16 w-16 text-primary" />
              <span className="font-display font-bold text-lg">Massa de Fermentação Lenta</span>
              <span className="text-xs text-muted-foreground px-4">Leveza e crocância em cada fatia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares / Valores */}
      <section className="bg-muted/20 py-16 border-y border-border/60">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="card-surface p-6 rounded-2xl text-center">
              <Heart className="w-10 h-10 mx-auto mb-3 text-ember" />
              <h3 className="font-bold text-lg mb-2">Feito com Amor</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Cada pizza é montada à mão com o carinho que sua família merece.
              </p>
            </div>
            <div className="card-surface p-6 rounded-2xl text-center">
              <Star className="w-10 h-10 mx-auto mb-3 text-primary" />
              <h3 className="font-bold text-lg mb-2">Ingredientes Nobres</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Selecionamos rigorosamente os produtos para garantir o máximo sabor.
              </p>
            </div>
            <div className="card-surface p-6 rounded-2xl text-center">
              <Award className="w-10 h-10 mx-auto mb-3 text-primary" />
              <h3 className="font-bold text-lg mb-2">Tradição & Qualidade</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Reconhecidos por nossos clientes com nota 4.6 nas avaliações do Google.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Botão de Voltar */}
      <div className="py-12 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline font-semibold active:scale-95 transition-transform"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar para o Cardápio
        </Link>
      </div>
    </div>
  );
}