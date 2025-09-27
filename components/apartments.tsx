"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import ContactModal from "./contact-modal"

const apartmentTypes = [
  { id: 0, label: "1", name: "1-комнатные" },
  { id: 1, label: "2", name: "2-комнатные" },
  { id: 2, label: "3", name: "3-комнатные" },
  { id: 3, label: "4", name: "4-комнатные" },
]

const apartments = {
  0: [
    {
      id: 10,
      type: "1-ком. квартира 41,2 м²",
      area: "41,2",
      deliveryDate: "Срок сдачи – III квартал 2028",
      planType: "Тип планировки: 1-1",
      floorPlan: "/images/1room-plan-1.webp", // updated image path to webp format
    },
    {
      id: 11,
      type: "1-ком. квартира 45,6 м²",
      area: "45,6",
      deliveryDate: "Срок сдачи – III квартал 2028",
      planType: "Тип планировки: 1-2B",
      floorPlan: "/images/1room-plan-2.webp", // updated image path to webp format
    },
    {
      id: 12,
      type: "1-ком. квартира 48,1 м²",
      area: "48,1",
      deliveryDate: "Срок сдачи – III квартал 2028",
      planType: "Тип планировки: 1-4",
      floorPlan: "/images/1room-plan-3.webp", // updated image path to webp format
    },
    {
      id: 13,
      type: "1-ком. квартира 50,3 м²",
      area: "50,3",
      deliveryDate: "Срок сдачи – III квартал 2028",
      planType: "Тип планировки: 1-5",
      floorPlan: "/images/1room-plan-4.webp", // updated image path to webp format
    },
    {
      id: 14,
      type: "1-ком. квартира 52,2 м²",
      area: "52,2",
      deliveryDate: "Срок сдачи – III квартал 2028",
      planType: "Тип планировки: 1-6",
      floorPlan: "/images/1room-plan-5.webp", // updated image path to webp format
    },
    {
      id: 15,
      type: "1-ком. квартира 55,8 м²",
      area: "55,8",
      deliveryDate: "Срок сдачи – III квартал 2028",
      planType: "Тип планировки: 1-9",
      floorPlan: "/images/1room-plan-6.webp", // updated image path to webp format
    },
  ],
  1: [
    {
      id: 16,
      type: "2-ком. квартира 67,8 м²",
      area: "67,8",
      deliveryDate: "Срок сдачи – III квартал 2028",
      planType: "Тип планировки: 2-4В",
      floorPlan: "/images/2room-plan-1.webp",
    },
    {
      id: 17,
      type: "2-ком. квартира 72,5 м²",
      area: "72,5",
      deliveryDate: "Срок сдачи – III квартал 2028",
      planType: "Тип планировки: 2-4В*",
      floorPlan: "/images/2room-plan-2.webp",
    },
    {
      id: 18,
      type: "2-ком. квартира 88,8 м²",
      area: "88,8",
      deliveryDate: "Срок сдачи – III квартал 2028",
      planType: "Тип планировки: 2-10",
      floorPlan: "/images/2room-plan-3.webp",
    },
  ],
  2: [
    {
      id: 4,
      type: "3-ком. квартира 95,4 м²",
      area: "95,4",
      deliveryDate: "Срок сдачи – III квартал 2028",
      planType: "Тип планировки: 3-4В",
      floorPlan: "/images/3room-plan-1.webp",
    },
    {
      id: 5,
      type: "3-ком. квартира 102,6 м²",
      area: "102,6",
      deliveryDate: "Срок сдачи – III квартал 2028",
      planType: "Тип планировки: 3-6",
      floorPlan: "/images/3room-plan-2.webp",
    },
    {
      id: 6,
      type: "3-ком. квартира 111,1 м²",
      area: "111,1",
      deliveryDate: "Срок сдачи – III квартал 2028",
      planType: "Тип планировки: 3-8А",
      floorPlan: "/images/3room-plan-3.webp",
    },
    {
      id: 19,
      type: "3-ком. квартира 111,2 м²",
      area: "111,2",
      deliveryDate: "Срок сдачи – III квартал 2028",
      planType: "Тип планировки: 3-9",
      floorPlan: "/images/3room-plan-4.webp",
    },
    {
      id: 20,
      type: "3-ком. квартира 119,1 м²",
      area: "119,1",
      deliveryDate: "Срок сдачи – III квартал 2028",
      planType: "Тип планировки: 3-12",
      floorPlan: "/images/3room-plan-5.webp",
    },
    {
      id: 21,
      type: "3-ком. квартира 119,2 м²",
      area: "119,2",
      deliveryDate: "Срок сдачи – III квартал 2028",
      planType: "Тип планировки: 3-13",
      floorPlan: "/images/3room-plan-6.webp",
    },
  ],
  3: [
    {
      id: 22,
      type: "4-ком. квартира 110,1 м²",
      area: "110,1",
      deliveryDate: "Срок сдачи – III квартал 2028",
      planType: "Тип планировки: 4-1АТ",
      floorPlan: "/images/4room-plan-1.webp",
    },
  ],
}

