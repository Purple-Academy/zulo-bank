import Showcase from "~/components/ShowCase";
import CTA from "~/components/CTA";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Loans from "~/components/Loans";
import MobileBanking from "~/components/MobileBanking";
import Products from "~/components/Products";
import Security from "~/components/Security";
import Stats from "~/components/Stats";
import Testimonials from "~/components/Testimonials";

export function Welcome() {
  return (
   <div className="min-h-screen bg-white overflow-x-hidden">
      
       <Header />

        <main>
        <Hero />
        <Products />
        <Stats />
        <Loans />
        <Showcase />
        <MobileBanking />
        <Security />
        <Testimonials />
        <CTA />
      </main>
      <Footer/>
    </div>
  );
}
