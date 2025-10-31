'use client';

import { Project } from '@/types/project';
import { ExternalLink, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

interface ProjectCardModernProps {
  project: Project;
  onViewDetails?: (project: Project) => void;
  variant?: 'grid' | 'list' | 'featured';
}

export function ProjectCardModern({
  project,
  onViewDetails,
  variant = 'grid',
}: ProjectCardModernProps) {
  const handleClick = () => {
    if (onViewDetails) onViewDetails(project);
  };

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    project.url ? (
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name} project details`}
      >
        {children}
      </Link>
    ) : (
      <button
        onClick={handleClick}
        aria-label={`View ${project.name} project`}
        className="w-full text-left"
      >
        {children}
      </button>
    );

  // ✅ Base card styles for all variants
  const baseCardClass =
    'bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-[2px]';

  // 🟩 Featured Variant
  if (variant === 'featured') {
    return (
      <Wrapper>
        <div className={clsx(baseCardClass, 'p-6')}>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center overflow-hidden">
                <Image
                  src={`/logo/${project.logo || 'default.png'}`}
                  alt={project.name}
                  width={48}
                  height={48}
                  className="rounded-xl object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {project.description}
              </p>

              <div className="flex items-center space-x-4 mt-3 text-muted-foreground text-sm">
                {project.country && (
                  <span className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{project.country}</span>
                  </span>
                )}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {project.category}
                </span>
                {project.tags?.includes('Hacktoberfest') && (
                  <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded-full">
                    #Hacktoberfest
                  </span>
                )}
              </div>
            </div>

            <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </div>
      </Wrapper>
    );
  }

  // 🟨 List Variant
  if (variant === 'list') {
    return (
      <Wrapper>
        <div className={clsx(baseCardClass, 'p-4 rounded-xl')}>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center overflow-hidden">
              <Image
                src={`/logo/${project.logo || 'default.png'}`}
                alt={project.name}
                width={32}
                height={32}
                className="rounded-lg object-contain"
                loading="lazy"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                {project.description}
              </p>

              <div className="flex items-center space-x-3 mt-2 text-xs text-muted-foreground">
                <span>{project.category}</span>
                {project.country && <span>{project.country}</span>}
              </div>
            </div>

            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </div>
      </Wrapper>
    );
  }

  // 🟦 Grid Variant (default)
  return (
    <Wrapper>
      <div className={clsx(baseCardClass, 'p-4 text-center')}>
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center overflow-hidden">
          <Image
            src={`/logo/${project.logo || 'default.png'}`}
            alt={project.name}
            width={48}
            height={48}
            className="rounded-xl object-contain"
            loading="lazy"
          />
        </div>

        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
          {project.name}
        </h3>

        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center justify-center">
          <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>
      </div>
    </Wrapper>
  );
}
