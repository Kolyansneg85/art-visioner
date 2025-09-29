"use client"

interface StructuredDataProps {
  type: "organization" | "realEstate" | "place" | "apartments" | "website" | "article" | "breadcrumb"
  data?: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData = {}

  switch (type) {
    case "organization":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Клубный дом «Визионер»",
        description:
          "Клубный дом «Визионер» — воплощение современной архитектуры, приватности и статуса в центре Петроградского района Санкт-Петербурга",
        url: process.env.NEXT_PUBLIC_SITE_URL || "https://art-visioner.ru",
        logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://art-visioner.ru"}/images/logo.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "улица Средняя Колтовская 9-11",
          addressLocality: "Санкт-Петербург",
          addressRegion: "Петроградский район",
          postalCode: "197022",
          addressCountry: "RU",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+7 (812) 660-56-50",
          contactType: "sales",
          availableLanguage: "ru",
        },
        sameAs: ["https://vk.com/visioner_club", "https://t.me/visioner_club"],
      }
      break

    case "realEstate":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        name: "Клубный дом «Визионер»",
        description: "Премиальный жилой комплекс в историческом центре Санкт-Петербурга",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Средняя Колтовская ул., 9-11",
          addressLocality: "Санкт-Петербург",
          addressRegion: "Петроградский район",
          postalCode: "197022",
          addressCountry: "RU",
        },
        telephone: "+7 (812) 660-56-50",
        url: process.env.NEXT_PUBLIC_SITE_URL || "https://art-visioner.ru",
        priceRange: "От 32.1 млн руб.",
        areaServed: {
          "@type": "City",
          name: "Санкт-Петербург",
        },
      }
      break

    case "place":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Place",
        name: "Клубный дом «Визионер»",
        description:
          "Клубный дом «Визионер» расположен в самом сердце Петроградской стороны, одном из самых престижных и исторически насыщенных районов Санкт-Петербурга",
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
      }
      break

    case "apartments":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Квартиры в клубном доме «Визионер»",
        description: "225 квартир с европланировками, террасами и эркерами площадью от 32 до 147 м²",
        brand: {
          "@type": "Brand",
          name: "Клубный дом «Визионер»",
        },
        category: "Недвижимость",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "RUB",
          lowPrice: "32100000",
          offerCount: "225",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Клубный дом «Визионер»",
          },
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Количество квартир",
            value: "225",
          },
          {
            "@type": "PropertyValue",
            name: "Количество корпусов",
            value: "3",
          },
          {
            "@type": "PropertyValue",
            name: "Срок сдачи",
            value: "III кв. 2028 г.",
          },
          {
            "@type": "PropertyValue",
            name: "Площадь квартир",
            value: "от 32 до 147 м²",
          },
          {
            "@type": "PropertyValue",
            name: "Паркинг",
            value: "153 машино-места + 22 гостевых",
          },
        ],
      }
      break

    case "website":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Клубный дом Визионер",
        description: "Официальный сайт эксклюзивного клубного дома Визионер на Петроградской стороне",
        url: process.env.NEXT_PUBLIC_SITE_URL || "https://art-visioner.ru",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || "https://art-visioner.ru"}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
        publisher: {
          "@type": "Organization",
          name: "Клубный дом Визионер",
        },
      }
      break

    case "article":
      if (!data) return null
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.title,
        description: data.excerpt,
        image: data.image ? `${process.env.NEXT_PUBLIC_SITE_URL || "https://art-visioner.ru"}${data.image}` : undefined,
        datePublished: data.date,
        dateModified: data.date,
        author: {
          "@type": "Organization",
          name: "Клубный дом Визионер",
        },
        publisher: {
          "@type": "Organization",
          name: "Клубный дом Визионер",
          logo: {
            "@type": "ImageObject",
            url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://art-visioner.ru"}/images/logo.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://art-visioner.ru"}/news/${data.slug}`,
        },
      }
      break

    case "breadcrumb":
      if (!data) return null
      structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: data.map((item: any, index: number) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }
      break
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
