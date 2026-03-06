"use client";

import * as React from "react";
import { format, addDays, setHours, setMinutes, isBefore, isAfter } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const DEFAULT_TIME_PRESETS = [
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export interface BookingCalendarProps {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  timePresets?: string[];
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function BookingCalendar({
  value = null,
  onChange,
  timePresets = DEFAULT_TIME_PRESETS,
  minDate = new Date(),
  maxDate = addDays(new Date(), 60),
  placeholder = "Pick date and time",
  className,
  disabled = false,
}: BookingCalendarProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(value ?? undefined);
  const [time, setTime] = React.useState<string | null>(
    value ? format(value, "HH:mm") : null
  );

  React.useEffect(() => {
    if (value) {
      setDate(value);
      setTime(format(value, "HH:mm"));
    } else {
      setDate(undefined);
      setTime(null);
    }
  }, [value]);

  const handleSelectDate = (d: Date | undefined) => {
    setDate(d ?? undefined);
    if (!d) setTime(null);
  };

  const handleSelectTime = (t: string) => {
    setTime(t);
    if (date) {
      const [h, m] = t.split(":").map(Number);
      const combined = setMinutes(setHours(date, h), m);
      onChange?.(combined);
    }
  };

  const handleApply = () => {
    if (date && time) {
      const [h, m] = time.split(":").map(Number);
      const combined = setMinutes(setHours(date, h), m);
      onChange?.(combined);
      setOpen(false);
    }
  };

  const timeTo12h = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    const ampm = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 || 12;
    return `${hour12}:${m.toString().padStart(2, "0")} ${ampm}`;
  };

  const displayText =
    date && time
      ? `${format(date, "EEE, MMM d, yyyy")} at ${timeTo12h(time)}`
      : placeholder;

  const slotDate = date ?? new Date();
  const isPast = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    const slot = setMinutes(setHours(slotDate, h), m);
    return isBefore(slot, new Date());
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className={cn(
            "w-full justify-start text-left font-normal border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-neutral-100",
            !date && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {displayText}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 border-neutral-800 bg-neutral-900"
        align="start"
      >
        <div className="flex flex-col sm:flex-row">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelectDate}
            disabled={(d) =>
              isBefore(d, minDate) || isAfter(d, maxDate) || isBefore(d, addDays(new Date(), -1))
            }
            initialFocus
            className="rounded-md border-0"
          />
          <div className="border-t sm:border-t-0 sm:border-l border-neutral-700 p-3 flex flex-col">
            <p className="text-sm font-medium text-neutral-300 mb-2">
              {date ? format(date, "EEE, MMM d") : "Select a date"}
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {timePresets.map((t) => (
                <Button
                  key={t}
                  type="button"
                  variant={time === t ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "text-sm",
                    time === t && "bg-primary text-primary-foreground",
                    isPast(t) && "opacity-50 cursor-not-allowed"
                  )}
                  disabled={isPast(t)}
                  onClick={() => handleSelectTime(t)}
                >
                  {timeTo12h(t)}
                </Button>
              ))}
            </div>
            <Button
              type="button"
              className="mt-3"
              onClick={handleApply}
              disabled={!date || !time}
            >
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
