export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  link?: string;
  category: "Philosophy" | "Business" | "Fiction" | "Science" | "Other";
  whyItMatters: string;
}

export const BOOKS: Book[] = [
  {
    id: "tboi",
    title: "The Beginning of Infinity",
    author: "David Deutsch",
    description: "Explanations that transform the world. A fundamental text on Critical Rationalism, optimism, and the infinite reach of knowledge.",
    category: "Philosophy",
    whyItMatters: "Provides the epistemological foundation: problems are solvable, errors are inevitable but correctable, and humans are universal explainers."
  },
  {
    id: "infinite-games",
    title: "Finite and Infinite Games",
    author: "James P. Carse",
    description: "A vision of life as play. Finite players play to win; infinite players play to keep playing.",
    category: "Philosophy",
    whyItMatters: "The core ethos of the project. Distinguishing between status games (finite) and the game of life/civilization (infinite)."
  },
  {
    id: "minimalist-entrepreneur",
    title: "The Minimalist Entrepreneur",
    author: "Sahil Lavingia",
    description: "How to build a sustainable, profitable business by starting small and solving real problems for real people.",
    category: "Business",
    whyItMatters: "Practical playbook for the 'moral entrepreneur'. Focuses on profitability, community, and solving problems over chasing VC unicorns blindly."
  },
  {
    id: "zero-to-one",
    title: "Zero to One",
    author: "Peter Thiel",
    description: "Notes on startups, or how to build the future. Competition is for losers; build a monopoly by solving a unique problem.",
    category: "Business",
    whyItMatters: "Emphasizes the importance of doing something new (0 to 1) rather than copying (1 to n). Crucial for identifying 'power law' problems."
  },
  {
    id: "meaning-in-life",
    title: "Meaning in Life and Why It Matters",
    author: "Susan Wolf",
    description: "Philosophical inquiry into what makes a life meaningful—active engagement in projects of worth.",
    category: "Philosophy",
    whyItMatters: "Helps define 'Good Quests'. Meaning arises when subjective attraction meets objective worth."
  },
  {
    id: "hitchhikers",
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    description: "A comedy science fiction series about the absurdity of the universe and the importance of carrying a towel.",
    category: "Fiction",
    whyItMatters: "Don't Panic. A reminder to keep a sense of humor and perspective while traversing the galaxy (or saving the world)."
  },
  {
    id: "sapiens",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description: "How Homo sapiens conquered Earth through shared fictions (money, empires, religions).",
    category: "Science",
    whyItMatters: "Understanding the 'shared fictions' allows us to rewrite them. Companies, money, and nations are tools we created and can improve."
  },
  {
    id: "atlas-shrugged",
    title: "Atlas Shrugged",
    author: "Ayn Rand",
    description: "A dystopian novel about the role of the mind in man's existence and the morality of rational self-interest.",
    category: "Fiction",
    whyItMatters: "Highlights the 'moral entrepreneur'—the builder who refuses to apologize for their ability. (Take the best, leave the rest)."
  },
  {
    id: "harry-potter",
    title: "Harry Potter and the Methods of Rationality",
    author: "Eliezer Yudkowsky",
    description: "A fanfiction where Harry is a rationalist scientist. (Or the original series for the 'boy who lived' archetype).",
    category: "Fiction",
    whyItMatters: "Rationality applied to magic. 'The Sorting Hat' for problems. Learning to think clearly to defeat death (Voldemort)."
  },
  {
    id: "good-quests",
    title: "Choose Good Quests",
    author: "Trae Stephens & Markie Wagner",
    description: "Essay on how to choose what to work on. Avoid mimetic competition and find secrets.",
    link: "https://foundersfund.com/2023/06/choose-good-quests/",
    category: "Business",
    whyItMatters: "The tactical guide to selecting a 'Main Quest'. Don't just follow the crowd."
  },
  {
    id: "80-20-principle",
    title: "The 80/20 Principle",
    author: "Richard Koch",
    description: "The secret to achieving more with less. Focus on the 20% of inputs that produce 80% of outputs.",
    category: "Business",
    whyItMatters: "Essential for prioritization. In the Infinite Game, you must identify the 'power law' activities that actually move the needle."
  },
  {
    id: "80000-hours",
    title: "80,000 Hours",
    author: "Benjamin Todd",
    description: "Evidence-based guide to finding a career that solves the world's most pressing problems.",
    category: "Business",
    whyItMatters: "Provides the data-driven framework for impact. 'Problem, Solution, Personal Fit'."
  }
];
