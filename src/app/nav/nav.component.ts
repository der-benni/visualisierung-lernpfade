import { Component } from '@angular/core';
import {MegaMenuItem} from "primeng/api";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  items: MegaMenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Dashboard',
        routerLink: '/'
      },
      {
        label: 'Lernpfade',
        routerLink: '/'
      },
      {
        label: 'Verlauf',
        routerLink: '/'
      },
      {
        label: 'Fortschitt',
        routerLink: '/'
      },
    ];
  }
}
