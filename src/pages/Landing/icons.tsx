import type { ReactNode } from 'react';
import {
  Bike,
  Clock3,
  Coins,
  GraduationCap,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  CalendarCheck,
  ClipboardList,
  Target,
  TrendingUp,
  UserRound,
  Wifi,
} from 'lucide-react';

const iconProps = { className: 'h-[22px] w-[22px]', strokeWidth: 2 } as const;

export const benefitIcons: Record<
  | 'coins'
  | 'target'
  | 'shield'
  | 'calendar'
  | 'rocket'
  | 'bike'
  | 'wifi'
  | 'graduation'
  | 'trending',
  ReactNode
> = {
  coins: <Coins {...iconProps} />,
  target: <Target {...iconProps} />,
  shield: <ShieldCheck {...iconProps} />,
  calendar: <CalendarCheck {...iconProps} />,
  rocket: <Rocket {...iconProps} />,
  bike: <Bike {...iconProps} />,
  wifi: <Wifi {...iconProps} />,
  graduation: <GraduationCap {...iconProps} />,
  trending: <TrendingUp {...iconProps} />,
};

const pillIcon = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  'aria-hidden': true as const,
  className: 'h-5 w-5 shrink-0 text-muted',
};

export const LocationIcon = () => (
  <svg {...pillIcon}>
    <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" strokeLinejoin="round" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
);

export const HomeIcon = () => (
  <svg {...pillIcon}>
    <path d="M4 11l8-7 8 7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 10v9h12v-9" strokeLinejoin="round" />
  </svg>
);

const factIcon = {
  className: 'h-[17px] w-[17px] shrink-0 text-accent',
  strokeWidth: 1.9,
} as const;

export const jobFactIcons: Record<'pin' | 'clock' | 'welcome', ReactNode> = {
  pin: <MapPin {...factIcon} />,
  clock: <Clock3 {...factIcon} />,
  welcome: <Sparkles {...factIcon} />,
};

const processIconProps = { className: 'h-6 w-6', strokeWidth: 2 } as const;

export const processStepIcons: Record<'clipboard' | 'contact' | 'rocket', ReactNode> = {
  clipboard: <ClipboardList {...processIconProps} />,
  contact: <UserRound {...processIconProps} />,
  rocket: <Rocket {...processIconProps} />,
};
