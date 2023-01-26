import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesComponent {
  public sidebarColor = 'red';

  public changeSidebarColor(color): void {
    const sidebar = document.getElementsByClassName('sidebar')[0];
    const mainPanel = document.getElementsByClassName('main-panel')[0];

    this.sidebarColor = color;

    if (sidebar !== undefined) {
      sidebar.setAttribute('data', color);
    }
    if (mainPanel !== undefined) {
      mainPanel.setAttribute('data', color);
    }
  }

  public changeDashboardColor(color): void {
    const body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
      body.classList.add(color);
    } else if (body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }
}
