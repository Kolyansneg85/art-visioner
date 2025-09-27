import PrivacyPolicyClient from "./PrivacyPolicyClient"

export const metadata = {
  title: "Политика в отношении обработки персональных данных - Клубный дом Визионер",
  description: "Политика в отношении обработки персональных данных клубного дома Визионер",
  robots: {
    index: false,
    follow: false,
  },
}

export default function PrivacyPolicy() {
  return <PrivacyPolicyClient />
}
