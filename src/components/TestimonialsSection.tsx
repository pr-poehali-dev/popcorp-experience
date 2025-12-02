import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
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
  );
}
