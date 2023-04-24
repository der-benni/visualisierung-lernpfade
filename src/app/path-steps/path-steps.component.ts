import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-path-steps',
  templateUrl: './path-steps.component.html',
  styleUrls: ['./path-steps.component.scss']
})
export class PathStepsComponent {
  items: MenuItem[];

  step: number = 0;

  constructor() {

    this.step = 0;

    this.items = [
      {
        label: 'Willkommen',
        icon: 'pi pi-check-circle',
        iconStyle: {
          color: 'green'
        },
      },
      {
        label: 'Einführung',
        icon: 'pi pi-check-circle',
        iconStyle: {
          color: 'green'
        },
      },
      {
        label: 'Lernziele',
        icon: 'pi pi-check-circle',
        iconStyle: {
          color: 'green'
        },
      },
      {
        label: 'Grundlagen',
        icon: 'pi pi-circle',
        iconStyle: {
          color: 'orange'
        },
        expanded: true,
        items: [
          {
            label: 'HTML',
            icon: 'pi pi-check-circle',
            iconStyle: {
              color: 'green'
            },
            items: [
              {
                label: 'Tags',
                icon: 'pi pi-check-circle',
                iconStyle: {
                  color: 'green'
                },
              },
              {
                label: 'Attribute',
                icon: 'pi pi-check-circle',
                iconStyle: {
                  color: 'green'
                },
              },
              {
                label: 'Struktur',
                icon: 'pi pi-check-circle',
                iconStyle: {
                  color: 'green'
                },
              },
            ]
          },
          {
            label: 'CSS',
            icon: 'pi pi-circle',
            iconStyle: {
              color: 'orange'
            },
            expanded: true,
            items: [
              {
                label: 'Selektoren',
                icon: 'pi pi-circle',
                iconStyle: {
                  color: 'green'
                },
              },
              {
                label: 'Kaskadierung',
                icon: 'pi pi-circle',
                iconStyle: {
                  color: 'orange'
                },
              },
              {
                label: 'Einheiten',
                icon: 'pi pi-circle'
              },
              {
                label: 'Responsive Design',
                icon: 'pi pi-info-circle',
                items: [
                  {
                    label: 'MediaQueries',
                    icon: 'pi pi-circle'
                  },
                  {
                    label: 'Flexbox',
                    icon: 'pi pi-circle'
                  },
                  {
                    label: 'Grid',
                    icon: 'pi pi-circle'
                  },
                ]
              },
            ]
          },
          {
            label: 'JavaScript',
            icon: 'pi pi-circle',
            items: [
              {
                label: 'Variablen',
                icon: 'pi pi-circle'
              },
              {
                label: 'Funktionen',
                icon: 'pi pi-circle'
              },
              {
                label: 'Schleifen und Bedingungen',
                icon: 'pi pi-circle'
              },
            ]
          },
        ]
      },
      {
        label: 'Frameworks',
        icon: 'pi pi-circle',
        items: [
          {
            label: 'Bootstrap',
            icon: 'pi pi-circle'
          },
          {
            label: 'React',
            icon: 'pi pi-circle'
          },
          {
            label: 'Angular',
            icon: 'pi pi-circle'
          },
        ]
      },
      {
        label: 'Backend-Technologien',
        icon: 'pi pi-circle',
        items: [
          {
            label: 'PHP',
            icon: 'pi pi-circle'
          },
          {
            label: 'Node.js',
            icon: 'pi pi-circle'
          }
        ]
      },
      {
        label: 'Test',
        icon: 'pi pi-pencil',
      }
    ];
  }

  goBackward() {
    if (this.step > 0) {
      this.step--;
    }
    console.log(this.step);
  }

  goForward() {
    if (this.step < 26) {
      this.step++;
    }
    console.log(this.step);
  }

}
