import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../components/page-hero";
import { PageShell } from "../components/page-shell";
import { ResearchSidebar, type SidebarGroup } from "../components/research-sidebar";
import { publications, researchPlatforms } from "../site-data";

export const metadata: Metadata = {
  title: "Research | SSQS",
};

const researchSidebarGroups: SidebarGroup[] = [
  { key: "publications", title: "Achievements", href: "/research#publications" },
  { key: "platforms", title: "Research Platforms", href: "/research#platforms" },
];

export default function ResearchPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Research"
        title="Research Achievements and Experimental Platforms"
        summary="The Research page stays focused on outputs and laboratory capability: selected papers that define SSQS scientifically, and the experimental platforms that support those results."
      />

      <main className="site-width page-content">
        <div className="sidebar-layout">
          <ResearchSidebar ariaLabel="Research sections" groups={researchSidebarGroups} />

          <div className="sidebar-content">
            <section className="content-section side-panel-section" id="publications">
              <div className="section-heading">
                <p className="eyebrow">Achievements</p>
                <h2>Recent papers and what each one contributed</h2>
                <p className="section-text">
                  Each entry keeps the emphasis on the scientific result and links out to the journal or source page
                  rather than directly to a local PDF.
                </p>
              </div>

              <div className="publication-stack">
                {publications.map((paper) => (
                  <article className={`publication-card${paper.image ? "" : " text-only"}`} key={paper.title}>
                    {paper.image ? (
                      <div className="publication-media">
                        <Image
                          src={paper.image}
                          alt={paper.title}
                          fill
                          sizes="(max-width: 1100px) 100vw, 36vw"
                          className="publication-figure-image"
                        />
                      </div>
                    ) : null}

                    <div className="publication-copy">
                      <p className="publication-meta">
                        {paper.venue} | {paper.year}
                      </p>
                      <h3>{paper.title}</h3>
                      <p>
                        <strong>Result:</strong> {paper.result}
                      </p>
                      <p>
                        <strong>Why it matters:</strong> {paper.significance}
                      </p>
                      {paper.sourceHref ? (
                        <div className="action-row action-row-compact">
                          <a href={paper.sourceHref} target="_blank" rel="noreferrer">
                            Source
                          </a>
                        </div>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-section side-panel-section" id="platforms">
              <div className="section-heading">
                <p className="eyebrow">Research Platforms</p>
                <h2>Experimental infrastructure supporting SSQS</h2>
                <p className="section-text">
                  These platform views show the laboratory environments behind SSQS work in coherence spectroscopy,
                  quantum memory experiments, and rare-earth material studies.
                </p>
              </div>

              <div className="platform-grid">
                {researchPlatforms.map((platform) => (
                  <article className="platform-card" key={platform.title}>
                    <div className="platform-image">
                      <Image
                        src={platform.image}
                        alt={platform.title}
                        fill
                        sizes="(max-width: 900px) 100vw, 38vw"
                        className="platform-cover-image"
                      />
                    </div>
                    <div className="platform-copy">
                      <h3>{platform.title}</h3>
                      <p>{platform.summary}</p>
                      <p>{platform.details}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
