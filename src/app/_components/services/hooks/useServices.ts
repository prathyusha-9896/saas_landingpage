// hooks/useServices.ts

const useServices = () => {
  return {
    heading: 'Services Engineered for SaaS Scale',
    services: [
      {
        title: 'Performance Marketing',
        color: 'text-yellow-400',
        description:
          'Directly impact your SaaS pipeline growth through hyper-targeted ads. Proven success scaling qualified leads, SQLs, and predictable revenue globally.',
        tools: [
          { name: 'LinkedIn Ads', logo: '/assets/Svg/linkedin.svg' },
          { name: 'Google Ads', logo: '/assets/Svg/googleads.svg' },
          { name: 'Meta Ads', logo: '/assets/Svg/meta.svg' },
        ],
      },
      {
        title: 'Conversion Rate Optimisation (CRO)',
        color: 'text-green-400',
        description:
          'Turn website visits into measurable MQLs, SQLs, demos, trials, and revenue with data-backed CRO that removes friction.',
        tools: [
          { name: 'Figma', logo: '/assets/Svg/figma.svg' },
          { name: 'Hotjar', logo: '/assets/Svg/hotjar.svg' },
          { name: 'HubSpot', logo: '/assets/Svg/hubspot.svg' },
        ],
      },
      {
        title: 'SEO for SaaS',
        color: 'text-sky-400',
        description:
          'Rank higher, capture qualified organic leads, and sustainably scale your pipeline through strategic, intent-focused SaaS SEO.',
        tools: [
          { name: 'SEMRUSH', logo: '/assets/Svg/semrush.svg' },
          { name: 'Google Analytics', logo: '/assets/Svg/googleana.svg' },
          { name: 'Screaming Frog', logo: '/assets/Svg/frog.svg' },
        ],
      },
    ],
  }
}

export default useServices