const apartmentJsonLd = {
  0: [
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "1-комнатная квартира тип 1-1",
      description:
        "Квартира площадью 41.2 м² с удобной планировкой в клубном доме Визионер. Срок сдачи: III квартал 2028.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 41.2,
        unitCode: "MTK",
      },
      availability: "https://schema.org/InStock",
      expectedProposition: {
        "@type": "Offer",
        availabilityStarts: "2028-07-01",
        priceCurrency: "RUB",
      },
      image: "/images/1room-plan-1.webp",
    },
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "1-комнатная квартира тип 1-2B",
      description:
        "Квартира площадью 45.6 м² с удобной планировкой в клубном доме Визионер. Срок сдачи: III квартал 2028.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 45.6,
        unitCode: "MTK",
      },
      availability: "https://schema.org/InStock",
      expectedProposition: {
        "@type": "Offer",
        availabilityStarts: "2028-07-01",
        priceCurrency: "RUB",
      },
      image: "/images/1room-plan-2.webp",
    },
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "1-комнатная квартира тип 1-4",
      description: "Квартира площадью 48.1 м² в клубном доме Визионер. Срок сдачи: III квартал 2028.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 48.1,
        unitCode: "MTK",
      },
      availability: "https://schema.org/InStock",
      expectedProposition: {
        "@type": "Offer",
        availabilityStarts: "2028-07-01",
        priceCurrency: "RUB",
      },
      image: "/images/1room-plan-3.webp",
    },
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "1-комнатная квартира тип 1-5",
      description: "Квартира площадью 50.3 м² в клубном доме Визионер. Срок сдачи: III квартал 2028.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 50.3,
        unitCode: "MTK",
      },
      availability: "https://schema.org/InStock",
      expectedProposition: {
        "@type": "Offer",
        availabilityStarts: "2028-07-01",
        priceCurrency: "RUB",
      },
      image: "/images/1room-plan-4.webp",
    },
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "1-комнатная квартира тип 1-6",
      description: "Квартира площадью 52.2 м² в клубном доме Визионер. Срок сдачи: III квартал 2028.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 52.2,
        unitCode: "MTK",
      },
      availability: "https://schema.org/InStock",
      expectedProposition: {
        "@type": "Offer",
        availabilityStarts: "2028-07-01",
        priceCurrency: "RUB",
      },
      image: "/images/1room-plan-5.webp",
    },
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "1-комнатная квартира тип 1-9",
      description: "Квартира площадью 55.8 м² в клубном доме Визионер. Срок сдачи: III квартал 2028.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 55.8,
        unitCode: "MTK",
      },
      availability: "https://schema.org/InStock",
      expectedProposition: {
        "@type": "Offer",
        availabilityStarts: "2028-07-01",
        priceCurrency: "RUB",
      },
      image: "/images/1room-plan-6.webp",
    },
  ],
  1: [
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "2-комнатная квартира тип 2-4В",
      description: "Квартира площадью 67.8 м² в клубном доме Визионер. Срок сдачи: III квартал 2028.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 67.8,
        unitCode: "MTK",
      },
      availability: "https://schema.org/InStock",
      expectedProposition: {
        "@type": "Offer",
        availabilityStarts: "2028-07-01",
        priceCurrency: "RUB",
      },
      image: "/images/2room-plan-1.webp",
    },
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "2-комнатная квартира тип 2-4В*",
      description: "Квартира площадью 72.5 м² в клубном доме Визионер. Срок сдачи: III квартал 2028.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 72.5,
        unitCode: "MTK",
      },
      availability: "https://schema.org/InStock",
      expectedProposition: {
        "@type": "Offer",
        availabilityStarts: "2028-07-01",
        priceCurrency: "RUB",
      },
      image: "/images/2room-plan-2.webp",
    },
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "2-комнатная квартира тип 2-10",
      description: "Квартира площадью 88.8 м² в клубном доме Визионер. Срок сдачи: III квартал 2028.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 88.8,
        unitCode: "MTK",
      },
      availability: "https://schema.org/InStock",
      expectedProposition: {
        "@type": "Offer",
        availabilityStarts: "2028-07-01",
        priceCurrency: "RUB",
      },
      image: "/images/2room-plan-3.webp",
    },
  ],
  2: [
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "3-комнатная квартира тип 3-4В",
      description: "Квартира площадью 95.4 м² в клубном доме Визионер. Срок сдачи: III квартал 2028.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 95.4,
        unitCode: "MTK",
      },
      availability: "https://schema.org/InStock",
      expectedProposition: {
        "@type": "Offer",
        availabilityStarts: "2028-07-01",
        priceCurrency: "RUB",
      },
      image: "/images/3room-plan-1.webp",
    },
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "3-комнатная квартира тип 3-6",
      description: "Квартира площадью 102.6 м² в клубном доме Визионер. Срок сдачи: III квартал 2028.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 102.6,
        unitCode: "MTK",
      },
      availability: "https://schema.org/InStock",
      expectedProposition: {
        "@type": "Offer",
        availabilityStarts: "2028-07-01",
        priceCurrency: "RUB",
      },
      image: "/images/3room-plan-2.webp",
    },
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "3-комнатная квартира тип 3-8А",
      description: "Квартира площадью 111.1 м² в клубном доме Визионер. Срок сдачи: III квартал 2028.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 111.1,
        unitCode: "MTK",
      },
      availability: "https://schema.org/InStock",
      expectedProposition: {
        "@type": "Offer",
        availabilityStarts: "2028-07-01",
        priceCurrency: "RUB",
      },
      image: "/images/3room-plan-3.webp",
    },
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "3-комнатная квартира тип 3-9",
      description: "Квартира площадью 111.2 м² в клубном доме Визионер. Срок сдачи: III квартал 2028.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 111.2,
        unitCode: "MTK",
      },
      availability: "https://schema.org/InStock",
      expectedProposition: {
        "@type": "Offer",
        availabilityStarts: "2028-07-01",
        priceCurrency: "RUB",
      },
      image: "/images/3room-plan-4.webp",
    },
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "3-комнатная квартира тип 3-12",
      description: "Квартира площадью 119.1 м² в клубном доме Визионер. Срок сдачи: III квартал 2028.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 119.1,
        unitCode: "MTK",
      },
      availability: "https://schema.org/InStock",
      expectedProposition: {
        "@type": "Offer",
        availabilityStarts: "2028-07-01",
        priceCurrency: "RUB",
      },
      image: "/images/3room-plan-5.webp",
    },
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "3-комнатная квартира тип 3-13",
      description: "Квартира площадью 119.2 м² в клубном доме Визионер. Срок сдачи: III квартал 2028.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 119.2,
        unitCode: "MTK",
      },
      availability: "https://schema.org/InStock",
      expectedProposition: {
        "@type": "Offer",
        availabilityStarts: "2028-07-01",
        priceCurrency: "RUB",
      },
      image: "/images/3room-plan-6.webp",
    },
  ],
  3: [
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "4-комнатная квартира тип 4-1АТ",
      description:
        "Квартира площадью 110.1 м² в клубном доме Визионер с просторной кухней-гостиной, изолированными спальнями, несколькими санузлами и большой террасой площадью 41.9 м². Срок сдачи: III квартал 2028.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 110.1,
        unitCode: "MTK",
      },
      availability: "https://schema.org/InStock",
      expectedProposition: {
        "@type": "Offer",
        availabilityStarts: "2028-07-01",
        priceCurrency: "RUB",
      },
      image: "/images/4room-plan-1.webp",
    },
  ],
}

