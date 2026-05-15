import { useState } from "react";
import bg from "@/assets/lume-styling.jpg";
import { Reveal } from "./Reveal";
import { Phone, Calendar as CalendarIcon, Clock, Check, ChevronsUpDown, MessageSquare } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const categories = [
  {
    label: "Hair Services",
    services: ["Hair Cut & Styling", "Hair Coloring", "Keratin & Smoothing", "Hair Spa & Treatment"],
  },
  {
    label: "Facial & Skin",
    services: ["Classic Facial", "Hydra Facial", "Brightening Treatment", "Anti-Aging Facial"],
  },
  {
    label: "Grooming",
    services: ["Beard Design", "Clean Shave", "Head Massage", "Kids Haircut"],
  },
  {
    label: "Bridal & Party",
    services: ["Bridal Makeup", "Engagement Makeup", "Party Makeup", "Saree Draping"],
  },
];

const allServices = categories.flatMap(c => c.services);

const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", 
  "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"
];

export function Booking() {
  const [date, setDate] = useState<Date>();
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);
  
  const btnRef = useMagnetic(0.2);

  const handleWhatsAppBooking = () => {
    if (!service || !date || !time) return;

    const formattedDate = format(date, "PPP");
    const message = encodeURIComponent(
      `Hello Lume Salon! I would like to book an appointment.\n\n` +
      `✨ Service: ${service}\n` +
      `📅 Date: ${formattedDate}\n` +
      `⏰ Time: ${time}`
    );
    
    window.open(`https://wa.me/919747677676?text=${message}`, "_blank");
  };

  const isFormValid = service && date && time;

  return (
    <section id="booking" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bg} alt="" className="w-full h-full object-cover opacity-20" />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, var(--hero-overlay-from), var(--hero-overlay-via) 50%, var(--hero-overlay-to))` }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)", opacity: 0.15 }} />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <Reveal variant="blur"><span className="eyebrow">Reservations</span></Reveal>
          <Reveal variant="blur" delay={100}>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Book your <em className="not-italic text-gradient-gold">Experience</em>
            </h2>
          </Reveal>
        </div>

        <Reveal variant="up" delay={200}>
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-gold/10">
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {/* Service Selection */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium px-1">Select Service</label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between bg-background/20 border-white/10 text-foreground hover:bg-background/40 hover:border-gold/30 h-12"
                    >
                      {service ? service : "Search service..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[300px] p-0 bg-background/95 backdrop-blur-xl border-gold/20" align="start">
                    <Command className="bg-transparent">
                      <CommandInput placeholder="Search hair, facial..." className="h-10" />
                      <CommandList>
                        <CommandEmpty>No service found.</CommandEmpty>
                        {categories.map((cat) => (
                          <CommandGroup key={cat.label} heading={cat.label}>
                            {cat.services.map((s) => (
                              <CommandItem
                                key={s}
                                value={s}
                                onSelect={(currentValue) => {
                                  setService(currentValue);
                                  setOpen(false);
                                }}
                                className="flex items-center gap-2 cursor-pointer py-3"
                              >
                                <Check
                                  className={cn(
                                    "h-4 w-4 text-gold",
                                    service === s ? "opacity-100" : "opacity-0"
                                  )}
                                />
                                {s}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        ))}
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Date Selection */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium px-1">Choose Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-background/20 border-white/10 hover:bg-background/40 hover:border-gold/30 h-12",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-gold" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-background/95 backdrop-blur-xl border-gold/20" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))}
                      className="rounded-md border-none p-3"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Selection */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium px-1">Choose Time</label>
                <div className="relative group">
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full h-12 bg-background/20 border border-white/10 rounded-md px-4 text-sm appearance-none focus:outline-none focus:border-gold/50 hover:bg-background/40 hover:border-gold/30 transition-all text-foreground"
                  >
                    <option value="" disabled className="bg-background">Select time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t} className="bg-background text-foreground py-2">{t}</option>
                    ))}
                  </select>
                  <Clock className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gold pointer-events-none opacity-50" />
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-foreground/50">
                <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-gold" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-widest text-gold/60">Quick Support</div>
                  <div className="text-sm font-medium text-foreground/80">+91 97476 77676</div>
                </div>
              </div>

              <div ref={btnRef as any} className="w-full sm:w-auto">
                <Button 
                  onClick={handleWhatsAppBooking}
                  disabled={!isFormValid}
                  className={cn(
                    "w-full sm:w-auto min-w-[200px] h-12 bg-gold hover:bg-gold/90 text-black font-medium tracking-wide uppercase text-[10px] transition-all duration-500",
                    isFormValid ? "animate-pulse-glow" : "opacity-50 grayscale cursor-not-allowed"
                  )}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Confirm on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
