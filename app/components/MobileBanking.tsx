import {
  Zap,
  Send,
  RefreshCw,
  Wallet,
  ArrowDownLeft,
  ArrowUpRight,
  Smartphone,
  History,
  type LucideIcon,
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  { icon: Zap, title: 'მყისიერი გადარიცხვები', description: 'გააგზავნეთ ფული წამებში, 24/7 — ლოდინის გარეშე.' },
  { icon: Send, title: 'მარტივი გადახდები', description: 'გადაიხადეთ გადასახდელები და მეგობრებს ერთი შეხებით QR-ით ან კონტაქტებით.' },
  { icon: RefreshCw, title: 'რეალურ დროში ბალანსი', description: 'იხილეთ ბალანსის მყისიერი განახლება ყოველი ტრანზაქციის შემდეგ.' },
  { icon: History, title: 'ტრანზაქციების ისტორია', description: 'მოძებნეთ, გაფილტრეთ და ექსპორტეთ ყოველი ტრანზაქცია სრული დეტალებით.' },
];

const APP_TRANSACTIONS = [
  { name: 'Spotify', amount: '-$9.99', icon: ArrowUpRight, color: 'text-red-400 bg-red-500/10' },
  { name: 'გადარიცხვა - სალა', amount: '-$50.00', icon: ArrowUpRight, color: 'text-electric-400 bg-electric-500/10' },
  { name: 'ხელფასი', amount: '+$3,200', icon: ArrowDownLeft, color: 'text-accent-400 bg-accent-500/10' },
];

export default function MobileBanking() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-navy-50 to-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockup */}
          <RevealOnScroll className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-300/30 to-accent-300/30 blur-3xl rounded-full" />

              {/* Phone frame */}
              <div className="relative w-72 h-[560px] rounded-[3rem] bg-navy-950 p-3 shadow-premium-lg border-4 border-navy-800">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-navy-950 rounded-b-2xl z-10" />

                {/* Screen */}
                <div className="w-full h-full rounded-[2.4rem] bg-gradient-to-b from-navy-50 to-white overflow-hidden relative">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 pt-4 pb-2">
                    <span className="text-[10px] font-semibold text-navy-700">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-2 rounded-sm bg-navy-700" />
                      <Smartphone className="w-3 h-3 text-navy-700" />
                    </div>
                  </div>

                  {/* App content */}
                  <div className="px-5 pt-3">
                    {/* Greeting */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-[10px] text-navy-400">დილა მშვიდობისა</p>
                        <p className="text-sm font-bold text-navy-900">ალექს მორგანი</p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-electric-400 to-electric-600" />
                    </div>

                    {/* Balance card */}
                    <div className="rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 p-4 text-white shadow-lg">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Wallet className="w-3 h-3 text-navy-300" />
                        <span className="text-[9px] text-navy-300">მთლიანი ბალანსი</span>
                      </div>
                      <p className="text-2xl font-bold">$48,250.80</p>
                      <div className="mt-3 flex gap-2">
                        <button className="flex-1 py-2 rounded-lg bg-electric-500 text-[10px] font-semibold flex items-center justify-center gap-1">
                          <Send className="w-3 h-3" /> გადარიცხვა
                        </button>
                        <button className="flex-1 py-2 rounded-lg bg-white/10 text-[10px] font-semibold flex items-center justify-center gap-1">
                          <Zap className="w-3 h-3" /> გადახდა
                        </button>
                      </div>
                    </div>

                    {/* Quick actions */}
                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {[
                        { icon: Send, label: 'გაგზავნა' },
                        { icon: ArrowDownLeft, label: 'მოთხოვნა' },
                        { icon: Zap, label: 'გადახდა' },
                        { icon: History, label: 'ისტორია' },
                      ].map((action) => (
                        <div key={action.label} className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded-xl bg-navy-100 flex items-center justify-center">
                            <action.icon className="w-4 h-4 text-navy-700" />
                          </div>
                          <span className="text-[8px] text-navy-500 font-medium">{action.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Transactions */}
                    <div className="mt-4">
                      <p className="text-[10px] font-semibold text-navy-700 mb-2">ბოლო ტრანზაქციები</p>
                      <div className="space-y-2">
                        {APP_TRANSACTIONS.map((tx) => (
                          <div key={tx.name} className="flex items-center gap-2.5 p-2 rounded-xl bg-white shadow-sm border border-navy-50">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${tx.color}`}>
                              <tx.icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[10px] font-semibold text-navy-800 truncate">{tx.name}</p>
                              <p className="text-[8px] text-navy-400">დღეს</p>
                            </div>
                            <span className={`text-[10px] font-bold ${tx.amount.startsWith('+') ? 'text-accent-600' : 'text-navy-700'}`}>
                              {tx.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating element */}
              <div className="absolute -right-6 top-20 animate-float">
                <div className="glass rounded-2xl shadow-premium p-3 border border-white/40">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="text-[9px] text-navy-400">მყისიერი</p>
                      <p className="text-xs font-bold text-navy-900">გადარიცხვა</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right content */}
          <div className="order-1 lg:order-2">
            <RevealOnScroll>
              <span className="text-sm font-semibold text-electric-600 tracking-wide uppercase">
                მობილური ბანკი
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
                თქვენი ბანკი, სადაც არ უნდა იყოთ
              </h2>
              <p className="mt-5 text-lg text-navy-500">
                ლამაზად დაპროექტებული მობილური აპლიკაცია, რომელიც თქვენს ფინანსებს სრულად
                მართვის საშუალებას გაძლევთ. გადარიცხვა, გადახდა, ხარჯების კონტროლი და ყოველი
                ანგარიშის მართვა — ყველაფერი თქვენი ჯიბიდან.
              </p>
            </RevealOnScroll>

            <div className="mt-8 space-y-5">
              {FEATURES.map((feature, i) => (
                <RevealOnScroll key={feature.title} delay={i * 100}>
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-electric-500 to-electric-700 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy-900">{feature.title}</h3>
                      <p className="text-sm text-navy-500 mt-0.5">{feature.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll delay={400}>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-navy-900 text-white text-sm font-semibold hover:bg-navy-800 transition-colors">
                  <Smartphone className="w-4 h-4" />
                  App Store
                </button>
                <button className="flex items-center gap-2 px-5 py-3 rounded-xl border border-navy-200 text-navy-700 text-sm font-semibold hover:bg-navy-50 transition-colors">
                  <Smartphone className="w-4 h-4" />
                  Google Play
                </button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
