import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

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
  @Input() link: string = 'Webtechnologien';


  constructor(private router: Router) {}

  click() {
    this.router.navigate(['learning-path']);
  }
}
