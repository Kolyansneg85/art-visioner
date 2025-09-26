"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    question: "Где расположен клубный дом «Визионер» и какова транспортная доступность?",
    answer:
      "Дом расположен по адресу Средняя Колтовская ул., 9-11 в Петроградском районе Санкт-Петербурга. До станции метро «Чкаловская» — 10-12 минут пешком. Рядом находятся Крестовский и Петровский острова с их парками, яхт-клубами и спортивными объектами. Быстрый выезд к основным магистралям города и ЗСД.",
  },
  {
    question: "Сколько корпусов в проекте и какая этажность?",
    answer:
      "Проект состоит из трех корпусов: одного пятиэтажного (10 квартир) и двух девятиэтажных (145 и 70 квартир соответственно). Всего в доме предусмотрено 225 квартир площадью от 32 до 147 м².",
  },
  {
    question: "Какие планировки квартир представлены в проекте?",
    answer:
      "В «Визионере» представлены квартиры от 1 до 4 комнат. Большинство имеет европланировку с просторными кухнями-гостиными, есть классические планировки, 12 квартир с террасами площадью до 70 м² и 30 квартир с эркерами. Высота потолков составляет 3 метра, на верхних этажах — 3,3 метра.",
  },
  {
    question: "Предусмотрена ли парковка и какие условия для автовладельцев?",
    answer:
      "В проекте предусмотрен подземный отапливаемый паркинг на 153-154 машиноместа и 22 гостевых места на придомовой территории. Во внутреннем дворе парковка автомобилей запрещена (кроме автомобилей экстренных служб).",
  },
  {
    question: "Какая инфраструктура предусмотрена для жителей?",
    answer:
      "В доме будет собственный фитнес-зал площадью 155 м² с залом для пилатеса и массажным кабинетом, просторные лобби с арт-объектами, переговорные комнаты. В каждой парадной — колясочные и велопарковки. На первых этажах разместятся коммерческие помещения.",
  },
  {
    question: "Как организована безопасность в комплексе?",
    answer:
      "Территория полностью огорожена с круглосуточной охраной и видеонаблюдением. Доступ во двор только по электронным ключам. Вход в парадные возможен исключительно со стороны внутреннего двора. Установлены видеодомофоны и система контроля доступа.",
  },
  {
    question: "Что представляет собой внутренний двор?",
    answer:
      "Приватный двор-патио без машин с ландшафтным дизайном разделен на зоны для детей, подростков и взрослых. Установлено немецкое детское оборудование Richter Spielgeräte, предусмотрены зоны отдыха с уличными обогревателями, декоративное освещение и бесплатный Wi-Fi.",
  },
  {
    question: "Какие технологии и инженерные системы используются?",
    answer:
      "В квартирах применяется технология «плавающий пол» для дополнительной шумоизоляции, системы фильтрации воды, приточно-вытяжная вентиляция, датчики дыма. Фасады многослойные энергосберегающие, предусмотрены ниши для кондиционеров. Система «Цифровой дом» для управления инженерными системами.",
  },
  {
    question: "В каком состоянии сдаются квартиры?",
    answer:
      "Квартиры сдаются без отделки, с базовой инженерной подготовкой. Установлены большие алюминиевые окна с накладками из массива дерева, металлические входные двери с повышенной звукоизоляцией. Минимальное количество несущих стен позволяет делать перепланировку.",
  },
  {
    question: "Когда планируется сдача дома и на каких условиях осуществляется продажа?",
    answer:
      "Сдача дома запланирована на III квартал 2028 года. Продажи ведутся по договору долевого участия (214-ФЗ). Возможны различные варианты оплаты включая ипотеку. Цены начинаются от 32 млн рублей за однокомнатные квартиры.",
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section id="faq" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 font-history-pro">Часто задаваемые вопросы</h2>
            <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ответы на самые популярные вопросы о клубном доме «Визионер»
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                  aria-expanded={openItems.includes(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold pr-4 font-cera-pro">{item.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-[#a8996e] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#a8996e] flex-shrink-0" />
                    )}
                  </div>
                </button>

                {openItems.includes(index) && (
                  <CardContent className="pt-0 pb-6">
                    <div className="border-t pt-4">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Не нашли ответ на свой вопрос?</p>
            <a
              href="tel:+74951234567"
              className="inline-flex items-center px-6 py-3 bg-[#a8996e] text-white rounded-[22px] hover:bg-[#9d8f5f] transition-colors"
            >
              Позвонить консультанту
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
