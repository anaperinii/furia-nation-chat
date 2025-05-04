import {
  chat1,
  chat2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  framer,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap2,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  bellicon,
  statsicon,
  editicon,
  comments,
  gun,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: " ",
    url: "#features",
  },
  {
    id: "1",
    title: " ",
    url: "#pricing",
  },
  {
    id: "2",
    title: " ",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: " ",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [comments, gun, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Calendário do time e histórico tático",
    text: "Uma agenda inteligente que vai além de datas. Com o bot, você acessa os próximos jogos com horários e resultados históricos contra cada adversário.",
    date: "/proximojogo",
    status: "done",
    imageUrl: chat1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Dados individuais em cada partida",
    text: "Receba resultados em tempo real, estatísticas detalhadas, histórico de confrontos e próximos jogos. Através de relatórios detalhados, o bot traz destaques, clutchs, MVP e muito mais.",
    date: "May 2023",
    status: "done",
    imageUrl: chat2,
  },
  {
    id: "3",
    title: "Integração em diferentes plataformas",
    text: "Use no Telegram, no Discord ou direto no navegador. Seus dados e preferências são sincronizados em todos os dispositivos, garantindo uma experiência contínua.",
    date: "/integracao",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  

  {
    id: "1",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Dados que vão turbinar sua experiência",
    text: "Para o fã que não se contenta em saber pouco. Explore estatísticas avançadas, desempenho nos últimos campeonatos e históricos de confronto direto. Tudo isso está a apenas um comando de distância.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: statsicon,
  },
  {
    id: "1",
    title: "Alertas que mantém você um passo a frente",
    text: "Alertas inteligentes que vão muito além do simples ''Jogo Começou''. Receba notificações antes das partidas, atualizações em tempo real dos placares e lembretes personalizados.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: bellicon,
    light: true,
  },
  {
    id: "2",
    title: "Experiência imersiva e personalizada",
    text: "Os recursos de personalização transformam a experiência. Escolha quais jogadores quer acompanhar ainda mais de perto e selecione os tipos de notificação que deseja receber",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: editicon,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
