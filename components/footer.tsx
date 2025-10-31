'use client';

import { Github, Globe, Heart, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const githubBase =
    process.env.NEXT_PUBLIC_GITHUB_URL ||
    'https://github.com/Hyver-organization/afrobuilders';

  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-6 w-6 text-primary" aria-label="Afrobuilders logo" />
              <span className="text-xl font-bold">Afrobuilders</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              An open-source platform celebrating African innovation. 🌍
              Discover, explore, and contribute to the continent&apos;s vibrant tech ecosystem.
            </p>

            {/* Hacktoberfest Banner */}
            <div className="flex items-center space-x-2 mb-4 text-sm font-medium bg-primary/10 border border-primary/20 rounded-lg px-3 py-2 w-fit">
              <Heart className="h-4 w-4 text-pink-500" />
              <span className="text-foreground">Built for Hacktoberfest 2025 💻</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Hyver-organization"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-transform hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/HyverOrg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-primary transition-transform hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/hyver-organization"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contribute
                </Link>
              </li>
              <li>
                <a
                  href={githubBase}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`${githubBase}/blob/main/CONTRIBUTING.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contribution Guide
                </a>
              </li>
              <li>
                <a
                  href={`${githubBase}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Report a Bug
                </a>
              </li>
              <li>
                <a
                  href={`${githubBase}/discussions`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Join Discussions
                </a>
              </li>
              <li>
                <a
                  href={`${githubBase}/blob/main/README.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>
              © 2025 Afrobuilders. Made with{' '}
              <Heart className="h-4 w-4 inline text-red-500" /> in Africa.
            </p>
            <p className="mt-2 md:mt-0">
              Open Source • MIT License •{' '}
              <a
                href="https://hacktoberfest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary transition-colors"
              >
                #Hacktoberfest
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
