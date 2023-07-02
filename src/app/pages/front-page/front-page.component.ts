import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PrimaryWorkingAreaModel } from '../../_models/primary-working-area.model';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontPageComponent {
  public carpenterModel: PrimaryWorkingAreaModel = {
    cardModel: {
      title: 'Tømrer / Snedkerarbejde',
      description:
        'Hos Bjørnskov & Ehmsen er vores tømrer & snedkerarbejde mangfoldigt og dækker et bredt spektrum. Vi håndterer alle former for tømrer og snedkerprojekter, uanset størrelse, og vores hovedmål. Vores abition er at sikre topresultater af højeste kvalitet. Uanset omfanget af opgaven, er vores engagement i at udføre vores arbejde med et skarpt fokus på kommunikation, præcision og nøjagtighed, så du får den bedst mulige oplevelse, samt kan være med hele vejen igennem.',
    },
    imageUrl: 'assets/be_icons/be_carpenter.png',
    imageAlt: 'Tømrer/Snedkerarbejde image',
  };

  public enterpriseModel: PrimaryWorkingAreaModel = {
    cardModel: {
      title: 'Hoved- og totalentreprise',
      description:
        'Bjørnskov & Ehmsen tilbyder to hovedtyper af entrepriser: hovedentreprise og totalentreprise. I en hovedentreprise overtager vi ansvaret for det meste af arbejdet, mens bygherren stiller tegnings- og beskrivelsesmateriale til rådighed. I en totalentreprise håndterer vi hele processen fra planlægning til endelig færdiggørelse. Uanset hvilken entrepriseform du vælger, garanterer vi tydelige aftaler vedrørende arbejdets omfang, tidslinje og budget for at sikre en professionel og pålidelig byggeproces.',
    },
    imageUrl: 'assets/be_images/be_enterprise.jpg',
    imageAlt: 'Hoved- og totalentreprise image',
  };

  public privateAndCorporateModel: PrimaryWorkingAreaModel = {
    cardModel: {
      title: 'Privat & Erhverv',
      description:
        'Hos Bjørnskov & Ehmsen trækker vi på mange års erfaring inden for tømrerbranchen, og denne erfaring anvendes til at levere alle former for tømreropgaver på en professionel måde til vores kunder. Vi tager stolthed i at yde førsteklasses kvalitet, da vi er passionerede omkring vores håndværk og ønsker at sikre tilfredse og loyale kunder. Vi bestræber os konstant på at indgå i et tæt samarbejde med vores kunder, tage hensyn til deres præferencer og behov, alt imens vi opretholder en høj standard for vores tømrerarbejde.',
    },
    imageUrl: 'assets/be_images/be_private-commercial_building.jpg',
    imageAlt: 'Privat & Erhverv image',
  };
}
