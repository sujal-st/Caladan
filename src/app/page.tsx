import Button from "@/components/common/Button";
import CTASection from "@/components/page_components/home/CTASection";
import FAQSection from "@/components/page_components/home/FAQSection";
import GallerySection from "@/components/page_components/home/GallerySection";
import HeroSection from "@/components/page_components/home/HeroSection";
import ReefSection from "@/components/page_components/home/ReefSection";
import ReviewSection from "@/components/page_components/home/ReviewSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <GallerySection/>
      <ReefSection/>
      <ReviewSection/>
      <FAQSection/>
      <CTASection/>
    </>
  );
}
