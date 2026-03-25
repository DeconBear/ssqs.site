import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../components/page-hero";
import { PageShell } from "../components/page-shell";
import { facultyContacts, joinCategories, joinContactDetails, joinGuide, joinOpening } from "../site-data";

export const metadata: Metadata = {
  title: "Join Us | SSQS",
};

export default function JoinUsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Join Us"
        title="Openings, First Contact, and Opportunities at SSQS"
        summary="We are always looking for talented students, engineers, postdocs, and collaborators who are excited by careful experiments, physical intuition, and long-horizon questions in quantum optics, spectroscopy, materials, and solid-state quantum memory."
      />

      <main className="site-width page-content">
        <section className="content-section">
          <div className="join-feature-grid">
            <article className="panel join-opening-panel">
              <p className="eyebrow">Opening</p>
              <h2>{joinOpening.title}</h2>
              <div className="section-copy-stack">
                {joinOpening.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <article className="join-guide-card">
              <div className="join-guide-image">
                <Image
                  src={joinGuide.image}
                  alt={joinGuide.imageAlt}
                  fill
                  sizes="(max-width: 1100px) 100vw, 38vw"
                  className="cover-image"
                />
              </div>
              <div className="join-guide-copy">
                <p className="eyebrow">Contact Guide</p>
                <h2>{joinGuide.title}</h2>
                <p>{joinGuide.summary}</p>
                <ul className="plain-list plain-list-compact">
                  {joinGuide.notes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="content-section dual-panel join-contact-grid">
          <article className="panel">
            <p className="eyebrow">Contact</p>
            <h2>Reach out before applying or visiting</h2>
            <div className="contact-detail-list">
              {joinContactDetails.map((item) => (
                <div className="contact-detail-row" key={item.label}>
                  <strong>{item.label}</strong>
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="link-stack">
              {facultyContacts.map((member) => (
                <a href={`mailto:${member.email}`} key={member.email}>
                  {member.name} | {member.email}
                </a>
              ))}
            </div>
          </article>

          <article className="panel">
            <p className="eyebrow">Research Fit</p>
            <h2>Backgrounds that match the lab well</h2>
            <ul className="plain-list">
              <li>Quantum information or AMO physics</li>
              <li>Optics and laser experiments</li>
              <li>Solid-state spectroscopy and rare-earth materials</li>
              <li>Cryogenic measurements and instrumentation</li>
              <li>Scientific programming, automation, or data analysis</li>
            </ul>
          </article>
        </section>

        <section className="content-section">
          <div className="join-grid join-grid-editorial">
            {joinCategories.map((item) => (
              <article className="info-card" key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
