'use client'

import useFaqs from './hooks/useFaqs'
import FAQS from '../../../_components/faqs/FAQS'

export default function Faqs() {
  const { faqData } = useFaqs()

  return <FAQS faqs={faqData} />
}
