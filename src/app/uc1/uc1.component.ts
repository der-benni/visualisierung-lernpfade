import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-uc1',
  templateUrl: './uc1.component.html',
  styleUrls: ['./uc1.component.scss']
})
export class Uc1Component {
  data: any;

  options: any;

  step: string = '0'

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const query = this.route.snapshot.queryParamMap.get('s');
    if(query)
      this.step = query;

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['Nächster Abschnitt', 'Wiederholt', 'Backend-Technologien', 'Grundlagen'],
      datasets: [
        {
          data: [61, 20, 10, 9],
          backgroundColor: ['#3B82F6', '#22C55E', '#A855F7', '#F59E0B'],
        }
      ]
    };


    this.options = {
      cutout: '50%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }
}
