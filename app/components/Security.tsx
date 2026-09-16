import {
  Fingerprint,
  ShieldCheck,
  ShieldAlert,
  Eye,
  type LucideIcon,
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface SecurityFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: SecurityFeature[] = [
  {
    icon: Fingerprint,
    title: 'ბიომეტრიული ავთენტიფიკაცია',
    description: 'Face ID და თითის ანაბეჭდით შესვლა თქვენს ანგარიშს მხოლოდ თქვენთვის ხელმისაწვდომს ხდის.',
  },
  {
    icon: ShieldCheck,
    title: 'უსაფრთხო გადახდები',
    description: 'ყოველი ტრანზაქცია დაშიფრულია ბანკის დონის 256-ბიტიანი უსაფრთხოებით.',
  },
  {
    icon: ShieldAlert,
    title: 'თაღობისგან დაცვა',
    description: 'AI-ზე დაფუძნებული მონიტორინგი ავლენს ეჭვიან აქტივობას და მყისიერად გაფრთხილებთ.',
  },
  {
    icon: Eye,
    title: '24/7 მონიტორინგი',
    description: 'ჩვენი უსაფრთხოების გუნდი თქვენს ანგარიშს დღის განმავლობაში აკონტროლებს.',
  },
];

export default function Security() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-electric-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-5">
            <ShieldCheck className="w-4 h-4 text-accent-400" />
            <span className="text-xs font-semibold text-navy-200 tracking-wide">
              ბანკის დონის უსაფრთხოება
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            თქვენი ფული. დაცულია.
          </h2>
          <p className="mt-4 text-lg text-navy-300">
            ჩვენ ვიყენებთ იგივე დაშიფრვის ტექნოლოგიას, რასაც წამყვანი ბანკები და სამხედრო სისტემები.
            თქვენი ფინანსური მონაცემები და ფული ყოველთვის უსაფრთხოდ არის ჩვენთან.
          </p>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <RevealOnScroll key={feature.title} delay={i * 100}>
              <div className="group h-full rounded-3xl glass-dark border border-white/10 p-7 hover:border-electric-400/30 hover:bg-white/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric-500 to-electric-700 flex items-center justify-center shadow-lg mb-5 transition-transform group-hover:scale-110">
                  <feature.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{feature.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Trust badges */}
        <RevealOnScroll delay={400}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {['FDIC Insured', 'PCI DSS Certified', 'SOC 2 Compliant', 'ISO 27001'].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent-400" />
                <span className="text-sm font-semibold text-navy-200">{badge}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
