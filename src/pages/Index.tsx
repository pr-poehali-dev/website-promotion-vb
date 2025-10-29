import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    message: ""
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", category: "", message: "" });
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
              <button onClick={() => scrollToSection("results")} className="text-sm hover:text-primary transition-colors">
                Результаты
              </button>
              <button onClick={() => scrollToSection("pricing")} className="text-sm hover:text-primary transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection("about")} className="text-sm hover:text-primary transition-colors">
                О нас
              </button>
              <Button onClick={() => scrollToSection("contact")} size="sm">
                Связаться
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-primary/5 via-white to-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="secondary" className="w-fit text-sm">
                🚀 Топовое агентство по WB
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Выведем ваш товар в ТОП Wildberries
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Увеличим продажи в 3-5 раз за 2 месяца через SEO-оптимизацию, рекламу и аналитику. Работаем с любыми категориями товаров.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-base" onClick={() => scrollToSection("contact")}>
                  Получить аудит бесплатно
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("results")}>
                  Смотреть кейсы
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">4.8</div>
                  <div className="text-sm text-muted-foreground">рейтинг</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">320%</div>
                  <div className="text-sm text-muted-foreground">средний рост</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/6bb1f300-11ba-4362-b33e-5303780e1116/files/8237366d-9c0e-4b3a-91be-1650fdc0b6eb.jpg"
                alt="Продвижение на Wildberries"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Что мы делаем</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Комплексное продвижение на Wildberries от профессиональной команды
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Search",
                title: "SEO-оптимизация",
                description: "Подбираем ключевые слова, оптимизируем карточки товаров и выводим в ТОП выдачи WB",
              },
              {
                icon: "Target",
                title: "Реклама на WB",
                description: "Настраиваем эффективные рекламные кампании с ROI от 300%",
              },
              {
                icon: "Image",
                title: "Карточки товара",
                description: "Создаём продающие описания, инфографику и профессиональные фото",
              },
              {
                icon: "BarChart3",
                title: "Аналитика и отчёты",
                description: "Еженедельные отчёты по продажам, трафику и эффективности рекламы",
              },
              {
                icon: "Users",
                title: "Работа с отзывами",
                description: "Повышаем рейтинг товаров через работу с отзывами и обратной связью",
              },
              {
                icon: "Zap",
                title: "Антикризисное управление",
                description: "Быстро реагируем на изменения алгоритмов WB и действия конкурентов",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 space-y-3">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Результаты клиентов</h2>
            <p className="text-muted-foreground text-lg">
              Реальные цифры роста продаж наших партнёров
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                category: "Электроника", 
                growth: "+385%", 
                revenue: "2.1М ₽/мес",
                period: "За 3 месяца",
                image: "https://cdn.poehali.dev/projects/6bb1f300-11ba-4362-b33e-5303780e1116/files/5194d7a0-b285-4740-a019-2823ddc76862.jpg"
              },
              { 
                category: "Одежда", 
                growth: "+420%", 
                revenue: "1.8М ₽/мес",
                period: "За 2 месяца",
                image: "https://cdn.poehali.dev/projects/6bb1f300-11ba-4362-b33e-5303780e1116/files/1b5e4736-7eff-4403-aed3-0cc02977302c.jpg"
              },
              { 
                category: "Косметика", 
                growth: "+290%", 
                revenue: "3.5М ₽/мес",
                period: "За 4 месяца",
                image: "https://cdn.poehali.dev/projects/6bb1f300-11ba-4362-b33e-5303780e1116/files/7dea1ff5-d486-4d63-95bb-d81dc82247d0.jpg"
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold">{item.category}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className="text-base px-3 py-1">{item.growth}</Badge>
                      <span className="text-sm text-muted-foreground">рост продаж</span>
                    </div>
                    <p className="text-2xl font-bold text-primary">{item.revenue}</p>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-muted-foreground text-lg">
              Прозрачный процесс от аудита до роста продаж
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Аудит",
                description: "Анализируем ваши товары, конкурентов и ниши"
              },
              {
                step: "02",
                title: "Стратегия",
                description: "Составляем план продвижения и согласовываем KPI"
              },
              {
                step: "03",
                title: "Оптимизация",
                description: "Запускаем SEO, рекламу и улучшаем карточки"
              },
              {
                step: "04",
                title: "Рост",
                description: "Масштабируем результаты и увеличиваем продажи"
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Тарифы</h2>
            <p className="text-muted-foreground text-lg">
              Выберите подходящий пакет услуг
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Старт",
                price: "25 000",
                period: "₽/месяц",
                features: [
                  "SEO-оптимизация до 5 карточек",
                  "Базовая настройка рекламы",
                  "Еженедельные отчёты",
                  "Чат поддержка"
                ],
                popular: false
              },
              {
                name: "Профи",
                price: "50 000",
                period: "₽/месяц",
                features: [
                  "SEO-оптимизация до 15 карточек",
                  "Расширенная настройка рекламы",
                  "Создание инфографики",
                  "Работа с отзывами",
                  "Ежедневные отчёты",
                  "Личный менеджер"
                ],
                popular: true
              },
              {
                name: "Максимум",
                price: "100 000",
                period: "₽/месяц",
                features: [
                  "Неограниченное количество карточек",
                  "Полный цикл продвижения",
                  "Профессиональная фотосъёмка",
                  "Антикризисное управление",
                  "Приоритетная поддержка 24/7",
                  "Выделенная команда"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary border-2 shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="px-4 py-1">Популярный</Badge>
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => scrollToSection("contact")}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Почему выбирают нас</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: "Award",
                    title: "Опыт 5+ лет",
                    text: "Работаем с WB с момента его запуска"
                  },
                  {
                    icon: "Users",
                    title: "150+ клиентов",
                    text: "Довольные продавцы во всех категориях"
                  },
                  {
                    icon: "TrendingUp",
                    title: "Гарантия результата",
                    text: "Прописываем KPI в договоре"
                  },
                  {
                    icon: "Shield",
                    title: "Безопасность",
                    text: "Работаем только белыми методами"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Клиенты остаются с нами</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">350%</div>
                <div className="text-sm text-muted-foreground">Средний рост продаж</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">2.5М</div>
                <div className="text-sm text-muted-foreground">Средняя выручка клиента</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка клиентов</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Получите бесплатный аудит</h2>
            <p className="text-muted-foreground text-lg">
              Оставьте заявку и получите анализ ваших товаров на WB в течение 24 часов
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Категория товаров</label>
                  <Input
                    placeholder="Электроника, одежда, косметика..."
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Расскажите о вашем бизнесе</label>
                  <Textarea
                    placeholder="Что продаёте, какие задачи хотите решить..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Получить бесплатный аудит
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary/50 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="TrendingUp" className="text-primary" size={24} />
                <span className="font-bold">WB Продвижение</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональное продвижение товаров на Wildberries
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>SEO-оптимизация</li>
                <li>Реклама на WB</li>
                <li>Карточки товаров</li>
                <li>Аналитика</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Кейсы</li>
                <li>Тарифы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@wb-promo.ru
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2024 WB Продвижение. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
