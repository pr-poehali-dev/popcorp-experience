import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
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
  );
}
