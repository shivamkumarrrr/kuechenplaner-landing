/**
 * All landing-page copy for this client, in one place.
 * Deep link to the quiz: extensionless on purpose — `app.html?q=…` is
 * 301-redirected by the host's clean-URL handling, which drops the query string.
 */
export const QUIZ_LINK = 'app?q=kuechenplaner-konz';

/** One CTA label for every button on the page — the live job ad uses the same wording throughout. */
export const CTA_LABEL = "Hier geht's zum TEST";

export const company = {
  name: 'MÖBEL MARTIN',
  tagline: 'Einrichtungshaus Konz',
  logo: 'assets/moebel-martin-logo.png',
  address: 'Granastraße 32 · 54329 Konz',
  phone: 'Tel: 06501 – 60 90',
  phoneHref: '+49650160900',
};

export const hero = {
  title: 'Küchenplaner / Küchenberater in Voll- oder Teilzeit (m/w/d) gesucht',
  eyebrow: 'Stellenangebot · Konz',
  photo: 'assets/mm-hero.jpg',
  photoAlt: 'Küchenplanung am Bildschirm im MÖBEL MARTIN Einrichtungshaus',
  intro:
    'Sie erwecken Küchenträume zum Leben – ob als erfahrene Fachkraft oder als motivierter Quereinsteiger? Bei uns planen Sie mit professioneller 3D-Software und begleiten Ihre Kundinnen und Kunden vom ersten Entwurf bis zur fertigen Küche.',
  ctaLead:
    'Machen Sie jetzt unseren kurzen Online-Test und finden Sie heraus, ob wir zueinander passen:',
};

export const jobInfo = {
  location: 'Konz',
  remote: 'Voll- oder Teilzeit',
  hours: 'Quereinsteiger willkommen',
};

/**
 * Six facts, not the ad's full list: the section has to stay one readable screen
 * on mobile, so each card carries the strongest claim plus the detail that backs
 * it. The remaining perks (Corporate Benefits, BusinessBike, Parkplatz) are
 * covered by the "Ihr Gehalt" / "Ihre Vorteile" panels further down.
 */
export const benefits: {
  title: string;
  body: string;
  icon: 'coins' | 'target' | 'calendar' | 'wifi' | 'graduation' | 'shield';
}[] = [
  {
    title: 'Überdurchschnittliche Vergütung',
    body: 'Festgehalt über Branchenniveau plus leistungsabhängige Provision auf Ihren Verkaufserfolg.',
    icon: 'coins',
  },
  {
    title: 'Unbefristet & 30 Tage Urlaub',
    body: 'Sicherer Arbeitsvertrag in einem familiengeführten Unternehmen mit acht Einrichtungshäusern.',
    icon: 'calendar',
  },
  {
    title: 'Planung in 3D',
    body: 'Sie planen mit professioneller Software (CARAT) und beraten von der ersten Idee bis zur Lieferung.',
    icon: 'target',
  },
  {
    title: 'Quereinstieg möglich',
    body: 'Sie kommen aus Handel oder Verkauf? Wir bilden Sie in Produkt und Küchenplanung aus.',
    icon: 'graduation',
  },
  {
    title: 'Moderner Arbeitsplatz',
    body: 'Ausstellung direkt am Moselufer, kostenloser Parkplatz und ein wertschätzendes Haus.',
    icon: 'wifi',
  },
  {
    title: 'Für später abgesichert',
    body: 'Betriebliche Altersvorsorge und Mitarbeiterrabatt auf das gesamte Sortiment.',
    icon: 'shield',
  },
];

export const benefitsHeading = 'Die wichtigsten Fakten im Überblick';

/** Small uppercase label above each section heading, so the page has a spine. */
export const sectionEyebrows = {
  benefits: 'Warum MÖBEL MARTIN',
  process: 'Bewerbungsablauf',
  jobDetails: 'Stellenbeschreibung',
  team: 'Arbeitsplatz',
  finalCta: 'Jetzt bewerben',
};

