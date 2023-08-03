import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardInfoModel } from '../../_models/card-info.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent {
  public timelineEvents: CardInfoModel[] = [
    {
      category: '1/1-1969',
      title: 'Grundlagt',
      description: '<p>Firmaet "BYGNINGS- & INVENTARSNEDKERI JENS CHR EHMSEN" blev grundlagt i 1969.</p>',
      imgModel: {
        imgSrc: 'assets/be_images/be_all-tasks.jpg',
        imgAlt: 'Alt text',
        imgWidth: '200px',
      },
    },
    {
      category: '1/1-2020',
      title: 'Ny Mester',
      description:
        '<p>' +
        'I 2020 overtog Mark Bjørnskov firmaet, hvorefter firmaet kom til at hedder "Bjørnskov & Ehmsen"' +
        '</p>',
      imgModel: {
        imgSrc: 'assets/be_images/be_mark_contact.jpg',
        imgAlt: 'Alt text',
        imgWidth: '200px',
      },
    },
  ];

  public isCollapsed: boolean[] = [];

  constructor() {
    this.isCollapsed = new Array(this.timelineEvents.length).fill(false);
  }
}
