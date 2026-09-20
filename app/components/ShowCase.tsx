import { useRef, useState, type MouseEvent } from 'react';
import RevealOnScroll from './RevealOnScroll';

interface CardData {
  name: string;
  number: string;
  holder: string;
  expiry: string;
  gradient: string;
  glow: string;
  brand: 'VISA' | 'MASTERCARD';
  features: string;
}

const CARDS: CardData[] = [
  {
    name: 'პრემიუმ ბარათი',
    number: '4829  7531  9086  4221',
    holder: 'ALEX MORGAN',
    expiry: '09/28',
    gradient: 'from-navy-800 via-navy-900 to-black',
    glow: 'shadow-navy-900/40',
    brand: 'VISA',
    features: 'შეუზღულავი ქეშბექი · აეროპორტის ლაუნჯი · კონსიერჟის მომსახურება',
  },
  {
    name: 'სამოგზაურო ბარათი',
    number: '5310  4429  8865  1173',
    holder: 'ALEX MORGAN',
    expiry: '03/27',
    gradient: 'from-electric-600 via-electric-700 to-navy-800',
    glow: 'shadow-electric-600/40',
    brand: 'MASTERCARD',
    features: 'უცხოური ტრანზაქციის გადასახდელი არ არის · 3x მილი მოგზაურობაზე · გლობალური მიღება',
  },
  {
    name: 'ქეშბექ ბარათი',
    number: '4029  0036  5578  9914',
    holder: 'ALEX MORGAN',
    expiry: '11/26',
    gradient: 'from-accent-500 via-accent-600 to-accent-800',
    glow: 'shadow-accent-600/40',
    brand: 'VISA',
    features: '5% ქეშბექი საბაზროზე · 2% რესტორანზე · წლიური გადასახდელი არ არის',
  },
];

function BankCard({ card }: { card: CardData }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<Record<string, string>>({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 10;
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
      transition: 'transform 0.5s ease-out',
    });
  };

  return (
    <div className="perspective-1000">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className={`relative rounded-3xl bg-gradient-to-br ${card.gradient} p-6 h-52 shadow-2xl ${card.glow} preserve-3d cursor-pointer overflow-hidden`}
      >
        {/* Decorative shine */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-0 left-1/2 w-32 h-32 rounded-full bg-white/5 blur-xl" />
        </div>

        <div className="relative flex flex-col h-full justify-between text-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-white/60 font-medium uppercase tracking-wider">{card.name}</p>
              <div className="mt-2 w-10 h-7 rounded-md bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg" />
            </div>
            {/* Chip */}
          </div>

          <div className="flex items-end justify-between">
            {/* Contactless icon */}
            <div className="flex flex-col gap-1">
              {[14, 20, 26].map((w) => (
                <div key={w} className="rounded-full border-2 border-white/40" style={{ width: `${w}px`, height: `${w / 2}px`, borderTop: 'none', borderLeft: 'none', borderRight: 'none' }} />
              ))}
            </div>
            {card.brand === 'VISA' ? (
              <span className="text-2xl font-bold italic tracking-tight">VISA</span>
            ) : (
              <div className="flex items-center">
                <div className="w-7 h-7 rounded-full bg-electric-400/80" />
                <div className="w-7 h-7 rounded-full bg-orange-400/80 -ml-3" />
              </div>
            )}
          </div>

          <div>
            <p className="text-base font-mono tracking-widest text-white/90 mb-3">{card.number}</p>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[9px] text-white/50 uppercase">მფლობელი</p>
                <p className="text-xs font-semibold tracking-wide">{card.holder}</p>
              </div>
              <div>
                <p className="text-[9px] text-white/50 uppercase">ვადა</p>
                <p className="text-xs font-semibold">{card.expiry}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-navy-500 text-center">{card.features}</p>
    </div>
  );
}

export default function CardsShowcase() {
  return (
    <section id="cards" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-electric-600 tracking-wide uppercase">
            ჩვენი ბარათები
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            აირჩიეთ ბარათი, რომელიც თქვენ ესადაგება
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            სამი პრემიუმ ბარათი, თითოეული განსხვავებული ცხოვრების წესისთვის. მოვაბრუნეთ მაუსი ექსპლორაციისთვის.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {CARDS.map((card, i) => (
            <RevealOnScroll key={card.name} delay={i * 120}>
              <BankCard card={card} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
