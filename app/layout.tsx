import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Roboto } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import ChatWidget from "../components/chat-widget"
import Script from "next/script"

// Подключение Google Fonts
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
  display: "swap",
})

// Подключение локального шрифта HistoryPro-Two для заголовков
const historyPro = localFont({
  src: "../public/fonts/HistoryPro-Two.ttf",
  variable: "--font-history-pro",
  display: "swap",
})

// Подключение локального шрифта CeraPro-Regular для основного текста
const ceraPro = localFont({
  src: "../public/fonts/CeraPro-Regular.woff",
  variable: "--font-cera-pro",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1a1a1a",
}

export const metadata: Metadata = {
  title: "Клубный дом «Визионер» в Петроградском районе — элитные квартиры на Средней Колтовской",
  description:
    "Клубный дом «Визионер» — 225 элитных квартир от 32 до 147 м² в престижном Петроградском районе. 3 корпуса с террасами и эркерами, приватный двор без машин, фитнес-зал, подземный паркинг. 10 минут до метро «Чкаловская», рядом Крестовский остров. Сдача III квартал 2028 года.",
  keywords:
    "клубный дом, визионер, петроградский район, элитное жилье, санкт-петербург, средняя колтовская, чкаловская, крестовский остров",
  authors: [{ name: "Клубный дом Визионер" }],
  creator: "Клубный дом Визионер",
  publisher: "Клубный дом Визионер",
  other: {
    "content-language": "ru",
    language: "Russian",
    "geo.region": "RU-SPE",
    "geo.placename": "Saint Petersburg",
    "geo.position": "59.9311;30.3609",
    ICBM: "59.9311, 30.3609",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "v0.app",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Клубный дом «Визионер» в Петроградском районе — элитные квартиры на Средней Колтовской",
    description:
      "Клубный дом «Визионер» — 225 элитных квартир от 32 до 147 м² в престижном Петроградском районе. 3 корпуса с террасами и эркерами, приватный двор без машин, фитнес-зал, подземный паркинг. 10 минут до метро «Чкаловская», рядом Крестовский остров. Сдача III квартал 2028 года.",
    url: "https://art-visioner.ru",
    siteName: "Клубный дом Визионер",
    images: [
      {
        url: "https://art-visioner.ru/images/hero-building-light.webp",
        width: 1200,
        height: 630,
        alt: "Клубный дом Визионер на Петроградской стороне",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Клубный дом «Визионер» в Петроградском районе — элитные квартиры на Средней Колтовской",
    description:
      "Клубный дом «Визионер» — 225 элитных квартир от 32 до 147 м² в престижном Петроградском районе. 3 корпуса с террасами и эркерами, приватный двор без машин, фитнес-зал, подземный паркинг. 10 минут до метро «Чкаловская», рядом Крестовский остров. Сдача III квартал 2028 года.",
    images: ["https://art-visioner.ru/images/hero-building-light.webp"],
  },
  alternates: {
    canonical: "https://art-visioner.ru",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${historyPro.variable} ${ceraPro.variable} ${roboto.variable}`}>
      <head />
      <body className="overflow-x-hidden">
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');
            ym(62434543, 'init', {webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/62434543" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
