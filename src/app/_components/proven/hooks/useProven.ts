// hooks/useProven.ts

const useProven = () => {
  return {
    heading: 'Proven Results',
    subheading:
      'Discover the transformative impact of tailored performance marketing strategies through our case studies. Each snapshot below offers a glimpse into the challenges faced, solutions implemented, and outstanding results achieved.',
    case: {
      title: 'Strategic Turnaround at Outplay',
      description:
        'The business was getting many leads, but most weren’t turning into sales. There were too many unqualified leads.',
      buttonText: 'Schedule a strategy Session',
      buttonLink: '/book-a-call', // replace with actual URL
      solutions: [
        'Right Search Terms: Fine-tuned targeting with high-intent keywords.',
        'Implemented a step-by-step strategy to help customers from interest to purchase.',
        'Data-Driven Decisions: Focused on key goals and numbers to make improvements.',
        'Efficient Advertising: Invested in ads that worked, improving customer acquisition.',
      ],
      impacts: [
        { stat: '302%', label: 'Increase in Leads' },
        { stat: '188%', label: 'Increase in Sales' },
        { stat: '75%', label: 'sign-up rate' },
        { stat: '380%', label: 'Increase in Meetings Booked' },
      ],
    },
  }
}

export default useProven
