import AboutMain from "@/components/page_components/about/AboutMain"
import CTASection from "@/components/page_components/about/CTASection"
import FAQAbout from "@/components/page_components/about/FAQAbout"
import GallerySection from "@/components/page_components/about/GallerySection"
import JournerySection from "@/components/page_components/about/JournerySection"
import StatsSection from "@/components/page_components/about/StatsSection"

function page() {

    return (
        <>
            <AboutMain />
            <StatsSection />
            <JournerySection/>
            <GallerySection />
            <FAQAbout />
            <CTASection />
        </>
    )
}

export default page
