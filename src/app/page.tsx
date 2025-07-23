import AchievementsSection from '@/components/Achievement';
import FAQSection from '@/components/Faq';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ProductSection from '@/components/Product';
import ServicesSection from '@/components/Service';


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductSection />
      <ServicesSection />
      <AchievementsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
