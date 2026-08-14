import GalleryImages from './GalleryImages';
import GalleryTitle from './GalleryTitle';
function GallerySection() {
    return (
        <section className='py-12 px-4 md:py-20 md:px-8'>
            <div className="h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto">
                <GalleryTitle/>
                {/* gallery */}
                <GalleryImages/>
            </div>
        </section>
    )
}

export default GallerySection
