import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.poehali.dev/files/50e75078-2183-4a94-9919-da71cee34ad8.jpg" 
                alt="Magic Group" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-playfair font-semibold">MAGIC GROUP</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'products' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Продукция
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                О компании
              </button>
              <button 
                onClick={() => scrollToSection('production')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'production' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Производство
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'portfolio' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Портфолио
              </button>
              <button 
                onClick={() => scrollToSection('advantages')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'advantages' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Преимущества
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Контакты
              </button>
            </nav>

            <Button onClick={() => scrollToSection('contacts')} className="hidden md:inline-flex">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">
                  Премиальные<br />декоративные<br />коробки
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Создаём упаковочные решения класса люкс для вашего бренда. Индивидуальный подход и безупречное качество.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" onClick={() => scrollToSection('products')}>
                    Каталог продукции
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                    Получить консультацию
                  </Button>
                </div>
              </div>
              <div className="relative h-[500px] animate-fade-in">
                <img 
                  src="https://cdn.poehali.dev/projects/05a98edc-4d4f-4557-b902-00cdae17e2eb/files/751b0038-f95e-48a2-9256-4c99152bd824.jpg"
                  alt="Декоративные коробки"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Каталог продукции</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Широкий ассортимент декоративных коробок для любых нужд вашего бизнеса
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Подарочные коробки', desc: 'Элегантные решения для премиальных подарков', icon: 'Gift' },
                { title: 'Ювелирные боксы', desc: 'Изысканная упаковка для драгоценностей', icon: 'Gem' },
                { title: 'Корпоративная упаковка', desc: 'Фирменные коробки с вашим логотипом', icon: 'Building2' },
                { title: 'Свадебные коробки', desc: 'Торжественная упаковка для особого дня', icon: 'Heart' },
                { title: 'Винная упаковка', desc: 'Премиальные футляры для алкоголя', icon: 'Wine' },
                { title: 'Индивидуальные решения', desc: 'Разработка под ваши требования', icon: 'Lightbulb' }
              ].map((product, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="mb-4">
                    <Icon name={product.icon} size={40} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold mb-2">{product.title}</h3>
                  <p className="text-muted-foreground">{product.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">О компании</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Magic Group — ведущий производитель премиальной упаковки в России. Мы специализируемся на создании декоративных коробок класса люкс для самых требовательных клиентов.
                  </p>
                  <p>
                    Наша команда профессионалов использует только лучшие материалы и современные технологии производства, обеспечивая безупречное качество каждого изделия.
                  </p>
                  <p>
                    За годы работы мы реализовали более 500 проектов для ведущих брендов в различных отраслях — от ювелирной промышленности до элитного алкоголя.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div>
                    <div className="text-4xl font-playfair font-bold mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Лет на рынке</div>
                  </div>
                  <div>
                    <div className="text-4xl font-playfair font-bold mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Реализованных проектов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-playfair font-bold mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Постоянных клиентов</div>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px]">
                <img 
                  src="https://cdn.poehali.dev/projects/05a98edc-4d4f-4557-b902-00cdae17e2eb/files/751b0038-f95e-48a2-9256-4c99152bd824.jpg"
                  alt="О компании"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="production" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Производство</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Современное оборудование и строгий контроль качества на каждом этапе
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Дизайн', desc: 'Разработка концепции и макета' },
                { step: '02', title: 'Материалы', desc: 'Подбор премиальных материалов' },
                { step: '03', title: 'Производство', desc: 'Изготовление на высокоточном оборудовании' },
                { step: '04', title: 'Контроль', desc: 'Проверка качества каждого изделия' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl font-playfair font-bold text-secondary mb-4">{item.step}</div>
                  <h3 className="text-xl font-playfair font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Портфолио</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Примеры наших работ для ведущих брендов
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="relative h-[300px] overflow-hidden mb-4 rounded-lg">
                    <img 
                      src="https://cdn.poehali.dev/projects/05a98edc-4d4f-4557-b902-00cdae17e2eb/files/25e16a96-227c-4303-8d2e-6cfd0a012424.jpg"
                      alt={`Проект ${item}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold mb-1">Проект #{item}</h3>
                  <p className="text-sm text-muted-foreground">Премиальная упаковка</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="advantages" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Наши преимущества</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Почему ведущие бренды выбирают Magic Group
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: 'Award', title: 'Премиальное качество', desc: 'Используем только лучшие материалы' },
                { icon: 'Zap', title: 'Быстрое производство', desc: 'Сроки от 7 дней' },
                { icon: 'Palette', title: 'Индивидуальный дизайн', desc: 'Разработка под ваш бренд' },
                { icon: 'Shield', title: 'Гарантия качества', desc: 'Полный контроль производства' }
              ].map((advantage, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <Icon name={advantage.icon} size={48} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24 bg-secondary text-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Свяжитесь с нами</h2>
                <p className="text-muted-foreground mb-8">
                  Готовы обсудить ваш проект? Оставьте заявку, и наш менеджер свяжется с вами в течение часа.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={24} />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={24} />
                    <span>info@magicgroup.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={24} />
                    <span>Москва, ул. Производственная, 25</span>
                  </div>
                </div>
              </div>

              <Card className="p-8">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="example@mail.ru"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Расскажите о вашем проекте"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-foreground py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="https://cdn.poehali.dev/files/50e75078-2183-4a94-9919-da71cee34ad8.jpg" 
                alt="Magic Group" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-playfair font-semibold">MAGIC GROUP</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Magic Group. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;