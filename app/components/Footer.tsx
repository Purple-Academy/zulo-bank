import {
  Landmark,
 
  Mail,
  Phone,
  MapPin,
  type LucideIcon,
} from 'lucide-react';

const LINKS = {
  'პროდუქტები': ['საბანკო ანგარიში', 'Visa / Mastercard', 'სამომხმარებლო სესხები', 'იპოთეკა', 'დაზოგვა', 'ციფრული ბანკი'],
  'კომპანია': ['ჩვენ შესახებ', 'კარიერა', 'პრესა', 'ბლოგი', 'ინვესტორები', 'პარტნიორები'],
  'მხარდაჭერა': ['დახმარების ცენტრი', 'დაგვიკავშირდით', 'ხშირი კითხვები', 'უსაფრთხოება', 'კონფიდენციალურობის პოლიტიკა', 'მომსახურების პირობები'],
};

const SOCIAL: { icon: LucideIcon; label: string }[] = [
 
];

const CONTACT = [
  { icon: Mail, text: 'support@northwind.bank' },
  { icon: Phone, text: '+1 (800) 555-0199' },
  { icon: MapPin, text: '350 Fifth Ave, New York, NY 10118' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200 pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-500 to-electric-700 flex items-center justify-center shadow-glow">
                <Landmark className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Northwind</span>
            </a>
            <p className="text-sm text-navy-400 leading-relaxed max-w-sm">
              Northwind არის თანამედროვე ციფრული ბანკი, აგებული თქვენი დღევანდელი ცხოვრების წესისთვის.
              ჭკვიანი, მარტივი და უსაფრთხო ბანკი, რომელიც თქვენს ცხოვრებას ესადაგება — სადაც არ უნდა იყოთ.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              {CONTACT.map((item) => (
                <div key={item.text} className="flex items-center gap-2.5">
                  <item.icon className="w-4 h-4 text-electric-400 flex-shrink-0" />
                  <span className="text-sm text-navy-300">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {SOCIAL.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-navy-300 hover:bg-electric-600 hover:text-white hover:border-electric-600 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(LINKS).map(([heading, items]) => (
              <div key={heading}>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-4">
                  {heading}
                </h4>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-navy-400 hover:text-electric-300 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-400">
            © {new Date().getFullYear()} Northwind Bank, Inc. ყველა უფლება დაცულია.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-navy-400 hover:text-electric-300 transition-colors">კონფიდენციალურობა</a>
            <a href="#" className="text-sm text-navy-400 hover:text-electric-300 transition-colors">პირობები</a>
            <a href="#" className="text-sm text-navy-400 hover:text-electric-300 transition-colors">ქუქიები</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
