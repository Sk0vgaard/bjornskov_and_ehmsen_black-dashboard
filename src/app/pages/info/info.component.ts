import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardInfoModel } from '../../_models/card-info.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {
  public isCollapsed: boolean[] = [];

  infos: CardInfoModel[] = [
    {
      title: 'Hvorfor vælge os?',
      description:
        'Vores tømrere har mange års erfaring i branchen og er dygtige i alle aspekter af tømrerarbejde, lige fra snedker arbejde til lægning af sildebens gulv (der findes ikke det vi ikke gøre i tømrearbejde). Vi er også stolte af vores fremragende kundeservice og opmærksomhed på detaljer.',
    },
  ];

  prices: CardInfoModel[] = [
    {
      category: '07:00 - 15:00 / 15:00-24:00',
      title: 'Hverdage',
      description:
        'Imellem 07:00 - 15:00 er prisen: <br>' +
        'Kr. 495,-/time <br><br>' +
        'Hvis arbejdet skal udføres efter lukketid er prisen: <br>' +
        'Kr. 595,-/time <br><br>' +
        'Dette er eksklusiv moms',
    },
    {
      category: '07:00 - 15:00 / 15:00-24:00',
      title: 'Weekender',
      description:
        'Imellem 07:00 - 15:00 er prisen: <br>' +
        'Kr. 649,-/time <br><br>' +
        'Hvis arbejdet skal udføres efter lukketid er prisen: <br>' +
        'Kr. 749,-/time <br><br>' +
        'Dette er eksklusiv moms',
    },
    {
      category: 'Du kan altid aftale en fast pris med os',
      title: 'Aftalt fast pris',
      description: 'Hvis du ønsker en fast pris, så kontakt os og få et gratis og uforpligtende tilbud',
    },
  ];

  faqs: CardInfoModel[] = [
    {
      title: 'Hvorfor vælge Hovedentreprise?',
      description:
        'Vi anbefaler klart hovedentreprise til renoveringsprojker, da det involvere flere faggrupper. <br><br> ' +
        'Byggesager kan være tidskrævende og omfattende, så vi står gerne som tovholder for byggeprocessen.',
    },
    {
      title: 'Hvad koster det at renovere?',
      description:
        'Vi tilbyder gratis prisoverslag for alle vores projekter. Prisen vil variere afhængigt af omfanget og kompleksiteten af projektet.',
    },
    {
      title: 'Er overslag/besigtigelse gratis?',
      description:
        'Et overslag/besigtigelse er altid gratis. <br><br>' +
        'Ved større projekter/entrepriser kan det dog være en nødvendighed, at komme og se projektet inden, for at give så et realistisk bud. <br><br>' +
        'Dette kan aftales nærmere under en eventuel samtale.',
    },
    {
      title: 'Får jeg et skriftligt tilbud?',
      description:
        'JA. Vi sender altid et skriftligt tilbud på mail efter besigtigelsen. <br><br>' +
        'Det går dog ofte hurtigere, hvis noget af forarbejdet allerede er lavet, såsom: <br>' +
        '- Tegninger <br>' +
        '- Materiale valg <br><br>' +
        'Men dette er selvfølgelig også noget vi er behjælpelig med.',
    },
    {
      title: 'Hvordan acceptere jeg tilbuddet?',
      description:
        'Når du har modtaget tilbuddet. Er det vigtigt at du forstår det. Vi gennemgår gerne tilbuddet med dig, hvis du skulle have nogle spørgsmål.',
    },
    {
      title: 'Hvad kan I hjælpe med?',
      description:
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
