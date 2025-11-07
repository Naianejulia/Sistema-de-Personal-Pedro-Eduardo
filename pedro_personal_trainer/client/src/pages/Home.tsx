import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Dumbbell, Zap, Heart, TrendingUp, Activity, Menu, X, Instagram } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"online" | "presencial">("online");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const objectives = [
    { icon: Dumbbell, title: "Treino de Academia", color: "from-slate-600 to-slate-700" },
    { icon: TrendingUp, title: "Emagrecimento", color: "from-amber-600 to-amber-700" },
    { icon: Zap, title: "Ganho de Massa", color: "from-rose-600 to-rose-700" },
    { icon: Heart, title: "Ganho Massa Muscular", color: "from-red-600 to-red-700" },
    { icon: Activity, title: "Recuperação de Lesão", color: "from-violet-600 to-violet-700" },
    { icon: TrendingUp, title: "Melhora na Performance", color: "from-emerald-600 to-emerald-700" },
  ];

  const whatsappLinks = {
    online: "https://w.app/wno4jb",
    presencial: "https://w.app/wno4jb",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border/50 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/emblema_novo.png" alt="PE" className="h-12 w-12" />
            <img src="/texto_navbar.png" alt="Pedro Eduardo Personal Trainer" className="h-8 hidden sm:block" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-sm font-medium hover:text-primary transition duration-200">COMO FUNCIONA</a>
            <a href="#objetivos" className="text-sm font-medium hover:text-primary transition duration-200">OBJETIVOS</a>
            <a href="#depoimentos" className="text-sm font-medium hover:text-primary transition duration-200">DEPOIMENTOS</a>
            <a href="#planos" className="text-sm font-medium hover:text-primary transition duration-200">PLANOS</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/_pedroeduard0?igsh=c201ejI2bWhmOGVk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200 transition duration-200"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://w.app/wno4jb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200"
            >
              <MessageCircle size={18} />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-card rounded-lg transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/98 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#como-funciona" className="text-sm font-medium hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>COMO FUNCIONA</a>
              <a href="#objetivos" className="text-sm font-medium hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>OBJETIVOS</a>
              <a href="#depoimentos" className="text-sm font-medium hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>DEPOIMENTOS</a>
              <a href="#planos" className="text-sm font-medium hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>PLANOS</a>
              <a
                href="https://www.instagram.com/_pedroeduard0?igsh=c201ejI2bWhmOGVk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-slate-100 transition w-full justify-center"
              >
                <Instagram size={18} />
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a
                href="https://w.app/wno4jb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition w-full justify-center"
              >
                <MessageCircle size={18} />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900/20 via-background to-slate-900/10 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">

              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block">Performance</span>
                <span className="block">esportiva.</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-500">Estética inteligente.</span>
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                CREF12/PE: 023186-G/PE
              </p>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Transforme seu corpo com consultoria personalizada. Online ou presencial, com acesso à plataforma MFIT para acompanhar seus treinos em tempo real.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#planos" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 shadow-lg hover:shadow-xl transition-all duration-200">
                    Começar Agora
                  </Button>
                </a>
                <a href="https://w.app/wno4jb" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full border-slate-500/30 hover:border-slate-500/60 hover:bg-slate-500/10">
                    <MessageCircle size={18} className="mr-2" />
                    Fale Comigo
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-slate-600/10 rounded-3xl blur-2xl"></div>
              <div className="relative aspect-square md:aspect-square rounded-3xl overflow-hidden border-2 border-slate-500/30 shadow-2xl">
                <img
                  src="/pedro_hero.jpg"
                  alt="Pedro Eduardo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-24 px-4 border-t border-border/50 bg-gradient-to-b from-background to-slate-900/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Online */}
            <Card className="p-8 border-2 border-slate-600/30 hover:border-slate-600/60 transition bg-card/50 backdrop-blur hover:shadow-lg hover:shadow-slate-600/10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center mb-6">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Consultoria Online</h3>
              <p className="text-muted-foreground mb-6">
                Receba treinos personalizados via plataforma MFIT com suporte direto por chat. Ideal para quem tem agenda flexível e quer treinar em qualquer lugar.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span>Treinos personalizados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span>Suporte via chat 24h</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span>Acesso à plataforma MFIT</span>
                </li>
              </ul>
            </Card>

            {/* Presencial */}
            <Card className="p-8 border-2 border-slate-600/30 hover:border-slate-600/60 transition bg-card/50 backdrop-blur hover:shadow-lg hover:shadow-slate-600/10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center mb-6">
                <Dumbbell className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Atendimento Presencial</h3>
              <p className="text-muted-foreground mb-6">
                Treinos ao vivo em Recife com orientação técnica completa. Perfeito para quem quer acompanhamento direto e correção de movimentos.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span>Sessões personalizadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span>Correção em tempo real</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span>Avaliação física completa</span>
                </li>
              </ul>
            </Card>

            {/* MFIT */}
            <Card className="p-8 border-2 border-slate-600/30 hover:border-slate-600/60 transition bg-card/50 backdrop-blur hover:shadow-lg hover:shadow-slate-600/10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center mb-6">
                <Activity className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Plataforma MFIT</h3>
              <p className="text-muted-foreground mb-6">
                Acesso completo à plataforma MFIT para acompanhar seus treinos, progressão e resultados em tempo real.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span>Treinos com vídeos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span>Acompanhamento de progresso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span>Histórico de exercícios</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section id="objetivos" className="py-24 px-4 bg-gradient-to-b from-slate-900/10 to-background border-t border-border/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Para Quais Objetivos?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {objectives.map((obj, idx) => {
              const Icon = obj.icon;
              return (
                <Card
                  key={idx}
                  className={`p-8 border-2 hover:scale-105 transition cursor-pointer bg-gradient-to-br ${obj.color} border-transparent shadow-lg hover:shadow-xl`}
                >
                  <Icon className="text-white mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white">{obj.title}</h3>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-24 px-4 border-t border-border/50 bg-gradient-to-b from-background to-slate-900/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Depoimentos</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border-2 border-slate-500/30 shadow-xl">
              <img
                src="/testimonial_before_after.jpg"
                alt="Antes e Depois"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Card className="p-8 border-2 border-slate-500/30 bg-card/50 backdrop-blur shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-lg">★</span>
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed">
                  "O método do Pedro me ajudou a voltar a correr em apenas 3 meses, mesmo com uma lesão no menisco. A consultoria online foi essencial nesse processo e, além disso, já eliminei 6kg! Profissional incrível!"
                </p>
                <div>
                  <p className="font-bold">Cliente Satisfeito</p>
                  <p className="text-sm text-muted-foreground">Recuperação de Lesão + Emagrecimento</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section id="planos" className="py-24 px-4 bg-gradient-to-b from-slate-900/10 via-background to-background border-t border-border/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Planos e Preços</h2>
          <p className="text-center text-muted-foreground mb-16">
            Escolha a modalidade que melhor se adapta ao seu estilo de vida
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Online */}
            <Card className={`p-8 border-2 transition cursor-pointer ${
              activeTab === "online"
                ? "border-slate-600/60 bg-gradient-to-br from-slate-600/10 to-slate-700/10 shadow-lg shadow-slate-600/10"
                : "border-slate-600/20 hover:border-slate-600/40"
            }`}
            onClick={() => setActiveTab("online")}
            >
              <h3 className="text-2xl font-bold mb-2">Consultoria Online</h3>
              <p className="text-muted-foreground mb-6">Treinos personalizados via MFIT</p>
              <div className="mb-8">
                <p className="text-4xl font-bold mb-2">Sob Consulta</p>
                <p className="text-sm text-muted-foreground">Valores personalizados conforme seu objetivo</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span>Treinos personalizados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span>Acesso à plataforma MFIT</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span>Suporte via chat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span>Avaliação inicial</span>
                </li>
              </ul>
              <a href={whatsappLinks.online} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-slate-700 hover:bg-slate-800 shadow-lg">
                  <MessageCircle size={18} className="mr-2" />
                  Solicitar Informações
                </Button>
              </a>
            </Card>

            {/* Presencial */}
            <Card className={`p-8 border-2 transition cursor-pointer ${
              activeTab === "presencial"
                ? "border-slate-600/60 bg-gradient-to-br from-slate-600/10 to-slate-700/10 shadow-lg shadow-slate-600/10"
                : "border-slate-600/20 hover:border-slate-600/40"
            }`}
            onClick={() => setActiveTab("presencial")}
            >
              <h3 className="text-2xl font-bold mb-2">Atendimento Presencial</h3>
              <p className="text-muted-foreground mb-6">Atendimento em Olinda & Recife</p>
              <div className="mb-8">
                <p className="text-4xl font-bold mb-2">Sob Consulta</p>
                <p className="text-sm text-muted-foreground">Valores personalizados conforme frequência</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span>Sessões personalizadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span>Correção em tempo real</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">✓</span>
                  <span>Acompanhamento próximo</span>
                </li>
              </ul>
              <a href={whatsappLinks.presencial} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-slate-700 hover:bg-slate-800 shadow-lg">
                  <MessageCircle size={18} className="mr-2" />
                  Solicitar Informações
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6"><img src="/logo_naiane.png" alt="Naiane Barbosa - Desenvolvedora Web" className="h-16 object-contain" />
            
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            Site desenvolvido por <a href="#" className="text-slate-300 hover:text-white transition font-semibold">Naiane Barbosa</a> - Desenvolvedora Web
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://w.app/wno4jb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition"
            >
              WhatsApp
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition">
              Como Funciona
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="#planos" className="text-muted-foreground hover:text-foreground transition">
              Planos
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://w.app/wno4jb"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-110 z-40"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