const apartmentAltTexts = {
  0: [
    "1-комнатная квартира 41,2 м² в клубном доме Визионер",
    "1-комнатная квартира 45,6 м² в клубном доме Визионер",
    "1-комнатная квартира 48,1 м² в клубном доме Визионер",
    "1-комнатная квартира 50,3 м² в клубном доме Визионер",
    "1-комнатная квартира 52,2 м² в клубном доме Визионер",
    "1-комнатная квартира 55,8 м² в клубном доме Визионер",
  ],
  1: [
    "2-комнатная квартира 67,8 м² в клубном доме Визионер",
    "2-комнатная квартира 72,5 м² в клубном доме Визионер",
    "2-комнатная квартира 88,8 м² в клубном доме Визионер",
  ],
  2: [
    "3-комнатная квартира 95,4 м² в клубном доме Визионер",
    "3-комнатная квартира 102,6 м² в клубном доме Визионер",
    "3-комнатная квартира 111,1 м² в клубном доме Визионер",
    "3-комнатная квартира 111,2 м² в клубном доме Визионер",
    "3-комнатная квартира 119,1 м² в клубном доме Визионер",
    "3-комнатная квартира 119,2 м² в клубном доме Визионер",
  ],
  3: ["4-комнатная квартира 110,1 м² в клубном доме Визионер"],
}

