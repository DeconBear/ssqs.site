import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { PageShell } from "../components/page-shell";
import { ResearchSidebar, type SidebarGroup } from "../components/research-sidebar";
import { alumniStudents, currentStudents, facultyMembers, siteMeta } from "../site-data";

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
        title="Faculty Leads and Student Researchers"
        summary="The team structure of SSQS combines faculty leads responsible for the laboratory with student researchers developing within the group across quantum memory, spectroscopy, and solid-state experiments."
      />

      <main className="site-width page-content">
        <div className="sidebar-layout">
          <ResearchSidebar ariaLabel="Research team sections" groups={teamSidebarGroups} />

          <div className="sidebar-content">
            <section className="content-section side-panel-section" id="faculty">
              <div className="section-heading">
                <p className="eyebrow">Faculty Leads</p>
                <h2>Faculty responsible for SSQS</h2>
                <p className="section-text">
                  The faculty section highlights the group leads first, with profile pages available for fuller
                  biographies, publications, and career background.
                </p>
              </div>

              <div className="faculty-directory">
                {facultyMembers.map((member) => (
                  <article className="faculty-lead-card" key={member.slug}>
                    <Link className="faculty-lead-photo-link" href={`/research-team/${member.slug}`}>
                      <div className="faculty-lead-photo">
                        <img src={member.portrait} alt={member.name} loading="lazy" />
                      </div>
                    </Link>

                    <div className="faculty-lead-copy">
                      <p className="role-label">Faculty Lead</p>
                      <h3>
                        <Link href={`/research-team/${member.slug}`}>{member.name}</Link>
                      </h3>
                      <p className="faculty-lead-role">{member.role}</p>
                      <p className="faculty-direction">{member.direction}</p>
                      <p className="faculty-lead-summary">{member.bio[0]}</p>

                      <div className="faculty-lead-meta">
                        <p>
                          <strong>Affiliation</strong>
                          <span>{member.office ?? siteMeta.institution}</span>
                        </p>
                        <p>
                          <strong>Email</strong>
                          <a href={`mailto:${member.email}`}>{member.email}</a>
                        </p>
                      </div>

                      <div className="action-row action-row-compact">
                        <Link href={`/research-team/${member.slug}`}>Profile</Link>
                        <a href={member.officialHref} target="_blank" rel="noreferrer">
                          Official page
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-section side-panel-section" id="current-students">
              <div className="section-heading">
                <p className="eyebrow">Student Researchers</p>
                <h2>Current graduate members of the group</h2>
                <p className="section-text">
                  Student profiles are kept compact and readable, with a reserved portrait area and key background
                  information placed directly under each name.
                </p>
              </div>

              <div className="team-group-block">
                <div className="team-group-header">
                  <h3>Current Students</h3>
                  <p>Graduate researchers and incoming student members currently active in SSQS.</p>
                </div>

                <div className="student-directory-grid">
                  {currentStudents.map((student) => (
                    <article className="student-directory-card" key={student.email}>
                      {student.portrait ? (
                        <div className="student-directory-photo">
                          <img src={student.portrait} alt={student.name} loading="lazy" />
                        </div>
                      ) : (
                        <div
                          className="student-directory-photo student-directory-photo-placeholder"
                          aria-label={`${student.name} portrait placeholder`}
                        >
                          <span>{getInitials(student.name)}</span>
                        </div>
                      )}

                      <div className="student-directory-copy">
                        <h3>{student.name}</h3>
                        <p className="student-directory-role">{student.role}</p>
                        <p className="student-directory-line">
                          <strong>School</strong>
                          <span>{student.school}</span>
                        </p>
                        <p className="student-directory-line">
                          <strong>Email</strong>
                          <a href={`mailto:${student.email}`}>{student.email}</a>
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
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
                <div className="team-group-block">
                  <div className="team-group-header">
                    <h3>Graduated Students</h3>
                    <p>Alumni destinations and portraits will be added as the records are completed.</p>
                  </div>

                  <div className="student-directory-grid">
                  {alumniStudents.map((student) => (
                    <article className="student-directory-card" key={student.email}>
                      {student.portrait ? (
                        <div className="student-directory-photo">
                          <img src={student.portrait} alt={student.name} loading="lazy" />
                        </div>
                      ) : (
                        <div
                          className="student-directory-photo student-directory-photo-placeholder"
                          aria-label={`${student.name} portrait placeholder`}
                        >
                          <span>{getInitials(student.name)}</span>
                        </div>
                      )}

                      <div className="student-directory-copy">
                        <h3>{student.name}</h3>
                        <p className="student-directory-role">{student.role}</p>
                        <p className="student-directory-line">
                          <strong>School</strong>
                          <span>{student.school}</span>
                        </p>
                        <p className="student-directory-line">
                          <strong>Email</strong>
                          <a href={`mailto:${student.email}`}>{student.email}</a>
                        </p>
                      </div>
                    </article>
                  ))}
                  </div>
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
