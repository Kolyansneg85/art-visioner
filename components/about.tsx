import { Building, Users, Car, TreePine } from "lucide-react"

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: "Клубный дом «Визионер»",
    description:
      "Клубный дом «Визионер» — воплощение современной архитектуры, приватности и статуса в центре Петроградского района Санкт-Петербурга. Выразительные фасады из натурального камня, приватный закрытый двор с ландшафтным озеленением, тематические зоны отдыха и детская площадка европейского уровня. Видео наблюдение и круглосуточная охрана обеспечивают безопасность. Лобби и входные зоны оформлены в авторском дизайн-проекте с использованием натурального камня и декоративных элементов, создавая атмосферу уюта и престижа.",
    numberOfBuildings: 3,
    numberOfRooms: 225,
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Современная архитектура",
        description: "Три корпуса с выразительными фасадами и панорамными окнами",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Эксклюзивные квартиры",
        description: "225 квартир с европланировками, террасами и эркерами площадью от 32 до 147 м²",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Подземный паркинг",
        description: "153 машино-места с лифтом и кладовыми, 22 гостевых места",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Закрытый двор-патио",
        description: "Ландшафтный дизайн, зоны отдыха, детская площадка, бесплатный Wi-Fi",
      },
    ],
  }

  return (
    <section id="about" className="pt-32 pb-16 bg-white scroll-mt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wide text-gray-900 font-history-pro">
            О ПРОЕКТЕ
          </h2>
          <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Клубный дом «Визионер» — воплощение современной архитектуры, приватности и статуса в центре Петроградского
            района Санкт-Петербурга. Выразительные фасады из натурального камня, приватный закрытый двор с ландшафтным
            озеленением, тематические зоны отдыха и детская площадка европейского уровня. Видео наблюдение и
            круглосуточная охрана обеспечивают безопасность. Лобби и входные зоны оформлены в авторском дизайн-проекте с
            использованием натурального камня и декоративных элементов, создавая атмосферу уюта и престижа.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#a8996e]/20 transition-colors">
                <Building className="h-10 w-10 text-[#a8996e]" strokeWidth={1.2} />
              </div>
            </div>
            <h3 className="text-2xl font-light mb-3 text-gray-900">3 СЕКЦИИ</h3>
            <p className="text-gray-600 font-light">Три корпуса с выразительными фасадами и панорамными окнами</p>
          </div>

          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#a8996e]/20 transition-colors">
                <Users className="h-10 w-10 text-[#a8996e]" strokeWidth={1.2} />
              </div>
            </div>
            <h3 className="text-2xl font-light mb-3 text-gray-900">225 КВАРТИР</h3>
            <p className="text-gray-600 font-light">
              225 квартир с европланировками, террасами и эркерами площадью от 32 до 147 м²
            </p>
          </div>

          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#a8996e]/20 transition-colors">
                <Car className="h-10 w-10 text-[#a8996e]" strokeWidth={1.2} />
              </div>
            </div>
            <h3 className="text-2xl font-light mb-3 text-gray-900">ПАРКИНГ</h3>
            <p className="text-gray-600 font-light">
              Подземный паркинг на 153 машино-места с лифтом и кладовыми и 22 гостевых места
            </p>
          </div>

          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#a8996e]/20 transition-colors">
                <TreePine className="h-10 w-10 text-[#a8996e]" strokeWidth={1.2} />
              </div>
            </div>
            <h3 className="text-2xl font-light mb-3 text-gray-900">ЗАКРЫТЫЙ ДВОР-ПАТИО</h3>
            <p className="text-gray-600 font-light">
              Ландшафтный дизайн, зоны отдыха, детская площадка, бесплатный Wi-Fi
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
