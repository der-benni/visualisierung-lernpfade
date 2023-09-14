import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-uc4',
  templateUrl: './uc4.component.html',
  styleUrls: ['./uc4.component.scss']
})
export class Uc4Component {
  step: string = '0'

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const query = this.route.snapshot.queryParamMap.get('s');
    if(query)
      this.step = query;
  }
}
