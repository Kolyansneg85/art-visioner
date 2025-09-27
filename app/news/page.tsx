import Link from "next/link"

const ArrowLeft = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const Calendar = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const Clock = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export const metadata = {
  title: "Новости | Клубный дом Визионер - Domfy",
  description:
    "Последние новости о клубном доме Визионер. Актуальная информация о ходе строительства, акциях и событиях.",
  keywords:
    "новости клубном доме Визионер, ход строительства клубнго дома Визионер, акции в клубном доме Визионер, недвижимость в петроградском районе СПб",
  alternates: {
    canonical: "https://art-visioner.ru/news",
  },
}

interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image?: string
}

const articles: Article[] = [
  {
    id: "1",
    slug: "architecture-future-vizioner",
    title: "Архитектура будущего: как клубный дом «Визионер» переосмысляет наследие конструктивизма",
    excerpt:
      "Клубный дом «Визионер» в Петроградском районе Санкт-Петербурга является выдающимся примером современной архитектуры, которая органично сочетает в себе традиции ленинградского авангарда, в частности конструктивизма, с инновационными технологиями и комфортом.",
    date: "2025-09-27",
    readTime: "12 мин",
    image: "/images/blog/vizioner-architecture.webp",
  },
  {
    id: "2",
    slug: "petrogradsky-district-elite-real-estate",
    title: "Петроградский район — новый центр притяжения элитной недвижимости",
    excerpt:
      "Петроградский район Санкт-Петербурга сегодня признан одним из самых престижных и динамично развивающихся районов города, который всё активнее привлекает внимание покупателей элитной недвижимости и инвесторов.",
    date: "2025-09-27",
    readTime: "8 мин",
    image: "/images/blog/petrogradsky-district-aerial.webp",
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Новости</h1>
              <p className="text-gray-600 mt-2">Актуальная информация о клубном доме Визионер</p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft />
              На главную
            </Link>
          </div>
        </div>
      </div>

      {/* Список статей */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.id} href={`/news/${article.slug}`}>
              <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                {article.image && (
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                    loading="lazy" // added lazy loading for performance
                  />
                )}

                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar />
                      {new Date(article.date).toLocaleDateString("ru-RU")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock />
                      {article.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2 text-balance">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 line-clamp-3 text-pretty">{article.excerpt}</p>

                  <div className="mt-4">
                    <span className="text-[#a8996e] font-medium hover:text-[#c4b896] transition-colors">
                      Читать далее →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
