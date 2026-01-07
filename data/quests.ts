export type Neglectedness = 'LOW' | 'MED' | 'HIGH' | 'EXTREME';

export type Quest = {
    id: string;
    ticker: string;
    title: string;
    description: string;
    problem_cap_money: string;
    problem_cap_lives: string;
    neglectedness: Neglectedness;
    solubility: number; // 0-100
    explanation: string; // The "Alpha" - Theory of Change
    teams: string[];
};

export const QUESTS: Quest[] = [
    {
        id: "aging",
        ticker: "AGING",
        title: "Biological Senescence",
        description: "The systematic breakdown of biological systems over time, causing 100% mortality in humans who don't die from other causes first.",
        problem_cap_money: "$32 Trillion/yr",
        problem_cap_lives: "100,000/day",
        neglectedness: "HIGH",
        solubility: 85,
        explanation: "Aging is an engineering problem of accumulated damage. Partial reprogramming (Yamanaka factors) proves reversibility in vitro. The biology is tractable—we've reversed age in mice. What remains is translation to humans and regulatory navigation.",
        teams: ["Altos Labs", "Retro Bio", "NewLimit", "Calico", "Unity Biotechnology"]
    },
    {
        id: "biosec",
        ticker: "BIOSEC",
        title: "Pandemic Prevention",
        description: "Natural and engineered pathogens pose existential risk. COVID-19 was a warning shot—far worse is possible.",
        problem_cap_money: "$10 Trillion/event",
        problem_cap_lives: "Global Risk",
        neglectedness: "EXTREME",
        solubility: 92,
        explanation: "Far-UVC light at 222nm kills pathogens without harming human skin/eyes. Install it everywhere: airports, hospitals, schools. This is an infrastructure problem, not a physics problem. We have the tech, we lack deployment.",
        teams: ["Ginkgo Bioworks", "Open Philanthropy", "Johns Hopkins CHS", "Nuclear Threat Initiative"]
    },
    {
        id: "h2o-desal",
        ticker: "H2O",
        title: "Infinite Freshwater",
        description: "2 billion people lack access to safe drinking water. Agriculture consumes 70% of freshwater. Aquifers are depleting.",
        problem_cap_money: "$4 Trillion/yr",
        problem_cap_lives: "2 Billion People",
        neglectedness: "MED",
        solubility: 95,
        explanation: "Graphene membranes and solar-powered desalination can produce freshwater at 1/10th the energy cost of reverse osmosis. Israel already gets 80% of drinking water from desalination. Scale requires capital, not breakthroughs.",
        teams: ["IDE Technologies", "Energy Recovery Inc", "Gradiant", "WaterFX"]
    },
    {
        id: "edu",
        ticker: "EDU",
        title: "Universal Quality Education",
        description: "250 million children lack access to basic education. Even in developed nations, outcomes are stagnating despite spending increases.",
        problem_cap_money: "$10 Trillion/yr",
        problem_cap_lives: "1 Billion Students",
        neglectedness: "LOW",
        solubility: 70,
        explanation: "AI tutors can provide 1:1 Bloom's 2-sigma instruction at near-zero marginal cost. Khan Academy + GPT-4 already shows 0.8 sigma improvement. The bottleneck is distribution and cultural adaptation, not technology.",
        teams: ["Khan Academy", "Duolingo", "Synthesis", "Minerva Project"]
    },
    {
        id: "energy",
        ticker: "NRG",
        title: "Abundant Clean Energy",
        description: "Energy poverty affects 3 billion people. Climate change requires eliminating 50 GT CO2/year. Fusion remains 20 years away (always).",
        problem_cap_money: "$5 Trillion/yr",
        problem_cap_lives: "Climate Risk",
        neglectedness: "LOW",
        solubility: 88,
        explanation: "Solar + batteries already cheaper than coal in most markets. The learning curve continues. Nuclear fission (SMRs) can provide baseload. The problem is permitting and NIMBYism, not physics. Next-gen geothermal is underexplored.",
        teams: ["Commonwealth Fusion", "Helion", "Form Energy", "Fervo Energy", "TerraPower"]
    }
];
