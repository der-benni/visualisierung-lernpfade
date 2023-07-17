import { Component } from '@angular/core';
import {TreeNode} from "primeng/api";

@Component({
  selector: 'app-path-details',
  templateUrl: './path-details.component.html',
  styleUrls: ['./path-details.component.scss']
})
export class PathDetailsComponent {
  data: TreeNode[] = [
    {
      label: 'Webtechnologien',
      expanded: true,
      children: [
        {
          label: 'Willkommen',
          styleClass: 'bg-green-500 text-white',
        },
        {
          label: 'Einführung',
          styleClass: 'bg-green-500 text-white',
        },
        {
          label: 'Lernziele',
          styleClass: 'bg-green-500 text-white',
        },
        {
          label: 'Grundlagen',
          styleClass: 'bg-orange-500 text-white',
          expanded: false,
          children: [
            {
              label: 'HTML',
              styleClass: 'bg-orange-500 text-white',
              expanded: false,
              children: [
                {
                  label: 'Grundlagen',
                  styleClass: 'bg-green-500 text-white',
                },
                {
                  label: 'Tags',
                  styleClass: 'bg-orange-500 text-white',
                },
                {
                  label: 'Attribute',
                  styleClass: 'bg-green-500 text-white',
                },
                {
                  label: 'Struktur',
                  styleClass: 'bg-green-500 text-white',
                }
              ]
            },
            {
              label: 'CSS',
              styleClass: 'bg-green-500 text-white',
              expanded: false,
              children: [
                {
                  label: 'Grundlagen',
                  styleClass: 'bg-green-500 text-white',
                },
                {
                  label: 'Selektoren',
                  styleClass: 'bg-green-500 text-white',
                },
                {
                  label: 'Kaskadierung',
                  styleClass: 'bg-green-500 text-white',
                },
                {
                  label: 'Einheiten',
                  styleClass: 'bg-green-500 text-white',
                }
              ]
            },
            {
              label: 'JavaScript',
             styleClass: 'bg-orange-500 text-white',
              expanded: false,
              children: [
                {
                  label: 'Variablen',
                  styleClass: 'bg-green-500 text-white',
                },
                {
                  label: 'Funktionen',
                  styleClass: 'bg-orange-500 text-white',
                },
                {
                  label: 'Schleifen und Bedingungen'
                }
              ]
            }
          ]
        },
        {
          label: 'Frameworks',
          expanded: false,
          children: [
            {
              label: 'Bootstrap'
            },
            {
              label: 'React'
            },
            {
              label: 'Angular'
            }
          ]
        },
        {
          label: 'Backend-Technologien',
          expanded: false,
          children: [
            {
              label: 'PHP'
            },
            {
              label: 'Node.js'
            }
          ]
        }
      ]
    }
  ];
}
