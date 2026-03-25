import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../../components/page-shell";
import { ResearchSidebar, type SidebarGroup } from "../../components/research-sidebar";
import { facultyMembers, getFacultyMember } from "../../site-data";

type FacultyProfileProps = {
  params: Promise<{
    slug: string;
  }>;
};

const teamSidebarGroups: SidebarGroup[] = [
  {
    title: "SSQS Team",
    items: [
      { key: "faculty", label: "Faculty Leads", href: "/research-team#faculty" },
      { key: "current-students", label: "Current Students", href: "/research-team#current-students" },
      { key: "alumni", label: "Graduated Students", href: "/research-team#alumni" },
    ],
  },
];

export async function generateMetadata({ params }: FacultyProfileProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getFacultyMember(slug);

  if (!member) {
    return {
      title: "Research Team | SSQS",
    };
  }

  return {
    title: `${member.name} | SSQS`,
  };
}

export function generateStaticParams() {
  return facultyMembers.map((member) => ({
    slug: member.slug,
  }));
}

export default async function FacultyProfilePage({ params }: FacultyProfileProps) {
  const { slug } = await params;
  const member = getFacultyMember(slug);

  if (!member) {
    notFound();
  }

  return (
    <PageShell>
      <main className="site-width page-content faculty-profile-page">
        <div className="sidebar-layout">
          <ResearchSidebar activeKey="faculty" ariaLabel="Research team sections" groups={teamSidebarGroups} />

          <div className="sidebar-content faculty-detail-shell">
            <div className="profile-breadcrumbs">
              <Link href="/research-team">Research Team</Link>
              <span>/</span>
              <span>Faculty Leads</span>
              <span>/</span>
              <span>{member.name}</span>
            </div>

            <section className="faculty-detail-header">
              <div className="faculty-detail-copy">
                <p className="eyebrow">Faculty Lead</p>
                <h1>{member.name}</h1>
                <p className="faculty-profile-role">{member.role}</p>

                <div className="faculty-detail-facts">
                  <p>
                    <strong>Email:</strong> <a href={`mailto:${member.email}`}>{member.email}</a>
                  </p>
                  {member.office ? (
                    <p>
                      <strong>Office:</strong> {member.office}
                    </p>
                  ) : null}
                  <p>
                    <strong>Research Direction:</strong> {member.direction}
                  </p>
                </div>
              </div>

              <div className="faculty-profile-portrait faculty-profile-portrait-compact">
                <img src={member.portrait} alt={member.name} />
              </div>
            </section>

            <section className="detail-section">
              <h2>Profile</h2>
              {member.bio.map((paragraph) => (
                <p className="profile-text" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section className="detail-section">
              <h2>Research Focus</h2>
              <div className="focus-list">
                {member.focus.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <h2>Education</h2>
              <ul className="plain-list">
                {member.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="detail-section">
              <h2>Professional Experience</h2>
              <ul className="plain-list">
                {member.experience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="detail-section">
              <h2>Papers</h2>
              <div className="profile-publication-list">
                {member.selectedWorks.map((work) => (
                  <article className="info-card profile-publication-card" key={work.title}>
                    <h3>{work.title}</h3>
                    <p>{work.citation}</p>
                    {work.href ? (
                      <div className="action-row action-row-compact">
                        <a href={work.href} target="_blank" rel="noreferrer">
                          Source
                        </a>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>

            <section className="detail-section detail-section-source">
              <h2>Official Source</h2>
              <p>
                This SSQS profile is organized from public faculty information and the paper list shown on the official
                faculty page, with a direct reference kept here for verification.
              </p>
              <div className="action-row action-row-compact">
                <a href={member.officialHref} target="_blank" rel="noreferrer">
                  Official profile
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
