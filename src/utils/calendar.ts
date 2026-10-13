export function downloadIcsFile(isFamily: boolean = false): void {
  const events: string[] = [];

  if (isFamily) {
    events.push(`BEGIN:VEVENT
SUMMARY:Pre-Boda Juan y Belén (Comida y Cena)
DESCRIPTION:Comida y cena pre-boda en el Faro de Mazarrón con la familia.
LOCATION:Faro de Mazarrón, Murcia, España
DTSTART:20270716T123000Z
DTEND:20270716T220000Z
STATUS:CONFIRMED
END:VEVENT`);
  }

  events.push(`BEGIN:VEVENT
SUMMARY:Boda Juan & Belén
DESCRIPTION:¡Nos Casamos! Celebración del amor de Juan y Belén en el Faro de Mazarrón. Ceremonia, cóctel, banquete y fiesta.
LOCATION:Faro de Mazarrón, Puerto de Mazarrón, Murcia, España
DTSTART:20270717T103000Z
DTEND:20270718T040000Z
STATUS:CONFIRMED
END:VEVENT`);

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Juan y Belen//Boda 2027//ES
CALSCALE:GREGORIAN
METHOD:PUBLISH
${events.join('\n')}
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Boda-Juan-y-Belen-2027.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
