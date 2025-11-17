import { SlideData, SlideTemplate } from './types';

export const SLIDES: SlideData[] = [
  {
    template: SlideTemplate.Title,
    title: 'Gen AI in Facilities Management',
  },
  {
    template: SlideTemplate.ThreeColumnIcon,
    title: 'You Already Use Traditional AI',
    columns: [
      {
        icon: 'local_shipping',
        title: "Grab: Predicts your arrival time based on traffic patterns and historical data.",
      },
      {
        icon: 'movie',
        title: "Netflix: Recommends shows by analyzing what similar users have watched.",
      },
      {
        icon: 'shopping_bag',
        title: "Carousell: Suggests prices by analyzing past listings and transactions.",
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
        title: 'Traditional AI',
        chineseTitle: '(The Analyst)',
        text: 'FINDS answers in existing data.',
        example: '"Find similar fault reports."',
      },
      {
        icon: 'auto_awesome',
        iconColor: '#0055B8',
        title: 'Generative AI',
        chineseTitle: '(The Creator)',
        text: 'CREATES something totally new.',
        example: '"Create a new maintenance schedule."',
      },
    ],
    footer: "One is for ANALYSIS. The other is for CREATION.",
  },
  {
    template: SlideTemplate.Diagram,
    title: 'How Gen AI Works: The "Brain"',
  },
  {
    template: SlideTemplate.CardList,
    title: 'How Gen AI Creates Content',
    icon: 'auto_awesome',
    iconColor: '#0055B8',
    cardItems: [
      { title: 'Input', text: 'You provide a prompt or instruction.' },
      { title: 'Pattern Matching', text: 'The AI finds patterns in its training data that match your input.' },
      { title: 'Prediction', text: 'It predicts the next most likely word or pixel to generate a response.' },
      { title: 'Output', text: 'The AI generates a new, original output based on the prediction.' },
    ],
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
    iconColor: '#0055B8',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Predictive Maintenance',
    icon: 'build',
    iconColor: '#0055B8',
    cardItems: [
      { title: 'Forecast', text: "Forecast equipment failures based on sensor data." },
      { title: 'Recommend', text: "Recommend optimal maintenance schedules." },
      { title: 'Automate', text: "Generate alerts for potential issues." },
    ],
  },
  {
    template: SlideTemplate.Challenge,
    title: 'How might we... optimise smart building energy use?',
    icon: 'bolt',
    iconColor: '#0077B6',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Space Optimisation',
    icon: 'space_dashboard',
    iconColor: '#5f6368',
    cardItems: [
      { title: 'Analyze', text: 'Analyze usage data to identify underutilized areas.' },
      { title: 'Generate', text: 'Generate layout options for different work styles.' },
      { title: 'Schedule', text: 'Create optimal schedules for shared spaces.' },
    ],
  },
  {
    template: SlideTemplate.Challenge,
    title: 'How might we... summarise and classify tenant feedback with AI?',
    icon: 'rate_review',
    iconColor: '#FDBE57',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Automated Work Order Generation',
    icon: 'assignment',
    iconColor: '#5f6368',
    cardItems: [
      { title: 'Create', text: 'Create work orders from images of faulty equipment.' },
      { title: 'Assign', text: 'Assign work orders to the right teams automatically.' },
      { title: 'Track', text: 'Track the status of work orders in real-time.' },
    ],
  },
  {
    template: SlideTemplate.CardList,
    title: "JTC's Smart Estates",
    icon: 'apartment',
    iconColor: '#0077B6',
    cardItems: [
      { title: 'Digital Twin', text: 'Simulate and optimize building performance with a digital twin of the estate.' },
      { title: 'Green Buildings', text: 'Use AI to manage energy consumption and support sustainability goals.' },
      { title: 'Smart Lighting', text: 'Automate lighting adjustments based on occupancy and time of day.' },
    ],
  },
  {
    template: SlideTemplate.InfographicSummary,
    title: 'Generative AI at a Glance',
    infographicSections: [
      {
        title: 'Core Capabilities & Functions',
        items: [
          { icon: 'analytics', iconColor: '#FDBE57', text: 'Analyze' },
          { icon: 'summarize', iconColor: '#0077B6', text: 'Summarize' },
          { icon: 'auto_awesome', iconColor: '#0055B8', text: 'Create' },
          { icon: 'transform', iconColor: '#5f6368', text: 'Transform' },
          { icon: 'tune', iconColor: '#5f6368', text: 'Personalize' },
        ],
      },
      {
        title: 'Ethical Considerations in FM',
        items: [
          { icon: 'privacy_tip', iconColor: '#D6644C', text: 'Data Privacy' },
          { icon: 'psychology_alt', iconColor: '#D6644C', text: 'Hallucinations' },
          { icon: 'balance', iconColor: '#D6644C', text: 'Bias & Fairness' },
          { icon: 'rule', iconColor: '#D6644C', text: 'Automation Bias' },
          { icon: 'security', iconColor: '#D6644C', text: 'Safety-Critical Review' },
        ],
      },
    ],
    applications: [
        { icon: 'build', name: 'Maintenance' },
        { icon: 'space_dashboard', name: 'Space' },
        { icon: 'assignment', name: 'Work Orders' },
        { icon: 'apartment', name: 'Estates' },
        { icon: 'bar_chart', name: 'Data' },
        { icon: 'local_shipping', name: 'Logistics' },
        { icon: 'campaign', name: 'Marketing' },
        { icon: 'support_agent', name: 'Service' },
        { icon: 'groups', name: 'HR' },
        { icon: 'palette', name: 'Design' },
        { icon: 'podcasts', name: 'PR' },
        { icon: 'gavel', name: 'Legal' },
    ],
    workflow: [
      { icon: 'input', label: 'Input' },
      { icon: 'auto_awesome', label: 'AI Model' },
      { icon: 'article', label: 'Output' },
      { icon: 'person_search', label: 'Human Review' },
      { icon: 'rocket_launch', label: 'Action' },
    ]
  },
  {
    template: SlideTemplate.Agenda,
    title: 'Your Task: Build an FM App',
    subtitle: 'Hands-On with No-Code AI Tools',
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
          { text: 'Plan your app\'s features and user flow.' },
          { text: 'Build a simple prototype using no-code AI tools.' },
          { text: 'Present your app to the group.' }
        ]
      }
    ],
    footer: 'App Ideas: Fault Reporting App, Energy Optimisation Bot, Tenant Request Chatbot.',
  },
];