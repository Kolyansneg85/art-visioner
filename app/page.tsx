import Header from "@/components/header"
import Hero from "@/components/hero"
import ProjectIntro from "@/components/project-intro"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import Apartments from "@/components/apartments"
import Location from "@/components/location"
import Infrastructure from "@/components/infrastructure"
import IntelligentCourtyard from "@/components/intelligent-courtyard"
import LifeScenarios from "@/components/life-scenarios"
import FAQ from "@/components/faq"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export const metadata = {
  title: "Клубный дом «Визионер» в Петроградском районе — элитные квартиры на Средней Колтовской",
  description:
    "Клубный дом «Визионер» — 225 элитных квартир от 32 до 147 м² в престижном Петроградском районе. 3 корпуса с террасами и эркерами, приватный двор без машин, фитнес-зал, подземный паркинг. 10 минут до метро «Чкаловская», рядом Крестовский остров. Сдача III квартал 2028 года.",
  keywords:
    "клубный дом визионер, элитные квартиры петроградский район, средняя колтовская, чкаловская метро, крестовский остров, премиум жилье санкт-петербург, подземный паркинг, фитнес-зал, приватный двор, террасы эркеры",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProjectIntro />
      <About />
      <Gallery />
      <Apartments />
      <Location />
      <Infrastructure />
      <IntelligentCourtyard />
      <LifeScenarios />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
