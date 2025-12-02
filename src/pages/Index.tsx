import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface Quest {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  players: string;
  difficulty: string;
  tags: string[];
  price: number;
}

const quests: Quest[] = [
  {
    id: 1,
    title: 'КОЛЛЕКЦИОНЕР',
    description: 'Психологический триллер с культовой падающей ловушкой. Погрузитесь в мир маньяка, который коллекционирует людей.',
    image: 'https://cdn.poehali.dev/projects/9fa2ebd3-9d24-408e-9aca-5269590b6d32/files/8dabdc6f-d95e-4ae3-8380-61480a7939e2.jpg',
    duration: '60 минут',
    players: '2-6 человек',
    difficulty: 'Сложный',
    tags: ['friends', 'photo', 'team'],
    price: 3500
  },
  {
    id: 2,
    title: 'МЕХАНИЗМ',
    description: 'Инженерный ад с движущимися стенами и падающими потолками. Уникальные механики, которых нет у других.',
    image: 'https://cdn.poehali.dev/projects/9fa2ebd3-9d24-408e-9aca-5269590b6d32/files/37b35d2e-b39d-43a6-a035-9d6471b81d4d.jpg',
    duration: '60 минут',
    players: '4-8 человек',
    difficulty: 'Экстремальный',
    tags: ['team', 'photo'],
    price: 4500
  },
  {
    id: 3,
    title: 'ТЁМНЫЙ РИТУАЛ',
    description: 'Хоррор с живыми актёрами. Почувствуйте настоящий страх под контролем профессионалов.',
    image: 'https://cdn.poehali.dev/projects/9fa2ebd3-9d24-408e-9aca-5269590b6d32/files/dc523440-50ac-4456-abdc-844fa2fb8c94.jpg',
    duration: '70 минут',
    players: '2-5 человек',
    difficulty: 'Средний',
    tags: ['friends', 'photo'],
    price: 4000
  }
];

const testimonials = [
  {
    name: 'Анна',
    role: 'Team Lead',
    text: 'Отдел после вашего квеста стал машиной. Ломали голову вместе, кричали вместе, победили. Теперь это наша корпоративная легенда. Спасибо!',
    avatar: '👩‍💼'
  },
  {
    name: 'Михаил',
    role: 'Постоянный гость',
    text: 'Был у вас 5 раз. Каждый раз думаю — ну всё, знаю все повороты. А вы снова подкладываете новую деталь в старый сюжет. Это магия.',
    avatar: '🎭'
  },
  {
    name: '@quest_hunter_msk',
    role: 'Блогер',
    text: 'Пришёл за контентом для блога. Ушёл с материалом на месяц вперёд и желанием вернуться просто для себя. Место силы.',
    avatar: '📸'
  }
];

