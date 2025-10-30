import { SlideData, SlideTemplate } from './types';

export const SLIDES: SlideData[] = [
  {
    template: SlideTemplate.Title,
    title: 'AI 变局',
    subtitle: 'Generative AI for Business',
    chineseSubtitle: '生成式 AI 的商业应用',
  },
  {
    template: SlideTemplate.ThreeColumnIcon,
    title: 'You Already Use Traditional AI',
    chineseTitle: '你早已在使用传统人工智能',
    columns: [
      {
        icon: 'local_taxi',
        title: 'Grab: Analyzes ride patterns to match you faster.',
        chineseTitle: 'Grab: 分析出行模式，更快匹配车辆。',
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
    template: SlideTemplate.Diagram,
    title: 'From Tool to Teammate',
    chineseTitle: '从工具到队友',
  },
  {
    template: SlideTemplate.CardList,
    title: 'Marketing',
    chineseTitle: '市场营销',
    icon: 'campaign',
    iconColor: '#4285F4',
    cardItems: [
      { title: 'Brainstorm', chineseTitle: '构思', text: "Viral TikTok ideas for LiHO TEA's new drink.", chineseText: '为「LiHO TEA」的新饮品构思病毒式传播的 TikTok 创意。' },
      { title: 'Write', chineseTitle: '撰写', text: "Instagram captions for Shopee's 11.11 sale.", chineseText: '为 Shopee 的 11.11 促销撰写 Instagram 标题。' },
      { title: 'Target', chineseTitle: '定位', text: 'Ads for NP students vs. their parents.', chineseText: '为 NP 学生和他们的家长制作不同的定向广告。' },
    ],
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
    template: SlideTemplate.CardList,
    title: 'Logistics',
    chineseTitle: '物流运营',
    icon: 'local_shipping',
    iconColor: '#5f6368',
    cardItems: [
      { title: 'Summarize', chineseTitle: '总结', text: 'Today’s Ninja Van delivery issues in Clementi.', chineseText: '总结今天金文泰地区 Ninja Van 的派送问题。' },
      { title: 'Plan', chineseTitle: '规划', text: 'Draft a contingency plan for a surge in holiday deliveries.', chineseText: '为应对节假日激增的送货量草拟一份应急预案。' },
      { title: 'Communicate', chineseTitle: '沟通', text: 'Email to a customer about a delayed parcel.', chineseText: '给客户写一封关于包裹延迟的邮件。' },
    ],
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
    template: SlideTemplate.Title,
    title: '问 (wèn)',
    subtitle: 'Questions?',
    chineseSubtitle: '有问题吗？'
  },
];