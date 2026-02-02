export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string[];
  relatedLink?: {
    text: string;
    href: string;
  };
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "AI Agent",
    slug: "ai-agent",
    definition: [
      "An AI agent is an autonomous software system that uses artificial intelligence to perceive its environment, make decisions, and take actions to achieve specific goals. Unlike simple automation scripts, AI agents can adapt to changing conditions, learn from outcomes, and operate with varying degrees of independence.",
      "In business contexts, AI agents handle tasks like customer support, data analysis, process monitoring, and decision support. They represent a shift from tools that require constant human direction to systems that can operate semi-autonomously within defined boundaries.",
    ],
    relatedLink: {
      text: "Learn about Custom AI Tools",
      href: "/systems",
    },
  },
  {
    term: "API",
    slug: "api",
    definition: [
      "An API (Application Programming Interface) is a set of protocols and tools that allows different software systems to communicate with each other. APIs define how requests should be made and how data should be exchanged, enabling applications to share functionality and information without exposing their underlying code.",
      "APIs are the connective tissue of modern software. They allow businesses to integrate tools, automate workflows across platforms, and build custom solutions on top of existing services. Most enterprise software today relies on APIs to function as part of a larger ecosystem.",
    ],
  },
  {
    term: "Applied AI",
    slug: "applied-ai",
    definition: [
      "Applied AI refers to the practical implementation of artificial intelligence technologies to solve real-world business problems. Unlike theoretical AI research, applied AI focuses on deploying working systems that deliver measurable outcomes — automating processes, augmenting decisions, or creating new capabilities.",
      "Applied AI is less about cutting-edge research and more about understanding which AI capabilities are mature enough to be reliable, then engineering them into solutions that work within existing business constraints and workflows.",
    ],
    relatedLink: {
      text: "See how we apply AI",
      href: "/systems",
    },
  },
  {
    term: "Backlinks",
    slug: "backlinks",
    definition: [
      "Backlinks are links from external websites that point to your site. In traditional SEO, backlinks serve as votes of confidence — when reputable sites link to your content, search engines interpret this as a signal of quality and authority, which can improve your rankings.",
      "Not all backlinks are equal. Links from high-authority, relevant sites carry more weight than links from low-quality or unrelated sources. Building quality backlinks requires creating content worth referencing and establishing relationships within your industry.",
    ],
    relatedLink: {
      text: "Learn about SEO",
      href: "/digital",
    },
  },
  {
    term: "Business Systems",
    slug: "business-systems",
    definition: [
      "Business systems are integrated sets of processes, tools, and workflows that work together to accomplish specific organizational functions. Unlike individual tools, systems connect multiple components into a cohesive infrastructure that can operate reliably and scale with the business.",
      "Effective business systems reduce dependency on individual knowledge, create consistency across operations, and free teams to focus on higher-value work. They transform ad-hoc processes into repeatable, measurable infrastructure.",
    ],
    relatedLink: {
      text: "Explore our systems work",
      href: "/systems",
    },
  },
  {
    term: "Content Strategy",
    slug: "content-strategy",
    definition: [
      "Content strategy is the planning, development, and governance of content to achieve specific business objectives. It encompasses what content to create, for whom, through which channels, and how to measure its effectiveness.",
      "In the context of SEO and GEO, content strategy determines which topics to cover, how to structure information for both human readers and AI systems, and how to build topical authority over time. Good content strategy aligns editorial decisions with business goals and audience needs.",
    ],
    relatedLink: {
      text: "See our digital approach",
      href: "/digital",
    },
  },
  {
    term: "Conversion Rate Optimization",
    slug: "conversion-rate-optimization",
    definition: [
      "Conversion Rate Optimization (CRO) is the systematic process of increasing the percentage of visitors who take a desired action on a website or application. This includes analyzing user behavior, testing variations, and refining the experience to remove friction and increase conversions.",
      "CRO focuses on maximizing the value of existing traffic rather than just acquiring more visitors. Small improvements in conversion rates can have outsized impacts on revenue, making CRO one of the highest-leverage activities in digital growth.",
    ],
    relatedLink: {
      text: "Learn about lead generation",
      href: "/digital",
    },
  },
  {
    term: "CRM Integration",
    slug: "crm-integration",
    definition: [
      "CRM integration is the process of connecting a Customer Relationship Management system with other business tools and data sources. This allows customer data to flow between systems, ensuring that sales, marketing, and service teams work from a unified view of each customer.",
      "Effective CRM integration eliminates data silos, reduces manual data entry, and enables automation across the customer lifecycle. It's often a foundational component of revenue engines and marketing automation systems.",
    ],
    relatedLink: {
      text: "Explore revenue engines",
      href: "/systems",
    },
  },
  {
    term: "Custom AI Tools",
    slug: "custom-ai-tools",
    definition: [
      "Custom AI tools are purpose-built applications that use artificial intelligence to solve specific business problems. Unlike off-the-shelf software, they're designed around your workflows, data, and goals — giving you capabilities your competitors can't buy.",
      "These tools can automate complex decisions, surface insights from unstructured data, augment human judgment, or create entirely new efficiencies. Because they're built for your specific context, they often deliver value that generic solutions cannot match.",
    ],
    relatedLink: {
      text: "See what we build",
      href: "/systems",
    },
  },
  {
    term: "Data Infrastructure",
    slug: "data-infrastructure",
    definition: [
      "Data infrastructure is the foundation that allows businesses to collect, store, unify, and operationalize their data across platforms and sources. It includes pipelines, integrations, warehouses, and the systems that make data accessible and actionable for decision-making and automation.",
      "Without solid data infrastructure, AI tools and automations have nothing reliable to work with. It's the unglamorous but critical layer that makes everything else possible — the plumbing that enables modern data-driven operations.",
    ],
    relatedLink: {
      text: "Learn about our approach",
      href: "/systems",
    },
  },
  {
    term: "Data Pipeline",
    slug: "data-pipeline",
    definition: [
      "A data pipeline is a series of automated processes that move data from one system to another, often transforming it along the way. Pipelines extract data from sources, clean and structure it, and load it into destinations where it can be analyzed or used by other systems.",
      "Reliable data pipelines are essential for businesses that need consistent, up-to-date information across their operations. They eliminate manual data transfers, reduce errors, and ensure that downstream systems always have access to current data.",
    ],
    relatedLink: {
      text: "Explore data infrastructure",
      href: "/systems",
    },
  },
  {
    term: "Domain Authority",
    slug: "domain-authority",
    definition: [
      "Domain authority is a metric that estimates how likely a website is to rank in search engine results. It's calculated based on factors like the quantity and quality of backlinks, the site's age, and its overall SEO profile.",
      "While not a direct Google ranking factor, domain authority serves as a useful proxy for a site's competitive strength in search. Building domain authority requires consistent effort — creating valuable content, earning quality backlinks, and maintaining strong technical SEO.",
    ],
    relatedLink: {
      text: "Learn about SEO",
      href: "/digital",
    },
  },
  {
    term: "ETL",
    slug: "etl",
    definition: [
      "ETL stands for Extract, Transform, Load — the three-step process used to move data from source systems to a data warehouse or other destination. Extract pulls data from various sources, Transform cleans and restructures it, and Load writes it to the target system.",
      "ETL processes are the backbone of data infrastructure, enabling businesses to consolidate information from disparate systems into a unified format. Modern variations like ELT (Extract, Load, Transform) shift transformation to the destination system for greater flexibility.",
    ],
    relatedLink: {
      text: "Explore data infrastructure",
      href: "/systems",
    },
  },
  {
    term: "GEO",
    slug: "geo",
    definition: [
      "Generative Engine Optimization (GEO) is the practice of optimizing content and digital presence to be discovered, cited, and recommended by AI-powered search systems — including ChatGPT, Perplexity, Claude, Google AI Overviews, and other large language models.",
      "Traditional SEO focuses on ranking in search engine results pages. GEO focuses on being the answer — the source that AI systems pull from when users ask questions. This requires structuring content in ways that LLMs can easily parse, cite, and recommend.",
      "As search shifts from links to answers, GEO is becoming essential for businesses that want to remain visible in an AI-first discovery landscape.",
    ],
    relatedLink: {
      text: "Learn about our GEO services",
      href: "/digital",
    },
  },
  {
    term: "Lead Generation",
    slug: "lead-generation",
    definition: [
      "Lead generation is the process of attracting and capturing interest from potential customers. This includes strategies and systems for identifying prospects, engaging them with relevant content or offers, and collecting their information for follow-up.",
      "Effective lead generation goes beyond capturing contact information — it qualifies prospects, routes them appropriately, and integrates with sales and marketing systems to enable timely, relevant follow-up. Modern lead generation systems use automation and AI to scale personalized outreach.",
    ],
    relatedLink: {
      text: "Explore lead generation",
      href: "/digital",
    },
  },
  {
    term: "LLM",
    slug: "llm",
    definition: [
      "A Large Language Model (LLM) is a type of artificial intelligence trained on vast amounts of text data to understand and generate human language. LLMs power applications like ChatGPT, Claude, and Google's Gemini, enabling capabilities from conversational AI to content generation to code writing.",
      "LLMs work by predicting the most likely next words based on context and training. While they can produce remarkably coherent output, they require careful implementation to be reliable in business contexts — including prompt engineering, output validation, and appropriate use case selection.",
    ],
    relatedLink: {
      text: "See how we use AI",
      href: "/systems",
    },
  },
  {
    term: "Marketing Automation",
    slug: "marketing-automation",
    definition: [
      "Marketing automation uses software to automate repetitive marketing tasks and workflows. This includes email sequences, lead nurturing, social posting, campaign tracking, and personalized content delivery based on user behavior.",
      "When implemented well, marketing automation allows teams to deliver personalized experiences at scale without proportional increases in manual effort. It transforms marketing from a series of campaigns into a systematic operation that runs continuously.",
    ],
    relatedLink: {
      text: "Learn about digital marketing",
      href: "/digital",
    },
  },
  {
    term: "Prompt Engineering",
    slug: "prompt-engineering",
    definition: [
      "Prompt engineering is the practice of designing and refining the instructions given to AI systems to achieve desired outputs. It involves understanding how language models interpret context, crafting inputs that elicit accurate responses, and iterating to improve reliability.",
      "Effective prompt engineering is part art, part science. It requires understanding the capabilities and limitations of specific models, testing variations systematically, and building prompts that remain robust across different inputs and edge cases.",
    ],
    relatedLink: {
      text: "Explore custom AI tools",
      href: "/systems",
    },
  },
  {
    term: "RAG",
    slug: "rag",
    definition: [
      "RAG (Retrieval-Augmented Generation) is an AI architecture that combines large language models with external knowledge retrieval. Instead of relying solely on training data, RAG systems fetch relevant documents or data at query time, using this context to generate more accurate and up-to-date responses.",
      "RAG is particularly valuable for business applications where accuracy matters and information changes frequently. It allows AI systems to answer questions about proprietary data, recent events, or specialized domains without requiring model retraining.",
    ],
    relatedLink: {
      text: "Learn about custom AI tools",
      href: "/systems",
    },
  },
  {
    term: "Revenue Engine",
    slug: "revenue-engine",
    definition: [
      "A revenue engine is an integrated system designed to drive predictable, scalable growth. It connects sales, marketing, and customer operations into a unified infrastructure — automating lead flow, optimizing conversion, and surfacing the data needed to make smart decisions.",
      "Unlike disconnected tools or one-off campaigns, a revenue engine is built to compound. It gets smarter and more efficient over time as data accumulates and processes are refined. The goal is systematic growth, not episodic effort.",
    ],
    relatedLink: {
      text: "Explore revenue engines",
      href: "/systems",
    },
  },
  {
    term: "SEO",
    slug: "seo",
    definition: [
      "Search Engine Optimization (SEO) is the practice of improving a website's visibility in traditional search engines like Google and Bing. This includes technical optimization, content strategy, and building authority through backlinks and engagement signals.",
      "SEO remains foundational for digital visibility — but it's no longer enough on its own. The search landscape is fragmenting across traditional engines, AI-powered search, and social discovery. Modern SEO must work alongside GEO and other visibility strategies.",
    ],
    relatedLink: {
      text: "Learn about our SEO services",
      href: "/digital",
    },
  },
  {
    term: "Technical SEO",
    slug: "technical-seo",
    definition: [
      "Technical SEO encompasses the behind-the-scenes optimizations that help search engines crawl, understand, and index a website effectively. This includes site speed, mobile responsiveness, URL structure, schema markup, XML sitemaps, and crawl efficiency.",
      "Strong technical SEO creates the foundation for content to perform. Even great content will struggle to rank if the underlying site has crawl issues, slow load times, or structural problems that prevent search engines from properly indexing it.",
    ],
    relatedLink: {
      text: "Learn about SEO",
      href: "/digital",
    },
  },
  {
    term: "Workflow Automation",
    slug: "workflow-automation",
    definition: [
      "Workflow automation is the use of technology to execute recurring tasks and processes without manual intervention. This includes everything from simple triggers and notifications to complex, multi-step processes that span teams and systems.",
      "Effective workflow automation eliminates manual bottlenecks, reduces errors, and frees teams to focus on higher-value work. When done well, it compounds — each automated process creates capacity for the next, allowing organizations to scale operations without proportional headcount growth.",
    ],
    relatedLink: {
      text: "Explore workflow automation",
      href: "/systems",
    },
  },
];
