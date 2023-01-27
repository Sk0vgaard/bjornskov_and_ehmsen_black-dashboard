import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface Info {
  category?: string;
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
      title: 'Hvorfor vælge os?',
      body: 'Vores tømrere har mange års erfaring i branchen og er dygtige i alle aspekter af tømrerarbejde, lige fra snedker arbejde til lægning af sildebens gulv (der findes ikke det vi ikke gøre i tømrearbejde). Vi er også stolte af vores fremragende kundeservice og opmærksomhed på detaljer.',
    },
  ];

  prices: Info[] = [
    {
      category: '07:00 - 15:00 / 15:00-24:00',
      title: 'Hverdage',
      body:
        'Imellem 07:00 - 15:00 er prisen: <br>' +
        'Kr. 495,-/time <br><br>' +
        'Hvis arbejdet skal udføres efter lukketid er prisen: <br>' +
        'Kr. 595,-/time <br><br>' +
        'Dette er eksklusiv moms',
    },
    {
      category: '07:00 - 15:00 / 15:00-24:00',
      title: 'Weekender',
      body:
        'Imellem 07:00 - 15:00 er prisen: <br>' +
        'Kr. 649,-/time <br><br>' +
        'Hvis arbejdet skal udføres efter lukketid er prisen: <br>' +
        'Kr. 749,-/time <br><br>' +
        'Dette er eksklusiv moms',
    },
    {
      category: 'Du kan altid aftale en fast pris med os',
      title: 'Aftalt fast pris',
      body: 'Hvis du ønsker en fast pris, så kontakt os og få et gratis og uforpligtende tilbud',
    },
  ];

  faqs: Info[] = [
    {
      title: 'Hvorfor vælge Hovedentreprise?',
      body:
        'Vi anbefaler klart hovedentreprise til renoveringsprojker, da det involvere flere faggrupper. <br><br> ' +
        'Byggesager kan være tidskrævende og omfattende, så vi står gerne som tovholder for byggeprocessen.',
    },
    {
      title: 'Hvad koster det at renovere?',
      body: 'Vi tilbyder gratis prisoverslag for alle vores projekter. Prisen vil variere afhængigt af omfanget og kompleksiteten af projektet.',
    },
    {
      title: 'Er overslag/besigtigelse gratis?',
      body:
        'Et overslag/besigtigelse er altid gratis. <br><br>' +
        'Ved større projekter/entrepriser kan det dog være en nødvendighed, at komme og se projektet inden, for at give så et realistisk bud. <br><br>' +
        'Dette kan aftales nærmere under en eventuel samtale.',
    },
    {
      title: 'Får jeg et skriftligt tilbud?',
      body:
        'JA. Vi sender altid et skriftligt tilbud på mail efter besigtigelsen. <br><br>' +
        'Det går dog ofte hurtigere, hvis noget af forarbejdet allerede er lavet, såsom: <br>' +
        '- Tegninger <br>' +
        '- Materiale valg <br><br>' +
        'Men dette er selvfølgelig også noget vi er behjælpelig med.',
    },
    {
      title: 'Hvordan acceptere jeg tilbuddet?',
      body: 'Når du har modtaget tilbuddet. Er det vigtigt at du forstår det. Vi gennemgår gerne tilbuddet med dig, hvis du skulle have nogle spørgsmål.',
    },
    {
      title: 'Hvad kan I hjælpe med?',
      body:
        'Der er stort set ikke det vi ikke gør i tømrearbejde! <br><br> ' +
        'Vi kan bl.a. tilbyde: <br>' +
        '- Skillevægge <br>' +
        '- Montering/Udskiftning af døre & vinduer (Vi producere selv vores vinduer og døre)<br>' +
        '- Montering af køkken <br>' +
        '- Tilbygning & Renovering <br>' +
        '- Gulvlægning <br>' +
        '- Terrasse <br>' +
        '- Snedkerarbejde <br>' +
        '- Opsætning af blokelementer <br>' +
        '- <i>Og meget meget mere!</i>',
    },
  ];
}
