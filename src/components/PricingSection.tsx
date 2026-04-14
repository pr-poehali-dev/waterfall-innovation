import Icon from "@/components/ui/icon";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "СТАНДАРТ",
    price: "2 990 ₽",
    description: "Для поддерживающей уборки квартиры.",
    features: [
      "До 50 м² площади",
      "Кухня + санузел + комнаты",
      "Профессиональные средства",
      "Выезд в удобное время",
      "Гарантия результата",
    ],
  },
  {
    name: "КОМФОРТ",
    price: "5 490 ₽",
    description: "Для генеральной уборки и больших квартир.",
    features: [
      "До 100 м² площади",
      "Генеральная уборка",
      "Мытьё окон изнутри",
      "Чистка духовки и холодильника",
      "Приоритетный выезд",
    ],
    popular: true,
  },
  {
    name: "БИЗНЕС",
    price: "от 8 990 ₽",
    description: "Для офисов и коммерческих помещений.",
    features: [
      "От 100 м² площади",
      "Любой тип помещения",
      "Постоянный персональный мастер",
      "Договор обслуживания",
      "Счёт для юридических лиц",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ТАРИФЫ</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4">
            Чисто и прозрачно,
            <br />
            без скрытых платежей
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="bg-[#fffef0] px-3 py-1 rounded shadow-sm rotate-[-2deg] border border-amber-100">
              <span className="text-xs font-mono">БЕСПЛАТНЫЙ_ВЫЕЗД</span>
            </div>
            <p className="text-muted-foreground text-sm">Оценка объёма работ — бесплатно</p>
            <div className="bg-[#fffef0] px-3 py-1 rounded shadow-sm rotate-[2deg] border border-amber-100">
              <span className="text-xs font-mono">ГАРАНТИЯ</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-card border rounded-2xl p-6 relative flex flex-col ${
                tier.popular ? "border-primary shadow-lg" : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-mono px-3 py-1 rounded-full">
                  ПОПУЛЯРНЫЙ
                </div>
              )}

              <div className="mb-6">
                <span className="text-xs font-mono text-muted-foreground">{tier.name}</span>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-serif">{tier.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
              </div>

              <div className="space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-accent flex items-center justify-center">
                      <Icon name="Check" size={10} className="text-accent-foreground" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-full text-sm font-medium transition-colors mt-6 ${
                  tier.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border hover:bg-secondary"
                }`}
              >
                ЗАКАЗАТЬ
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
