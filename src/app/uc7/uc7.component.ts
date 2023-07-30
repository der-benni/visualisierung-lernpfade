import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-uc7',
  templateUrl: './uc7.component.html',
  styleUrls: ['./uc7.component.scss']
})
export class Uc7Component {
  ratinga:any;
  ratingb:any;
  ratingc:any;

  step: string = '0'

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const query = this.route.snapshot.queryParamMap.get('s');
    if(query)
      this.step = query;
  }

}
