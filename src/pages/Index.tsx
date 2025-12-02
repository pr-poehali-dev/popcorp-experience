import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';
import HeroSection from '@/components/HeroSection';
import QuestsCatalog, { type Quest } from '@/components/QuestsCatalog';
import TestimonialsSection from '@/components/TestimonialsSection';
import BookingDialog from '@/components/BookingDialog';

const quests: Quest[] = [
  {
    id: 1,
    title: 'ЗАКЛЯТИЕ',
    description: '- Ты увидела здесь что-нибудь, да?\n- Здесь произошло что-то ужасное, Эд',
    image: 'https://cdn.poehali.dev/projects/9fa2ebd3-9d24-408e-9aca-5269590b6d32/files/f41054fe-0bfc-4cc7-944b-43ae490c474c.jpg',
    duration: '60 минут',
    players: '1-12 человек',
    difficulty: 'Сложный',
    tags: ['friends', 'photo', 'team'],
    price: 5000
  },
  {
    id: 2,
    title: 'AMNESIA',
    description: 'Запусти запись — и дверь в кошмар откроется...',
    image: 'https://cdn.poehali.dev/projects/9fa2ebd3-9d24-408e-9aca-5269590b6d32/files/be7dabae-deff-4ce0-a51a-bec94bcaf1d7.jpg',
    duration: '60 минут',
    players: '1-10 человек',
    difficulty: 'Экстремальный',
    tags: ['friends', 'photo'],
    price: 5000
  },
  {
    id: 3,
    title: 'КОЛЛЕКЦИОНЕР',
    description: 'Переступив через порог, пути назад уже не будет',
    image: 'https://cdn.poehali.dev/projects/9fa2ebd3-9d24-408e-9aca-5269590b6d32/files/8dabdc6f-d95e-4ae3-8380-61480a7939e2.jpg',
    duration: '60 минут',
    players: '1-10 человек',
    difficulty: 'Сложный',
    tags: ['friends', 'photo', 'team'],
    price: 5000
  },
  {
    id: 4,
    title: 'SILENT HILL',
    description: 'Город зовёт... Но готов ли ты?',
    image: 'https://cdn.poehali.dev/projects/9fa2ebd3-9d24-408e-9aca-5269590b6d32/files/208d12d1-28a2-4961-8e58-e0ffb31ed701.jpg',
    duration: '60 минут',
    players: '1-15 человек',
    difficulty: 'Средний',
    tags: ['friends', 'photo', 'team'],
    price: 5000
  },
  {
    id: 5,
    title: 'OUTLAST',
    description: 'Единственный способ выжить – это прятаться или бежать',
    image: 'https://cdn.poehali.dev/projects/9fa2ebd3-9d24-408e-9aca-5269590b6d32/files/78c74dc5-b684-473a-bca9-7100ccc93022.jpg',
    duration: '60 минут',
    players: '1-15 человек',
    difficulty: 'Экстремальный',
    tags: ['friends', 'photo', 'team'],
    price: 5000
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
      <HeroSection />

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

      <TestimonialsSection testimonials={testimonials} />

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

      <QuestsCatalog 
        filter={filter}
        setFilter={setFilter}
        quests={quests}
        onBookQuest={setBookingQuest}
      />

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

      <footer className="py-12 bg-black border-t-2 border-primary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/9fa2ebd3-9d24-408e-9aca-5269590b6d32/files/ba3dc5ae-b2ef-423c-b584-757af051c43a.jpg" 
                alt="PopCorp Logo" 
                className="h-12 w-auto mb-4 drop-shadow-[0_0_10px_rgba(139,0,0,0.6)]"
              />
              <p className="text-muted-foreground" style={{ fontFamily: 'Special Elite, serif' }}>
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

      <BookingDialog
        quest={bookingQuest}
        onClose={() => setBookingQuest(null)}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        selectedTime={selectedTime}
        onSelectTime={setSelectedTime}
        onConfirmBooking={handleBooking}
      />
    </div>
  );
}