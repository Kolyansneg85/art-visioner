import Image from "next/image"

export default function IntelligentCourtyard() {
  return (
    <section id="intelligent-courtyard" className="py-16 bg-gray-50 scroll-mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: "Клубный дом «Визионер» — технологии и безопасность",
            description:
              "В клубном доме «Визионер» внедрены современные инженерные системы: шумоизоляция «плавающий пол», индивидуальная вентиляция, энергосберегающие фасады и собственная крышная котельная. За безопасность отвечают круглосуточная охрана, видеонаблюдение, электронные ключи для входа и современные противопожарные решения. Всё это обеспечивает высокий уровень комфорта и приватности для резидентов.",
            amenityFeature: [
              {
                "@type": "LocationFeatureSpecification",
                name: "Система шумоизоляции «плавающий пол»",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Энергосберегающие многослойные фасады",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Индивидуальная вентиляция и фильтрация воды",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Круглосуточная охрана и видеонаблюдение",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Система электронных ключей для доступа",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Современные противопожарные системы",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Помещения для хранения велосипедов и колясок",
                value: true,
              },
            ],
          }),
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-[0.2em] text-gray-700 uppercase font-history-pro">
            ТЕХНОЛОГИИ И БЕЗОПАСНОСТЬ
          </h2>
          <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              В клубном доме «Визионер» реализованы современные инженерные технологии, обеспечивающие оптимальный
              уровень комфорта и безопасности. В комплексе действует система шумоизоляции «плавающий пол», двойные
              перегородки между жилыми комнатами и санузлами, энергосберегающие многослойные фасады с облицовкой из
              натурального камня, а также индивидуальные системы приточно-вытяжной вентиляции.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Для теплоснабжения и горячей воды используется собственная крышная газовая котельная, а доступ к
              высокоскоростному интернету обеспечен единым узлом на все квартиры. В каждом доме предусмотрены помещения
              для хранения велосипедов и колясок.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Безопасность поддерживается круглосуточной охраной, видеонаблюдением по всей территории, паркингу и
              вестибюлям. Проход осуществляется по электронным ключам с индивидуальными идентификаторами, а вход
              возможен только со стороны внутреннего двора. В комплексе действуют современные системы противопожарной
              безопасности, а территория полностью огорожена и защищена от посторонних, что гарантирует приватность и
              спокойствие для каждого жителя.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/IMG_1006.webp"
                alt="Внутренний двор клубного дома Визионер с современной архитектурой, зонами отдыха и ландшафтным дизайном"
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
