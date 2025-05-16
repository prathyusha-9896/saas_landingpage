// hooks/useSaas.ts

const useSaas = () => {
  return {
    heading: 'Why SaaS Companies Partner with Me',
    subheading:
      'SaaS teams work with me because I make conversions make sense. No fluff — just smart tweaks, better UX, and results you can actually see.',
    cta: {
      text: 'Book a Call',
      link: '/book-a-call', // replace with actual URL
    },
    pillars: [
      {
        icon: '/assets/Svg/award.svg',
        title: 'Dedicated SaaS Expertise',
        color: 'text-yellow-400',
        description:
          'Specialised team with focused expertise in key SaaS growth metrics like CAC, pipeline velocity, ARR, and MQL–to–SQL conversions.',
      },
      {
        icon: '/assets/Svg//coins.svg',
        title: 'Transparency and Accountability',
        color: 'text-sky-400',
        description:
          'Detailed reporting and consistent communication to maintain clarity, trust, and alignment with your business objectives.',
      },
      {
        icon: '/assets/Svg/graph.svg',
        title: 'Proven, Impactful Results',
        color: 'text-emerald-400',
        description:
          'Real experience executing successful campaigns for SaaS companies, backed by measurable results and case studies.',
      },
    ],
  }
}

export default useSaas
