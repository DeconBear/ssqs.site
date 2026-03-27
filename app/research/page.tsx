import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../components/page-hero";
import { PageShell } from "../components/page-shell";
import { ResearchSidebar, type SidebarGroup } from "../components/research-sidebar";
import { keyEquipment, publications, researchPlatforms } from "../site-data";
import type { Publication } from "../site-data";

export const metadata: Metadata = {
  title: "Research | SSQS",
};

const chronologicalPublications = [...publications].sort((left, right) =>
  right.sortDate.localeCompare(left.sortDate),
);

const publicationGroups = Array.from(
  chronologicalPublications.reduce((groups, paper) => {
    const yearPapers = groups.get(paper.year);
    if (yearPapers) {
      yearPapers.push(paper);
    } else {
      groups.set(paper.year, [paper]);
    }

    return groups;
  }, new Map<string, Publication[]>()),
  ([year, papers]) => ({
    year,
    papers,
    sectionId: `publications-${year}`,
  }),
);

const researchSidebarGroups: SidebarGroup[] = [
  {
    title: "Publications",
    items: publicationGroups.map((group) => ({
      key: group.sectionId,
      label: group.year,
      href: `/research#${group.sectionId}`,
    })),
  },
  { key: "platforms", title: "Research Platforms", href: "/research#platforms" },
];

export default function ResearchPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Research"
        title="Research Achievements and Experimental Platforms"
        summary="SSQS develops solid-state quantum memory through materials discovery, high-performance memory experiments, and the laboratory platforms required for spectroscopy, cryogenic measurements, and system integration."
      />

      <main className="site-width page-content research-page-main">
        <div className="sidebar-layout research-page-layout">
          <ResearchSidebar ariaLabel="Research sections" groups={researchSidebarGroups} />

          <div className="sidebar-content">
            <section className="content-section side-panel-section" id="publications">
              <div className="section-heading">
                <p className="eyebrow">Publications</p>
                <h2>Selected papers grouped by publication year</h2>
                <p className="section-text">
                  Each entry highlights the paper title, authors, journal, and source link.
                </p>
              </div>

              <div className="publication-year-stack">
                {publicationGroups.map((group) => (
                  <section className="publication-year-group" id={group.sectionId} key={group.year}>
                    <div className="publication-year-heading">
                      <h3>{group.year}</h3>
                    </div>

                    <div className="publication-year-list">
                      {group.papers.map((paper) => (
                        <article className="publication-entry" key={paper.title}>
                          <div className="publication-entry-copy">
                            <h3>
                              {paper.sourceHref ? (
                                <a href={paper.sourceHref} target="_blank" rel="noreferrer">
                                  {paper.title}
                                </a>
                              ) : (
                                paper.title
                              )}
                            </h3>
                            <p className="publication-author-line">{paper.authors}</p>
                            <p className="publication-reference-line">
                              <span className="publication-journal-name">{paper.venue}</span>
                              <span>{`Published ${paper.publishedOn}`}</span>
                            </p>
                          </div>

                          {paper.sourceHref ? (
                            <a className="publication-source-link" href={paper.sourceHref} target="_blank" rel="noreferrer">
                              View Paper
                            </a>
                          ) : null}
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </section>

            <section className="content-section side-panel-section" id="platforms">
              <div className="section-heading">
                <p className="eyebrow">Research Platforms</p>
                <h2>Experimental infrastructure supporting SSQS</h2>
                <p className="section-text">
                  These platform views summarize the laboratory environments behind SSQS work in rare-earth
                  spectroscopy, cryogenic memory experiments, and new-material screening.
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
                        sizes="(max-width: 1100px) 100vw, 44vw"
                        className="platform-cover-image"
                      />
                    </div>
                    <div className="platform-copy">
                      <h3>{platform.title}</h3>
                      <p>{platform.summary}</p>
                      <p>{platform.details}</p>
                      {platform.equipment?.length ? (
                        <ul className="platform-equipment-list">
                          {platform.equipment.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>

              <div className="section-heading equipment-section-heading">
                <p className="eyebrow">Key Equipment</p>
                <h2>Representative instruments from the platform slide</h2>
                <p className="section-text">
                  These images are organized from the laboratory presentation materials and highlight the equipment
                  supporting spectroscopy, cryogenic measurements, and optical control.
                </p>
              </div>

              <div className="equipment-grid">
                {keyEquipment.map((item) => (
                  <article className="equipment-card" key={item.title}>
                    <div className="equipment-image">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 780px) 100vw, (max-width: 1100px) 50vw, 48vw"
                        className="equipment-cover-image"
                      />
                    </div>
                    <div className="equipment-copy">
                      <h3>{item.title}</h3>
                      <p>{item.summary}</p>
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
