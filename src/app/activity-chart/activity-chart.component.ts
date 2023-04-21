import { Component } from '@angular/core';

@Component({
  selector: 'app-activity-chart',
  templateUrl: './activity-chart.component.html',
  styleUrls: ['./activity-chart.component.scss']
})
export class ActivityChartComponent {

  data: any;

  options: any;

  constructor() {

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
      datasets: [
        {
          label: 'Erreicht',
          data: [10, 25, 0, 30, 20, 20, 5],
          fill: true,
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          backgroundColor: 'rgba(59,130,246,0.2)'
        },
        {
          label: 'Lernziel',
          data: [20, 20, 20, 20, 20, 20, 20],
          fill: false,
          borderDash: [5, 5],
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--orange-300')
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };

  }

}
