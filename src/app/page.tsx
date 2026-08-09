import Button from "@/components/common/Button";
import CTASection from "@/components/page_components/home/CTASection";
import FAQSection from "@/components/page_components/home/FAQSection";
import HeroSection from "@/components/page_components/home/HeroSection";
import ReviewSection from "@/components/page_components/home/ReviewSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <ReviewSection/>
      <FAQSection/>
      <CTASection/>
    </>
  );
}
