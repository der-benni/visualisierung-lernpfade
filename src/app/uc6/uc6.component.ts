import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-uc6',
  templateUrl: './uc6.component.html',
  styleUrls: ['./uc6.component.scss']
})
export class Uc6Component {
  step: string = '0'

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const query = this.route.snapshot.queryParamMap.get('s');
    if(query)
      this.step = query;
  }
}
