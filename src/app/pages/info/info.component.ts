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
        'Vores tømrere har mange års erfaring i branchen og er dygtige i alle alle aspekter. Vi bredre os over et stort område indenfor træfaget. Vi er jydskehåndværkere der har benene plantet solidt i den jyskemuld. Hos os er en aftale en aftale. Vi er stolte af vores kundeservice, samt opmærksomhed på detaljer.',
    },
  ];

  prices: CardInfoModel[] = [
    {
      category: '07:00 - 15:45 / eller efter aftale',
      title: 'Hverdage',
      description: 'Imellem 07:00 - 15:45 er prisen: <br> Kr. 450,-/time <br><br> <i>Eksklusiv moms</i>',
    },
    {
      category: 'Arbejde i weekender?',
      title: 'Weekender',
      description: 'Hvis du ønsker arbejde i weekenden kan dette også arrangeres.',
    },
    {
      category: 'Du kan altid aftale en fast pris med os',
      title: 'Aftalt Fast Pris',
      description: 'Hvis du ønsker en fast pris, så kontakt os og få et gratis og uforpligtende tilbud.',
    },
  ];

  faqs: CardInfoModel[] = [
    {
      title: 'Hvorfor vælge Hovedentreprise?',
      description:
        'Vi anbefaler klart hovedentreprise til renoveringsprojker, da det involverer flere faggrupper. <br><br> ' +
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
        'Ved større projekter/entrepriser kan det dog være en nødvendighed, at komme og se projektet inden, for at give et realistisk bud. <br><br>' +
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
        'Der er stort set ikke det vi ikke gør i tømrerarbejde! <br><br> ' +
        'Vi kan bl.a. tilbyde: <br>' +
        '- Skillevægge <br>' +
        '- Montering/Udskiftning af døre & vinduer (Vi producere selv vores vinduer og døre)<br>' +
        '- Montering af køkken <br>' +
        '- Tilbygning & Renovering <br>' +
        '- Gulvlægning <br>' +
        '- Terrasse <br>' +
        '- Snedkerarbejde <br>' +
        '- Opsætning af betonelementer <br>' +
        '- <i>Og meget meget mere!</i>',
    },
  ];
}
