export type Entrepreneur = {
    name: string;
    role: string;
    company?: string;
    avatar?: string;
    link?: string;
};

export type Resource = {
    title: string;
    url: string;
    type: "book" | "video" | "article" | "org";
};

export type Problem = {
    id: string;
    emoji: string;
    title: string;
    description: string;
    problemCap: number; // Humans impacted × severity (in millions)
    economicCost: string;
    entrepreneurs: Entrepreneur[];
    explanation: string;
    bounty: boolean; // High cap + few entrepreneurs
    resources: Resource[];
};

// Core philosophy resources
export const CORE_RESOURCES: Resource[] = [
    {
        title: "The Beginning of Infinity",
        url: "https://www.amazon.com/Beginning-Infinity-Explanations-Transform-World/dp/0143121359",
        type: "book",
    },
    {
        title: "Conjecture Institute",
        url: "https://conjecture.dev",
        type: "org",
    },
    {
        title: "David Deutsch on Optimism",
        url: "https://www.youtube.com/watch?v=folTvNDL08A",
        type: "video",
    },
];

export const PROBLEMS: Problem[] = [
    {
        id: "aging",
        emoji: "🧬",
        title: "Biological Senescence",
        description: "The systematic breakdown of biological systems over time.",
        problemCap: 3200, // 100k/day × 365 × severity
        economicCost: "$32T/yr",
        explanation: "Aging is an engineering problem. Yamanaka factors prove reversibility. All problems are solvable—we just need to understand the errors and correct them.",
        bounty: false,
        entrepreneurs: [
            { name: "Sam Altman", role: "Investor", company: "Retro Bio", link: "https://retro.bio" },
            { name: "Jeff Bezos", role: "Investor", company: "Altos Labs", link: "https://altoslabs.com" },
            { name: "Brian Armstrong", role: "Founder", company: "NewLimit", link: "https://newlimit.com" },
        ],
        resources: [
            { title: "Lifespan by David Sinclair", url: "https://lifespanbook.com", type: "book" },
            { title: "SENS Research Foundation", url: "https://sens.org", type: "org" },
        ],
    },
    {
        id: "biosec",
        emoji: "🦠",
        title: "Pandemic Prevention",
        description: "Natural and engineered pathogens pose existential risk.",
        problemCap: 8000, // Global extinction risk
        economicCost: "$10T/event",
        explanation: "Far-UVC at 222nm kills pathogens safely. Infrastructure problem, not physics. Errors in deployment, not in knowledge.",
        bounty: true,
        entrepreneurs: [
            { name: "Jason Kelly", role: "Founder", company: "Ginkgo Bioworks", link: "https://ginkgobioworks.com" },
        ],
        resources: [
            { title: "Johns Hopkins Biosecurity", url: "https://centerforhealthsecurity.org", type: "org" },
            { title: "Far-UVC Research", url: "https://www.nature.com/articles/s41598-018-21058-w", type: "article" },
        ],
    },
    {
        id: "water",
        emoji: "💧",
        title: "Infinite Freshwater",
        description: "2 billion people lack safe drinking water.",
        problemCap: 2000,
        economicCost: "$4T/yr",
        explanation: "Graphene membranes enable 1/10th energy desalination. Scale requires capital not breakthroughs. The physics is solved.",
        bounty: false,
        entrepreneurs: [
            { name: "Matthew Stuber", role: "Founder", company: "Gradiant", link: "https://gradiant.com" },
            { name: "Casey Handmer", role: "Founder", company: "Terraform Industries", link: "https://terraformindustries.com" },
        ],
        resources: [
            { title: "IDE Technologies", url: "https://ide-tech.com", type: "org" },
        ],
    },
    {
        id: "education",
        emoji: "📚",
        title: "Universal Education",
        description: "250 million children lack basic education access.",
        problemCap: 1000,
        economicCost: "$10T/yr",
        explanation: "AI tutors provide 1:1 Bloom's 2-sigma instruction at zero marginal cost. Distribution is the remaining error.",
        bounty: false,
        entrepreneurs: [
            { name: "Sal Khan", role: "Founder", company: "Khan Academy", link: "https://khanacademy.org" },
            { name: "Luis von Ahn", role: "Founder", company: "Duolingo", link: "https://duolingo.com" },
            { name: "Ana Lorena Fabrega", role: "Founder", company: "Synthesis", link: "https://synthesis.com" },
        ],
        resources: [
            { title: "Bloom's 2 Sigma Problem", url: "https://en.wikipedia.org/wiki/Bloom%27s_2_sigma_problem", type: "article" },
        ],
    },
    {
        id: "energy",
        emoji: "⚡",
        title: "Abundant Clean Energy",
        description: "3 billion in energy poverty. 50 GT CO2/year to eliminate.",
        problemCap: 3000,
        economicCost: "$5T/yr",
        explanation: "Solar + batteries already cheaper than coal. The problem is permitting and NIMBYism—errors in policy, not physics.",
        bounty: false,
        entrepreneurs: [
            { name: "Sam Altman", role: "Investor", company: "Helion", link: "https://helionenergy.com" },
            { name: "Bill Gates", role: "Founder", company: "TerraPower", link: "https://terrapower.com" },
            { name: "Tim Latimer", role: "Founder", company: "Fervo Energy", link: "https://fervoenergy.com" },
        ],
        resources: [
            { title: "Our World in Data: Energy", url: "https://ourworldindata.org/energy", type: "article" },
        ],
    },
    {
        id: "supersonic",
        emoji: "✈️",
        title: "Supersonic Travel",
        description: "Time is humanity's scarcest resource. Flight hasn't improved in 50 years.",
        problemCap: 500,
        economicCost: "$2T/yr",
        explanation: "Boom Supersonic proving the tech. Regulatory and noise challenges are solvable errors, not fundamental limits.",
        bounty: true,
        entrepreneurs: [
            { name: "Blake Scholl", role: "Founder", company: "Boom Supersonic", link: "https://boomsupersonic.com" },
        ],
        resources: [
            { title: "Boom Supersonic", url: "https://boomsupersonic.com", type: "org" },
        ],
    },
    {
        id: "housing",
        emoji: "🏠",
        title: "Affordable Housing",
        description: "Housing costs consume 50%+ of income in major cities.",
        problemCap: 1500,
        economicCost: "$3T/yr",
        explanation: "3D printing, modular construction, and YIMBY policy can cut costs 70%. Zoning is the error to correct.",
        bounty: true,
        entrepreneurs: [
            { name: "Jason Ballard", role: "Founder", company: "ICON", link: "https://iconbuild.com" },
        ],
        resources: [
            { title: "YIMBY Movement", url: "https://en.wikipedia.org/wiki/YIMBY", type: "article" },
            { title: "ICON 3D Printing", url: "https://iconbuild.com", type: "org" },
        ],
    },
];

// All problems are solvable - infinite problem solving!
export function shouldHaveBounty(problem: Problem): boolean {
    return problem.problemCap > 1000 && problem.entrepreneurs.length <= 2;
}
