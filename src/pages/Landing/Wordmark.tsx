import { cn } from '@/lib/utils';
import { company } from './content';

interface WordmarkProps {
  className?: string;
  /** Inverted for the dark footer. */
  tone?: 'ink' | 'invert';
}

/**
 * Type-set brand mark. This client has not supplied a logo file, so the name is
 * set rather than faked with an image — and the moment `company.logo` gets a
 * path, the header and footer render that instead.
 */
export function Wordmark({ className, tone = 'ink' }: WordmarkProps) {
  if (company.logo) {
    return <img src={company.logo} alt={company.name} className={cn('h-7 w-auto', className)} />;
  }

  return (
    <span
      className={cn(
        'font-display text-[15px] font-bold uppercase leading-none tracking-[0.14em] md:text-[17px]',
        tone === 'invert' ? 'text-white' : 'text-primary',
        className
      )}
    >
      {company.name.split(' ')[0]}
      <span className={tone === 'invert' ? 'text-accent' : 'text-accent'}>
        {' '}
        {company.name.split(' ').slice(1).join(' ')}
      </span>
    </span>
  );
}
