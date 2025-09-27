import PersonalDataClient from "./PersonalDataClient"

export const metadata = {
  title: "Согласие на обработку персональных данных - Клубный дом Визионер",
  description: "Согласие на обработку персональных данных клубного дома Визионер",
  robots: {
    index: false,
    follow: false,
  },
}

export default function PersonalDataConsent() {
  return <PersonalDataClient />
}
