import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Pizza,
  Bike,
  Store,
  Heart,
  Star,
  MapPin,
  Clock,
  Phone,
  Instagram,
  MessageCircle,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import logoAsset from "@/assets/pereiras_logo.asset.json";
import heroPizza from "@/assets/hero-pizza.jpg";
import pizzaFrango from "@/assets/pizza-frango.jpg";
import pizzaCalabresa from "@/assets/pizza-calabresa.jpg";
import pizzaChocolate from "@/assets/pizza-chocolate.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const ORDER_URL = "https://instadelivery.com.br/PereirasPizzaslagodojacarey";
const WHATSAPP_URL = "https://wa.me/5585999154598";
const INSTAGRAM_URL = "https://www.instagram.com/pereiraspizzaoficial/";

type Category = "salgadas" | "doces" | "fritas" | "bebidas";

const menu: Record<Category, Array<{ name: string; desc: string; price: string; img?: string; tag?: string }>> = {
  salgadas: [
    {
      name: "Frango com Cream Cheese",
      desc: "Frango desfiado suculento com cream cheese cremoso sobre nossa massa artesanal.",
      price: "R$ 54",
      img: pizzaFrango,
      tag: "Mais pedida",
    },
    {
      name: "Calabresa Especial",
      desc: "Calabresa fatiada, cebola roxa, azeitonas pretas e orégano fresco.",
      price: "R$ 49",
      img: pizzaCalabresa,
    },
    {
      name: "Marguerita da Casa",
      desc: "Molho de tomate rústico, mussarela, tomate fresco e manjericão.",
      price: "R$ 46",
    },
    {
      name: "Portuguesa Pereira's",
      desc: "Presunto, ovo, cebola, pimentão, azeitona e nosso queijo especial.",
      price: "R$ 52",
    },
  ],
  doces: [
    {
      name: "Chocolate Cremoso",
      desc: "Massa crocante coberta com chocolate ao leite cremoso e gotas brancas.",
      price: "R$ 42",
      img: pizzaChocolate,
      tag: "Favorita",
    },
    {
      name: "Romeu e Julieta",
      desc: "Goiabada derretida com queijo minas artesanal.",
      price: "R$ 38",
    },
    {
      name: "Prestígio",
      desc: "Chocolate meio amargo com coco fresco ralado.",
      price: "R$ 44",
    },
  ],
  fritas: [
    {
      name: "Pizza Frita Calabresa",
      desc: "Massa frita crocante, molho especial e calabresa artesanal.",
      price: "R$ 32",
    },
    {
      name: "Pizza Frita Quatro Queijos",
      desc: "Mussarela, provolone, parmesão e catupiry na massa frita dourada.",
      price: "R$ 36",
    },
  ],
  bebidas: [
    { name: "Coca-Cola 2L", desc: "Gelada, acompanha qualquer combo.", price: "R$ 14" },
    { name: "Guaraná Antarctica 2L", desc: "O clássico brasileiro geladinho.", price: "R$ 13" },
    { name: "Suco Natural 500ml", desc: "Laranja, maracujá ou abacaxi com hortelã.", price: "R$ 10" },
    { name: "Água Mineral 500ml", desc: "Com ou sem gás.", price: "R$ 5" },
  ],
};

const categories: Array<{ key: Category; label: string }> = [
  { key: "salgadas", label: "Pizzas Salgadas" },
  { key: "doces", label: "Pizzas Doces" },
  { key: "fritas", label: "Pizzas Fritas" },
  { key: "bebidas", label: "Bebidas" },
];

const differentials = [
  { icon: Pizza, title: "Massa Artesanal", desc: "Fermentação natural e molho especial da casa." },
  { icon: Bike, title: "Entrega Rápida", desc: "Delivery ágil e sem contato até sua porta." },
  { icon: Store, title: "Local & Retirada", desc: "Refeição no ambiente ou retirada na porta." },
  { icon: Heart, title: "Ambiente Inclusivo", desc: "Acolhedor para todas as famílias e histórias." },
];

