import { SlideData, SlideTemplate } from './types';

export const SLIDES: SlideData[] = [
  {
    template: SlideTemplate.Title,
    title: 'AI Transformation for Business',
    subtitle: '人工智能助力商业转型',
    chineseSubtitle: 'Hands-on Workshop — Diploma in CHS',
    chineseFooter: '6 Nov, 10AM · 56-06-01',
  },
  {
    template: SlideTemplate.Agenda,
    title: 'Workshop Outline',
    agendaColumns: [
      {
        icon: '💡',
        title: 'Part 1 – Gen AI in Business',
        items: [
          { text: 'Key ideas & real-world use cases' },
          { text: 'Quick demos' }
        ],
        bgColor: '#E8F0FE',
      },
      {
        icon: '⚙️',
        title: 'Part 2 – AWS PartyRock Hands-On',
        items: [
          { text: 'Explore features & workflow' },
          { text: 'Build your own AI app' }
        ],
        bgColor: '#EFE9FB',
      }
    ],
    footer: 'From learning → building your own AI business app',
    chineseFooter: '✨',
  },
  {
    template: SlideTemplate.ThreeColumnIcon,
    title: 'You Already Use Traditional AI',
    chineseTitle: '你早已在使用传统人工智能',
    columns: [
      {
        icon: 'smart_display',
        title: "TikTok: Learns what you watch to create your 'For You' page.",
        chineseTitle: 'TikTok: 学习你的观看喜好，打造你的“推荐”页面。',
      },
      {
        icon: 'credit_card_off',
        title: 'DBS: Detects irregular patterns to prevent fraud.',
        chineseTitle: 'DBS: 检测异常模式，防止欺诈。',
      },
      {
        icon: 'recommend',
        title: 'Spotify: Studies listening habits to recommend music.',
        chineseTitle: 'Spotify: 研究听歌习惯，推荐音乐。',
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
    scenario: 'The FairPrice app shows you a list of your past purchases to make re-ordering easier.',
    isAnswerSlide: false,
    correctAnswer: 'Traditional AI',
  },
  {
    template: SlideTemplate.Quiz,
    quizIcon: 'receipt_long',
    scenario: 'The FairPrice app shows you a list of your past purchases to make re-ordering easier.',
    isAnswerSlide: true,
    correctAnswer: 'Traditional AI',
    explanation: 'It ANALYZES your purchase history (existing data) to create this list for you.',
  },
  {
    template: SlideTemplate.Quiz,
    quizIcon: 'auto_stories',
    scenario: "Carousell's feature uses your photo to automatically WRITE a product title and description for your listing.",
    isAnswerSlide: false,
    correctAnswer: 'Generative AI',
  },
  {
    template: SlideTemplate.Quiz,
    quizIcon: 'auto_stories',
    scenario: "Carousell's feature uses your photo to automatically WRITE a product title and description for your listing.",
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
    title: 'How might we... generate creative marketing ideas?',
    chineseTitle: '我们如何... 生成创意营销内容？',
    icon: 'campaign',
    iconColor: '#4285F4',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Marketing',
    chineseTitle: '市场营销',
    icon: 'campaign',
    iconColor: '#4285F4',
    cardItems: [
      { title: 'Brainstorm', chineseTitle: '构思', text: "Viral TikTok ideas for LiHO TEA's new drink.", chineseText: '用于「LiHO TEA」新饮品的TikTok式快速传播创意' },
      { title: 'Write', chineseTitle: '撰写', text: "Instagram captions for Shopee's 11.11 sale.", chineseText: '为 Shopee 的 双十一 促销撰写 Instagram 标题。' },
      { title: 'Target', chineseTitle: '定位', text: "Generate 10 different Facebook ad versions for bubble tea: 5 targeting students with 'study break' themes, and 5 targeting parents with 'treat your kids' messaging.", chineseText: '为珍珠奶茶生成 10 个不同版本的 Facebook 广告：5 个以“学习小憩”为主题面向学生，5 个以“犒劳孩子”为主题面向家长。' },
    ],
  },
  {
    template: SlideTemplate.Challenge,
    title: 'How might we... speed up customer communications?',
    chineseTitle: '我们如何... 加快客户沟通？',
    icon: 'support_agent',
    iconColor: '#5f6368',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Customer Service',
    chineseTitle: '客户服务',
    icon: 'support_agent',
    iconColor: '#5f6368',
    cardItems: [
      { title: 'Answer', chineseTitle: '回答', text: 'A Singtel chatbot that understands Singlish.', chineseText: '一个能听懂新加坡式英语的新电信聊天机器人。' },
      { title: 'Summarize', chineseTitle: '总结', text: 'Summarize an angry GrabFood customer call.', chineseText: '总结一个愤怒的 GrabFood 客户来电。' },
      { title: 'Draft', chineseTitle: '草拟', text: '5 polite replies for Haidilao booking questions.', chineseText: '为海底捞的预订问题草拟 5 个礼貌回复。' },
    ],
  },
  {
    template: SlideTemplate.Challenge,
    title: 'How might we... streamline HR & employee comms?',
    chineseTitle: '我们如何... 简化人力资源与员工沟通渠道？',
    icon: 'groups',
    iconColor: '#5f6368',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Human Resources',
    chineseTitle: '人力资源',
    icon: 'groups',
    iconColor: '#5f6368',
    cardItems: [
      { title: 'Recruit', chineseTitle: '招聘', text: "Draft an engaging job post for a retail role at Uniqlo.", chineseText: '为优衣库的零售职位草拟一则引人入胜的招聘启事。' },
      { title: 'Train', chineseTitle: '培训', text: 'Script for a new part-timer orientation video.', chineseText: '为新的兼职员工创作培训视频脚本。' },
      { title: 'Engage', chineseTitle: '互动', text: 'Fun, bilingual email for an office movie night.', chineseText: '为办公室电影之夜草拟一封有趣的双语邮件。' },
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
    title: 'How might we... accelerate market research & analysis?',
    chineseTitle: '我们如何... 加速市场研究与分析？',
    icon: 'compass_calibration',
    iconColor: '#5f6368',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Strategy',
    chineseTitle: '商业战略',
    icon: 'compass_calibration',
    iconColor: '#5f6368',
    cardItems: [
      { title: 'Research', chineseTitle: '研究', text: 'Generate a competitive analysis brief on two new fintech startups in Singapore.', chineseText: '生成一份关于新加坡两家新晋金融科技初创公司的竞争力分析简报。' },
      { title: 'Analyze', chineseTitle: '分析', text: 'Summarize online customer reviews for Toast Box, identifying the top 3 complaints.', chineseText: '总结 Toast Box 的在线客户评价，并找出三大主要投诉。' },
      { title: 'Brainstorm', chineseTitle: '构思', text: 'Propose 3 potential brand partnership ideas for a local brand like Charles & Keith.', chineseText: '为 Charles & Keith 这样的本土品牌构思三种潜在的品牌合作方案。' },
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
    template: SlideTemplate.Challenge,
    title: 'How might we... quickly draft public relations content?',
    chineseTitle: '我们如何... 快速草拟公关内容？',
    icon: 'podcasts',
    iconColor: '#5f6368',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Public Relations',
    chineseTitle: '公共关系',
    icon: 'podcasts',
    iconColor: '#5f6368',
    cardItems: [
      { title: 'Crisis Comms', chineseTitle: '危机公关', text: "Draft a sincere but funny apology for a customer who found a toy cockroach in their chicken rice.", chineseText: '为在鸡饭里发现玩具蟑螂的顾客草拟一份真诚又幽默的公开道歉信。' },
      { title: 'Press Release', chineseTitle: '新闻稿', text: "Write a press release announcing a local kopi shop won 'Best Coffee in Asia'.", chineseText: '撰写一篇新闻稿，宣布一家本地咖啡店荣获“亚洲最佳咖啡”奖。' },
      { title: 'Speechwriting', chineseTitle: '演讲稿', text: "Write a 1-minute opening speech for a CEO at a launch event.", chineseText: '为 CEO 在新品发布会上的开幕致辞撰写一份 1 分钟的演讲稿。' },
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
        title: 'Key Ethical Considerations',
        chineseTitle: '关键道德考量',
        items: [
          { icon: 'psychology_alt', iconColor: '#EA4335', text: 'Hallucinations', chineseText: '幻觉' },
          { icon: 'shuffle', iconColor: '#EA4335', text: 'Non-Deterministic', chineseText: '不确定性' },
          { icon: 'balance', iconColor: '#EA4335', text: 'Bias & Fairness', chineseText: '偏见与公平' },
          { icon: 'privacy_tip', iconColor: '#EA4335', text: 'Data Privacy', chineseText: '数据安全' },
          { icon: 'person_search', iconColor: '#EA4335', text: 'Human Oversight', chineseText: '人工监督' },
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
    title: 'Next-Up: AWS PartyRock',
    subtitle: 'Intro + Hands-On Creation',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png',
    agendaColumns: [
      {
        icon: '🚀',
        title: 'What is AWS PartyRock',
        items: [
          { text: 'A simple, no-code platform by AWS to build Generative AI apps' },
          { text: 'Combine text, image, and logic blocks to create interactive tools' }
        ]
      },
      {
        icon: '🧠',
        title: 'What You’ll Do Next',
        isOrdered: true,
        items: [
          { text: 'Learn key features of PartyRock' },
          { text: 'Identify a business use case' },
          { text: 'Plan key functions & user flow' },
          { text: 'Build and customise your own AI-powered app' }
        ]
      }
    ],
    footer: 'From concept to creation — start building your AI app idea with PartyRock.',
    chineseFooter: '💬'
  },
];
