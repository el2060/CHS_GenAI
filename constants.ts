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
    chineseTitle: '你早已在使用传统人工智能',
    columns: [
      {
        icon: 'sensors',
        title: "Smart Building Sensors: Monitor real-time data like temperature and occupancy.",
        chineseTitle: '智能楼宇传感器: 实时监测温度和占用率等数据。',
      },
      {
        icon: 'security',
        title: 'Security Systems: Detect anomalies in CCTV footage to identify potential threats.',
        chineseTitle: '安防系统: 检测闭路电视录像中的异常情况，识别潜在威胁。',
      },
      {
        icon: 'thermostat',
        title: 'Energy Management: Analyze usage patterns to optimize cooling and lighting.',
        chineseTitle: '能源管理: 分析使用模式以优化制冷和照明。',
      },
    ],
    footer: 'Traditional AI ANALYZES existing data to find patterns.',
    chineseFooter: '传统 AI 通过分析现有数据来发现规律。',
  },
  {
    template: SlideTemplate.Comparison,
    title: 'The Big Difference: Finding vs. Creating',
    chineseTitle: '核心区别：分析 vs. 创造',
    columns: [
      {
        icon: 'search',
        iconColor: '#5f6368',
        title: 'Traditional AI (The Analyst)',
        chineseTitle: '传统 AI (分析师)',
        text: 'FINDS answers in existing data.',
        chineseText: '从现有数据中寻找答案。',
        example: '"Find similar songs."',
        chineseExample: '“查找相似的歌曲。”',
      },
      {
        icon: 'auto_awesome',
        iconColor: '#4285F4',
        title: 'Generative AI (The Creator)',
        chineseTitle: '生成式 AI (创造者)',
        text: 'CREATES something totally new.',
        chineseText: '创造出全新的东西。',
        example: '"Create a new song."',
        chineseExample: '“创作一首新歌。”',
      },
    ],
    footer: "One is for ANALYSIS. The other is for CREATION.",
    chineseFooter: '一个重在分析，另一个重在创造。',
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
    chineseTitle: '从工具到队友',
  },
  {
    template: SlideTemplate.Challenge,
    title: 'How might we... automate fault reporting with Gen AI?',
    chineseTitle: '我们如何... 用生成式AI自动进行故障报告？',
    icon: 'camera_alt',
    iconColor: '#4285F4',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Predictive Maintenance',
    chineseTitle: '预测性维护',
    icon: 'build',
    iconColor: '#4285F4',
    cardItems: [
      { title: 'Forecast', chineseTitle: '预测', text: "Forecast equipment failures based on sensor data.", chineseText: '根据传感器数据预测设备故障。' },
      { title: 'Recommend', chineseTitle: '推荐', text: "Recommend optimal maintenance schedules.", chineseText: '推荐最佳维护计划。' },
      { title: 'Automate', chineseTitle: '自动化', text: "Generate alerts for potential issues.", chineseText: '生成潜在问题的警报。' },
    ],
  },
  {
    template: SlideTemplate.Challenge,
    title: 'How might we... optimise smart building energy use?',
    chineseTitle: '我们如何... 优化智能建筑的能源使用？',
    icon: 'bolt',
    iconColor: '#34A853',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Space Optimisation',
    chineseTitle: '空间优化',
    icon: 'space_dashboard',
    iconColor: '#5f6368',
    cardItems: [
      { title: 'Analyze', chineseTitle: '分析', text: 'Analyze usage data to identify underutilized areas.', chineseText: '分析使用数据以确定未充分利用的区域。' },
      { title: 'Generate', chineseTitle: '生成', text: 'Generate layout options for different work styles.', chineseText: '为不同的工作方式生成布局选项。' },
      { title: 'Schedule', chineseTitle: '安排', text: 'Create optimal schedules for shared spaces.', chineseText: '为共享空间创建最佳时间表。' },
    ],
  },
  {
    template: SlideTemplate.Challenge,
    title: 'How might we... summarise and classify tenant feedback with AI?',
    chineseTitle: '我们如何... 用AI总结和分类租户反馈？',
    icon: 'rate_review',
    iconColor: '#FBBC05',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Automated Work Order Generation',
    chineseTitle: '自动工单生成',
    icon: 'assignment',
    iconColor: '#5f6368',
    cardItems: [
      { title: 'Create', chineseTitle: '创建', text: 'Create work orders from images of faulty equipment.', chineseText: '从故障设备图片创建工单。' },
      { title: 'Assign', chineseTitle: '分配', text: 'Assign work orders to the right teams automatically.', chineseText: '自动将工单分配给合适的团队。' },
      { title: 'Track', chineseTitle: '跟踪', text: 'Track the status of work orders in real-time.', chineseText: '实时跟踪工单状态。' },
    ],
  },
  {
    template: SlideTemplate.CardList,
    title: "JTC's Smart Estates",
    chineseTitle: '裕廊集团的智能园区',
    icon: 'apartment',
    iconColor: '#34A853',
    cardItems: [
      { title: 'Digital Twin', chineseTitle: '数字孪生', text: 'Simulate and optimize building performance with a digital twin of the estate.', chineseText: '利用园区的数字孪生来模拟和优化建筑性能。' },
      { title: 'Green Buildings', chineseTitle: '绿色建筑', text: 'Use AI to manage energy consumption and support sustainability goals.', chineseText: '使用人工智能管理能源消耗，支持可持续发展目标。' },
      { title: 'Smart Lighting', chineseTitle: '智能照明', text: 'Automate lighting adjustments based on occupancy and time of day.', chineseText: '根据占用情况和时间自动调节照明。' },
    ],
  },
  {
    template: SlideTemplate.Challenge,
    title: 'How might we... translate data into clear insights?',
    chineseTitle: '我们如何... 将数据转化为清晰见解？',
    icon: 'bar_chart',
    iconColor: '#34A853',
  },
   {
    template: SlideTemplate.CardList,
    title: 'Finance & Data',
    chineseTitle: '金融与数据',
    icon: 'bar_chart',
    iconColor: '#34A853',
    cardItems: [
      { title: 'Explain', chineseTitle: '解释', text: "Explain this sales chart in simple terms for a non-finance audience.", chineseText: '用简单的语言为非财务人员解释这张销售图表。' },
      { title: 'Summarize', chineseTitle: '总结', text: 'A 10-page report into 3 key risks.', chineseText: '将一份 10 页的报告总结为 3 个关键风险。' },
      { title: 'Narrate', chineseTitle: '叙述', text: 'Write a narrative explaining the trends shown in this sales data.', chineseText: '撰写一段叙述，解释此销售数据中显示的趋势。' },
    ],
  },
  {
    template: SlideTemplate.Challenge,
    title: 'How might we... streamline logistics reporting & comms?',
    chineseTitle: '我们如何... 简化物流报告与沟通流程？',
    icon: 'local_shipping',
    iconColor: '#5f6368',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Logistics',
    chineseTitle: '物流',
    icon: 'local_shipping',
    iconColor: '#5f6368',
    cardItems: [
      { title: 'Summarize', chineseTitle: '总结', text: 'Today’s Ninja Van delivery issues in Clementi.', chineseText: '总结今天金文泰地区 Ninja Van 的派送问题。' },
      { title: 'Plan', chineseTitle: '规划', text: 'Draft a contingency plan for a surge in holiday deliveries.', chineseText: '为应对节假日激增的送货量草拟一份应急预案。' },
      { title: 'Communicate', chineseTitle: '沟通', text: 'Email to a customer about a delayed parcel.', chineseText: '给客户写一封关于包裹延迟的邮件。' },
    ],
  },
  {
    template: SlideTemplate.Challenge,
    title: 'How might we... generate creative ideas for new products?',
    chineseTitle: '我们如何... 为新产品生成创意？',
    icon: 'palette',
    iconColor: '#EA4335',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Product Design',
    chineseTitle: '产品设计',
    icon: 'palette',
    iconColor: '#EA4335',
    cardItems: [
      { title: 'Visualize', chineseTitle: '构想', text: 'Generate 5 sneaker designs inspired by the Gardens by the Bay Supertrees.', chineseText: '生成 5 款以滨海湾花园超级树为灵感的运动鞋设计。' },
      { title: 'Describe', chineseTitle: '描述', text: "Write a compelling product description for a new 'Pandan-flavour' milk tea.", chineseText: '为一款新的“班兰味”奶茶撰写引人入胜的产品描述。' },
      { title: 'Survey', chineseTitle: '调研', text: 'Create 10 survey questions for feedback on a new mobile app feature.', chineseText: '为新的手机应用功能设计 10 个用户反馈调查问题。' },
    ],
  },
  {
    template: SlideTemplate.InfographicSummary,
    title: 'Generative AI at a Glance',
    chineseTitle: '生成式 AI 概览',
    infographicSections: [
      {
        title: 'Core Capabilities & Functions',
        chineseTitle: '核心功能',
        items: [
          { icon: 'analytics', iconColor: '#FBBC05', text: 'Analyze', chineseText: '分析' },
          { icon: 'summarize', iconColor: '#34A853', text: 'Summarize', chineseText: '总结' },
          { icon: 'auto_awesome', iconColor: '#3b82f6', text: 'Create', chineseText: '创造' },
          { icon: 'transform', iconColor: '#5f6368', text: 'Transform', chineseText: '转型' },
          { icon: 'tune', iconColor: '#5f6368', text: 'Personalize', chineseText: '个性化' },
        ],
      },
      {
        title: 'Ethical Considerations in FM',
        chineseTitle: '设施管理中的道德考量',
        items: [
          { icon: 'privacy_tip', iconColor: '#EA4335', text: 'Data Privacy', chineseText: '数据隐私' },
          { icon: 'psychology_alt', iconColor: '#EA4335', text: 'Hallucinations', chineseText: '幻觉' },
          { icon: 'balance', iconColor: '#EA4335', text: 'Bias & Fairness', chineseText: '偏见与公平' },
          { icon: 'rule', iconColor: '#EA4335', text: 'Automation Bias', chineseText: '自动化偏见' },
          { icon: 'security', iconColor: '#EA4335', text: 'Safety-Critical Review', chineseText: '安全关键审核' },
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
      { icon: 'input', label: 'Input', chineseLabel: '输入' },
      { icon: 'auto_awesome', label: 'AI Model', chineseLabel: 'AI 模型' },
      { icon: 'article', label: 'Output', chineseLabel: '输出' },
      { icon: 'person_search', label: 'Human Review', chineseLabel: '人工审核' },
      { icon: 'rocket_launch', label: 'Action', chineseLabel: '执行' },
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
    chineseFooter: '💡'
  },
  {
    template: SlideTemplate.CardList,
    title: 'Gen AI in JTC Facilities Management',
    chineseTitle: '生成式AI在裕廊集团设施管理中的应用',
    icon: 'business_center',
    iconColor: '#1E40AF',
    cardItems: [
      { title: 'Key Takeaways', chineseTitle: '主要收获', text: 'Gen AI can be a powerful teammate for FM, helping to improve efficiency, safety, and tenant experience.', chineseText: '生成式AI可以成为设施管理中强大的队友，帮助提高效率、安全性和租户体验。' },
      { title: 'Next Steps', chineseTitle: '下一步', text: 'Start small, identify a real-world problem, and build a simple prototype.', chineseText: '从小的、真实世界的问题开始，并构建一个简单的原型。' },
      { title: 'Call for Pilots', chineseTitle: '试点项目征集', text: 'We are looking for pilot projects to explore the use of Gen AI in our operations. Share your ideas with us!', chineseText: '我们正在寻找试点项目，以探索生成式AI在我们运营中的应用。请与我们分享您的想法！' },
    ],
  },
];