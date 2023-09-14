import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-uc5',
  templateUrl: './uc5.component.html',
  styleUrls: ['./uc5.component.scss']
})
export class Uc5Component {
  ratinga:any;
  ratingb:any;
  step: string = '0'

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const query = this.route.snapshot.queryParamMap.get('s');
    if(query)
      this.step = query;
  }
}
