import Image from "next/image"

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-16 bg-gray-50 scroll-mt-20">
      {/* JSON-LD разметка для SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: "Клубный дом Визионер",
            description:
              "Клубный дом «Визионер» состоит из трёх корпусов — камерного пятиэтажного и двух девятиэтажных, объединённых приватным двором — тихой, охраняемой круглосуточно вселенной внутри города. Инфраструктура ориентирована на ежедневный комфорт и приватность: просторные лобби с высокими потолками, переговорные комнаты, кафе и арт-галерея с коллекцией живописи и скульптуры создают атмосферу эксклюзивного клуба. Внутренний двор-патио — закрытая зелёная территория без машин с ландшафтным дизайном, зонами отдыха и рабочими пространствами на свежем воздухе, игровой площадкой с безопасными покрытиями, освещением и Wi-Fi. Дом оснащён подземным паркингом с лифтом, кладовыми, помещениями для хранения велосипедов и колясок, современными системами вентиляции, шумоизоляции, энергосберегающими фасадами и собственной крышной котельной, дополненными системами контроля доступа и видеонаблюдения.",
            image: "/images/lobby-interior.webp",
            amenityFeature: [
              { "@type": "LocationFeatureSpecification", name: "Приватный двор без машин", value: true },
              {
                "@type": "LocationFeatureSpecification",
                name: "Высокие потолки в лобби и переговорные комнаты",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Арт-галерея с коллекцией живописи и скульптуры",
                value: true,
              },
              { "@type": "LocationFeatureSpecification", name: "Подземный паркинг с лифтом", value: true },
              {
                "@type": "LocationFeatureSpecification",
                name: "Игровая площадка с натуральным покрытием и Wi-Fi",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Современные инженерные системы вентиляции и шумоизоляции",
                value: true,
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Система видеонаблюдения и контроля доступа",
                value: true,
              },
            ],
          }),
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-[0.2em] text-gray-700 uppercase font-history-pro">
            ИНФРАСТРУКТУРА И ПРОСТРАНСТВО
          </h2>
          <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Клубный дом «Визионер» состоит из трёх корпусов — камерного пятиэтажного и двух выразительных
              девятиэтажных, объединённых приватным двором — тихой вселенной внутри города, охраняемой круглосуточно.
              Инфраструктура ориентирована на комфорт и приватность резидентов: в лобби просторные зоны с высокими
              потолками, переговорные комнаты, кафе и зона арт-галереи с коллекцией живописи и скульптуры, создавая
              атмосферу эксклюзивного клуба.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Внутренний двор-патио — закрытая зелёная территория без машин с ландшафтным дизайном, зонами отдыха и
              рабочими пространствами на свежем воздухе. Для семей предусмотрены игровые площадки с безопасными
              материалами, освещение в вечернее время и Wi-Fi по всей территории.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Дом оснащён подземным паркингом с лифтом, кладовыми, помещениями для хранения велосипедов и колясок,
              современными инженерными системами — вентиляцией, шумоизоляцией, энергосберегающими фасадами и собственной
              крышной котельной. Безопасность дополнена системой контроля доступа и видеонаблюдения.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/lobby-interior.webp"
                alt="Современное лобби клубного дома Визионер с высокими потолками, элегантной мебелью и арт-галереей"
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
