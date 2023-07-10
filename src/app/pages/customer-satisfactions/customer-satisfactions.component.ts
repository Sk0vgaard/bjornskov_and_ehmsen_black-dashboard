import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardInfoModel } from '../../_models/card-info.model';

@Component({
  selector: 'app-customer-satisfactions',
  templateUrl: './customer-satisfactions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerSatisfactionsComponent {
  customerSatisfactions: CardInfoModel[] = [
    {
      category: 'Mathias Skovgaard',
      title: 'Kvalitet der overgår alle andre',
      description:
        'Vi har brugt Bjørnskov & Ehmsen til alle vores byggeprojekter, samt hvis vi skulle have lavet noget på hjemmet. <br>' +
        'De laver de flotteste vinduer, samt døre som er helt unikke! <br>' +
        'Vi købte et hus som Mark Bjørnskov havde renoveret tilbage i 2020, og man kan tydeligt se at han går op i kvalitet, detaljer og gode produkter. <br>' +
        'I år skal Bjørnskov & Ehmsen lave en tilbygning på 80m2. De har været MEGET behjælpelige og vi er ikke i tvivl om, at vi får de flotteste og bedste resultater!',
    },
    {
      category: 'Rikke Baden',
      title: 'Overdækket skur til Dagplejebørn 👶',
      description:
        'Mine dagplejebørn sover ude året rundt, så jeg stod i det problem her i efteråret, at vejret godt kunne være hårdt nogle dage. <br>' +
        'Derfor tog jeg kontakt til Bjørnskov og Ehmsen, hvor de hurtigt fik lavet et flot skur, som børnene nu sover trygt under. <br>' +
        'Tak fordi at i var så hurtige 🤩',
    },
    // TODO: Add more satisfaction
    // {
    //   category: '',
    //   title: '',
    //   body: '',
    // },
    // {
    //   category: '',
    //   title: '',
    //   body: '',
    // },
  ];
}
