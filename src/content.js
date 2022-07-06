export const team = [
  {
    name: "Marek Hauzr",
    role: "Founder & CEO",
    description:
      "Previously worked as quant in a Chainkeepers s.r.o., company market making crypto tokens and running liquidation bots and in Quantlane s.r.o. as a team lead quant helped build the data science team. Has experience with company building from CreativeDock s.r.o. as senior data scientist.",
    imageSrc: "james-bond.webp",
  },
  {
    name: "David Vodrážka",
    role: "Co-founder & FE developer",
    description:
      "Enthusiastic JavaScript developer, who loves learning new technologies, always in search for the next technical challenge. Currently working at Seznam, taking care of the team's DevOps and CI/CD needs, alongside JS frontend development.",
    imageSrc: "james-bond.webp",
  },
  {
    name: "Ondřej Sojka",
    role: "Co-founder & SC developer",
    description:
      "Curious Python backend developer with a passion for DeFi. Dabbling in the space since 2019, I have experience with blockchain development and analysis.",
    imageSrc: "james-bond.webp",
  },
];

export const faqs = [
  {
    question: "How will option selling work?",
    answer:
      "Selling will work almost the same as buying options with two differences. First user will receive premium instead of paying it. Second the user selling the option will have to lock in tokens covering the option.",
  },
  {
    question: "How can liquidity pool increase its usage above 100%?",
    answer:
      "Since users can both sell and buy options from/to the given pool, the AMM can match options between buyers and sellers. With a limitation that the absolute difference between bought and sold options will be lower than the liquidity in the pool to ensure coverage of all options.",
  },
  {
    question: "How will be the effective spreads decreased?",
    answer:
      "Buying and selling options will be based on the same market price and there will be fees charged on top of it. This sets the spread to approximately twice the size of the fees.",
  },
  {
    question: "How will liquidity increase?",
    answer:
      "It will be possible to use liquidity pool above 100% of its value which will increase the APY which in turn will drive in more liquidity to the pool.",
  },
];
