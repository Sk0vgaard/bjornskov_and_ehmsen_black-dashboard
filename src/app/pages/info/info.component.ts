import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface Info {
  title: string;
  body: string;
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {
  public isCollapsed: boolean[] = [];

  infos: Info[] = [
    {
      title: 'Hvad koster det?',
      body: 'Vi tilbyder gratis prisoverslag for alle vores projekter. Prisen vil variere afhængigt af omfanget og kompleksiteten af projektet.',
    },
    {
      title: 'Hvorfor vælge os?',
      body: 'Vores tømrere har mange års erfaring i branchen og er dygtige i alle aspekter af tømrerarbejde, lige fra snedker arbejde til lægning af sildebens gulv (der findes ikke det vi ikke gøre i tømrearbejde). Vi er også stolte af vores fremragende kundeservice og opmærksomhed på detaljer.',
    },
    {
      title: 'Forsikring',
      body: 'Både dine og vores håndværkere er dækket af vores forsikring',
    },
    {
      title: 'Garanti',
      body: 'Der er altid 3 års garanti på vores opgaver, uanset størrelse eller projekt.',
    },
  ];

  faqs: Info[] = [
    {
      title: 'Hvorfor vælge Hovedentreprise?',
      body:
        'Vi anbefaler klart hovedentreprise til renoveringsprojker, da det involvere flere faggrupper. \n\n ' +
        'Byggesager kan være tidskrævende og omfattende, så vi står gerne som tovholder for byggeprocessen.',
    },
    {
      title: 'Hvad koster det at renovere?',
      body: 'Vi tilbyder gratis prisoverslag for alle vores projekter. Prisen vil variere afhængigt af omfanget og kompleksiteten af projektet.',
    },
    {
      title: 'Er overslag/besigtigelse gratis?',
      body:
        'Et overslag/besigtigelse er altid gratis. \n\n' +
        'Ved større projekter/entrepriser kan det dog være en nødvendighed, at komme og se projektet inden, for at give så et realistisk bud. \n\n' +
        'Dette kan aftales nærmere under en eventuel samtale.',
    },
    {
      title: 'Får jeg et skriftligt tilbud?',
      body:
        'JA. Vi sender altid et skriftligt tilbud på mail efter besigtigelsen. \n\n' +
        'Det går dog ofte hurtigere, hvis noget af forarbejdet allerede er lavet, såsom: \n\n' +
        '- Tegninger \n' +
        '- Materiale valg \n' +
        '- Dokumentation \n' +
        'Men dette er selvfølgelig også noget vi er behjælpelig med. \n\n' +
        'Det skal også tilføjes, at hvis man engang skulle stå i en salgssituation, er det vigtigt at kunne dokumentere, at dette er lavet af en professionel fagmand, for at undgå eventuelle anmærkninger.',
    },
    {
      title: 'Hvordan acceptere jeg tilbuddet?',
      body:
        'Når du har modtaget tilbuddet. Er det vigtigt at du forstår det. Vi gennemgår gerne tilbuddet med dig, hvis du skulle have nogle spørgsmål. \n\n' +
        'Hvis der skulle ske ændringer ift. projektet, ville et revurderet tilbud være nødvendigt og derfor gældende. Derfor vil det originale bortfalde og det nyste tilbud gældende.',
    },
  ];
}
