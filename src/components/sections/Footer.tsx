import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { footerLinks, siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 pb-8 pt-16 text-ink-300 sm:pt-20">
      <Container>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-[1.15fr_0.9fr_0.9fr_auto]">
          <div className="col-span-2 lg:col-span-1">
            <div className="inline-block rounded-xl bg-paper-100 px-3 py-2.5">
              <Image
                src="/images/logo-footer.png"
                alt={siteConfig.name}
                width={140}
                height={70}
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-5 whitespace-nowrap text-sm leading-relaxed">
              Serving events across Pakistan &amp; the UAE.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="icon-btn icon-btn-dark"
              >
                <InstagramIcon />
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
                className="icon-btn icon-btn-dark"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <FooterColumn title="Explore" links={footerLinks.explore} />
          <FooterColumn title="Company" links={footerLinks.company} />

          <div className="col-span-2 min-w-0 lg:col-span-1">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-paper-50">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="group inline-flex items-center gap-2.5 whitespace-nowrap transition-colors hover:text-paper-50"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-gold-400" />
                  <span className="link-underline">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.emailHref}
                  className="group inline-flex items-center gap-2.5 whitespace-nowrap transition-colors hover:text-paper-50"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-gold-400" />
                  <span className="link-underline">{siteConfig.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span className="whitespace-nowrap">
            © {year} {siteConfig.name}. All rights reserved.
          </span>
          <span className="whitespace-nowrap">Pakistan · UAE</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-paper-50">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="link-underline whitespace-nowrap text-sm transition-colors hover:text-paper-50"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
