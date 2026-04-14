interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: "CLN-0088",
    quote:
      "Заказываю уборку раз в две недели уже полгода. Ребята всегда приходят вовремя, работают аккуратно и внимательно. После них квартира буквально блестит — даже в углах, куда сама никогда не добираюсь.",
    author: "Анна Смирнова",
    role: "ПОСТОЯННЫЙ КЛИЕНТ",
  },
  {
    id: "CLN-2301",
    quote:
      "Обратились после ремонта — всё было покрыто строительной пылью. Команда справилась за один день, хотя я думала, что это займёт неделю. Очень профессионально и без лишних вопросов.",
    author: "Михаил Воронов",
    role: "КЛИЕНТ, ПОСЛЕ РЕМОНТА",
  },
  {
    id: "CLN-7725",
    quote:
      "Использую CleanPro для уборки офиса. Договор на обслуживание — это очень удобно: не нужно каждый раз звонить и договариваться. Счёт на юрлицо оформляют без проблем.",
    author: "Елена Захарова",
    role: "РУКОВОДИТЕЛЬ, ООО «АКТИВ»",
  },
  {
    id: "CLN-0030",
    quote:
      "Средства, которые они используют, абсолютно безопасны — у меня аллергия, и это было принципиально важно. Отдельное спасибо за внимание к деталям: даже за холодильник залезли.",
    author: "Светлана Козлова",
    role: "ПОСТОЯННЫЙ КЛИЕНТ",
  },
  {
    id: "CLN-2134",
    quote: "Быстро, качественно и без лишних слов. Именно то, что нужно занятому человеку. Рекомендую всем.",
    author: "Артём Новиков",
    role: "КЛИЕНТ",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">ОТЗЫВЫ КЛИЕНТОВ</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-md leading-tight">
              Люди, которым нравится возвращаться домой
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            Реальные отзывы наших клиентов.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">REF</span>
                <span className="text-xs font-mono text-primary">{testimonial.id}</span>
                <div className="w-12 h-12 bg-secondary rounded-lg" />
              </div>
              <p className="text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs font-mono text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="w-4 h-4 border border-border rounded flex items-center justify-center">
                  <span className="text-[8px]">-&gt;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {testimonials.slice(3, 4).map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">REF</span>
                <span className="text-xs font-mono text-primary">{testimonial.id}</span>
                <div className="w-12 h-12 bg-secondary rounded-lg" />
              </div>
              <p className="text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs font-mono text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="w-4 h-4 border border-border rounded flex items-center justify-center">
                  <span className="text-[8px]">-&gt;</span>
                </div>
              </div>
            </div>
          ))}

          {/* Join CTA */}
          <div className="bg-secondary/50 border border-dashed border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center mb-3">
              <span className="text-lg">+</span>
            </div>
            <span className="text-sm font-mono text-muted-foreground">ВАШ ОТЗЫВ ЗДЕСЬ</span>
            <p className="text-sm text-muted-foreground mt-1">Станьте частью наших довольных клиентов.</p>
          </div>

          {testimonials.slice(4).map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">REF</span>
                <span className="text-xs font-mono text-primary">{testimonial.id}</span>
                <div className="w-12 h-12 bg-secondary rounded-lg" />
              </div>
              <p className="text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs font-mono text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="w-4 h-4 border border-border rounded flex items-center justify-center">
                  <span className="text-[8px]">-&gt;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
