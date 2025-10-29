import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Заявка отправлена! Мы свяжемся с вами в течение 30 минут.");
    setFormData({ name: "", phone: "", category: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="TrendingUp" className="text-white" size={20} />
              </div>
              <span className="text-lg font-bold">WB Expert</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("services")} className="text-sm hover:text-primary transition">
                Услуги
              </button>
              <button onClick={() => scrollToSection("cases")} className="text-sm hover:text-primary transition">
                Кейсы
              </button>
              <button onClick={() => scrollToSection("tariffs")} className="text-sm hover:text-primary transition">
                Тарифы
              </button>
              <Button onClick={() => scrollToSection("form")} size="sm">
                Оставить заявку
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="w-fit">🚀 Рост продаж гарантирован</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Увеличим продажи на WB в 5 раз
              </h1>
              <p className="text-lg text-muted-foreground">
                Комплексное продвижение на Wildberries: от аудита до стабильных продаж в топе. Работаем только по результату.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection("form")}>
                  Бесплатная консультация
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("cases")}>
                  Наши кейсы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">×5</div>
                  <div className="text-sm text-muted-foreground">рост продаж</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/6bb1f300-11ba-4362-b33e-5303780e1116/files/21f1f040-d1e8-443e-a5d4-9497bc52f379.jpg"
                alt="Продвижение на WB"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4 sm:px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">
              Всё необходимое для успеха на маркетплейсе
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Search",
                title: "SEO-оптимизация",
                desc: "Выводим карточки в топ по ключевым запросам",
              },
              {
                icon: "Megaphone",
                title: "Реклама WB",
                desc: "Настройка и ведение рекламных кампаний",
              },
              {
                icon: "Image",
                title: "Контент",
                desc: "Инфографика, фото и описания товаров",
              },
              {
                icon: "BarChart",
                title: "Аналитика",
                desc: "Глубокий анализ продаж и конкурентов",
              },
            ].map((service, i) => (
              <Card key={i} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Кейсы клиентов</h2>
            <p className="text-muted-foreground text-lg">
              Реальные результаты за 3 месяца работы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Электроника",
                was: "120 тыс. ₽",
                became: "850 тыс. ₽",
                growth: "+608%",
                img: "https://cdn.poehali.dev/projects/6bb1f300-11ba-4362-b33e-5303780e1116/files/5194d7a0-b285-4740-a019-2823ddc76862.jpg",
              },
              {
                category: "Одежда",
                was: "85 тыс. ₽",
                became: "520 тыс. ₽",
                growth: "+512%",
                img: "https://cdn.poehali.dev/projects/6bb1f300-11ba-4362-b33e-5303780e1116/files/1b5e4736-7eff-4403-aed3-0cc02977302c.jpg",
              },
              {
                category: "Косметика",
                was: "200 тыс. ₽",
                became: "1.2 млн ₽",
                growth: "+500%",
                img: "https://cdn.poehali.dev/projects/6bb1f300-11ba-4362-b33e-5303780e1116/files/7dea1ff5-d486-4d63-95bb-d81dc82247d0.jpg",
              },
            ].map((item, i) => (
              <Card key={i} className="overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-xl">{item.category}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Было:</span>
                      <span className="font-medium">{item.was}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Стало:</span>
                      <span className="font-medium">{item.became}</span>
                    </div>
                  </div>
                  <Badge className="w-full justify-center text-base py-1">{item.growth}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Как мы работаем</h2>
            <p className="text-muted-foreground text-lg">
              Простой и прозрачный процесс
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Аудит", text: "Бесплатный анализ ваших товаров и ниши" },
              { num: "2", title: "План", text: "Составляем стратегию продвижения" },
              { num: "3", title: "Запуск", text: "Оптимизация и запуск рекламы" },
              { num: "4", title: "Рост", text: "Масштабируем и увеличиваем продажи" },
            ].map((step, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center">
                  {step.num}
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Тарифы</h2>
            <p className="text-muted-foreground text-lg">
              Выберите подходящий пакет
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Базовый",
                price: "30 000",
                features: [
                  "До 10 карточек товаров",
                  "SEO-оптимизация",
                  "Настройка рекламы",
                  "Еженедельные отчёты",
                ],
                highlight: false,
              },
              {
                name: "Профессиональный",
                price: "60 000",
                features: [
                  "До 30 карточек товаров",
                  "SEO + продвинутая реклама",
                  "Создание контента",
                  "Работа с отзывами",
                  "Ежедневные отчёты",
                  "Личный менеджер",
                ],
                highlight: true,
              },
              {
                name: "Бизнес",
                price: "120 000",
                features: [
                  "Неограниченно карточек",
                  "Полный комплекс услуг",
                  "Профессиональная съёмка",
                  "Приоритетная поддержка",
                  "Выделенная команда",
                ],
                highlight: false,
              },
            ].map((tariff, i) => (
              <Card
                key={i}
                className={`relative ${
                  tariff.highlight ? "border-primary border-2 shadow-xl scale-105" : ""
                }`}
              >
                {tariff.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge>Хит продаж</Badge>
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">{tariff.name}</h3>
                    <div className="space-y-1">
                      <div className="text-4xl font-bold">{tariff.price}</div>
                      <div className="text-sm text-muted-foreground">₽/месяц</div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {tariff.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={tariff.highlight ? "default" : "outline"}
                    onClick={() => scrollToSection("form")}
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/6bb1f300-11ba-4362-b33e-5303780e1116/files/be1fc379-4f55-4ae4-849b-718ae6dfcb4d.jpg"
                alt="Аналитика"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">Почему мы?</h2>
              <div className="space-y-4">
                {[
                  { icon: "Trophy", title: "5 лет на рынке", text: "Работаем с WB с 2019 года" },
                  { icon: "Users", title: "200+ клиентов", text: "Успешные проекты во всех нишах" },
                  { icon: "Shield", title: "Гарантия", text: "Возврат средств, если нет результата" },
                  { icon: "Headphones", title: "Поддержка", text: "На связи 24/7 в удобном мессенджере" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="form" className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-xl">
          <Card className="border-2">
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold">Получите бесплатный аудит</h2>
                <p className="text-muted-foreground">
                  Оставьте заявку — проанализируем ваши товары и дадим план по увеличению продаж
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Категория товаров на WB"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Получить аудит бесплатно
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary/50 py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-white" size={20} />
                </div>
                <span className="font-bold">WB Expert</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Продвижение на Wildberries с гарантией результата
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>SEO-оптимизация</li>
                <li>Реклама WB</li>
                <li>Контент</li>
                <li>Аналитика</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Кейсы</li>
                <li>Тарифы</li>
                <li>Отзывы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@wbexpert.ru
                </div>
              </div>
            </div>
          </div>
          <div className="border-t pt-6 text-center text-sm text-muted-foreground">
            © 2024 WB Expert. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