const getConsolidatedJsonLd = (activeType: number) => {
  const apartments = apartmentJsonLd[activeType as keyof typeof apartmentJsonLd]

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${activeType === 0 ? "1" : activeType === 1 ? "2" : activeType === 2 ? "3" : "4"}-комнатные квартиры в ЖК Визионер`,
    description: `Планировки ${activeType === 0 ? "1" : activeType === 1 ? "2" : activeType === 2 ? "3" : "4"}-комнатных квартир в клубном доме Визионер`,
    itemListElement: apartments.map((apartment, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Residence",
        name: apartment.name,
        description: apartment.description,
        floorSize: apartment.floorSize,
        availability: apartment.availability,
        offers: apartment.expectedProposition,
        image: apartment.image,
      },
    })),
  }
}

export default function Apartments() {
  const [activeType, setActiveType] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedApartment, setSelectedApartment] = useState("")

  const openModal = (apartmentType: string) => {
    setSelectedApartment(apartmentType)
    setIsModalOpen(true)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getConsolidatedJsonLd(activeType)),
        }}
      />

      <section id="apartments" className="pt-32 pb-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wide text-gray-800 font-history-pro">
              ПЛАНИРОВКИ
            </h2>
            <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
            <div className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed space-y-6 text-left">
              <p>
                Планировки квартир в доме «Визионер» продуманы до мелочей: открытые пространства, высокие потолки,
                большие панорамные окна и уникальные эркеры наполняют помещения светом и создают ощущение свободы. В
                каждой квартире предусмотрены ниши для гардеробных, отдельные зоны хранения, просторные кухни-гостиные и
                мастер-спальни с собственными ванными.
              </p>

              <div>
                <p className="mb-4 font-medium">Особенности планировок:</p>
                <ul className="text-left max-w-2xl space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#a8996e] mr-3 mt-1">•</span>
                    <span>Разнообразие форматов — от компактных до представительских с четырьмя спальнями</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#a8996e] mr-3 mt-1">•</span>
                    <span>Есть варианты с террасами и балконами для наслаждения видами города</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#a8996e] mr-3 mt-1">•</span>
                    <span>Оптимальное зонирование для комфортной жизни и работы</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#a8996e] mr-3 mt-1">•</span>
                    <span>
                      Высококачественные инженерные системы: индивидуальная вентиляция, эффективное отопление, чистая
                      вода и энергосбережение
                    </span>
                  </li>
                </ul>
              </div>

              <p>
                Эргономика, комфорт и эстетика воплощены в каждой детали — для динамичной, современной жизни и уюта
                семьи.
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-16">
            <div className="flex bg-gray-100 rounded-[20px] p-1">
              {apartmentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  className={`px-8 py-3 rounded-[18px] text-lg font-medium transition-all duration-300 ${
                    activeType === type.id ? "bg-[#a8996e] text-white shadow-md" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <div className={`grid gap-8 max-w-7xl mx-auto grid-cols-1 lg:grid-cols-3`}>
            {apartments[activeType as keyof typeof apartments].map((apartment, index) => (
              <Card key={apartment.id} className={`overflow-hidden border-0 shadow-lg`}>
                <div className={`relative bg-white flex items-center justify-center p-4 h-80`}>
                  <Image
                    src={apartment.floorPlan || "/placeholder.svg"}
                    alt={
                      apartmentAltTexts[activeType as keyof typeof apartmentAltTexts][index] ||
                      `Планировка ${apartment.type} в ЖК Визионер - ${apartment.planType} с оптимальным зонированием пространства`
                    }
                    width={400}
                    height={300}
                    className="object-contain max-w-full max-h-full"
                    loading="lazy"
                  />
                </div>

                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-medium mb-2 text-gray-900">{apartment.type}</h3>
                  <p className="text-gray-600 text-sm mb-1">{apartment.deliveryDate}</p>
                  <p className="text-gray-600 text-sm mb-6">{apartment.planType}</p>

                  <button
                    onClick={() => openModal(apartment.type)}
                    className="w-full bg-[#a8996e] hover:bg-[#9d8f5f] text-white px-6 py-3 rounded-[22px] font-light tracking-wide transition-colors"
                  >
                    Узнать цену
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        buttonText={`Узнать цену - ${selectedApartment}`}
      />
    </>
  )
}
