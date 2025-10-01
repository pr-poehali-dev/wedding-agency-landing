import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Свадебное Агентство</h1>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#hosts" className="hover:text-primary transition-colors">Ведущие</a>
            <a href="#promo" className="hover:text-primary transition-colors">Акции</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:block">Консультация</Button>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Создадим свадьбу вашей мечты
              </h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Превратим ваш особенный день в незабываемую сказку. Профессиональная организация свадеб под ключ с любовью к деталям.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Забронировать дату
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/2e208094-6434-4771-8f40-d922525af968.jpg" 
                alt="Счастливая свадебная пара"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">500+ свадеб</h3>
                <p className="text-muted-foreground">Организовали незабываемые торжества для сотен пар</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">20+ ведущих</h3>
                <p className="text-muted-foreground">Профессиональные ведущие с опытом более 5 лет</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Star" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">100% радости</h3>
                <p className="text-muted-foreground">Все наши клиенты рекомендуют нас друзьям</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наше Портфолио</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/7e8cd4c5-4b72-4b1a-85f9-3654643804a3.jpg"
                    alt={`Свадьба ${item}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg">Романтическая свадьба</h3>
                      <p className="text-sm">150 гостей • Загородный клуб</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="hosts" className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши Ведущие</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Александра Петрова", experience: "8 лет опыта", specialty: "Классические церемонии" },
              { name: "Дмитрий Соколов", experience: "10 лет опыта", specialty: "Современные свадьбы" },
              { name: "Елена Иванова", experience: "6 лет опыта", specialty: "Тематические торжества" }
            ].map((host, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <img 
                    src="/img/a5bc0af8-f643-423a-8aad-0cd7373fb7bf.jpg"
                    alt={host.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">{host.name}</h3>
                  <p className="text-primary font-semibold mb-2">{host.experience}</p>
                  <p className="text-muted-foreground">{host.specialty}</p>
                  <Button className="w-full mt-4" variant="outline">
                    <Icon name="MessageCircle" className="mr-2" size={18} />
                    Связаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="promo" className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Специальные Предложения</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-primary hover:shadow-2xl transition-shadow">
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-destructive">Хит сезона</Badge>
                <h3 className="text-3xl font-bold mb-4">Свадьба под ключ</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">299 990₽</span>
                  <span className="text-xl text-muted-foreground line-through">399 990₽</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Профессиональный ведущий</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Декор и оформление зала</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Координация в день свадьбы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Свадебная полиграфия</span>
                  </li>
                </ul>
                <Button className="w-full" size="lg">
                  Забронировать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow">
              <CardContent className="pt-6">
                <Badge className="mb-4">Скидка 15%</Badge>
                <h3 className="text-3xl font-bold mb-4">Ведущий + DJ</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">84 990₽</span>
                  <span className="text-xl text-muted-foreground line-through">99 990₽</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Опытный ведущий 6+ часов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>DJ с профессиональным оборудованием</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Индивидуальный сценарий</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Световое оформление</span>
                  </li>
                </ul>
                <Button className="w-full" size="lg" variant="outline">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы наших клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Анна и Сергей", text: "Это была свадьба мечты! Команда профессионалов сделала всё идеально. Гости до сих пор вспоминают этот день!", rating: 5 },
              { name: "Мария и Дмитрий", text: "Огромное спасибо за организацию! Ведущий был потрясающим, все прошло без единой заминки.", rating: 5 },
              { name: "Екатерина и Алексей", text: "Превзошли все наши ожидания! Декор, атмосфера, программа - всё было на высшем уровне.", rating: 5 }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground italic">"{review.text}"</p>
                  <p className="font-semibold text-primary">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-8">Ответим на все вопросы и поможем организовать свадьбу вашей мечты</p>
          
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Дата свадьбы</label>
                  <Input type="date" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашей свадьбе..." rows={4} />
                </div>
                
                <Button size="lg" className="w-full">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Icon name="Phone" className="mx-auto mb-2 text-primary" size={32} />
              <p className="font-semibold">Телефон</p>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div>
              <Icon name="Mail" className="mx-auto mb-2 text-primary" size={32} />
              <p className="font-semibold">Email</p>
              <p className="text-muted-foreground">info@wedding.ru</p>
            </div>
            <div>
              <Icon name="MapPin" className="mx-auto mb-2 text-primary" size={32} />
              <p className="font-semibold">Адрес</p>
              <p className="text-muted-foreground">Москва, ул. Примерная, 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Свадебное Агентство</h3>
          <p className="mb-4">Создаём свадьбы мечты с 2015 года</p>
          <div className="flex justify-center gap-4">
            <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-80" />
            <Icon name="Facebook" size={24} className="cursor-pointer hover:opacity-80" />
            <Icon name="Youtube" size={24} className="cursor-pointer hover:opacity-80" />
          </div>
          <p className="mt-6 text-sm opacity-75">© 2024 Свадебное Агентство. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
