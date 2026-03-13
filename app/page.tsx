import Image from "next/image";
import Link from "next/link";
import { PageShell } from "./components/page-shell";
import { homeHighlights, homeNews, publications, siteMeta } from "./site-data";

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
            <h2>Recent updates from SSQS</h2>
            <p className="section-text">
              This section is reserved for publication announcements, honors, group milestones, conference activity,
              graduating students, and other updates from the laboratory.
            </p>
          </div>

          <article className="news-card news-card-featured">
            <div className="news-image">
              <Image
                src={homeNews.image}
                alt={homeNews.title}
                fill
                sizes="(max-width: 1100px) 100vw, 42vw"
                className="news-cover-image"
              />
            </div>
            <div className="news-copy">
              <p className="publication-meta">
                {homeNews.category} | {homeNews.date}
              </p>
              <h3>{homeNews.title}</h3>
              <p>{homeNews.summary}</p>
              {homeNews.href ? (
                <div className="action-row action-row-compact">
                  <a href={homeNews.href} target="_blank" rel="noreferrer">
                    Source
                  </a>
                </div>
              ) : null}
            </div>
          </article>
        </section>

        <section className="content-section dual-panel home-secondary-section">
          <article className="panel">
            <p className="eyebrow">Highlights</p>
            <h2>Recent directions shaping SSQS</h2>
            <div className="highlight-list">
              {homeHighlights.map((item) => (
                <div className="highlight-item" key={item.title}>
                  <span>{item.year}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel feature-panel">
            <div className="feature-image">
              <Image
                src={publications[0].image ?? "/assets/lab/movable-solid-state-memory.png"}
                alt={publications[0].title}
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                className="cover-image"
              />
            </div>
            <div className="feature-copy">
              <p className="eyebrow">Featured Paper</p>
              <h2>{publications[0].title}</h2>
              <p>{publications[0].result}</p>
              <div className="action-row">
                {publications[0].sourceHref ? (
                  <a href={publications[0].sourceHref} target="_blank" rel="noreferrer">
                    Source
                  </a>
                ) : null}
                <Link href="/research">Research</Link>
              </div>
            </div>
          </article>
        </section>
      </main>
    </PageShell>
  );
}
