import { useEffect, useState } from "react";
import { Menu, X, Landmark } from "lucide-react";
import { Link } from "react-router";

const NAV_ITEMS = [
  { label: "მთავარი", href: "#home" },
  { label: "პროდუქტები", href: "#products" },
  { label: "სესხები", href: "#loans" },
  { label: "ბარათები", href: "#cards" },
  { label: "ჩვენ შესახებ", href: "#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-premium py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-500 to-electric-700 flex items-center justify-center shadow-glow transition-transform group-hover:scale-105">
            <Landmark className="w-5 h-5 text-black" strokeWidth={2.5} />
          </div>
          <span
            className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? "text-navy-900" : "text-navy-900"}`}
          >
            Northwind
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-navy-600 hover:text-navy-900 hover:bg-navy-50 transition-all"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link to="/auth/sign-in">
            <button className="px-6 py-2.5 rounded-xl bg-navy-900 text-white text-sm font-semibold hover:bg-electric-600 transition-all hover:shadow-glow hover:-translate-y-0.5">
              შესვლა
            </button>
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-navy-900 hover:bg-navy-50 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-5 mt-3 glass rounded-2xl shadow-premium p-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-medium text-navy-700 hover:bg-navy-50 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Link to="/auth/sign-in">
            <button className="w-full mt-2 px-6 py-3 rounded-xl bg-navy-900 text-white text-sm font-semibold">
              შესვლა
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
