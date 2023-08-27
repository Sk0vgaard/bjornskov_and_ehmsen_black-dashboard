import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {
  public jyskeVestkystLink: string =
    'https://jv.dk/esbjerg/han-startede-som-laerling-nu-er-han-ejer-mark-bjoernskovs-drengedroem-er-gaaet-i-opfyldelse';
}
