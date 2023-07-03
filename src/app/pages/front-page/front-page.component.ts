import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PrimaryWorkingAreaModel } from '../../_models/primary-working-area.model';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontPageComponent {
  public introModel: PrimaryWorkingAreaModel = {
    cardModel: {
      title: 'Tømrer / Snedker / Maskinsnedker / Betonarbejder',
      description:
        'Uanset om dine tømrebehov, store som små, privat eller erhverv, står vi hos Bjørnskov & Ehmsen klar til at imødekomme dine forventninger. Vi gør din vision til virkelighed, fra idé til fuldendt projekt, og har altid stolthed i at levere vores arbejde præcist og med højeste kvalitetsstandard. Vi har vores hjemsted i Esbjerg Ø, men vores rækkevidde er landsdækkende - vores løsninger og produkter kan findes i hele Danmark. Med en betydelig portefølje af succesfulde projekter i Vestjylland, står vi stærkt i vores engagement og ekspertise.' +
        '<br>\n' +
        '<br>\n' +
        'Hvis du vælger os som din samarbejdspartner i byggeprojektet, vil du møde et byggefirma, som påtager sig\n' +
        'ansvaret for alle byggeprocesserne, alt imens vi prioriterer at kundens behov er i fokus.\n' +
        '<br>\n' +
        '<br>\n' +
        '<b><u>Hos Bjørnskov & Ehmsen handler det om mere end blot at levere et resultat.</u></b>\n' +
        'Vi stræber efter at skabe værdi for vores kunder. Hver opgave behandles med personlig opmærksomhed og\n' +
        'omhu, som sikrer at det færdige arbejde opfylder dine forventninger. Med vores brede portfolio af\n' +
        'tjenester, kan vi håndtere alle aspekter af dit tømrerprojekt, hvilket betyder at du kan slappe af og lade\n' +
        'os om det hårde arbejde. Så, uanset behov, så lad os hjælpe dig med at gøre din drøm til virkelighed.',
    },
    imageUrl: 'assets/be_icons/be_carpenter.png',
    imageAlt: 'Tømrer/Snedkerarbejde image',
  };

  public carpenterModel: PrimaryWorkingAreaModel = {
    cardModel: {
      title: 'Alle Opgaver',
      description:
        'Hos Bjørnskov & Ehmsen råder vi over tømre, snedkere, maskinsnedkere & betonarbejder(element montage). Vi dækker et bredt spektrum af træarbejde, lige fra tømrearbejde med opstilling af tagkonstruktioner til fine snedkerarbejde, såsom fremstilling af viduer og døre. Vores abition er at sikre topresultater af højeste kvalitet. Uanset omfanget af opgaven, er vores engagement i at udføre vores arbejde med et skarpt fokus på kommunikation, præcision og nøjagtighed, så du får den bedst mulige oplevelse, samt kan være med hele vejen igennem.',
    },
    imageUrl: 'assets/be_images/be_all-tasks.jpg',
    imageAlt: 'Tømrer/Snedkerarbejde image',
  };

  public enterpriseModel: PrimaryWorkingAreaModel = {
    cardModel: {
      title: 'Hoved- og Totalentreprise',
      description:
        'Bjørnskov & Ehmsen tilbyder to hovedtyper af entrepriser: <u><b>hovedentreprise</b></u> og <u><b>totalentreprise</b></u>. I en hovedentreprise overtager vi ansvaret for det meste af arbejdet, mens bygherren stiller tegnings- og beskrivelsesmateriale til rådighed. I en totalentreprise håndterer vi hele processen fra planlægning til endelig færdiggørelse. Uanset hvilken entrepriseform du vælger, garanterer vi tydelige aftaler vedrørende arbejdets omfang, tidslinje og budget for at sikre en professionel og pålidelig byggeproces.',
    },
    imageUrl: 'assets/be_images/be_enterprise.jpg',
    imageAlt: 'Hoved- og totalentreprise image',
  };

  public privateAndCorporateModel: PrimaryWorkingAreaModel = {
    cardModel: {
      title: 'Privat & Erhverv',
      description:
        'Hos Bjørnskov & Ehmsen trækker vi på mange års erfaring inden for byggebranchen. Vi tager stolthed i at yde førsteklasses kvalitet, da vi er passionerede omkring vores håndværk og ønsker at sikre tilfredse og loyale kunder. Vi bestræber os konstant på at indgå i et tæt samarbejde med vores kunder, tage hensyn til deres præferencer og behov, alt imens vi opretholder en høj standard for vores tømrerarbejde.',
    },
    imageUrl: 'assets/be_images/be_private-commercial_building.jpg',
    imageAlt: 'Privat & Erhverv image',
  };
}