export const jobDetails = [
  {
    id: 'unternehmen',
    title: 'Ihr neues Unternehmen',
    body: 'MÖBEL MARTIN ist ein familiengeführtes Einrichtungsunternehmen mit acht Einrichtungshäusern im Südwesten Deutschlands und einem eigenen Onlineshop. Wir richten seit Jahrzehnten Zuhause ein – und suchen Menschen, die diesen Anspruch mit uns teilen.',
  },
  {
    id: 'arbeitsort',
    title: 'Ihr Arbeitsort',
    body: 'Sie arbeiten in unserer Ausstellung in Konz, direkt am Moselufer und nur wenige Minuten von Trier entfernt. Kostenlose Mitarbeiterparkplätze stehen Ihnen zur Verfügung.',
  },
  {
    id: 'kollegen',
    title: 'Ihre Arbeitskollegen',
    body: 'Sie kommen in ein eingespieltes Team mit offener, unkomplizierter Atmosphäre und flachen Hierarchien. Man hilft sich hier gegenseitig – gerade in der Einarbeitung.',
  },
  {
    id: 'aufgaben',
    title: 'Ihre Aufgaben',
    body: 'Sie verkaufen Küchen über eine individuelle Bedarfsanalyse: Sie hören zu, erfassen Wünsche und Raumsituation und planen die passende Küche in 3D mit CARAT. Sie betreuen Ihre Kundinnen und Kunden durchgehend – vom Angebot über die Auftragsabwicklung bis zur Lieferung und Montage.',
  },
  {
    id: 'qualifizierung',
    title: 'Ihre Qualifizierung',
    body: 'Sie haben eine Ausbildung im Einzelhandel, eine kaufmännische Ausbildung oder Erfahrung im Verkauf. Erfahrung in der Küchenplanung ist ein Plus, aber keine Bedingung: Auch als Quereinsteiger sind Sie willkommen – wir bilden Sie aus. Wichtig sind uns Freude am Kundenkontakt, räumliches Vorstellungsvermögen und Verbindlichkeit.',
  },
  {
    id: 'gehalt',
    title: 'Ihr Gehalt',
    body: 'Sie erhalten ein überdurchschnittliches Festgehalt und dazu eine leistungsabhängige Provision – Ihr Verkaufserfolg zahlt sich unmittelbar aus. Ergänzt wird das durch Zuschüsse zur betrieblichen Altersvorsorge.',
  },
  {
    id: 'vorteile',
    title: 'Ihre Vorteile',
    body: 'Unbefristeter Arbeitsvertrag, 30 Tage Urlaub, moderner Arbeitsplatz, kostenloser Parkplatz, Mitarbeiterrabatt auf das gesamte Sortiment, Corporate Benefits und die Möglichkeit eines BusinessBikes.',
  },
];

export const workplace = {
  heading: 'Ihr Arbeitsplatz in Konz',
  body: 'Ein Einrichtungshaus direkt über der Mosel, wenige Minuten von Trier – mit eigener Küchenausstellung, Restaurant und kostenlosen Mitarbeiterparkplätzen.',
  photos: [
    {
      src: 'assets/mm-konz.jpg',
      alt: 'MÖBEL MARTIN Einrichtungshaus in Konz aus der Luft',
      caption: 'Einrichtungshaus Konz',
    },
    {
      src: 'assets/mm-beratung.jpg',
      alt: 'Beratungsgespräch mit Farbmustern im Einrichtungshaus',
      caption: 'Beratung auf der Fläche',
    },
  ],
};

export const finalCta = {
  heading: 'Finden Sie heraus, ob wir zusammenpassen',
};

export const processHeading = 'Ihr Weg zu uns';

export const processSteps: {
  number: string;
  title: string;
  body: string;
  icon: 'clipboard' | 'contact' | 'rocket';
}[] = [
  {
    number: '01',
    title: 'Online-Test machen',
    body: 'Kurzer Test – ganz ohne Anschreiben.',
    icon: 'clipboard',
  },
  {
    number: '02',
    title: 'Kontaktdaten hinterlassen',
    body: 'Passt Ihr Profil zu unserem Anforderungsprofil, hinterlassen Sie Ihre Kontaktdaten und wir melden uns bei Ihnen.',
    icon: 'contact',
  },
  {
    number: '03',
    title: 'Gespräch & Start',
    body: 'Passt alles, lernen wir uns persönlich in Konz kennen. Danach können Sie zeitnah bei uns anfangen.',
    icon: 'rocket',
  },
];
