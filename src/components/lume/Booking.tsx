import { useState, memo } from "react";
import bg from "@/assets/lume-styling.jpg";
import { Phone, Calendar as CalendarIcon, Clock, MessageSquare, ChevronDown } from "lucide-react";
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

const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", 
  "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"
];

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState("");

  const handleWhatsAppBooking = () => {
    if (!service || !date || !time) return;

    const formattedDate = format(new Date(date), "PPP");
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
    <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-gold/10">
      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        {/* Service Selection */}
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium px-1">Select Service</label>
          <div className="relative">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full h-12 bg-background/20 border border-white/10 rounded-md px-4 text-sm appearance-none focus:outline-none focus:border-gold/50 hover:bg-background/40 hover:border-gold/30 transition-all text-foreground pr-10"
            >
              <option value="" disabled className="bg-background">Search service...</option>
              {categories.map((cat) => (
                <optgroup key={cat.label} label={cat.label} className="bg-background text-gold font-medium uppercase text-[10px]">
                  {cat.services.map((s) => (
                    <option key={s} value={s} className="bg-background text-foreground py-2 text-sm">{s}</option>
                  ))}
                </optgroup>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gold pointer-events-none opacity-50" />
          </div>
        </div>

        {/* Date Selection */}
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium px-1">Choose Date</label>
          <div className="relative">
            <input
              type="date"
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
              className="w-full h-12 bg-background/20 border border-white/10 rounded-md px-4 text-sm focus:outline-none focus:border-gold/50 hover:bg-background/40 hover:border-gold/30 transition-all text-foreground"
              style={{ colorScheme: "dark" }}
            />
            <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gold pointer-events-none opacity-50" />
          </div>
        </div>

        {/* Time Selection */}
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium px-1">Choose Time</label>
          <div className="relative">
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full h-12 bg-background/20 border border-white/10 rounded-md px-4 text-sm appearance-none focus:outline-none focus:border-gold/50 hover:bg-background/40 hover:border-gold/30 transition-all text-foreground pr-10"
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

        <div className="w-full sm:w-auto">
          <button 
            onClick={handleWhatsAppBooking}
            disabled={!isFormValid}
            className={`w-full sm:w-auto min-w-[240px] h-12 bg-gold hover:bg-gold/90 text-black font-medium tracking-wide uppercase text-[10px] transition-all duration-500 rounded-full flex items-center justify-center gap-2 ${
              isFormValid ? "animate-pulse-glow" : "opacity-50 grayscale cursor-not-allowed"
            }`}
          >
            <MessageSquare className="h-4 w-4" />
            Confirm on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export const Booking = memo(function Booking() {
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

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="eyebrow mb-4 sm:mb-6">Reservations</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Book your <em className="not-italic text-gradient-gold">Experience</em>
          </h2>
        </div>

        <BookingForm />
      </div>
    </section>
  );
});
