import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-uc0',
  templateUrl: './uc0.component.html',
  styleUrls: ['./uc0.component.scss']
})
export class Uc0Component {

  step: string = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const query = this.route.snapshot.queryParamMap.get('s');
    if(query)
      this.step = query;
  }


}
