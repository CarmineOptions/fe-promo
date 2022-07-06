<script>
  import Nav from "./components/Nav.svelte";
  import Article from "./components/Article.svelte";
  import Section from "./components/Section.svelte";
  import Traders from "./components/Traders.svelte";
  import Liquidity from "./components/Liquidity.svelte";
  import Investors from "./components/Investors.svelte";
  import Timeline from "./components/Timeline.svelte";
  import Solutions from "./components/Solutions.svelte";
  import Team from "./components/Team.svelte";
  import FAQ from "./components/FAQ.svelte";
  import Footer from "./components/Footer.svelte";
  import { Collapse } from "bootstrap";

  const idMap = {
    TRADERS: "traders",
    LIQUIDITY: "liquidity",
    INVESTORS: "investors",
    TIMELINE: "timeline",
    SOLUTIONS: "solutions",
    TEAM: "team",
    FAQ: "faq",
  };
</script>

<main class="container">
  <Nav />
  <Article>
    <Section id={idMap.TRADERS}>
      <Traders />
    </Section>
    <Section id={idMap.LIQUIDITY}>
      <Liquidity />
    </Section>
    <Section id={idMap.INVESTORS}>
      <Investors />
    </Section>
    <Section id={idMap.TIMELINE}>
      <Timeline />
    </Section>
    <Section id={idMap.SOLUTIONS}>
      <Solutions />
    </Section>
    <Section id={idMap.TEAM}>
      <Team />
    </Section>
    <Section id={idMap.FAQ}>
      <FAQ />
    </Section>
  </Article>
</main>
<Footer />

<style lang="scss">
  @import "./main.scss";
  :global(body) {
    height: 100vh;
  }
  :global(h1,h2) {
    color: $carmine;
  }
</style>
