'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Najpierw odłącz istniejącego observera
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const sections = document.querySelectorAll('section[id]');

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -50% 0px', // Lepsze marginesy dla pierwszych sekcji
        threshold: 0.2,
      }
    );

    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    // Ręczne sprawdzenie aktywnej sekcji na starcie
    const checkInitialSection = () => {
      const scrollPosition = window.scrollY + 100;
      let found = false;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (!found && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(`#${section.id}`);
          found = true;
        }
      });

      // Domyślnie ustaw #home jeśli jesteśmy na samej górze
      if (!found && window.scrollY === 0) {
        setActiveSection('#home');
      }
    };

    // Opóźnione sprawdzenie, aby dać czas na załadowanie DOM
    const timeoutId = setTimeout(checkInitialSection, 300);
    window.addEventListener('scroll', checkInitialSection);

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', checkInitialSection);
      clearTimeout(timeoutId);
    };
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#stack', label: 'Tech Stack' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-[80px] z-50 mt-14 hidden h-fit w-full justify-center lg:flex">
      <ul className="flex w-[600px] items-center justify-between rounded-full border border-[#A4ADFF1A]/90 bg-black/10 px-8 py-4 backdrop-blur-xs">
        {navItems.map((item) => (
          <li key={item.href} className="group relative">
            <Link
              href={item.href}
              className={cn(
                'text-[#CBCBFF] transition-colors duration-300',
                activeSection === item.href && 'text-white',
                'group-hover:text-white'
              )}
            >
              {item.label}
            </Link>
            <span
              className={cn(
                'absolute -bottom-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white opacity-0 group-hover:opacity-100',
                activeSection === item.href && 'opacity-100'
              )}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
