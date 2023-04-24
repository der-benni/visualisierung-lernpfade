import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-path-card',
  templateUrl: './path-card.component.html',
  styleUrls: ['./path-card.component.scss']
})
export class PathCardComponent {

  @Input() percentage: number = 50;
  @Input() isValue: number = 1;
  @Input() goalValue: number = 2;
  @Input() pathName: string = 'Webtechnologien';

}
