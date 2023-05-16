import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-path-view',
  templateUrl: './path-view.component.html',
  styleUrls: ['./path-view.component.scss']
})
export class PathViewComponent {
  activeTabIndex: number = 0;
  progress:number = 50;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const queryTab = this.route.snapshot.queryParamMap.get('t');
    this.activeTabIndex = Number(queryTab);
  }
}
