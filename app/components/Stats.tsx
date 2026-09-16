import { Users, Activity, Headphones, Award } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const STATS = [
  { icon: Users, value: '500K+', label: 'მომხმარებელი', sublabel: 'ენდობა ჩვენ თავიანთ ფულს' },
  { icon: Activity, value: '99.9%', label: 'სტაბილურობა', sublabel: 'ყოველთვის ხელმისაწვდომი' },
  { icon: Headphones, value: '24/7', label: 'მხარდაჭერა', sublabel: 'ნამდვილი ადამიანები, ნებისმიერ დროს' },
  { icon: Award, value: '15+', label: 'წელი', sublabel: 'სანდო გამოცდილება' },
];

export default function Stats() {
  return (
    <section className="py-20 lg:py-24 bg-navy-950 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-electric-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {STATS.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 100} className="text-center">
              <div className="inline-flex w-14 h-14 rounded-2xl bg-white/10 items-center justify-center mb-4 border border-white/10">
                <stat.icon className="w-6 h-6 text-electric-300" strokeWidth={2} />
              </div>
              <p className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-navy-200 uppercase tracking-wide">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-navy-400">{stat.sublabel}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
