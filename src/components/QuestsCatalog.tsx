import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export interface Quest {
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

interface QuestsCatalogProps {
  filter: string;
  setFilter: (filter: string) => void;
  quests: Quest[];
  onBookQuest: (quest: Quest) => void;
}

export default function QuestsCatalog({ filter, setFilter, quests, onBookQuest }: QuestsCatalogProps) {
  const filteredQuests = filter === 'all' 
    ? quests 
    : quests.filter(q => q.tags.includes(filter));

  return (
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
                    <span className="text-xl text-muted-foreground">от </span>
                    <span className="text-3xl font-bold text-primary">{quest.price}₽</span>
                  </div>
                </div>

                <Button 
                  className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-bold uppercase"
                  onClick={() => onBookQuest(quest)}
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
  );
}