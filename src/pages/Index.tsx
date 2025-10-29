import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="TrendingUp" className="text-primary" size={28} />
              <span className="text-xl font-bold">WB Продвижение</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("services")} className="text-sm hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="text-sm hover:text-primary transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection("cases")} className="text-sm hover:text-primary transition-colors">
                Кейсы
              </button>
              <button onClick={() => scrollToSection("pricing")} className="text-sm hover:text-primary transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection("about")} className="text-sm hover:text-primary transition-colors">
                О нас
              </button>
              <Button onClick={() => scrollToSection("contacts")} size="sm">
                Связаться
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="secondary" className="w-fit">
                Эксперты по продвижению на Wildberries
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Увеличим ваши продажи на WB в 3 раза
              </h1>
              <p className="text-lg text-muted-foreground">
                Комплексное продвижение товаров на Wildberries: SEO-оптимизация, таргетированная реклама, глубокая аналитика и профессиональная настройка карточек
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection("contacts")}>
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("cases")}>
                  Смотреть кейсы
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/6bb1f300-11ba-4362-b33e-5303780e1116/files/a7f76898-86ae-4230-9dee-16de77059d89.jpg"
                alt="Продвижение на WB"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">
              Полный спектр услуг для успешного продвижения на маркетплейсе
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Search",
                title: "SEO-оптимизация",
                description: "Вывод карточек в ТОП по ключевым запросам и увеличение органического трафика",
              },
              {
                icon: "Target",
                title: "Таргетированная реклама",
                description: "Настройка эффективных рекламных кампаний с максимальной окупаемостью",
              },
              {
                icon: "BarChart3",
                title: "Аналитика продаж",
                description: "Глубокий анализ данных для принятия взвешенных решений",
              },
              {
                icon: "FileEdit",
                title: "Оптимизация карточек",
                description: "Создание продающих описаний, заголовков и инфографики",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow hover-scale">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground text-lg">
              Наши успешные проекты говорят сами за себя
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Электроника", growth: "+245%", revenue: "12.5М ₽" },
              { category: "Одежда", growth: "+320%", revenue: "8.2М ₽" },
              { category: "Косметика", growth: "+180%", revenue: "15.7М ₽" },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover-scale">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Icon name="ShoppingBag" size={64} className="text-primary opacity-20" />
                </div>
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold">{item.category}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="default">{item.growth}</Badge>
                    <span className="text-sm text-muted-foreground">рост продаж</span>
                  </div>
                  <p className="text-2xl font-bold text-primary">{item.revenue}</p>
                  <p className="text-sm text-muted-foreground">выручка за 3 месяца</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Кейсы</h2>
            <p className="text-muted-foreground text-lg">
              Реальные результаты наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Rocket" className="text-primary" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Магазин спортивной одежды</h3>
                    <p className="text-muted-foreground">Запуск с нуля до 500К в месяц</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-3xl font-bold text-primary">320%</p>
                    <p className="text-sm text-muted-foreground">Рост продаж</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">1.2К</p>
                    <p className="text-sm text-muted-foreground">Заказов/мес</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">45%</p>
                    <p className="text-sm text-muted-foreground">Маржа</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">
                  Разработали комплексную стратегию продвижения, оптимизировали карточки товаров, настроили эффективную рекламу. За 4 месяца клиент вышел на стабильную выручку 500К рублей.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Trophy" className="text-primary" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Производитель косметики</h3>
                    <p className="text-muted-foreground">Масштабирование до 2М выручки</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-3xl font-bold text-primary">180%</p>
                    <p className="text-sm text-muted-foreground">Рост продаж</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">3.5К</p>
                    <p className="text-sm text-muted-foreground">Заказов/мес</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">62%</p>
                    <p className="text-sm text-muted-foreground">Маржа</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">
                  Провели глубокий анализ конкурентов, пересобрали семантическое ядро, запустили multi-кампанию. Результат — выход в ТОП-3 по всем ключевым позициям и рост оборота в 2.8 раза.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Тарифы</h2>
            <p className="text-muted-foreground text-lg">
              Выберите оптимальный план для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Старт",
                price: "29 990",
                features: [
                  "Аудит до 10 карточек",
                  "Базовая SEO-оптимизация",
                  "Настройка 1 рекламной кампании",
                  "Еженедельные отчеты",
                  "Поддержка в чате",
                ],
              },
              {
                name: "Профи",
                price: "59 990",
                popular: true,
                features: [
                  "Аудит до 50 карточек",
                  "Полная SEO-оптимизация",
                  "Настройка 3-5 кампаний",
                  "Глубокая аналитика",
                  "Приоритетная поддержка",
                  "Оптимизация инфографики",
                ],
              },
              {
                name: "Максимум",
                price: "99 990",
                features: [
                  "Безлимитные карточки",
                  "Персональная стратегия",
                  "Неограниченные кампании",
                  "Расширенная аналитика",
                  "Персональный менеджер",
                  "Создание контента",
                  "A/B тестирование",
                ],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative hover-scale ${
                  plan.popular ? "border-primary shadow-lg scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">₽/мес</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => scrollToSection("contacts")}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">О нас</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы — команда профессионалов с опытом продвижения более 500 магазинов на Wildberries. За 5 лет работы помогли нашим клиентам заработать более 300 миллионов рублей.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Успешных проектов</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">5 лет</p>
                  <p className="text-sm text-muted-foreground">На рынке</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">300М+</p>
                  <p className="text-sm text-muted-foreground">Выручка клиентов</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground">Довольных клиентов</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/6bb1f300-11ba-4362-b33e-5303780e1116/files/53ed8ce9-5623-47e1-9749-9689a59dff94.jpg"
                alt="Наша команда"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <a href="tel:+79999999999" className="text-muted-foreground hover:text-primary transition-colors">
                        +7 (999) 999-99-99
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:info@wb-promo.ru" className="text-muted-foreground hover:text-primary transition-colors">
                        info@wb-promo.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Telegram</p>
                      <a href="https://t.me/wbpromo" className="text-muted-foreground hover:text-primary transition-colors">
                        @wbpromo
                      </a>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Ваше сообщение"
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="TrendingUp" className="text-primary" size={24} />
                <span className="font-bold">WB Продвижение</span>
              </div>
              <p className="text-sm text-background/70">
                Профессиональное продвижение на Wildberries
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>SEO-оптимизация</li>
                <li>Таргетированная реклама</li>
                <li>Аналитика</li>
                <li>Оптимизация карточек</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>О нас</li>
                <li>Кейсы</li>
                <li>Блог</li>
                <li>Карьера</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>+7 (999) 999-99-99</li>
                <li>info@wb-promo.ru</li>
                <li>@wbpromo</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/60">
            © 2024 WB Продвижение. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
