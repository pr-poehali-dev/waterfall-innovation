import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 border-2 border-foreground rounded-sm flex items-center justify-center">
                <span className="text-[10px] font-mono">CL</span>
              </div>
              <span className="font-serif">CleanPro.</span>
            </Link>
            <p className="text-xs font-mono text-muted-foreground">
              ПРОФЕССИОНАЛЬНЫЙ
              <br />
              КЛИНИНГ V2.0
            </p>
            <p className="text-xs font-mono text-muted-foreground mt-4">ПРИНИМАЕМ ЗАЯВКИ 24/7</p>
          </div>

          {/* Directory */}
          <div>
            <h4 className="text-xs font-mono text-muted-foreground mb-4">НАВИГАЦИЯ</h4>
            <ul className="space-y-2">
              {["Услуги", "Тарифы", "Отзывы", "Блог"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-mono text-muted-foreground mb-4">ДОКУМЕНТЫ</h4>
            <ul className="space-y-2">
              {["Политика конфиденциальности", "Условия использования", "Договор оферты", "Реквизиты"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono text-muted-foreground mb-4">КОНТАКТЫ</h4>
            <div className="bg-secondary/50 rounded-xl p-4 font-mono text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">ПН–ВС, 8:00–22:00</span>
              </div>
              <div className="space-y-1">
                <p className="text-primary">+7 (800) 000-00-00</p>
                <p className="text-muted-foreground">Звонок бесплатный</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">2026 CLEANPRO. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
          <p className="text-xs text-muted-foreground">РАБОТАЕМ ПО ВСЕМУ ГОРОДУ.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
