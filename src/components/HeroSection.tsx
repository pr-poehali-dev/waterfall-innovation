import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1">
              <span>ПРОФЕССИОНАЛЬНЫЙ КЛИНИНГ V2.0</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-balance">
              Чистота, которая
              <br />
              говорит сама за себя.
            </h1>

            <p className="text-muted-foreground text-lg max-w-md">
              Один звонок от вас. Идеальная уборка вашего дома или офиса — в любое удобное время.
            </p>

            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
              Заказать уборку
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative bg-secondary/50 rounded-3xl p-8 border border-border/50">
              {/* Top labels */}
              <div className="flex justify-between text-[10px] font-mono text-muted-foreground mb-4">
                <span>№01 — ИНТЕРФЕЙС_ЗАКАЗА</span>
                <span>БЕЗОПАСНАЯ_ОПЛАТА</span>
              </div>

              {/* Sticky note */}
              <div className="absolute -left-4 top-20 bg-[#fffef0] p-3 rounded shadow-sm rotate-[-3deg] border border-amber-100 w-36">
                <p className="text-xs font-mono text-foreground/80">ЗАМЕТКА</p>
                <p className="text-sm font-serif italic mt-1">«Уборка — в пятницу.»</p>
              </div>

              {/* Checklist mockup */}
              <div className="bg-[#2d4a3e] rounded-2xl p-6 my-6 mx-auto max-w-sm">
                <div className="flex justify-between text-[8px] text-white/70 font-mono mb-2 px-2">
                  <span>ЧЕКЛИСТ УБОРКИ</span>
                  <span>ДАТА_УБОРКИ</span>
                </div>
                <div className="text-[10px] text-white/80 font-mono mb-4 px-2">
                  <p>Объект: Квартира, 3 комнаты</p>
                  <p>Адрес: ул. Ленина, 42</p>
                </div>
                <div className="bg-[#1e3328] rounded-xl p-3 space-y-2">
                  {["Кухня", "Санузел", "Гостиная", "Спальня", "Балкон"].map((room) => (
                    <div key={room} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-[#4a7a5e] flex items-center justify-center">
                        <Icon name="Check" size={10} className="text-white" />
                      </div>
                      <span className="text-[10px] text-white/70 font-mono">{room}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat bubbles */}
              <div className="absolute -right-2 top-32 space-y-2">
                <div className="bg-card border border-border rounded-xl p-3 shadow-sm max-w-[180px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-secondary rounded-full" />
                    <span className="text-xs font-medium">Анна</span>
                    <span className="text-[10px] text-muted-foreground">КЛИЕНТ</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Добрый день,</p>
                </div>

                <div className="bg-card border border-border rounded-xl p-3 shadow-sm max-w-[200px]">
                  <p className="text-xs text-muted-foreground">
                    Мастера приедут завтра в 10:00. Всё готово, ждём вас!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
