import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturesOverview from "@/components/sections/FeaturesOverview";
import GetExtension from "@/components/sections/GetExtension";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <FeaturesOverview />
      <GetExtension />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
