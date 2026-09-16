import { Star, Quote } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'სარა ჯონსონი',
    role: 'მარკეტინგის დირექტორი, ნიუ-იორკი',
    avatar: 'from-electric-400 to-electric-600',
    rating: 5,
    text: 'Northwind-ზე გადასვლას ექვსი თვე გავიდა და ეს სრულიად შემცვალა. აპლიკაცია მშვენიერია, გადარიცხვები მყისიერია და გადასახდელებში ასობით დოლარი დავზოგე. საუკეთესო საბანკო გადაწყვეტილება ჩემი ცხოვრებიდან.',
  },
  {
    name: 'მაიკლ ჩენი',
    role: 'პროგრამისტი, სან-ფრანცისკო',
    avatar: 'from-accent-400 to-accent-600',
    rating: 5,
    text: 'სესხის განაცხადის პროცესი საოცრად მარტივი იყო. ტელეფონიდან გავაცანი და საათებში დადასტურება მივიღე. პროცენტები გამჭვირვალე და სამართალი იყო. სიურპრიზების და ფარული გადასახდელების გარეშე.',
  },
  {
    name: 'ემილი როდრიგესი',
    role: 'მცირე ბიზნესის მფლობელი, მაიამი',
    avatar: 'from-navy-400 to-navy-600',
    rating: 5,
    text: 'როგორც ბიზნესის მფლობელი, სანდო და სწრაფი ბანკი მჭირდება. Northwind ორივე მოთხოვნას აკმაყოფილებს. ქეშბექ ბარათმა ამ წელს ასობით დოლარი დამზოგა ბიზნეს ხარჯებზე.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-electric-600 tracking-wide uppercase">
            მიმოხილვები
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            რას ამბობენ ჩვენი მომხმარებლები
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            რეალური ისტორიები რეალური მომხმარებლებისგან, რომლებიც ენდობიან ჩვენ თავიანთ ფინანსებს.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <RevealOnScroll key={testimonial.name} delay={i * 120}>
              <div className="group h-full rounded-3xl border border-navy-100 bg-white p-7 hover:shadow-premium-lg hover:border-electric-200 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                {/* Quote icon */}
                <div className="absolute top-5 right-5 text-navy-100 group-hover:text-electric-100 transition-colors">
                  <Quote className="w-10 h-10" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 relative">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-navy-600 leading-relaxed mb-6 relative">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 relative">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.avatar} flex items-center justify-center text-white font-bold text-sm`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-900">{testimonial.name}</p>
                    <p className="text-xs text-navy-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
