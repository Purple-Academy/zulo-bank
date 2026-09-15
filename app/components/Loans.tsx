import { ArrowRight, ShieldCheck, Clock, Percent, CheckCircle2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const LOAN_FEATURES = [
  { icon: Clock, label: 'დადასტურება 24 სთ-ში' },
  { icon: Percent, label: 'პროცენტი 4.9%-დან' },
  { icon: ShieldCheck, label: 'ფარული გადასახდელების გარეშე' },
];

export default function Loans() {
  return (
    <section id="loans" className="py-24 lg:py-32 bg-gradient-to-b from-white to-navy-50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll>
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-8 sm:p-12 lg:p-16 shadow-premium-lg">
            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-electric-500/20 blur-3xl" />
              <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-accent-500/15 blur-3xl" />
              <div className="absolute top-10 right-20 w-3 h-3 rounded-full bg-electric-400/40 animate-float" />
              <div className="absolute bottom-20 right-40 w-2 h-2 rounded-full bg-accent-400/40 animate-float-delayed" />
              <div className="absolute top-1/3 left-10 w-2.5 h-2.5 rounded-full bg-electric-300/30 animate-float-slow" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div>
                <span className="text-sm font-semibold text-electric-300 tracking-wide uppercase">
                  მოქნილი დაფინანსება
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                  ფინანსური მხარდაჭერა, როცა გჭირდებათ
                </h2>
                <p className="mt-5 text-lg text-navy-200 max-w-lg">
                  ახალი მანქანა, სახლის რემონტი თუ მოულოდინო ხარჯი — გააცანით მოქნილი სესხი
                  რამდენიმე წუთში. მიიღეთ სწრაფი დადასტურება გამჭვირვალო პირობებით და
                  სიურპრიზების გარეშე — უბრალოდ ფული, როცა ყველაზე მეტად გჭირდებათ.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  {LOAN_FEATURES.map((feat) => (
                    <div key={feat.label} className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-dark border border-white/10">
                      <feat.icon className="w-4 h-4 text-electric-300" />
                      <span className="text-sm font-medium text-white">{feat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-electric-500 to-electric-700 text-white font-semibold shadow-glow hover:shadow-premium-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    სესხის განაცხადი
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button className="px-8 py-4 rounded-2xl glass-dark border border-white/20 text-white font-semibold hover:bg-white/10 transition-all">
                    გამოთვალეთ პროცენტი
                  </button>
                </div>
              </div>

              {/* Right visual - loan calculator mockup */}
              <div className="relative">
                <div className="glass-dark rounded-3xl border border-white/10 p-6 shadow-premium-lg">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-white">სესხის კალკულატორი</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-accent-500/20 text-accent-300 font-medium">
                      სამომხმარებლო სესხი
                    </span>
                  </div>

                  {/* Amount */}
                  <div className="mb-5">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-xs text-navy-300">სესხის თანხა</span>
                      <span className="text-2xl font-bold text-white">$25,000</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-electric-400 to-electric-600" style={{ width: '62%' }} />
                    </div>
                  </div>

                  {/* Term */}
                  <div className="mb-5">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-xs text-navy-300">ვადა</span>
                      <span className="text-lg font-bold text-white">36 თვე</span>
                    </div>
                    <div className="flex gap-2">
                      {['12', '24', '36', '48', '60'].map((m) => (
                        <button
                          key={m}
                          className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
                            m === '36'
                              ? 'bg-electric-500 text-white'
                              : 'bg-white/5 text-navy-300 hover:bg-white/10'
                          }`}
                        >
                          {m}თვე
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Result */}
                  <div className="rounded-2xl bg-gradient-to-br from-electric-500/20 to-electric-700/20 border border-electric-400/20 p-4">
                    <p className="text-xs text-navy-200 mb-1">Estimated monthly payment</p>
                    <p className="text-3xl font-extrabold text-white">$742<span className="text-base font-medium text-navy-300">/mo</span></p>
                    <div className="mt-3 space-y-1.5">
                      {['ადრეული გადახდის გადასახდელი არ არის', 'ფიქსირებული პროცენტი გარანტირებულია', 'დადასტურება 24 საათში'].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-400" />
                          <span className="text-xs text-navy-200">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 animate-float">
                  <div className="glass rounded-2xl shadow-premium px-4 py-3 border border-white/40">
                    <p className="text-[10px] text-navy-400 font-medium">დაწყებით</p>
                    <p className="text-lg font-bold gradient-text">4.9% APR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