const testimonials = [
  {
    quote: "Pessoal super simpático e atencioso, recomendo, massa incrível, é artesanal.",
    author: "Cliente Google",
  },
  {
    quote: "Preços justos pra uma pizza muito boa! Atendimento ótimo!",
    author: "Cliente Google",
  },
  {
    quote: "Amo comprar pizza com eles, não só em casa mas no espaço deles também.",
    author: "Cliente Google",
  },
];

function LandingPage() {
  const [activeCat, setActiveCat] = useState<Category>("salgadas");
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sabores", label: "Sabores" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#avaliacoes", label: "Avaliações" },
    { href: "#endereco", label: "Endereço" },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Pereira's Pizzas"
              width={44}
              height={44}
              className="h-11 w-11 shrink-0 rounded-full ring-2 ring-primary/60"
            />
            <div className="min-w-0 leading-tight">
              <div className="font-display text-base font-black tracking-tight sm:text-lg">
                Pereira's Pizzas
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground sm:text-[11px]">
                Lago Jacarey
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-gold hidden rounded-full px-5 py-2.5 text-sm md:inline-flex"
            >
              Pedir Agora
            </a>
            <button
              type="button"
              onClick={() => setNavOpen((v) => !v)}
              aria-label="Menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
            >
              {navOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {navOpen && (
          <div className="border-t border-border/60 bg-background/95 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setNavOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-gold mt-2 rounded-full px-5 py-3 text-center text-sm"
              >
                Pedir Agora
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="inicio" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-ember/20 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-[1.05fr_1fr] md:items-center md:py-24">
          <div className="text-center md:text-left">
            <div className="mb-5 inline-flex flex-wrap items-center justify-center gap-2 md:justify-start">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Star className="h-3.5 w-3.5 fill-primary" /> 4.6 no Google · 71+ avaliações
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-semibold text-muted-foreground">
                <Pizza className="h-3.5 w-3.5" /> Massa Artesanal
              </span>
            </div>

            <h1 className="font-display text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl">
              Felicidade em <span className="gold-text">Forma de Pizza</span> 🍕
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg md:mx-0">
              A verdadeira massa artesanal de Fortaleza e Eusébio. Crocante por fora,
              macia por dentro e recheada com ingredientes selecionados.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start">
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-gold inline-flex items-center justify-center rounded-full px-7 py-4 text-base"
              >
                Ver Cardápio & Pedir Online
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-ember inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base"
              >
                <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground md:justify-start">
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" /> Aberto todos os dias · 18h–23h
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="absolute inset-0 -z-10 translate-y-6 rounded-full bg-gradient-to-br from-primary/40 via-ember/30 to-transparent blur-3xl" />
            <img
              src={heroPizza}
              alt="Pizza artesanal Pereira's"
              width={1280}
              height={1280}
              className="relative aspect-square w-full rounded-full object-cover shadow-2xl ring-1 ring-primary/20"
            />
          </div>
        </div>
      </section>

      <section id="diferenciais" className="border-y border-border/60 bg-muted/20 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
              Por que escolher a Pereira's
            </div>
            <h2 className="font-display text-3xl font-black md:text-4xl">
              Sabor artesanal, cuidado em cada fatia
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {differentials.map((d) => (
              <div
                key={d.title}
                className="card-surface group rounded-2xl p-5 transition-transform hover:-translate-y-1 md:p-6"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-ember/20 text-primary">
                  <d.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-base font-bold md:text-lg">{d.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sabores" className="py-14 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 text-center md:mb-12">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
              Cardápio
            </div>
            <h2 className="font-display text-3xl font-black md:text-5xl">
              Sabores <span className="gold-text">em destaque</span>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground md:text-base">
              Uma seleção do que sai quentinho do nosso forno todos os dias.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((c) => {
              const active = activeCat === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setActiveCat(c.key)}
                  className={
                    "rounded-full px-4 py-2 text-sm font-semibold transition-all md:px-5 md:py-2.5 " +
                    (active
                      ? "btn-gold"
                      : "border border-border bg-muted/40 text-muted-foreground hover:text-foreground")
                  }
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {menu[activeCat].map((item) => (
              <article
                key={item.name}
                className="card-surface group flex flex-col overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
              >
                {item.img ? (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {item.tag && (
                      <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary backdrop-blur">
                        {item.tag}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="relative grid aspect-[4/3] place-items-center overflow-hidden bg-gradient-to-br from-muted/40 to-background">
                    <Pizza className="h-16 w-16 text-primary/50" />
                    {item.tag && (
                      <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary backdrop-blur">
                        {item.tag}
                      </span>
                    )}
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold">{item.name}</h3>
                    <span className="shrink-0 rounded-lg bg-primary/15 px-2.5 py-1 text-sm font-bold text-primary">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{item.desc}</p>
                  <a
                    href={ORDER_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-gold mt-5 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm"
                  >
                    Pedir
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="avaliacoes" className="border-y border-border/60 bg-muted/20 py-14 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center md:mb-14">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
              Quem prova, aprova
            </div>
            <h2 className="font-display text-3xl font-black md:text-4xl">
              Nota <span className="gold-text">4.6 no Google</span> com 71+ avaliações
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="card-surface flex h-full flex-col justify-between rounded-2xl p-6"
              >
                <div>
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed text-foreground/90 md:text-base">
                    "{t.quote}"
                  </blockquote>
                </div>
                <figcaption className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  — {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="endereco" className="py-14 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
              Onde nos encontrar
            </div>
            <h2 className="font-display text-3xl font-black md:text-4xl">
              Visite uma de nossas <span className="gold-text">unidades</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="card-surface rounded-2xl p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold">Unidade Lago Jacarey</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Av. Viena Weyne, 380 — Lj 104<br />
                Cambeba, Fortaleza — CE
              </p>
              <a
                href="tel:+5585999154598"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <Phone className="h-4 w-4" /> (85) 99915-4598
              </a>
            </div>

            <div className="card-surface rounded-2xl p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ember/20 text-ember">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold">Unidade Eusébio</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                R. Alameda Verde<br />
                Eusébio — CE
              </p>
              <a
                href="tel:+5585997897279"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <Phone className="h-4 w-4" /> (85) 99789-7279
              </a>
            </div>

            <div className="card-surface rounded-2xl p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold">Horário</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Todos os dias<br />
                <span className="text-foreground">18:00 às 23:00</span>
              </p>
            </div>

            <div className="card-surface rounded-2xl p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ember/20 text-ember">
                  <Pizza className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold">Faixa de preço</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground">R$ 20 – R$ 80</span> por pessoa
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-gold inline-flex items-center justify-center rounded-full px-7 py-4 text-base"
            >
              Pedir no InstaDelivery
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ember inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-background/60 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center gap-6 text-center">
            <img
              src={logoAsset.url}
              alt="Pereira's Pizzas"
              width={72}
              height={72}
              className="rounded-full ring-2 ring-primary/60"
            />
            <div>
              <div className="font-display text-xl font-black">Pereira's Pizzas</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Lago Jacarey · Eusébio
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm font-semibold transition-colors hover:text-primary"
              >
                <Instagram className="h-4 w-4" /> @pereiraspizzaoficial
              </a>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm font-semibold transition-colors hover:text-primary"
              >
                <Pizza className="h-4 w-4" /> InstaDelivery
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm font-semibold transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>

            <p className="max-w-md text-sm text-muted-foreground">
              Feito com <span className="text-ember">♥</span> para nossos clientes.
              Obrigado por fazer parte da nossa história.
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Pereira's Pizzas · Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
