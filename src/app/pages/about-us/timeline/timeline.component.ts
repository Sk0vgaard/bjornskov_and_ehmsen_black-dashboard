import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardInfoModel } from '../../../_models/card-info.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent {
  public timelineEvents: CardInfoModel[] = [
    {
      category: '1. Januar, 1969',
      title: 'Grundlagt',
      description:
        'Firmaet "BYGNINGS- & INVENTARSNEDKERI JENS CHR EHMSEN" blev grundlagt i 1969 og markerede begyndelsen på en lang tradition med kvalitetshåndværk i byggebranchen. Med en vision om at skabe unikke og skræddersyede træløsninger, lagde Jens Chr. Ehmsen fundamentet til det, der i dag er kendt som Bjørnskov & Ehmsen.</br>' +
        '</br>' +
        'I over 50 år har vi været synonym med innovation, præcision og kvalitet inden for tømrerarbejde. Det er en stolt arv, der lever videre i hvert eneste projekt vi påtager os, fra mindste detalje til de mest omfattende konstruktioner.</br>' +
        '</br>' +
        'Vores rødder i Esbjerg har formet os som virksomhed, og vi værner om vores forbindelse til det lokale samfund, hvor vi fortsat søger at levere håndværk i verdensklasse, der kombinerer klassisk snedkerkunst med moderne teknikker.</br>' +
        '</br>' +
        'Dette er mere end blot en virksomhedshistorie; det er et vidnesbyrd om vores passion, engagement og evne til at udvikle os med tiden, alt imens vi forbliver tro mod de værdier, der har guidet os siden begyndelsen.',
      imgModel: {
        imgSrc: 'assets/be_images/be_all-tasks.jpg',
        imgAlt: 'Image of when firm was founded',
        imgWidth: '200',
      },
    },
    {
      category: '1. Januar, 2020',
      title: 'Ny Mester',
      description:
        'I 2020 skete der en markant ændring i virksomhedens historie, da Mark Bjørnskov overtog firmaet. Med et nyt perspektiv og en fortsat dedikation til kvalitet, blev navnet ændret til "Bjørnskov & Ehmsen". Dette repræsenterede ikke kun en ny æra for firmaet, men også en hyldest til dets rige fortid og en vision om en spændende fremtid.</br>' +
        '</br>' +
        'Under Mark Bjørnskovs har virksomheden fortsat med at udvikle sig, samtidig med at den har bibeholdt de værdier og standarder, der har gjort firmaet anderkendt i mange dele af landet. Med en kombination af tradition og innovation har Bjørnskov & Ehmsen styrket sin position som en førende aktør inden for byggebranchen og fortsætter med at sætte standarden for fremragende tømrerarbejde.</br>' +
        '</br>' +
        'Dette skift i ledelse har ikke kun medført en ny retning for virksomheden, men også en fornyet energi og engagement i at skabe værdi for kunder og samfund. Navneændringen er et symbol på dette engagement og en beslutning om at gå videre med de stærke traditioner, som firmaet blev grundlagt på, samtidig med at man udforsker nye muligheder og udfordringer.',
      imgModel: {
        imgSrc: 'assets/be_timeline/BE_Mark_Jens.jpg',
        imgAlt: 'Alt text',
        imgWidth: '200',
      },
    },
    {
      category: '11-20. August 2023',
      title: 'Esbjerg Festuge 2023',
      description:
        'Bjørnskov & Ehmsen og Esbjerg – Et Samarbejde i Fest og Kunst</br>' +
        '</br>' +
        'Hos Bjørnskov & Ehmsen er vi stolte over at være en del af den lokale kultur og fællesskab i Esbjerg. Vi har haft den ære at være involveret i nogle virkelig bemærkelsesværdige projekter sammen med Esbjerg Kommune, og vi vil gerne dele et par af disse oplevelser med dig.</br>' +
        '</br>' +
        'Esbjerg Festuge:</br>' +
        'Da Esbjerg Festuge stod for døren, blev vi kaldt ind for at gøre klar til en uforglemmelig fejring. Vores hold arbejdede hårdt, og det var en fornøjelse at se vores by blomstre i festens farver.</br>' +
        '</br>' +
        'Mini Street Art Festival:</br>' +
        'Vi var også med til at gøre Mini Street Art Festivalen til en kæmpe succes. Vores opgave var at opsætte 10meter høje lærreder i Torvegade, fra Torvet helt op mod Musikhuset. Lærrederne blev en sensation! Ikke mindre end tre internationale kunstnere lavede deres kunstværker på stedet, og folk kom fra nær og fjern for at se deres kreative processer udfolde sig.</br>' +
        '</br>' +
        'Disse oplevelser er kun nogle af de måder, hvorpå vi har hjulpet Esbjerg Kommune. Vi er taknemmelige for muligheden for at bidrage til vores lokalsamfund og ser frem til mange flere spændende projekter i fremtiden.</br>',
      imgModel: {
        imgSrc: 'assets/be_timeline/esbjerg_festuge.jpg',
        imgAlt: 'Image of Esbjerg Festuge 2023',
        imgWidth: '200',
      },
      linkModels: [
        {
          link: 'https://www.facebook.com/reel/278238858279611',
          linkText: 'Se videoen - Esbjerg Festuge 2023',
        },
        {
          link: 'https://www.facebook.com/EsbjergCity/posts/pfbid026AZ2gZrj9RhLzrST9b2iyQ6invF9WHEnKZqJeTRUszsZpBfSwQJoX64G34W95ERVl',
          linkText: 'Se de flotte lærreder - Esbjerg City',
        },
      ],
    },
  ];

  public isCollapsed: boolean[] = [];

  constructor() {
    this.isCollapsed = new Array(this.timelineEvents.length).fill(false);
  }
}
