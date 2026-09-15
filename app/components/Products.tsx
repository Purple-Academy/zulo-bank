import {
  Wallet,
  CreditCard,
  Banknote,
  Home,
  PiggyBank,
  Smartphone,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface Product {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const PRODUCTS: Product[] = [
  {
    icon: Wallet,
    title: 'საბანკო ანგარიში',
    description: 'გახსენით უფასო საბანკო ანგარიში რამდენიმე წუთში — მყისიერი გადარიცხვებით და ფარული გადასახდელების გარეშე.',
    gradient: 'from-electric-500 to-electric-700',
  },
  {
    icon: CreditCard,
    title: 'Visa / Mastercard',
    description: 'მიიღეთ პრემიუმ სადებეტო ან საკრედიტო ბარათი ქეშბექით, სამოგზაურო ბონუსებით და გლობალური მიღებით.',
    gradient: 'from-navy-600 to-navy-900',
  },
  {
    icon: Banknote,
 title: 'სამომხმარებლო სესხები',
    description: 'გააცანით მოქნილი სამომხმარებლო სესხები კონკურენტული პროცენტებით და დადასტურებით მხოლოდ 24 საათში.',
    gradient: 'from-accent-500 to-accent-700',
  },
  {
    icon: Home,
    title: 'იპოთეკა',
    description: 'დააფინანსეთ თქვენი ოცნების სახლი მორგებული იპოთეკური გეგმებით და მხარდაჭერით ყოველ ნაბიჯზე.',
    gradient: 'from-electric-400 to-electric-600',
  },
  {
    icon: PiggyBank,
    title: 'დაზოგვა',
    description: 'გაზარდეთ თქვენი ფული მაღალმოსაგებიანი დაზოგვის ანგარიშებით და ავტომატური მიზანზე ორიენტირებული დაზოგვის გეგმებით.',
    gradient: 'from-accent-400 to-accent-600',
  },
  {
    icon: Smartphone,
    title: 'ციფრული ბანკი',
    description: 'მართეთ ყველაფერი ტელეფონიდან — გადახდა, გადარიცხვა, ინვესტიცია და ხარჯების კონტროლი რეალურ დროში.',
    gradient: 'from-navy-500 to-electric-600',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-electric-600 tracking-wide uppercase">
            ჩვენი პროდუქტები
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            ყველაფერი, რაც გჭირდებათ, ერთ ადგილას
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            სრული სპექტრი ფინანსური პროდუქტებისა, რომლებიც ერთად მუშაობენ და ამარტივებენ
            თქვენი ფინანსური ცხოვრების ყოველ ნაწილს.
          </p>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <RevealOnScroll key={product.title} delay={i * 80}>
              <div className="group h-full rounded-3xl border border-navy-100 bg-white p-7 hover:shadow-premium-lg hover:border-electric-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  <product.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{product.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed mb-5">{product.description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-electric-600 group-hover:text-electric-700 transition-colors">
                  მეტის ნახვა
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
