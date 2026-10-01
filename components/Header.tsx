'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { CASE_STUDIES, SERVICES } from '@/lib/data';

const serviceGroups = [
  {
    title: 'Cloud & Infrastructure',
    ids: [
      'cloud-migration-multi-cloud-strategy',
      'infrastructure-deployment-management',
      'data-migration-management',
      'disaster-recovery-planning-execution',
      'high-availability-fault-tolerant-architecture',
    ],
  },
  {
    title: 'Engineering & Operations',
    ids: [
      'devops-ci-cd-pipeline-solutions',
      'monitoring-reporting-solutions',
      'chatbots-ai-and-machine-learning',
      'scripting-automation-functions',
      'custom-software-development',
    ],
  },
].map((group) => ({
  ...group,
  services: SERVICES.filter((service) => group.ids.includes(service.id)),
}));

type DropdownName = 'services' | 'case-studies' | null;

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownName>(null);
  const [activeMobileDisclosure, setActiveMobileDisclosure] = useState<DropdownName>(null);

  useEffect(() => {
    const updateHeader = () => setIsCompact(window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsMenuOpen(false);
        setActiveMobileDisclosure(null);
      }
    };
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setActiveDropdown(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOnOutsidePointer);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOnOutsidePointer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveMobileDisclosure(null);
  };
  const toggleDropdown = (name: Exclude<DropdownName, null>) => {
    setActiveDropdown((current) => current === name ? null : name);
  };
  const toggleMobileDisclosure = (name: Exclude<DropdownName, null>) => {
    setActiveMobileDisclosure((current) => current === name ? null : name);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 border-b border-black bg-white transition-[padding] duration-300 ${isCompact ? 'py-2.5' : 'py-4'}`}>
        <div
          ref={headerRef}
          onMouseLeave={() => setActiveDropdown(null)}
          className="header-inner relative mx-auto flex max-w-7xl items-center justify-between gap-2 px-2 sm:gap-5 sm:px-8 lg:px-12"
        >
          <Link href="/" className="header-brand shrink-0" aria-label="Codingtron home">
            <span className="header-brand-mark" aria-hidden="true">C</span>
            <span>CODINGTRON</span>
          </Link>

          <nav className="header-desktop-nav hidden items-center gap-1 md:flex lg:gap-3 xl:gap-6" aria-label="Main navigation">
            <Link href="/" aria-current={pathname === '/' ? 'page' : undefined} className="header-nav-link">Home</Link>
            <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined} className="header-nav-link">About Us</Link>
            <Link href="/products" aria-current={pathname === '/products' ? 'page' : undefined} className="header-nav-link">Products</Link>
            <button
              type="button"
              className="header-nav-trigger"
              aria-expanded={activeDropdown === 'services'}
              aria-current={pathname.startsWith('/services') ? 'page' : undefined}
              aria-controls="services-dropdown"
              onClick={() => toggleDropdown('services')}
            >
              Services <ChevronDown aria-hidden="true" />
            </button>
            <button
              type="button"
              className="header-nav-trigger"
              aria-expanded={activeDropdown === 'case-studies'}
              aria-current={pathname.startsWith('/case-studies') ? 'page' : undefined}
              aria-controls="case-studies-dropdown"
              onClick={() => toggleDropdown('case-studies')}
            >
              Case Studies <ChevronDown aria-hidden="true" />
            </button>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link href="/contact" className="header-cta">Let&apos;s Talk <ArrowUpRight aria-hidden="true" /></Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="header-menu-toggle flex md:hidden"
            >
              {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>

          <div
            id="services-dropdown"
            aria-hidden={activeDropdown !== 'services'}
            inert={activeDropdown !== 'services'}
            className={`header-dropdown header-dropdown-services ${activeDropdown === 'services' ? 'is-open' : ''}`}
          >
            {activeDropdown === 'services' && (
              <>
                <div className="header-dropdown-heading">
                  <div><span className="header-dropdown-kicker">OUR SERVICES</span><h2>Engineering for every layer.</h2></div>
                  <Link href="/services" onClick={() => setActiveDropdown(null)} className="header-dropdown-all">All services <ArrowUpRight aria-hidden="true" /></Link>
                </div>
                <div className="header-service-groups">
                  {serviceGroups.map((group) => (
                    <section key={group.title} className="header-service-group">
                      <h3>{group.title}</h3>
                      {group.services.map((service) => (
                        <Link key={service.id} href={`/services/${service.slug}`} onClick={() => setActiveDropdown(null)} className="header-dropdown-item">
                          <span>{service.title}</span><ArrowUpRight aria-hidden="true" />
                        </Link>
                      ))}
                    </section>
                  ))}
                </div>
              </>
            )}
          </div>

          <div
            id="case-studies-dropdown"
            aria-hidden={activeDropdown !== 'case-studies'}
            inert={activeDropdown !== 'case-studies'}
            className={`header-dropdown header-dropdown-cases ${activeDropdown === 'case-studies' ? 'is-open' : ''}`}
          >
            {activeDropdown === 'case-studies' && (
              <>
                <div className="header-dropdown-heading">
                  <div><span className="header-dropdown-kicker">SELECTED WORK</span><h2>Case studies</h2></div>
                  <Link href="/case-studies" onClick={() => setActiveDropdown(null)} className="header-dropdown-all">All case studies <ArrowUpRight aria-hidden="true" /></Link>
                </div>
                <div className="header-case-list">
                  {CASE_STUDIES.map((study, index) => (
                    <Link key={study.id} href={`/case-studies/${study.slug}`} onClick={() => setActiveDropdown(null)} className="header-case-item">
                      <span className="header-case-number">{String(index + 1).padStart(2, '0')}</span>
                      <span className="header-case-copy"><span>{study.clientIndustry}</span><strong>{study.title}</strong></span>
                      <ArrowUpRight aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      <div className={`mobile-navigation-layer lg:hidden ${isMenuOpen ? 'is-open' : ''}`} aria-hidden={!isMenuOpen} inert={!isMenuOpen}>
        <button type="button" aria-label="Close navigation menu" onClick={closeMenu} className="mobile-navigation-backdrop" />
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-navigation-panel">
          <span className="header-dropdown-kicker">NAVIGATION</span>
          <Link href="/" onClick={closeMenu} aria-current={pathname === '/' ? 'page' : undefined} className="mobile-nav-link">Home <ArrowUpRight aria-hidden="true" /></Link>
          <Link href="/about" onClick={closeMenu} aria-current={pathname === '/about' ? 'page' : undefined} className="mobile-nav-link">About Us <ArrowUpRight aria-hidden="true" /></Link>
          <Link href="/products" onClick={closeMenu} aria-current={pathname === '/products' ? 'page' : undefined} className="mobile-nav-link">Products <ArrowUpRight aria-hidden="true" /></Link>

          <section className="mobile-nav-section">
            <button type="button" onClick={() => toggleMobileDisclosure('services')} aria-expanded={activeMobileDisclosure === 'services'} aria-current={pathname.startsWith('/services') ? 'page' : undefined} aria-controls="mobile-services-list" className="mobile-nav-disclosure">
              Services <ChevronDown aria-hidden="true" />
            </button>
            <div id="mobile-services-list" className={`mobile-disclosure-content ${activeMobileDisclosure === 'services' ? 'is-open' : ''}`} inert={activeMobileDisclosure !== 'services'}>
              {serviceGroups.map((group) => (
                <section key={group.title} className="mobile-service-group">
                  <h2>{group.title}</h2>
                  <div className="mobile-service-links">
                    {group.services.map((service) => <Link key={service.id} href={`/services/${service.slug}`} onClick={closeMenu}>{service.title}</Link>)}
                  </div>
                </section>
              ))}
              <Link href="/services" onClick={closeMenu} className="mobile-view-all">All services <ArrowUpRight aria-hidden="true" /></Link>
            </div>
          </section>

          <section className="mobile-nav-section">
            <button type="button" onClick={() => toggleMobileDisclosure('case-studies')} aria-expanded={activeMobileDisclosure === 'case-studies'} aria-current={pathname.startsWith('/case-studies') ? 'page' : undefined} aria-controls="mobile-case-studies-list" className="mobile-nav-disclosure">
              Case Studies <ChevronDown aria-hidden="true" />
            </button>
            <div id="mobile-case-studies-list" className={`mobile-disclosure-content ${activeMobileDisclosure === 'case-studies' ? 'is-open' : ''}`} inert={activeMobileDisclosure !== 'case-studies'}>
              {CASE_STUDIES.map((study, index) => (
                <Link key={study.id} href={`/case-studies/${study.slug}`} onClick={closeMenu} className="mobile-case-item">
                  <span>{String(index + 1).padStart(2, '0')} / {study.clientIndustry}</span><strong>{study.title}</strong>
                </Link>
              ))}
              <Link href="/case-studies" onClick={closeMenu} className="mobile-view-all">All case studies <ArrowUpRight aria-hidden="true" /></Link>
            </div>
          </section>
        </nav>
      </div>
    </>
  );
}