export default function Index() {
  const [filter, setFilter] = useState<string>('all');
  const [bookingQuest, setBookingQuest] = useState<Quest | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');

  const filteredQuests = filter === 'all' 
    ? quests 
    : quests.filter(q => q.tags.includes(filter));

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      toast.error('Выберите дату и время');
      return;
    }
    toast.success('Бронирование успешно! Мы свяжемся с вами в ближайшее время.');
    setBookingQuest(null);
    setSelectedDate(undefined);
    setSelectedTime('');
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://cdn.poehali.dev/projects/9fa2ebd3-9d24-408e-9aca-5269590b6d32/files/8dabdc6f-d95e-4ae3-8380-61480a7939e2.jpg')`,
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="transform -skew-y-2 mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 transform skew-y-2 leading-tight animate-fade-in">
              ЗДЕСЬ СОЗДАЮТ НЕ ПРОСТО КВЕСТЫ
            </h1>
          </div>
          
          <div className="transform skew-y-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary mb-8 transform -skew-y-1 animate-fade-in">
              ЗДЕСЬ СОЗДАЮТ ВАШИ ИСТОРИИ
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in">
            Технологичный хоррор с человеческим лицом. Уникальные инженерные решения, живые актёры и сервис, который запомнится.
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-6 h-auto font-bold uppercase tracking-wider transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
            onClick={() => document.getElementById('quests')?.scrollIntoView({ behavior: 'smooth' })}
          >
            ВЫБРАТЬ СВОЮ ИСТОРИЮ
            <Icon name="ArrowRight" className="ml-3" size={24} />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-primary" />
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-card skew-section">
        <div className="container mx-auto px-4 skew-content">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            ПОЧЕМУ ВЫБИРАЮТ НАС СНОВА?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-primary/20 hover-lift group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">⚙️</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Инженерное ноу-хау</h3>
              <p className="text-muted-foreground leading-relaxed">
                Падающие потолки, движущиеся стены, ловушки. Механики, которых нет у других. Не декорации — действующие механизмы.
              </p>
            </Card>

            <Card className="p-8 bg-card border-primary/20 hover-lift group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🎭</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Живые эмоции под контролем</h3>
              <p className="text-muted-foreground leading-relaxed">
                Наши актёры — психологи страха. Они чувствуют вашу группу и создают напряжение именно для вас. Безопасно, но до мурашек.
              </p>
            </Card>

            <Card className="p-8 bg-card border-primary/20 hover-lift group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">📸</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Готовый контент</h3>
              <p className="text-muted-foreground leading-relaxed">
                После игры — профессиональная фотосессия в антураже. Не нужно монтировать — достаточно выложить. Ваши сторис будут лучшими.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
                PopCorp — это место, где...
              </h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-4 animate-fade-in">
                  <Icon name="Zap" className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <p>...коллеги становятся союзниками</p>
                </div>
                <div className="flex items-start gap-4 animate-fade-in">
                  <Icon name="Zap" className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <p>...постоянные гости чувствуют, что их ждали</p>
                </div>
                <div className="flex items-start gap-4 animate-fade-in">
                  <Icon name="Zap" className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <p>...рождаются истории, которыми хочется делиться</p>
                </div>
                <div className="flex items-start gap-4 animate-fade-in">
                  <Icon name="Zap" className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <p>...страх становится приятным воспоминанием</p>
                </div>
                <div className="flex items-start gap-4 animate-fade-in">
                  <Icon name="Zap" className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <p>...каждый визит — это новая глава</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://cdn.poehali.dev/projects/9fa2ebd3-9d24-408e-9aca-5269590b6d32/files/dc523440-50ac-4456-abdc-844fa2fb8c94.jpg" 
                alt="Команда" 
                className="rounded-lg transform -rotate-2 hover:rotate-0 transition-transform hover-lift"
              />
              <img 
                src="https://cdn.poehali.dev/projects/9fa2ebd3-9d24-408e-9aca-5269590b6d32/files/8dabdc6f-d95e-4ae3-8380-61480a7939e2.jpg" 
                alt="Друзья" 
                className="rounded-lg transform rotate-2 hover:rotate-0 transition-transform hover-lift mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card skew-section">
        <div className="container mx-auto px-4 skew-content">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            ИСТОРИИ НАШИХ ГОСТЕЙ
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-background border-primary/20 hover-lift">
                <div className="text-5xl mb-6">{testimonial.avatar}</div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-16 p-12 bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 text-center">
            <div className="text-6xl mb-6">👑</div>
            <h3 className="text-3xl font-bold mb-4 text-primary">Программа «Королевский круг»</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Наши постоянные гости становятся частью «Королевского круга». Закрытые прогоны, влияние на сценарий, личные приветствия. 
              Начните свой путь к статусу сегодня.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white uppercase font-bold"
            >
              Узнать о программе
              <Icon name="Crown" className="ml-2" size={20} />
            </Button>
          </Card>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary">
            КАК ЭТО РАБОТАЕТ
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: '01', icon: 'MousePointerClick', text: 'Выбираете квест на сайте' },
                { num: '02', icon: 'Calendar', text: 'Бронируете за 2 минуты' },
                { num: '03', icon: 'Users', text: 'Проходите инструктаж' },
                { num: '04', icon: 'Flame', text: 'Погружаетесь на 60 минут' }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="text-6xl font-bold text-primary/20 mb-4 group-hover:text-primary transition-colors">
                    {step.num}
                  </div>
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-card rounded-full group-hover:bg-primary transition-colors">
                      <Icon name={step.icon as any} size={32} className="text-primary group-hover:text-white" />
                    </div>
                  </div>
                  <p className="text-muted-foreground group-hover:text-white transition-colors">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="quests" className="py-24 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary">
            ВЫБЕРИТЕ СВОЙ ВЫЗОВ
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Каждая история — уникальна
          </p>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-primary' : 'border-primary text-primary hover:bg-primary hover:text-white'}
            >
              Все квесты
            </Button>
            <Button
              variant={filter === 'friends' ? 'default' : 'outline'}
              onClick={() => setFilter('friends')}
              className={filter === 'friends' ? 'bg-primary' : 'border-primary text-primary hover:bg-primary hover:text-white'}
            >
              Для компании друзей
            </Button>
            <Button
              variant={filter === 'team' ? 'default' : 'outline'}
              onClick={() => setFilter('team')}
              className={filter === 'team' ? 'bg-primary' : 'border-primary text-primary hover:bg-primary hover:text-white'}
            >
              Для сплочения команды
            </Button>
            <Button
              variant={filter === 'photo' ? 'default' : 'outline'}
              onClick={() => setFilter('photo')}
              className={filter === 'photo' ? 'bg-primary' : 'border-primary text-primary hover:bg-primary hover:text-white'}
            >
              Для невероятных фото
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredQuests.map((quest) => (
              <Card key={quest.id} className="overflow-hidden bg-card border-primary/20 hover-lift group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={quest.image} 
                    alt={quest.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-secondary text-white">
                    {quest.difficulty}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-primary">{quest.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {quest.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      {quest.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={16} />
                      {quest.players}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-primary">{quest.price}₽</span>
                      <span className="text-sm text-muted-foreground ml-2">за команду</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-bold uppercase"
                    onClick={() => setBookingQuest(quest)}
                  >
                    ЗАБРОНИРОВАТЬ
                    <Icon name="Calendar" className="ml-2" size={18} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
            <Card className="p-6 bg-muted/30 border-primary/10">
              <Icon name="Shield" className="mx-auto mb-4 text-primary" size={40} />
              <h4 className="font-bold mb-2">Безопасность</h4>
              <p className="text-sm text-muted-foreground">Соблюдаем все ГОСТы. Ваш адреналин — под контролем.</p>
            </Card>
            
            <Card className="p-6 bg-muted/30 border-primary/10">
              <Icon name="Star" className="mx-auto mb-4 text-primary" size={40} />
              <h4 className="font-bold mb-2">Гарантия впечатлений</h4>
              <p className="text-sm text-muted-foreground">Если что-то пойдёт не так — вернём деньги.</p>
            </Card>
            
            <Card className="p-6 bg-muted/30 border-primary/10">
              <Icon name="Handshake" className="mx-auto mb-4 text-primary" size={40} />
              <h4 className="font-bold mb-2">Помощь в организации</h4>
              <p className="text-sm text-muted-foreground">Поможем собрать группу и разделить оплату.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto p-12 bg-card/90 backdrop-blur border-primary/30">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">
              ОСТАЛИСЬ ВОПРОСЫ?
            </h2>
            <p className="text-center text-muted-foreground mb-8 text-lg">
              Мы подберём идеальный квест лично для вас
            </p>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="contact" className="text-white">Telegram / Email</Label>
                <Input 
                  id="contact" 
                  placeholder="@your_telegram или email@example.com" 
                  className="bg-input border-primary/20 mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="details" className="text-white">Количество человек / Повод (необязательно)</Label>
                <Textarea 
                  id="details" 
                  placeholder="Например: 6 человек, корпоратив" 
                  className="bg-input border-primary/20 mt-2"
                  rows={3}
                />
              </div>

              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6 uppercase"
                onClick={() => toast.success('Запрос отправлен! Мы свяжемся с вами в течение 15 минут.')}
              >
                ПОЛУЧИТЬ ПЕРСОНАЛЬНУЮ ПОДБОРКУ
                <Icon name="Send" className="ml-2" size={20} />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 bg-background border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">POPCORP</h3>
              <p className="text-muted-foreground">
                Технологичный хоррор с человеческим лицом
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  hello@popcorp.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Квестовая, 13
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary/20 text-center text-muted-foreground">
            <p>© 2024 PopCorp. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={!!bookingQuest} onOpenChange={() => setBookingQuest(null)}>
        <DialogContent className="max-w-2xl bg-card">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">
              Бронирование: {bookingQuest?.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div>
              <Label className="text-white mb-2 block">Выберите дату</Label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border border-primary/20 bg-muted/30"
                disabled={(date) => date < new Date()}
              />
            </div>

            <div>
              <Label htmlFor="time" className="text-white">Выберите время</Label>
              <select 
                id="time"
                className="w-full mt-2 p-3 bg-input border border-primary/20 rounded-md text-white"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Выберите время</option>
                <option value="10:00">10:00</option>
                <option value="12:00">12:00</option>
                <option value="14:00">14:00</option>
                <option value="16:00">16:00</option>
                <option value="18:00">18:00</option>
                <option value="20:00">20:00</option>
                <option value="22:00">22:00</option>
              </select>
            </div>

            <div>
              <Label htmlFor="name" className="text-white">Ваше имя</Label>
              <Input 
                id="name"
                placeholder="Иван Иванов" 
                className="bg-input border-primary/20 mt-2"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-white">Телефон</Label>
              <Input 
                id="phone"
                placeholder="+7 (999) 123-45-67" 
                className="bg-input border-primary/20 mt-2"
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-primary/20">
              <div>
                <span className="text-3xl font-bold text-primary">{bookingQuest?.price}₽</span>
                <span className="text-sm text-muted-foreground ml-2">за команду</span>
              </div>
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-bold uppercase px-8"
                onClick={handleBooking}
              >
                ЗАБРОНИРОВАТЬ
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
