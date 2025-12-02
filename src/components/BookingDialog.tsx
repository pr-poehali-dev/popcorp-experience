import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { Quest } from './QuestsCatalog';

interface BookingDialogProps {
  quest: Quest | null;
  onClose: () => void;
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
  selectedTime: string;
  onSelectTime: (time: string) => void;
  onConfirmBooking: () => void;
}

export default function BookingDialog({
  quest,
  onClose,
  selectedDate,
  onSelectDate,
  selectedTime,
  onSelectTime,
  onConfirmBooking
}: BookingDialogProps) {
  return (
    <Dialog open={!!quest} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">
            Бронирование: {quest?.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <Label className="text-white mb-2 block">Выберите дату</Label>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={onSelectDate}
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
              onChange={(e) => onSelectTime(e.target.value)}
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
              <span className="text-3xl font-bold text-primary">{quest?.price}₽</span>
              <span className="text-sm text-muted-foreground ml-2">за команду</span>
            </div>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-bold uppercase px-8"
              onClick={onConfirmBooking}
            >
              ЗАБРОНИРОВАТЬ
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
