import {
  ArrowRight,
  TrendingUp,
  TrendingDown,
  CreditCard,
  Wallet,
  Plus,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';

const SPENDING_BARS = [40, 65, 45, 80, 55, 90, 70, 60, 85, 50, 75, 95];
const DAYS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

const TRANSACTIONS = [
  { name: 'Apple Store', desc: 'ელექტრონიკა', amount: '-$129.00', icon: ChevronDown, positive: false },
  { name: 'ხელფასი', desc: 'სახელფასო გადარიცხვა', amount: '+$5,420.00', icon: ChevronUp, positive: true },
  { name: 'Whole Foods', desc: 'საბაზრო', amount: '-$84.50', icon: ChevronDown, positive: false },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-navy-50 via-white to-white"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-electric-200/30 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-accent-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left side */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-electric-200 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            <span className="text-xs font-semibold text-navy-600 tracking-wide">
              500K+ მომხმარებელს ენდობა მთელს მსოფლიოში
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-900 leading-[1.1] animate-slide-up">
            ბანკი, რომელიც ესადაგება{' '}
            <span className="gradient-text">თქვენს ცხოვრებას</span>
          </h1>

          <p className="mt-6 text-lg text-navy-500 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '100ms' }}>
            გაიცანით უფრო ჭკვიანი ბანკი. გახსენით ანგარიში რამდენიმე წუთში, მიიღეთ
            მყისიერი გადარიცხვები, ნულოვანი ფარული გადასახდელები და ლამაზი აპლიკაცია,
            რომელიც თქვენს ფინანსებს თქვენს კონტროლს მოაქცევს — ნებისმიერ დროს, ნებისმიერ ადგილას.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '200ms' }}>
            <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-electric-500 to-electric-700 text-white font-semibold shadow-glow hover:shadow-premium-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
              დაწყება
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-4 rounded-2xl glass border border-navy-200 text-navy-700 font-semibold hover:bg-white transition-all hover:-translate-y-0.5">
              მეტის ნახვა
            </button>
          </div>

          <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="flex -space-x-3">
              {['from-electric-400 to-electric-600', 'from-accent-400 to-accent-600', 'from-navy-400 to-navy-600', 'from-electric-300 to-electric-500'].map((g, i) => (
                <div key={i} className={`w-9 h-9 rounded-full bg-gradient-to-br ${g} border-2 border-white`} />
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-navy-900">4.9/5 რეიტინგი</p>
              <p className="text-xs text-navy-400">12,000+ მიმოხილვიდან</p>
            </div>
          </div>
        </div>

        {/* Right side - Dashboard visual */}
        <div className="relative animate-fade-in" style={{ animationDelay: '300ms' }}>
          {/* Main dashboard card */}
          <div className="relative glass rounded-3xl shadow-premium-lg p-6 border border-white/40">
            {/* Balance card */}
            <div className="rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 p-5 text-white shadow-premium relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-electric-500/20 blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <Wallet className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium text-navy-200">მთლიანი ბალანსი</span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-accent-500/20 text-accent-300 font-medium">
                    +12.5%
                  </span>
                </div>
                <p className="text-3xl font-bold tracking-tight">$48,250.80</p>
                <p className="text-xs text-navy-300 mt-1">**** **** **** 4829</p>
              </div>
            </div>

            {/* Spending chart */}
            <div className="mt-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-navy-700">ხარჯების მიმოხილვა</span>
                <span className="text-xs text-navy-400">ბოლო 12 თვე</span>
              </div>
              <div className="flex items-end justify-between gap-1.5 h-24">
                {SPENDING_BARS.map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-electric-200 to-electric-500 transition-all hover:from-electric-300 hover:to-electric-600"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[8px] text-navy-300 font-medium">{DAYS[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transactions */}
            <div className="mt-5 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-navy-700">ბოლო აქტივობა</span>
                <button className="text-xs text-electric-600 font-medium hover:underline">ყველას ნახვა</button>
              </div>
              {TRANSACTIONS.map((tx) => (
                <div key={tx.name} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-navy-50 transition-colors">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${tx.positive ? 'bg-accent-100' : 'bg-navy-100'}`}>
                    <tx.icon className={`w-4 h-4 ${tx.positive ? 'text-accent-600' : 'text-navy-500'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-navy-800 truncate">{tx.name}</p>
                    <p className="text-xs text-navy-400">{tx.desc}</p>
                  </div>
                  <span className={`text-sm font-semibold ${tx.positive ? 'text-accent-600' : 'text-navy-700'}`}>
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating card element */}
          <div className="absolute -top-6 -left-6 lg:-left-12 animate-float">
            <div className="glass rounded-2xl shadow-premium p-4 border border-white/40 w-44">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-500 to-electric-700 flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-semibold text-navy-700">სწრაფი გადარიცხვა</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold text-navy-900">$1,200</span>
                <span className="text-xs text-accent-600 font-medium flex items-center">
                  <TrendingUp className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

          {/* Floating savings element */}
          <div className="absolute -bottom-4 -right-4 lg:-right-8 animate-float-delayed">
            <div className="glass rounded-2xl shadow-premium p-4 border border-white/40">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                  <Plus className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-xs font-semibold text-navy-600">დაზოგვის მიზანი</span>
              </div>
              <div className="w-32">
                <div className="flex justify-between text-[10px] text-navy-400 mb-1">
                  <span className="font-semibold text-navy-700">$8,200</span>
                  <span>$10,000</span>
                </div>
                <div className="h-2 rounded-full bg-navy-100 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-accent-400 to-accent-600" style={{ width: '82%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating trend badge */}
          <div className="absolute top-1/2 -right-2 lg:-right-10 animate-float-slow hidden sm:block">
            <div className="glass rounded-xl shadow-premium px-3 py-2 border border-white/40 flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-accent-500" />
              <div>
                <p className="text-[10px] text-navy-400">ხარჯები</p>
                <p className="text-xs font-bold text-navy-800">-8.3%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
