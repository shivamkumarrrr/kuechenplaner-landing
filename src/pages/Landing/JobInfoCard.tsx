import { jobInfo } from './content';
import { jobFactIcons } from './icons';

/**
 * The job's hard facts as chips. They sit on white with a hairline and an
 * accent icon rather than grey fill: on the near-white hero the old soft pills
 * barely separated from the page, and one of them carried a house icon next to
 * the working hours.
 */
export function JobInfoCard() {
  return (
    <ul className="flex list-none flex-wrap gap-2.5">
      {jobInfo.map((fact) => (
        <li key={fact.label}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white py-2 pl-3 pr-4 text-[13.5px] font-semibold text-primary shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-px hover:border-accent hover:shadow-[0_6px_16px_-10px_rgba(0,0,0,0.45)]">
            {jobFactIcons[fact.icon]}
            {fact.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
