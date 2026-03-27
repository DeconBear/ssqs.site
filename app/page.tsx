import Image from "next/image";
import Link from "next/link";
import { NewsCarousel } from "./components/news-carousel";
import { PageShell } from "./components/page-shell";
import { homeNews, researchThemes, siteMeta } from "./site-data";

export default function HomePage() {
  return (
    <PageShell>
      <section className="home-hero">
        <div className="home-hero-background">
          <Image
            src="/assets/lab/cryogenic-optics-lab.png"
            alt="Solid-state quantum storage laboratory"
            fill
            priority
            sizes="100vw"
            className="cover-image"
          />
        </div>
        <div className="home-hero-overlay" />
        <div className="site-width home-hero-content">
          <p className="eyebrow light">SSQS</p>
          <h1>{siteMeta.groupName}</h1>
          <p className="hero-tagline">{siteMeta.headline}</p>
          <p className="hero-text light">{siteMeta.summary}</p>
          <div className="action-row">
            <Link href="/research">Research</Link>
            <Link href="/research-team">Research Team</Link>
          </div>
        </div>
      </section>

      <main className="site-width page-content">
        <section className="content-section home-news-section" id="news">
          <div className="section-heading">
            <p className="eyebrow">News</p>
            <h2>News</h2>
            <p className="section-text">These photos show our current team members.</p>
          </div>

          <article className="news-card news-card-featured news-card-carousel-only">
            <div className="news-image news-image-carousel">
              <NewsCarousel images={homeNews.images} label={homeNews.title} />
            </div>
          </article>
        </section>

        <section className="content-section home-secondary-section">
          <div className="section-heading">
            <p className="eyebrow">Research Themes</p>
            <h2>Four directions shaping SSQS</h2>
            <p className="section-text">
              The laboratory materials define SSQS around four interconnected themes spanning materials, memories,
              networks, and hybrid systems.
            </p>
          </div>

          <div className="theme-grid">
            {researchThemes.map((theme) => (
              <article className="theme-card" key={theme.title}>
                <h3>{theme.title}</h3>
                <p>{theme.systems}</p>
                <p>{theme.goal}</p>
              </article>
            ))}
          </div>

          <div className="action-row">
            <Link href="/research">Research</Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
