"use client"

import Image from "next/image"
import { useState } from "react"
import PaymentOptionsModal from "./payment-options-modal"

export default function ProjectIntro() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Клубный дом «Визионер»",
    alternateName: "Visioner — клубный дом на Петроградской стороне",
    description:
      "Жилой комплекс «Визионер» — современный клубный дом премиум-класса в самом центре Петроградской стороны Санкт-Петербурга (Средняя Колтовская, 9-11). Проект включает три корпуса разной этажности с уникальной архитектурой Евгения Герасимова, приватным зелёным двором без машин, террасами, эркерами и выразительными фасадами. Всего 225 квартир европланировки с высотой потолков от 3 м, современными инженерными системами и расширенными возможностями зонирования.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Средняя Колтовская, 9-11",
      addressLocality: "Санкт-Петербург",
      postalCode: "197022",
      addressCountry: "RU",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Три корпуса — камерный пятиэтажный и два девятиэтажных",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "225 квартир от 32 до 147 м² с европланировками, террасами и эркерами",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Приватный ландшафтный двор без машин с зонами отдыха и игровыми площадками",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Подземный паркинг и кладовые помещения",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Собственный фитнес-зал, массажный кабинет, залы для йоги и пилатеса",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Современные инженерные решения: плавающий пол, независимая вентиляция, крышная котельная",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Повышенный уровень безопасности: охрана, видеонаблюдение, доступ по электронным ключам",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Рядом — лучшие гимназии, сады, рестораны, бутики и спорт-клубы Петроградки",
        value: true,
      },
    ],
    keywords:
      "Клубный дом Визионер, Visioner, Петроградская сторона, Евгений Герасимов, террасы, панорамные окна, приватный двор, подземный паркинг, фитнес-зал, премиум-класс, ландшафт, современная архитектура, СПб",
    hasMap: "https://yandex.ru/maps/?text=Санкт-Петербург%2C%20ул.%20Средняя%20Колтовская%209-11",
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
                  ЖК «Визионер» — клубный дом премиум-класса в Петроградском районе Санкт-Петербурга на улице Средняя
                  Колтовская, 9-11. Уникальная архитектура, созданная Евгением Герасимовым, гармонично соединяет
                  современность и историческую эстетику, формируя стиль будущего в окружении лучших парков, набережных и
                  культурных объектов города.
                </p>

                <p>
                  Три корпуса различной этажности объединены охраняемым приватным двором с взрослыми деревьями и
                  ландшафтным дизайном, тематическими зонами для отдыха, развлечений и безопасной детской площадкой.
                  Всего — 225 квартир площадью от 32 до 147 м²: на верхних этажах расположены резиденции с панорамными
                  террасами, а окна-эркеры открывают живописные виды на центр Петербурга.
                </p>

                <p>
                  В комплексе внедрены современные инженерные решения: технология «плавающий пол» и усиленная
                  звукоизоляция, независимая система вентиляции, собственная крышная котельная, система раздельного
                  сбора мусора, подземный паркинг и безопасный бесконтактный доступ.
                </p>

                <p>
                  Дополнительно, в ЖК «Визионер» есть собственный фитнес-зал, массажный кабинет, залы для йоги и
                  пилатеса, что делает его идеальным местом для тех, кто ценит активный образ жизни и комфортные условия
                  проживания.
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
