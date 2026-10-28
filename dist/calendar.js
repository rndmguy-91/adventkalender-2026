export const YEAR=2026;
export function berlinDate(now=new Date()) {
 const parts=Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Berlin',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now).map(p=>[p.type,p.value]));
 return `${parts.year}-${parts.month}-${parts.day}`;
}
export function unlocked(day,now=new Date()) {return berlinDate(now)>=`${YEAR}-12-${String(day).padStart(2,'0')}`;}

export const ORDER=[7,18,3,22,11,1,16,9,24,5,14,20,2,13,8,19,4,23,10,6,21,12,17,15];
