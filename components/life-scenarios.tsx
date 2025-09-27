import Image from "next/image"

export default function LifeScenarios() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: "Клубный дом «Визионер» — спортзал и удобства",
            description:
              "В комплексе «Визионер» для резидентов доступен современный спортзал с профессиональным оборудованием, душевыми и массажным кабинетом, а также зоны для йоги и пилатеса. Для удобства жителей организованы кладовые, помещения для велосипедов и колясок, бесплатный Wi-Fi во дворе и игровые площадки.",
            amenityFeature: [
              {
                "@type": "LocationFeatureSpecification",
                name: "Современный спортзал с тренажёрами",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Зоны для йоги, пилатеса и массажный кабинет",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Душевые кабины в спортзале",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Кладовые и помещения для хранения велосипедов и колясок",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Колясочные в каждой парадной",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Бесплатный Wi-Fi во дворе",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Игровые и прогулочные площадки",
                value: true,
              },
            ],
          }),
        }}
      />

      <section id="life-scenarios" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-700 uppercase font-history-pro">
              СПОРТЗАЛ И УДОБСТВА
            </h2>
            <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/IMG_1004.webp"
                  alt="Современный спортзал клубного дома «Визионер» с профессиональным оборудованием для кардио и силовых тренировок, зонами для йоги и пилатеса"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                В клубном доме «Визионер» для резидентов предусмотрен собственный современный спортзал, площадью более
                150 м², оснащённый профессиональным оборудованием для кардио- и силовых тренировок. Здесь созданы
                отдельные зоны для йоги и пилатеса, устроены душевые и массажный кабинет, что позволяет поддерживать
                здоровье и физическую форму без необходимости покидать территорию дома.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Для дополнительного удобства жителей в комплексе обустроены функциональные кладовые, помещения для
                хранения велосипедов и колясок, а также просторные колясочные в каждой парадной. В лобби и общественных
                пространствах созданы зоны для отдыха и работы, а внутренний двор оборудован бесплатным Wi-Fi, уличными
                обогревателями, игровыми площадками и местами для прогулок.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
