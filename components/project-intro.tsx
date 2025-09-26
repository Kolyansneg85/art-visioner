"use client"

import Image from "next/image"
import { useState } from "react"
import PaymentOptionsModal from "./payment-options-modal"

export default function ProjectIntro() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Клубный дом «Коллекционер»",
    alternateName: "Коллекционер — клубный дом на Петроградской стороне",
    description:
      "Камерный дом в сердце Петроградского района Санкт‑Петербурга, воплощающий эстетику коллекционного искусства и изысканного стиля. Эклектичные фасады из натурального камня с башенками, латунными инкрустациями и крупными карнизами. Для ценителей приватности: авторское лобби с пинакотекой, панорамные окна, приватный зелёный двор‑патио и современные инженерные решения.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Чапыгина, 4",
      addressLocality: "Санкт-Петербург",
      postalCode: "197022",
      addressCountry: "RU",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "69 коллекционных квартир", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "Мансардные и двухуровневые форматы с террасами и высоким потолком",
        value: true,
      },
      { "@type": "LocationFeatureSpecification", name: "Авторское лобби с пинакотекой", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "Закрытый двор‑патио без машин, зоны отдыха и детские площадки",
        value: true,
      },
      { "@type": "LocationFeatureSpecification", name: "Коворкинг‑зоны и Wi‑Fi на территории", value: true },
      { "@type": "LocationFeatureSpecification", name: "Подземный паркинг", value: true },
      { "@type": "LocationFeatureSpecification", name: "Индивидуальная вентиляция в квартирах", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "Энергоэффективные фасады и высокий уровень безопасности",
        value: true,
      },
    ],
    keywords:
      "Клубный дом Коллекционер, Петроградская сторона, эклектика, пинакотека, мансардные квартиры, двухуровневые квартиры, террасы, приватный двор‑патио, подземный паркинг, высокие потолки",
    hasMap: "https://yandex.ru/maps/?text=Санкт-Петербург%2C%20ул.%20Чапыгина%204",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-16 bg-stone-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h2 className="text-xl md:text-2xl lg:text-2xl font-light text-[#a8996e] leading-tight font-history-pro">
                Клубный дом Визионер в Петроградском районе
              </h2>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  ЖК «Визионер» — клубный дом премиум-класса в Петроградском районе Санкт-Петербурга на улице Средняя Колтовская, 9-11. Уникальная архитектура, созданная Евгением Герасимовым, гармонично соединяет современность и историческую эстетику, формируя стиль будущего в окружении лучших парков, набережных и культурных объектов города.
                </p>

                <p>
                  Три корпуса различной этажности объединены охраняемым приватным двором с взрослыми деревьями и ландшафтным дизайном, тематическими зонами для отдыха, развлечений и безопасной детской площадкой. Всего — 225 квартир площадью от 32 до 147 м²: на верхних этажах расположены резиденции с панорамными террасами, а окна-эркеры открывают живописные виды на центр Петербурга.
                </p>

                <p>
                  В комплексе внедрены современные инженерные решения: технология «плавающий пол» и усиленная звукоизоляция, независимая система вентиляции, собственная крышная котельная, система раздельного сбора мусора, подземный паркинг и безопасный бесконтактный доступ.
                </p>
              </div>

              <button
                onClick={() => setIsPaymentModalOpen(true)}
                className="bg-[#a8996e] hover:bg-[#9d8f5f] text-white px-6 py-3 rounded-[22px] font-light tracking-wide transition-colors"
              >
                Как купить
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/project-intro-building-new.jpeg"
                  alt="Клубный дом «Визионер» на Петроградской стороне - современная архитектура из светлого кирпича с регулярной сеткой окон и элегантными декоративными элементами в историческом центре Санкт-Петербурга"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PaymentOptionsModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </>
  )
}
