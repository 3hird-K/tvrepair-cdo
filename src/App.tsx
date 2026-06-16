import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Problems } from "@/components/Problems";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { Coverage } from "@/components/Coverage";
import { Booking } from "@/components/Booking";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { FloatingCall } from "@/components/FloatingCall";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <div className="hidden md:block">
          <TrustStrip />
        </div>
        <Problems />
        <div className="hidden md:block">
          <Process />
        </div>
        <div className="hidden md:block">
          <WhyUs />
        </div>
        <div className="hidden md:block">
          <Coverage />
        </div>
        <Booking />
        <div className="hidden md:block">
          <Faq />
        </div>
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
