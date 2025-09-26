import Image from "next/image"

export default function Location() {
  const locationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Клубный дом «Визионер»",
    description:
      "Клубный дом «Визионер» расположен в самом сердце Петроградской стороны, одном из самых престижных и исторически насыщенных районов Санкт-Петербурга. Проект состоит из трех корпусов, объединенных приватным двором без машин, охраняемым круглосуточно. Квартиры отличаются архитектурой, вдохновленной северной эстетикой и современными технологиями комфорта.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Средняя Колтовская ул., 9-11",
      addressLocality: "Санкт-Петербург",
      addressRegion: "Петроградский район",
      postalCode: "197022",
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "59.969",
      longitude: "30.312",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Приватный внутренний двор без машин",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Охрана и видеонаблюдение 24/7",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Подземный паркинг и гостевая парковка",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Современные системы шумоизоляции и вентиляции",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Камеры для хранения колясок и велосипедов",
        value: true,
      },
    ],
    keywords:
      "Визионер, Петроградская сторона, клубный дом, комфорт, охраняемый двор, парковка, архитектура, Санкт-Петербург",
    url: "https://art-visioner.ru",
  }

  return (
    <section id="location" className="py-16 bg-gray-50 scroll-mt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd) }} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-[0.2em] text-gray-700 uppercase font-history-pro">
            ЛОКАЦИЯ
          </h2>
          <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Клубный дом «Визионер» расположен в престижном историческом центре Петроградской стороны — месте с
              уникальной атмосферой интеллигентной тишины, архитектурных традиций и культурной насыщенности. В шаге от
              дома находятся лучшие образовательные учреждения, бутики, рестораны, музеи и парки, включая набережные
              Невки и Ботанический сад. Закрытый двор-патио с ландшафтным дизайном, детскими площадками и зонами для
              отдыха создаёт камерную приватную среду без транспорта, обеспечивая гармоничный баланс между городской
              жизнью и уединением.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Проект включает три архитектурных корпуса с выразительными фасадами в стиле конструктивизма,
              подчёркивающими современный облик здания с элементами северной эстетики — питерские эркеры и плавные
              формы. Современные технологии отделки, автономные инженерные системы и дополнительные меры шумоизоляции
              обеспечивают комфорт и безопасность резидентов. Удобная транспортная доступность, близость метро
              «Чкаловская» и развитая инфраструктура дополняют престижное местоположение, превращая «Визионер» в
              уникальный городской оазис и выгодную инвестицию.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/location-aerial-view.webp"
                alt="Аэрофотосъемка клубного дома Визионер на Петроградской стороне - современная архитектура в историческом районе Санкт-Петербурга"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
