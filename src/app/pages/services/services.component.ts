import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Service {
  subject: string;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  public services: Service[] = [
    {
      subject: 'Skillevægge',
      description: 'Skab ekstra rum eller nye indretningsmuligheder med vores skræddersyede skillevægge',
    },
    {
      subject: 'Døre & Vinduer',
      description:
        'Vi tilbyder både montering og udskiftning, og det unikke er, at vi producerer vores egne døre og vinduer, så vi står 100% indenfor kvalitet, bæredygtighed og skræddersyede løsninger',
    },
    {
      subject: 'Montering af Køkken',
      description: 'Fra design til implementering, vi gør din køkkendrøm til virkelighed',
    },
    {
      subject: 'Tilbygning & Renovering',
      description: 'Forvandl dit eksisterende rum eller udvid med nyt',
    },
    {
      subject: 'Gulvlægning',
      description:
        'Fra klassiske flisegulve til sofistikerede træløsninger, vi er din go-to gulvspecialist. Vi skinner særligt i kunsten at lægge sildebensparketgulv, hvor vores håndværk og øje for detaljer sætter standarden',
    },
    {
      subject: 'Terrasse',
      description: 'Nyd udelivet med en smukt anlagt træterrasse',
    },
    {
      subject: 'Snedkerarbejde',
      description: 'Skræddersyede møbler og indretning',
    },
    {
      subject: 'Opsætning af Betonelementer',
      description: 'Robuste og pålidelige konstruktioner til både erhverv og privat',
    },
    {
      subject: 'Loftisolering',
      description: 'Forbedre dit hjems energieffektivitet',
    },
    {
      subject: 'Energirenovering',
      description: 'Gør dit hjem eller erhvervsbygning mere energieffektiv og spar på varmeregningen',
    },
    {
      subject: 'Indbyggede Skabe',
      description: 'Maksimer pladsen med skræddersyede opbevaringsløsninger',
    },
    {
      subject: 'Udvendig Beklædning',
      description: 'Opgrader dit hjem med nyt facadebeklædning, der matcher din stil og beskytter mod vejret',
    },
    {
      subject: 'Inventar til Erhverv',
      description: 'Vi leverer skræddersyede inventarløsninger til caféer, butikker, og kontorer',
    },
    {
      subject: 'Special Arbejde',
      description:
        'Uanset om det er en unik trappeopgang, specialdesignet barområde eller en skræddersyet bogreol, vi realiserer dine mest ambitiøse projekter med finesse og detaljeorientering',
    },
  ];
}
