'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Globe, Search, Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const githubUrl =
    process.env.NEXT_PUBLIC_GITHUB_URL ||
    'https://github.com/Hyver-organization/afrobuilders';

  const navLinks = [
    { href: '/', label: 'Home', icon: Globe },
    { href: '/projects', label: 'Explore', icon: Search },
  ];

  return (
    <header className="sticky top-4 z-50 w-full">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-md bg-background/80 border border-border rounded-2xl shadow-sm transition-all duration-200">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-primary" aria-label="Logo" />
            <div className="flex flex-col leading-none">
              <span className="text-lg sm:text-xl font-bold">Afrobuilders</span>
              <span className="hidden sm:block text-xs text-muted-foreground">
                Open Innovation Network
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-foreground border-b-2 border-primary pb-1'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}

            {/* GitHub Button */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:-translate-y-[1px] hover:shadow-md hover:bg-primary/90 transition-all"
            >
              <Github className="h-4 w-4" />
              <span className="text-sm font-medium">Contribute</span>
            </a>

            <ThemeToggle />
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-start space-y-4 py-4 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-foreground border-b border-primary pb-1'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="text-sm font-medium">Contribute</span>
            </a>

            <ThemeToggle />
          </div>
        )}
      </nav>
    </header>
  );
}
