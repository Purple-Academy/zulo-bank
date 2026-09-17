import { ArrowRight, CheckCircle2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll>
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-electric-600 via-electric-700 to-navy-800 p-8 sm:p-12 lg:p-20 shadow-premium-lg text-center">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent-400/15 blur-3xl" />
              <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-white/30 animate-float" />
              <div className="absolute bottom-20 right-20 w-3 h-3 rounded-full bg-white/20 animate-float-delayed" />
              <div className="absolute top-1/3 right-10 w-2.5 h-2.5 rounded-full bg-accent-300/30 animate-float-slow" />
            </div>

            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                მზად ხართ უკეთესი საბანკო გამოცდილებისთვის?
              </h2>
              <p className="mt-5 text-lg text-electric-100">
                შეუერთდით ათასობით მომხმარებელს, რომლებიც უკვე უფრო ჭკვიანად ბანკობენ. გახსენით
                ანგარიში რამდენიმე წუთში — ქაღალდის გარეშე, ფარული გადასახდელების გარეშე, უბრალოდ უკეთესი ბანკი.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 rounded-2xl bg-white text-navy-900 font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  გახდით მომხმარებელი
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="px-8 py-4 rounded-2xl glass-dark border border-white/30 text-white font-semibold hover:bg-white/10 transition-all">
                  დაგვიკავშირდით
                </button>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {['თვიური გადასახდელი არ არის', 'გახსენით 5 წუთში', 'ნებისმიერ დროს გაუქმება'].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-300" />
                    <span className="text-sm text-electric-100 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
