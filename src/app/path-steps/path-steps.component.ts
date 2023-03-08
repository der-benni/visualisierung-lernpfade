import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-path-steps',
  templateUrl: './path-steps.component.html',
  styleUrls: ['./path-steps.component.scss']
})
export class PathStepsComponent {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Willkommen',
        icon: 'pi pi-check-circle',
        iconClass: 'blaaaaaaaaaaaaaaaaaaaaa',
      },
      {
        label: 'Einführung',
        icon: 'pi pi-check-circle',
        items: [
          {label: 'Delete', icon: 'pi pi pi-check-circle'},
          {label: 'Refresh', icon: 'pi pi pi-check-circle'}
        ]
      },
      {
        label: 'Lernziele',
        icon: 'pi pi-check-circle'
      },
      {
        label: 'Basics',
        icon: 'pi pi-circle',
        items: [
          {label: 'HTML', icon: 'pi pi-circle'},
          {label: 'CSS', icon: 'pi pi-circle'},
          {label: 'JavaScript', icon: 'pi pi-circle'},
        ]
      }
    ];
  }

}
