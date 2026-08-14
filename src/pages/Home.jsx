import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";
import BusinessAreas from "../components/home/BusinessAreas";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedProjects from "../components/home/FeaturedProjects";
import GalleryPreview from "../components/home/GalleryPreview";
import ClientsSection from "../components/home/ClientsSection";
import Testimonials from "../components/home/Testimonials";
import HomeCTA from "../components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <BusinessAreas />
      <WhyChooseUs />
      <FeaturedProjects />
      <GalleryPreview />
      <ClientsSection />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
