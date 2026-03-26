import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { PageShell } from "../components/page-shell";
import { ResearchSidebar, type SidebarGroup } from "../components/research-sidebar";
import { alumniStudents, currentStudents, facultyMembers } from "../site-data";

export const metadata: Metadata = {
  title: "Research Team | SSQS",
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

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ResearchTeamPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Research Team"
        title="Full-Time Researchers and Graduate Students"
        summary="The SSQS team brings together full-time researchers and graduate students working on rare-earth materials, quantum memory experiments, coherence spectroscopy, and related quantum technologies."
      />

      <main className="site-width page-content research-page-main">
        <div className="sidebar-layout research-page-layout team-page-layout">
          <ResearchSidebar ariaLabel="Research team sections" groups={teamSidebarGroups} />

          <div className="sidebar-content">
            <section className="content-section side-panel-section" id="faculty">
              <div className="section-heading">
                <p className="eyebrow">Team Members</p>
                <h2>Full-time researchers</h2>
                <p className="section-text">
                  These researchers lead SSQS directions in solid-state quantum memory, rare-earth materials, and
                  quantum optics, with profile pages available for further details.
                </p>
              </div>

              <div className="faculty-grid faculty-grid-featured">
                {facultyMembers.map((member) => (
                  <article className="faculty-card faculty-card-featured" key={member.slug}>
                    <Link className="faculty-portrait-link" href={`/research-team/${member.slug}`}>
                      <div className="faculty-portrait">
                        <img src={member.portrait} alt={member.name} loading="lazy" />
                      </div>
                    </Link>

                    <div className="faculty-card-copy">
                      <p className="role-label">{member.role}</p>
                      <h3>
                        <Link href={`/research-team/${member.slug}`}>{member.name}</Link>
                      </h3>
                      <div className="action-row action-row-compact">
                        <Link href={`/research-team/${member.slug}`}>Profile</Link>
                        <a href={`mailto:${member.email}`}>{member.email}</a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-section side-panel-section" id="current-students">
              <div className="section-heading">
                <p className="eyebrow">Team Members</p>
                <h2>Graduate students</h2>
                <p className="section-text">
                  The current roster follows the laboratory materials and can continue to expand with portraits, school
                  information, and contact details as the group develops.
                </p>
              </div>

              <div className="student-grid">
                {currentStudents.map((student) => (
                  <article className="student-card" key={student.email}>
                    {student.portrait ? (
                      <div className="student-photo">
                        <img src={student.portrait} alt={student.name} loading="lazy" />
                      </div>
                    ) : (
                      <div className="student-photo student-photo-placeholder" aria-label={`${student.name} portrait placeholder`}>
                        <span>{getInitials(student.name)}</span>
                        <small>Photo to be added</small>
                      </div>
                    )}

                    <div className="student-card-copy">
                      <p className="role-label">{student.role}</p>
                      <h3>{student.name}</h3>
                      <div className="student-meta">
                        <p>
                          <strong>School:</strong> {student.school}
                        </p>
                      </div>
                      <div className="student-contact-line">
                        <strong>Email</strong>
                        <a href={`mailto:${student.email}`} title={student.email}>
                          {student.email}
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-section side-panel-section" id="alumni">
              <div className="section-heading">
                <p className="eyebrow">Alumni</p>
                <h2>Graduated students</h2>
                <p className="section-text">
                  This section is reserved for graduates of SSQS and will expand as alumni profiles, destinations, and
                  portraits are organized.
                </p>
              </div>

              {alumniStudents.length ? (
                <div className="student-grid">
                  {alumniStudents.map((student) => (
                    <article className="student-card" key={student.email}>
                      {student.portrait ? (
                        <div className="student-photo">
                          <img src={student.portrait} alt={student.name} loading="lazy" />
                        </div>
                      ) : (
                        <div
                          className="student-photo student-photo-placeholder"
                          aria-label={`${student.name} portrait placeholder`}
                        >
                          <span>{getInitials(student.name)}</span>
                          <small>Photo to be added</small>
                        </div>
                      )}

                      <div className="student-card-copy">
                        <p className="role-label">{student.role}</p>
                        <h3>{student.name}</h3>
                        <div className="student-meta">
                          <p>
                            <strong>School:</strong> {student.school}
                          </p>
                        </div>
                        <div className="student-contact-line">
                          <strong>Email</strong>
                          <a href={`mailto:${student.email}`} title={student.email}>
                            {student.email}
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="student-empty-state">
                  <p>Graduated student profiles will be added here after the alumni records are confirmed.</p>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
