import Link from "next/link";
import { facultyContacts, navItems, siteMeta } from "../site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-width footer-grid">
        <div className="footer-brand">
          <h2>{siteMeta.groupName}</h2>
          <p>{siteMeta.institution}</p>
          <p>{siteMeta.location}</p>
          <p className="footer-filing">
            <a href={siteMeta.filingHref} target="_blank" rel="noreferrer">
              {siteMeta.filingNumber}
            </a>
          </p>
        </div>

        <div className="footer-column">
          <h3>Navigation</h3>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          {facultyContacts.map((member) => (
            <a href={`mailto:${member.email}`} key={member.email}>
              {member.email}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
