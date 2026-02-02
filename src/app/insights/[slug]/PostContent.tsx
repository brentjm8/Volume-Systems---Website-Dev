"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { VUMeterDivider } from "@/components/VUMeterDivider";

type PostContentProps = {
  slug: string;
  title: string;
  date: string;
};

export function PostContent({ slug, title, date }: PostContentProps) {
  return (
    <>
      <Nav />
      <main className="pt-20 pb-32">
        {/* Back Link */}
        <section className="pt-8 px-6 md:px-8">
          <div className="max-w-[800px] mx-auto w-full">
            <Link
              href="/insights"
              className="text-text-tertiary hover:text-text-secondary transition-colors duration-200 text-sm"
            >
              ← Back to Insights
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 md:py-16 px-6 md:px-8">
          <div className="max-w-[800px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-text-primary mb-4">
                {title}
              </h1>
              <time className="text-text-tertiary">{date}</time>
            </motion.div>
          </div>
        </section>

        <VUMeterDivider />

        {/* Article Body */}
        <article className="py-12 md:py-16 px-6 md:px-8">
          <div className="max-w-[800px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              {slug === "what-is-geo" && <WhatIsGEOContent />}
              {slug === "why-ai-implementations-fail" && <WhyAIFailsContent />}
              {slug === "seo-is-dead-long-live-seo" && <SEOIsDeadContent />}
            </motion.div>
          </div>
        </article>

        <VUMeterDivider />

        {/* CTA */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-[800px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-3xl font-medium text-text-primary mb-6">
                Ready to build something that compounds?
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-bg-primary font-medium rounded-sm hover:bg-accent-hover transition-colors duration-200"
              >
                Start a Conversation →
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function WhatIsGEOContent() {
  return (
    <div className="space-y-6 text-text-secondary">
      <p className="text-lg leading-relaxed">
        Search is changing. For two decades,{" "}
        <Link href="/glossary#seo" className="text-accent hover:text-accent-hover">
          SEO
        </Link>{" "}
        meant one thing: rank higher on Google. Get the blue link. Win the click.
      </p>
      <p className="text-lg leading-relaxed">
        That era isn&apos;t over — but it&apos;s no longer the whole picture.
      </p>
      <p className="text-lg leading-relaxed">
        A growing share of discovery now happens inside AI systems. When someone
        asks ChatGPT a question, searches Perplexity, or reads a{" "}
        <Link href="/glossary#ai-overviews" className="text-accent hover:text-accent-hover">
          Google AI Overview
        </Link>
        , the answer they get doesn&apos;t come from a ranked list of
        links. It comes from content that the AI system selected, synthesized,
        and cited as a source.
      </p>
      <p className="text-lg leading-relaxed">
        The practice of making your business the source that gets cited is
        called{" "}
        <Link href="/glossary#geo" className="text-accent hover:text-accent-hover">
          Generative Engine Optimization
        </Link>{" "}
        — or GEO.
      </p>

      <h2 className="text-2xl font-medium text-text-primary pt-8 pb-2">
        GEO vs. SEO: What&apos;s the difference?
      </h2>
      <p className="text-lg leading-relaxed">
        SEO optimizes for search engine results pages — the ten blue links.
        Success means ranking higher and earning clicks.
      </p>
      <p className="text-lg leading-relaxed">
        GEO optimizes for AI-generated answers. Success means being the source
        the AI pulls from, quotes, or recommends — whether or not the user ever
        visits your website.
      </p>
      <p className="text-lg leading-relaxed">
        This is a fundamental shift. In traditional SEO, you compete for
        position. In GEO, you compete for citation. The question isn&apos;t
        &ldquo;Are we on page one?&rdquo; It&apos;s &ldquo;Are we in the
        answer?&rdquo;
      </p>

      <h2 className="text-2xl font-medium text-text-primary pt-8 pb-2">
        Why GEO Matters Now
      </h2>
      <p className="text-lg leading-relaxed">
        AI-powered search isn&apos;t coming — it&apos;s here. ChatGPT has
        hundreds of millions of users. Perplexity is growing rapidly.
        Google&apos;s AI Overviews now appear on a significant share of queries.
      </p>
      <p className="text-lg leading-relaxed">
        For businesses, this creates an urgent question: if a potential customer
        asks an AI system about your industry, your category, or your specific
        problem space — are you part of the answer?
      </p>
      <p className="text-lg leading-relaxed">
        If not, you&apos;re invisible to a growing segment of your market.
      </p>

      <h2 className="text-2xl font-medium text-text-primary pt-8 pb-2">
        How GEO Works
      </h2>
      <p className="text-lg leading-relaxed">
        AI systems build answers by pulling from content they&apos;ve indexed
        and evaluated. To be cited, your content needs to be:
      </p>
      <p className="text-lg leading-relaxed">
        <strong className="text-text-primary">Structured clearly.</strong> AI
        systems favor content with clear definitions, logical organization, and
        well-labeled sections. If your content is well-structured for a human
        reader, it&apos;s likely well-structured for an AI system.
      </p>
      <p className="text-lg leading-relaxed">
        <strong className="text-text-primary">
          Authoritative and specific.
        </strong>{" "}
        Vague content gets ignored. Specific, well-sourced claims with clear
        expertise signals get cited. AI systems are looking for the most
        credible, useful answer to a question.
      </p>
      <p className="text-lg leading-relaxed">
        <strong className="text-text-primary">Citable.</strong> Your content
        should contain clear statements that can be extracted and attributed.
        Think definitions, frameworks, statistics, and concise explanations —
        not marketing fluff.
      </p>
      <p className="text-lg leading-relaxed">
        <strong className="text-text-primary">Discoverable.</strong> AI systems
        build their knowledge from the web. If your content isn&apos;t indexed,
        linked to, and referenced by other sources, AI systems may never
        encounter it.
      </p>

      <h2 className="text-2xl font-medium text-text-primary pt-8 pb-2">
        How to Start with GEO
      </h2>
      <p className="text-lg leading-relaxed">
        If you&apos;re starting from zero, the highest-leverage GEO actions are:
      </p>
      <p className="text-lg leading-relaxed">
        <strong className="text-text-primary">Define your territory.</strong>{" "}
        What questions should your business own the answer to? Identify the
        10-20 questions your ideal customers are asking AI systems right now.
      </p>
      <p className="text-lg leading-relaxed">
        <strong className="text-text-primary">Create definitive content.</strong>{" "}
        For each question, create content that is the best, most complete answer
        available. Not a blog post full of filler — a genuine resource.
      </p>
      <p className="text-lg leading-relaxed">
        <strong className="text-text-primary">Structure for extraction.</strong>{" "}
        Use clear headings, concise definitions, and quotable statements. Make
        it easy for AI systems to pull a clean answer from your content.
      </p>
      <p className="text-lg leading-relaxed">
        <strong className="text-text-primary">Build authority signals.</strong>{" "}
        <Link href="/glossary#backlinks" className="text-accent hover:text-accent-hover">
          Backlinks
        </Link>
        , citations from other sources, and consistent publishing all
        signal to AI systems that your content is trustworthy.
      </p>
      <p className="text-lg leading-relaxed">
        <strong className="text-text-primary">Monitor your visibility.</strong>{" "}
        Ask AI systems the questions you want to own. Are you in the answer? If
        not, your content needs work.
      </p>

      <h2 className="text-2xl font-medium text-text-primary pt-8 pb-2">
        The Bottom Line
      </h2>
      <p className="text-lg leading-relaxed">
        SEO isn&apos;t dead — but it&apos;s no longer sufficient. The businesses
        that will dominate the next decade of discovery are the ones optimizing
        for both traditional search and AI-powered answers.
      </p>
      <p className="text-lg leading-relaxed">
        GEO is how you ensure that when someone asks an AI system about your
        space, you&apos;re not just visible — you&apos;re the answer.
      </p>
      <p className="text-lg leading-relaxed pt-4">
        Volume Systems helps businesses build GEO strategies and digital
        infrastructure that compounds visibility over time.{" "}
        <Link href="/digital" className="text-accent hover:text-accent-hover">
          Explore our digital growth services →
        </Link>
      </p>

      {/* Related Reading */}
      <div className="pt-8 mt-8 border-t border-bg-subtle">
        <p className="text-sm text-text-tertiary uppercase tracking-wider mb-4">Related Reading</p>
        <div className="space-y-2">
          <Link href="/insights/seo-is-dead-long-live-seo" className="block text-accent hover:text-accent-hover">
            SEO is Dead. Long Live SEO. →
          </Link>
          <Link href="/glossary" className="block text-text-secondary hover:text-text-primary">
            Glossary: SEO, GEO, and digital terminology →
          </Link>
        </div>
      </div>
    </div>
  );
}

function WhyAIFailsContent() {
  return (
    <div className="space-y-6 text-text-secondary">
      <p className="text-lg leading-relaxed">
        Everyone is implementing AI right now. Most of it will fail.
      </p>
      <p className="text-lg leading-relaxed">
        Not because the technology doesn&apos;t work — it does. AI is genuinely
        powerful. The failure rate isn&apos;t a technology problem. It&apos;s a
        systems problem, a strategy problem, and often a priorities problem.
      </p>
      <p className="text-lg leading-relaxed">
        After years of building and deploying AI-powered systems inside real
        businesses, here&apos;s what we&apos;ve seen go wrong — and what
        actually works.
      </p>

      <h2 className="text-2xl font-medium text-text-primary pt-8 pb-2">
        The Tool Trap
      </h2>
      <p className="text-lg leading-relaxed">
        The most common failure pattern: a company buys an AI tool, integrates
        it partially, watches adoption stall, and quietly shelves it six months
        later.
      </p>
      <p className="text-lg leading-relaxed">
        This happens because the tool was the starting point. Someone saw a
        demo, got excited, purchased a license, and then tried to figure out
        where it fits.
      </p>
      <p className="text-lg leading-relaxed">
        That&apos;s backwards. AI tools should be the answer to a clearly
        defined problem — not a solution looking for a problem to solve.
      </p>
      <p className="text-lg leading-relaxed">
        The fix is simple but requires discipline: start with the bottleneck,
        not the technology. What&apos;s actually slowing the business down?
        Where are decisions delayed? Where is data getting lost? Where are
        people doing work a machine should do? Answer those questions first.
        Then — and only then — determine what to build.
      </p>

      <h2 className="text-2xl font-medium text-text-primary pt-8 pb-2">
        The Data Problem
      </h2>
      <p className="text-lg leading-relaxed">
        AI is only as good as the data it works with. This isn&apos;t a cliché —
        it&apos;s the single biggest reason AI implementations underperform.
      </p>
      <p className="text-lg leading-relaxed">
        Most businesses have data scattered across dozens of systems. CRM here,
        spreadsheets there, billing in one platform, customer support in
        another. None of it talks to each other. None of it is clean.
      </p>
      <p className="text-lg leading-relaxed">
        When you deploy an AI tool on top of fragmented, inconsistent data, you
        get fragmented, inconsistent results. The AI isn&apos;t broken —
        it&apos;s working exactly as well as the data allows.
      </p>
      <p className="text-lg leading-relaxed">
        Before any AI implementation, the{" "}
        <Link href="/glossary#data-infrastructure" className="text-accent hover:text-accent-hover">
          data infrastructure
        </Link>{" "}
        needs to be right. That means unified sources, clean{" "}
        <Link href="/glossary#data-pipeline" className="text-accent hover:text-accent-hover">
          pipelines
        </Link>
        , and reliable access. It&apos;s not the exciting part — but it&apos;s
        the part that determines whether everything else works.
      </p>

      <h2 className="text-2xl font-medium text-text-primary pt-8 pb-2">
        The Integration Gap
      </h2>
      <p className="text-lg leading-relaxed">
        A surprising number of AI implementations fail at the last mile:
        integration into actual{" "}
        <Link href="/glossary#workflow-automation" className="text-accent hover:text-accent-hover">
          workflows
        </Link>
        .
      </p>
      <p className="text-lg leading-relaxed">
        The tool works in testing. It produces good outputs. But it sits outside
        the flow of how people actually work. Using it requires switching
        contexts, copy-pasting between systems, or manually triggering processes
        that should be automatic.
      </p>
      <p className="text-lg leading-relaxed">
        The result is predictable: people stop using it. Not because it&apos;s
        bad, but because it&apos;s friction.
      </p>
      <p className="text-lg leading-relaxed">
        Effective AI implementation means embedding the tool into existing
        workflows — not asking people to change how they work in order to use
        it. The best AI tools are invisible. They work behind the scenes,
        augmenting decisions and automating processes without requiring anyone
        to think about them.
      </p>

      <h2 className="text-2xl font-medium text-text-primary pt-8 pb-2">
        The Ownership Vacuum
      </h2>
      <p className="text-lg leading-relaxed">
        Who owns the AI implementation after the consultants leave?
      </p>
      <p className="text-lg leading-relaxed">
        This is where a huge number of projects fall apart. An external team
        builds something impressive, hands it over, and moves on. The internal
        team isn&apos;t equipped to maintain it, iterate on it, or troubleshoot
        when something breaks.
      </p>
      <p className="text-lg leading-relaxed">
        Within months, the system degrades. Nobody updates it. Nobody improves
        it. Eventually, it becomes another expensive piece of shelfware.
      </p>
      <p className="text-lg leading-relaxed">
        The solution isn&apos;t to make the AI simpler — it&apos;s to build with
        ownership in mind from day one. Document everything. Train the team.
        Design systems that are maintainable, not just impressive. Build
        something the client can actually run.
      </p>

      <h2 className="text-2xl font-medium text-text-primary pt-8 pb-2">
        What Actually Works
      </h2>
      <p className="text-lg leading-relaxed">
        The AI implementations that succeed share a few characteristics:
      </p>
      <p className="text-lg leading-relaxed">
        They start with a real problem — not a technology. They invest in data
        infrastructure before building on top of it. They&apos;re integrated
        into workflows, not bolted on. And they&apos;re built with long-term
        ownership in mind.
      </p>
      <p className="text-lg leading-relaxed">
        In other words, they&apos;re treated as systems — not projects. Not a
        one-time build, but infrastructure that compounds in value over time.
      </p>
      <p className="text-lg leading-relaxed">
        That&apos;s the difference between an AI implementation that makes a
        good demo and one that actually changes how a business operates.
      </p>
      <p className="text-lg leading-relaxed pt-4">
        Volume Systems builds{" "}
        <Link href="/glossary#custom-ai-tools" className="text-accent hover:text-accent-hover">
          AI-powered systems
        </Link>{" "}
        designed for real businesses — not demos.{" "}
        <Link href="/systems" className="text-accent hover:text-accent-hover">
          Explore our systems work →
        </Link>
      </p>

      {/* Related Reading */}
      <div className="pt-8 mt-8 border-t border-bg-subtle">
        <p className="text-sm text-text-tertiary uppercase tracking-wider mb-4">Related Reading</p>
        <div className="space-y-2">
          <Link href="/insights/what-is-geo" className="block text-accent hover:text-accent-hover">
            What is GEO? The Complete Guide →
          </Link>
          <Link href="/glossary#data-infrastructure" className="block text-text-secondary hover:text-text-primary">
            Glossary: Data Infrastructure →
          </Link>
        </div>
      </div>
    </div>
  );
}

function SEOIsDeadContent() {
  return (
    <div className="space-y-6 text-text-secondary">
      <p className="text-lg leading-relaxed">
        Every few years, someone declares{" "}
        <Link href="/glossary#seo" className="text-accent hover:text-accent-hover">
          SEO
        </Link>{" "}
        dead. And every time, they&apos;re wrong — sort of.
      </p>
      <p className="text-lg leading-relaxed">
        SEO as a discipline isn&apos;t dying. But the version of SEO that most
        businesses are still practicing? That&apos;s on borrowed time.
      </p>
      <p className="text-lg leading-relaxed">
        The playbook that worked for a decade — keyword stuff, build backlinks,
        publish 2,000-word blog posts optimized for a target phrase, rinse and
        repeat — is becoming less effective. Not because Google changed its
        algorithm (though it did). Because the entire architecture of search is
        shifting.
      </p>

      <h2 className="text-2xl font-medium text-text-primary pt-8 pb-2">
        What&apos;s Actually Changing
      </h2>
      <p className="text-lg leading-relaxed">
        Two things are happening simultaneously:
      </p>
      <p className="text-lg leading-relaxed">
        First, Google itself is changing.{" "}
        <Link href="/glossary#ai-overviews" className="text-accent hover:text-accent-hover">
          AI Overviews
        </Link>{" "}
        now answer queries directly at the top of the results page. For many
        searches, users get what they need without clicking a single link. The
        click-through rates that SEO has always depended on are declining.
      </p>
      <p className="text-lg leading-relaxed">
        Second, search is fragmenting. People are asking ChatGPT instead of
        Googling. They&apos;re searching Perplexity, YouTube, Reddit, and
        TikTok. Google is no longer the only front door to the internet —
        it&apos;s one of many.
      </p>
      <p className="text-lg leading-relaxed">
        For businesses that built their entire growth strategy around Google
        organic traffic, this is a problem. Not a future problem. A right-now
        problem.
      </p>

      <h2 className="text-2xl font-medium text-text-primary pt-8 pb-2">
        What&apos;s Not Changing
      </h2>
      <p className="text-lg leading-relaxed">
        Here&apos;s what the &ldquo;SEO is dead&rdquo; crowd misses: the
        fundamentals still work. They just serve a different function now.
      </p>
      <p className="text-lg leading-relaxed">
        Clear, well-structured content still matters — not just for Google
        rankings, but because AI systems cite well-structured content. A page
        that ranks well on Google is also more likely to be pulled into an
        AI-generated answer.
      </p>
      <p className="text-lg leading-relaxed">
        <Link href="/glossary#technical-seo" className="text-accent hover:text-accent-hover">
          Technical SEO
        </Link>{" "}
        still matters. Site speed,{" "}
        <Link href="/glossary#crawlability" className="text-accent hover:text-accent-hover">
          crawlability
        </Link>
        ,{" "}
        <Link href="/glossary#structured-data" className="text-accent hover:text-accent-hover">
          structured data
        </Link>{" "}
        — these determine whether your content is accessible to any discovery
        system, traditional or AI-powered.
      </p>
      <p className="text-lg leading-relaxed">
        Authority still matters.{" "}
        <Link href="/glossary#backlinks" className="text-accent hover:text-accent-hover">
          Backlinks
        </Link>
        , brand mentions, and being referenced by other credible sources signal
        trust to both search engines and AI systems.
      </p>
      <p className="text-lg leading-relaxed">
        The fundamentals haven&apos;t changed. What&apos;s changed is what
        you&apos;re optimizing for.
      </p>

      <h2 className="text-2xl font-medium text-text-primary pt-8 pb-2">
        From Rankings to Answers
      </h2>
      <p className="text-lg leading-relaxed">
        The mental model needs to shift. Old SEO asked: &ldquo;How do we rank
        for this keyword?&rdquo; New SEO asks: &ldquo;How do we become the
        definitive answer to this question?&rdquo;
      </p>
      <p className="text-lg leading-relaxed">
        That&apos;s a different challenge. Rankings are about position. Answers
        are about quality, clarity, and authority. You don&apos;t win an AI
        citation by stuffing keywords — you win it by being genuinely the best,
        most useful source on a topic.
      </p>
      <p className="text-lg leading-relaxed">
        This is actually good news for businesses that have real expertise. The
        era of ranking through tricks and volume is fading. The era of ranking
        through substance is beginning.
      </p>

      <h2 className="text-2xl font-medium text-text-primary pt-8 pb-2">
        What Smart Operators Should Do
      </h2>
      <p className="text-lg leading-relaxed">
        If your business depends on organic discovery, here&apos;s the shift:
      </p>
      <p className="text-lg leading-relaxed">
        <strong className="text-text-primary">Optimize for both.</strong>{" "}
        Don&apos;t abandon SEO — evolve it. Every piece of content should be
        optimized for traditional search and for AI citation. These aren&apos;t
        separate strategies. They&apos;re the same strategy, executed with more
        intention.
      </p>
      <p className="text-lg leading-relaxed">
        <strong className="text-text-primary">Own your definitions.</strong>{" "}
        What are the key questions in your industry? Create content that answers
        them definitively. When an AI system needs to cite an authoritative
        source on your topic, be that source.
      </p>
      <p className="text-lg leading-relaxed">
        <strong className="text-text-primary">
          Build a{" "}
          <Link href="/glossary#geo" className="text-accent hover:text-accent-hover">
            GEO
          </Link>{" "}
          layer.
        </strong>{" "}
        Audit your content for citability. Are your key claims structured in a
        way that AI systems can extract? Are your definitions clear and
        quotable? Is your content the kind of thing a system would confidently
        recommend?
      </p>
      <p className="text-lg leading-relaxed">
        <strong className="text-text-primary">Diversify discovery.</strong>{" "}
        Google organic is one channel. Build presence across AI search, social,
        community, and direct. The businesses that thrive will be the ones
        visible everywhere — not just on page one.
      </p>

      <h2 className="text-2xl font-medium text-text-primary pt-8 pb-2">
        The Bottom Line
      </h2>
      <p className="text-lg leading-relaxed">
        SEO isn&apos;t dead. But the lazy version of SEO — the version that
        prioritized tricks over substance, volume over quality, and rankings
        over usefulness — is dying.
      </p>
      <p className="text-lg leading-relaxed">
        What&apos;s replacing it is harder. It requires genuine expertise, clear
        thinking, and well-built content infrastructure. But for businesses
        willing to do the work, the opportunity is enormous.
      </p>
      <p className="text-lg leading-relaxed">
        The old game was about gaming an algorithm. The new game is about being
        the best answer. And that&apos;s a game worth playing.
      </p>
      <p className="text-lg leading-relaxed pt-4">
        Volume Systems builds SEO and GEO strategies that compound organic
        visibility over time.{" "}
        <Link href="/digital" className="text-accent hover:text-accent-hover">
          Explore our digital growth services →
        </Link>
      </p>

      {/* Related Reading */}
      <div className="pt-8 mt-8 border-t border-bg-subtle">
        <p className="text-sm text-text-tertiary uppercase tracking-wider mb-4">Related Reading</p>
        <div className="space-y-2">
          <Link href="/insights/what-is-geo" className="block text-accent hover:text-accent-hover">
            What is GEO? The Complete Guide →
          </Link>
          <Link href="/glossary" className="block text-text-secondary hover:text-text-primary">
            Glossary: SEO, GEO, and digital terminology →
          </Link>
        </div>
      </div>
    </div>
  );
}
