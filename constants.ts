import { SlideData, SlideTemplate } from './types';

export const SLIDES: SlideData[] = [
  {
    template: SlideTemplate.Title,
    title: 'Gen AI in Facilities Management',

  },
  {
    template: SlideTemplate.Agenda,
    title: 'Workshop Outline',
    agendaColumns: [
      {
        icon: '💡',
        title: 'Understanding Gen AI in Facilities Management',
        items: [
          { text: 'Key concepts of Generative AI' },
          { text: 'Real-world FM applications' }
        ],
        bgColor: '#E8F0FE',
      },
    ],
    footer: 'From learning → applying AI in your work',
    chineseFooter: '✨',
  },
  {
    template: SlideTemplate.ThreeColumnIcon,
    title: 'You Already Use Traditional AI',

    columns: [
      {
        icon: 'sensors',
        title: "Smart Building Sensors: Monitor real-time data like temperature and occupancy.",

      },
      {
        icon: 'security',
        title: 'Security Systems: Detect anomalies in CCTV footage to identify potential threats.',

      },
      {
        icon: 'thermostat',
        title: 'Energy Management: Analyze usage patterns to optimize cooling and lighting.',

      },
    ],
    footer: 'Traditional AI ANALYZES existing data to find patterns.',

  },
  {
    template: SlideTemplate.Comparison,
    title: 'The Big Difference: Finding vs. Creating',

    columns: [
      {
        icon: 'search',
        iconColor: '#5f6368',
        title: 'Traditional AI (The Analyst)',

        text: 'FINDS answers in existing data.',

        example: '"Find similar songs."',

      },
      {
        icon: 'auto_awesome',
        iconColor: '#4285F4',
        title: 'Generative AI (The Creator)',

        text: 'CREATES something totally new.',

        example: '"Create a new song."',

      },
    ],
    footer: "One is for ANALYSIS. The other is for CREATION.",

  },
  {
    template: SlideTemplate.Quiz,
    quizIcon: 'receipt_long',
    scenario: 'A dashboard shows real-time energy consumption data from different buildings, highlighting anomalies.',
    isAnswerSlide: false,
    correctAnswer: 'Traditional AI',
  },
  {
    template: SlideTemplate.Quiz,
    quizIcon: 'receipt_long',
    scenario: 'A dashboard shows real-time energy consumption data from different buildings, highlighting anomalies.',
    isAnswerSlide: true,
    correctAnswer: 'Traditional AI',
    explanation: 'It ANALYZES your purchase history (existing data) to create this list for you.',
  },
  {
    template: SlideTemplate.Quiz,
    quizIcon: 'auto_stories',
    scenario: "An app that generates a work order from a photo of a faulty equipment.",
    isAnswerSlide: false,
    correctAnswer: 'Generative AI',
  },
  {
    template: SlideTemplate.Quiz,
    quizIcon: 'auto_stories',
    scenario: "An app that generates a work order from a photo of a faulty equipment.",
    isAnswerSlide: true,
    correctAnswer: 'Generative AI',
    explanation: 'It CREATES a new, original product description that didn’t exist before.',
  },
  {
    template: SlideTemplate.Diagram,
    title: 'From Tool to Teammate',

  },
  {
    template: SlideTemplate.Challenge,
    title: 'How might we... automate fault reporting with Gen AI?',

    icon: 'camera_alt',
    iconColor: '#4285F4',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Predictive Maintenance',

    icon: 'build',
    iconColor: '#4285F4',
    cardItems: [



    ],
  },
  {
    template: SlideTemplate.Challenge,
    title: 'How might we... optimise smart building energy use?',

    icon: 'bolt',
    iconColor: '#34A853',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Space Optimisation',

    icon: 'space_dashboard',
    iconColor: '#5f6368',
    cardItems: [



    ],
  },
  {
    template: SlideTemplate.Challenge,
    title: 'How might we... summarise and classify tenant feedback with AI?',

    icon: 'rate_review',
    iconColor: '#FBBC05',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Automated Work Order Generation',

    icon: 'assignment',
    iconColor: '#5f6368',
    cardItems: [



    ],
  },
  {
    template: SlideTemplate.CardList,
    title: "JTC's Smart Estates",

    icon: 'apartment',
    iconColor: '#34A853',
    cardItems: [



    ],
  },
  {
    template: SlideTemplate.Challenge,
    title: 'How might we... translate data into clear insights?',

    icon: 'bar_chart',
    iconColor: '#34A853',
  },
   {
    template: SlideTemplate.CardList,
    title: 'Finance & Data',

    icon: 'bar_chart',
    iconColor: '#34A853',
    cardItems: [



    ],
  },
  {
    template: SlideTemplate.Challenge,
    title: 'How might we... streamline logistics reporting & comms?',

    icon: 'local_shipping',
    iconColor: '#5f6368',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Logistics',

    icon: 'local_shipping',
    iconColor: '#5f6368',
    cardItems: [



    ],
  },
  {
    template: SlideTemplate.Challenge,
    title: 'How might we... generate creative ideas for new products?',

    icon: 'palette',
    iconColor: '#EA4335',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Product Design',

    icon: 'palette',
    iconColor: '#EA4335',
    cardItems: [



    ],
  },
  {
    template: SlideTemplate.InfographicSummary,
    title: 'Generative AI at a Glance',

    infographicSections: [
      {
        title: 'Core Capabilities & Functions',

        items: [





        ],
      },
      {
        title: 'Ethical Considerations in FM',

        items: [





        ],
      },
    ],
    applications: [
        { icon: 'campaign', name: 'Marketing' },
        { icon: 'support_agent', name: 'Service' },
        { icon: 'groups', name: 'HR' },
        { icon: 'bar_chart', name: 'Data' },
        { icon: 'palette', name: 'Design' },
        { icon: 'podcasts', name: 'PR' },
        { icon: 'gavel', name: 'Legal' },
        { icon: 'local_shipping', name: 'Logistics' },
        { icon: 'school', name: 'Education' },
        { icon: 'science', name: 'R&D' },
        { icon: 'compass_calibration', name: 'Strategy' },
        { icon: 'settings_suggest', name: 'Operations' },
    ],
    workflow: [





    ]
  },
  {
    template: SlideTemplate.Agenda,
    title: 'Your Task: Build an FM App',
    subtitle: 'Hands-On with AWS PartyRock',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png',
    agendaColumns: [
      {
        icon: '🚀',
        title: 'Your Mission',
        items: [
          { text: 'Build an AI prototype that solves a real-world FM problem.' },
          { text: 'Think about fault reporting, energy optimisation, or tenant requests.' }
        ]
      },
      {
        icon: '🧠',
        title: 'Your Steps',
        isOrdered: true,
        items: [
          { text: 'Identify a specific FM problem at JTC.' },
          { text: 'Plan your app’s features and user flow.' },
          { text: 'Build a simple prototype using PartyRock.' },
          { text: 'Present your app to the group.' }
        ]
      }
    ],
    footer: 'App Ideas: Fault Reporting App, Energy Optimisation Bot, Tenant Request Chatbot.',

  },
  {
    template: SlideTemplate.CardList,
    title: 'Gen AI in JTC Facilities Management',

    icon: 'business_center',
    iconColor: '#1E40AF',
    cardItems: [



    ],
  },
];