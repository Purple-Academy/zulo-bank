import { type ReactNode } from 'react';
import { useScrollReveal } from '~/hooks/useScrollReveal';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: RevealOnScrollProps) {
  const { ref, revealed } = useScrollReveal();
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${revealed ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
