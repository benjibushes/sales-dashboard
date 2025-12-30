import React from 'react';
import Link from 'next/link';

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  slug: string;
  className?: string;
}

export default function PostCard({
  title,
  excerpt,
  date,
  readTime,
  slug,
  className = '',
}: PostCardProps) {
  return (
    <Link href={`/journal/${slug}`} className={`card-hover block group ${className}`}>
      <div className="space-y-6">
        <div className="flex items-center gap-4 text-xs text-smoke uppercase tracking-widest font-black">
          <time>{date}</time>
          {readTime && (
            <>
              <span>/</span>
              <span>{readTime}</span>
            </>
          )}
        </div>
        
        <h3 className="text-2xl md:text-3xl font-black uppercase leading-tight group-hover:text-smoke transition-colors">
          {title}
        </h3>
        
        <p className="text-ash font-medium line-clamp-3 leading-relaxed">{excerpt}</p>
        
        <div className="flex items-center text-pure-white font-black uppercase text-xs tracking-widest border-b-2 border-pure-white pb-1 inline-flex">
          Read More
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}

