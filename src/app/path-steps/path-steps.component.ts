import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-path-steps',
  templateUrl: './path-steps.component.html',
  styleUrls: ['./path-steps.component.scss']
})
export class PathStepsComponent {
  items: MenuItem[];

  currentStep: string = '3-0-0'
  colorDone: string = 'green'
  colorCurrent: string = 'orange'
  colorUndone: string = ''
  iconDone: string = 'pi pi-check-circle'
  iconCurrent: string = 'pi pi-circle'
  iconUndone: string = 'pi pi-circle'

  view: string = '0'
  step: string = '0'
  path: string[] = ['3-0-0;0;0','3-0-1;0;1','3-0-1;0;2','3-0-1;6;0', '3-0-1;7;0', '3-0-1;4;0', '3-0-1;1;0',
    '3-0-2;0;0','3-0-2;0;1','3-0-2;0;2','3-0-2;6;0', '3-0-2;7;0', '3-0-2;4;0', '3-0-2;1;0',
    '3-0-3;0;0','3-0-3;0;1','3-0-3;0;2','3-0-3;6;0', '3-0-3;7;0', '3-0-3;4;0', '3-0-3;1;0',
    '3-0-4;0;0','3-0-4;0;1','3-0-4;0;2','3-0-4;6;0', '3-0-4;7;0', '3-0-4;4;0', '3-0-4;1;0',
    '3-1-0;0;0',
  ]


  data: any;

  options: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.items = [
      {
        label: 'Willkommen',
      },
      {
        label: 'Einführung',
      },
      {
        label: 'Lernziele',
      },
      {
        label: 'Grundlagen',
        items: [
          {
            label: 'HTML',
            items: [
              {
                label: 'Grundlagen',
              },
              {
                label: 'Tags',
              },
              {
                label: 'Attribute',
              },
              {
                label: 'Struktur',
              },
            ]
          },
          {
            label: 'CSS',
            items: [
              {
                label: 'Grundlagen',
              },
              {
                label: 'Selektoren',
              },
              {
                label: 'Kaskadierung',
              },
              {
                label: 'Einheiten',
              },
              {
                label: 'Responsive Design',
                items: [
                  {
                    label: 'MediaQueries',
                  },
                  {
                    label: 'Flexbox',
                  },
                  {
                    label: 'Grid',
                  },
                ]
              },
            ]
          },
          {
            label: 'JavaScript',
            items: [
              {
                label: 'Variablen',
              },
              {
                label: 'Funktionen',
              },
              {
                label: 'Schleifen und Bedingungen',
              },
            ]
          },
        ]
      },
      {
        label: 'Frameworks',
        items: [
          {
            label: 'Bootstrap',
          },
          {
            label: 'React',
          },
          {
            label: 'Angular',
          },
        ]
      },
      {
        label: 'Backend-Technologien',
        items: [
          {
            label: 'PHP',
          },
          {
            label: 'Node.js',
          }
        ]
      },
      {
        label: 'Test',
      }
    ];
  }

  ngOnInit() {
    const queryStep = this.route.snapshot.queryParamMap.get('cs');
    if(queryStep)
      this.currentStep = queryStep;
    const queryView = this.route.snapshot.queryParamMap.get('v');
    if(queryView)
      this.view = queryView;
    const query = this.route.snapshot.queryParamMap.get('s');
    if(query)
      this.step = query;
    this.setCurrentStep(this.items, 0)
  }

  setCurrentStep(items: MenuItem[]|undefined, depth:number=0){
    if(!items) return;
    const step = Number(this.currentStep.split('-')[depth]);
    items.forEach((item, index) => {
      if(step != undefined && index < step){
        item.icon = this.iconDone;
        item.iconStyle = {color: this.colorDone};
        this.setAllChildItems(item.items,this.iconDone,this.colorDone);
      }else if(step != undefined && index == step) {
        item.icon = this.iconCurrent;
        item.iconStyle = {color: this.colorCurrent};
        item.expanded = true;
        this.setCurrentStep(item.items, ++depth)
      }else{
        item.icon = this.iconUndone;
        item.iconStyle = {color: this.colorUndone};
        this.setAllChildItems(item.items,this.iconUndone,this.colorUndone);
      }
    })
  }

  setAllChildItems(items: MenuItem[]|undefined, icon:string, color:string){
    if(!items) return;
    items.forEach(item => {
      item.icon = icon;
      item.iconStyle = {color: color};
      this.setAllChildItems(item.items,icon,color)
    })
  }

  forward(){
    let index:number = this.path.indexOf(`${this.currentStep};${this.view};${this.step}`);
    if(index == -1) return;
    if(index != this.path.length-1) index = index +1;
    const query:string[] = this.path[index].split(';');
    return `learning-path?t=1&cs=${query[0]}&v=${query[1]}&s=${query[2]}`
  }

  back(){
    let index:number = this.path.indexOf(`${this.currentStep};${this.view};${this.step}`);
    if(index == -1) return;
    if(!(index <= 0)) index = index -1;
    const query:string[] = this.path[index].split(';');
    return `learning-path?t=1&cs=${query[0]}&v=${query[1]}&s=${query[2]}`
  }

}
