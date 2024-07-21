import HeroSection from "@/components/shared/Home/HeroSection";
import FeatureSection from "@/components/shared/Home/FeatureSection";
import CarbonFootprintCalculator from "@/components/shared/Home/CarbonFootprintCalculator";
import EcoFriendlyProductSelector from "@/components/shared/Home/EcoFriendlyProductSelector";
import RecycleItemFinder from "@/components/shared/Home/RecycleItemFinder";
import ItemExchangeMarketplace from "@/components/shared/Home/ItemExchangeMarketplace";
import EcoRoutes from "@/components/shared/Home/EcoRoutes";
import Quiz from "@/components/shared/Quiz/QuizBox";
import HealthAssistant from "@/components/shared/Home/HealthAssistant";
import EcoSwap from "@/components/shared/Home/EcoSwap";
import Faqs from "@/components/shared/Home/Faqs";
import Contact from "@/components/shared/ContactForm";
import NewsletterSection from "@/components/shared/Home/NewsletterSection";
import Team from "@/components/shared/Home/Team";

function HomePage() {
  return (
    <div className="bg-[#F3F3F3]">
      <section className="z-10 mt-20">
          <HeroSection />
      </section>
      <section className="z-10">
          <FeatureSection />
      </section>
      <section className="z-10">
          <CarbonFootprintCalculator />
      </section>
      <section className="z-10">
          <EcoFriendlyProductSelector />
      </section>
      <section className="z-10">
          <RecycleItemFinder />
      </section>
      <section className="z-10">
          <ItemExchangeMarketplace />
      </section>
        <section className="z-10">
            <HealthAssistant />
        </section>
        <section className="z-10">
            <EcoRoutes />
        </section>
        <section className="z-10">
            <Quiz />
        </section>
        <section className="z-10">
            <Faqs/>
        </section>
        <section className="z-10">
            <Contact/>
        </section>
        <section className="z-10">
            <NewsletterSection/>
        </section>
        <section className="z-10">
            <Team/>
        </section>
    </div>
  );
}

export default HomePage;
