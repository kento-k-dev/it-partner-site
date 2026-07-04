import ScrollAnimations from '@/components/ScrollAnimations'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import ValueProposition from '@/components/ValueProposition'
import ConsultationTopics from '@/components/ConsultationTopics'
import WhyUs from '@/components/WhyUs'
import Profile from '@/components/Profile'
import ServiceMenu from '@/components/ServiceMenu'
import ConsultationFlow from '@/components/ConsultationFlow'
import Values from '@/components/Values'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <ValueProposition />
        <ConsultationTopics />
        <WhyUs />
        <Profile />
        <ServiceMenu />
        <ConsultationFlow />
        <Values />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
