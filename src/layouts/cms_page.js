import React from 'react'

import '../layouts/styles/layout-overide.css'
import Partners from '../components/partners'
import PictureRight from '../components/picture-right'
import Features from '../components/features'

// import CreateEvent from '../components/create-event'
import { Layout } from '../layouts/index'
import Hero from '../components/hero-section'
import PictureLeft from '../components/picture-left'
import PictureLeftSecond from '../components/picture-left-second'
import ContactForm from '../components/contact'
import PictureRightSecond from '../components/picture-right-second'
import MockupRightFirst from '../components/picture-right-mockup-first'
import MockupRightSecond from '../components/picture-right-mockup-second'
// import PricingCards from '../components/ticket-price'
import Footer from '../components/footer'
import AppStore from '../components/app-store'
// import SMIcons from '../components/soc-med-icons'
import About from '../components/about'
import Languages from '../components/languages'
import PrivacyPolicy from '../components/privacyPol'
import Contact from '../components/contact'
import FAQ from '../components/faq'
import TandC from '../components/tandc'

const components = [
  { Component: Partners, id: 'partners' },
  { Component: PictureRight, id: 'picture_right' },
  { Component: Features, id: 'features' },
  // { Component: CreateEvent, id: 'create_event' },
  { Component: Hero, id: 'hero_section' },
  { Component: PictureLeft, id: 'picture_left' },
  { Component: PictureRightSecond, id: 'picture_righ_second' },
  { Component: PictureLeftSecond, id: 'picture_left_second' },
  { Component: AppStore, id: 'app' },
  { Component: TandC, id: 'terms_and_c' },
  { Component: MockupRightFirst, id: 'mockup_right_first' },
  { Component: MockupRightSecond, id: 'mockup_right_second' },
  { Component: ContactForm, id: 'contact_form' },
  // { Component: PricingCards, id: 'pricing_cards' },
  // { Component: SMIcons, id: 'soc_med_icons' },
  { Component: Contact, id: 'contact' },
  { Component: Languages, id: 'languages' },
  { Component: About, id: 'about' },
  { Component: PrivacyPolicy, id: 'privacy_policy' },
  { Component: FAQ, id: 'faq' },
  { Component: Footer, id: 'footer' },
]
const CmsPage = ({ pageContext, location }) => {
  return (
    <Layout
      {...pageContext}
      fadeHeader={location.pathname === '/en' || location.pathname === '/da'}
    >
      {pageContext.sections &&
        pageContext.sections.map((section, i) => {
          const c = components.find(({ id }) => id === section.type)

          if (c) {
            return <c.Component key={i} {...section} />
          } else {
            return null
          }
        })}
    </Layout>
  )
}

export default CmsPage
