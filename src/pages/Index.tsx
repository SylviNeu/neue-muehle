import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AboutPreview } from "@/components/home/AboutPreview";
import { TestimonialSection } from "@/components/home/TestimonialSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <TrustSection />
    <FeaturedProducts />
    <HowItWorks />
    <AboutPreview />
    <TestimonialSection />
  </Layout>
);

export default Index;
