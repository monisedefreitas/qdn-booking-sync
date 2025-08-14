import { useState } from "react";
import { format, differenceInDays } from "date-fns";
import { pt } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DateRangePickerProps {
  checkIn: string;
  checkOut: string;
  onCheckInChange: (date: string) => void;
  onCheckOutChange: (date: string) => void;
  className?: string;
}

export const DateRangePicker = ({ 
  checkIn, 
  checkOut, 
  onCheckInChange, 
  onCheckOutChange, 
  className 
}: DateRangePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectingCheckIn, setSelectingCheckIn] = useState(true);

  const checkInDate = checkIn ? new Date(checkIn) : undefined;
  const checkOutDate = checkOut ? new Date(checkOut) : undefined;

  const calculateNights = () => {
    if (checkInDate && checkOutDate) {
      return differenceInDays(checkOutDate, checkInDate);
    }
    return 0;
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;

    const formattedDate = format(date, "yyyy-MM-dd");

    if (selectingCheckIn) {
      onCheckInChange(formattedDate);
      setSelectingCheckIn(false);
      // Clear checkout if it's before the new checkin
      if (checkOutDate && date >= checkOutDate) {
        onCheckOutChange("");
      }
    } else {
      onCheckOutChange(formattedDate);
      setIsOpen(false);
      setSelectingCheckIn(true);
    }
  };

  const resetSelection = () => {
    setSelectingCheckIn(true);
    onCheckInChange("");
    onCheckOutChange("");
  };

  const nights = calculateNights();

  return (
    <div className={cn("space-y-4", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !checkIn && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {checkIn && checkOut ? (
              <span>
                {format(checkInDate!, "dd MMM", { locale: pt })} - {format(checkOutDate!, "dd MMM yyyy", { locale: pt })}
              </span>
            ) : checkIn ? (
              <span>{format(checkInDate!, "dd MMM yyyy", { locale: pt })} - Escolha a saída</span>
            ) : (
              <span>Escolha as datas</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">
                {selectingCheckIn ? "Escolha a data de entrada" : "Escolha a data de saída"}
              </h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={resetSelection}
                className="text-xs"
              >
                Limpar
              </Button>
            </div>
          </div>
          <div className="flex">
            <Calendar
              mode="single"
              selected={selectingCheckIn ? checkInDate : checkOutDate}
              onSelect={handleDateSelect}
              disabled={(date) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                if (date < today) return true;
                
                if (!selectingCheckIn && checkInDate) {
                  return date <= checkInDate;
                }
                
                return false;
              }}
              numberOfMonths={2}
              className="pointer-events-auto"
            />
          </div>
          {checkIn && checkOut && (
            <div className="p-4 border-t bg-qdn-surface">
              <div className="flex items-center justify-between">
                <span className="text-sm text-qdn-text-muted">Total:</span>
                <span className="font-semibold text-qdn-primary">
                  {nights} {nights === 1 ? 'noite' : 'noites'}
                </span>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};