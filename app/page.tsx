import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import WhatThisClass from '@/components/WhatThisClass'
import WhatYouWillDo from '@/components/WhatYouWillDo'
import WhoThisIsFor from '@/components/WhoThisIsFor'
import ClassDetails from '@/components/ClassDetails'
import OfferSection from '@/components/OfferSection'
import BonusSection from '@/components/BonusSection'
import FAQSection from '@/components/FAQSection'
import FinalCTA from '@/components/FinalCTA'
import MentorSection from '@/components/MentorSection'
import RegistrationForm from '@/components/RegistrationForm'
import UpsellSection from '@/components/UpsellSection'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <WhatThisClass />
      <WhatYouWillDo />
      <WhoThisIsFor />
      <ClassDetails />
      <OfferSection />
      <BonusSection />
      <FAQSection />
      <FinalCTA />
      <MentorSection />
      <RegistrationForm />
      <UpsellSection />
      <Footer />
      <StickyBar />
    </main>
  )
}
