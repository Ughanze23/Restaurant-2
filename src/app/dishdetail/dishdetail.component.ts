import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  constructor(private dishservice: DishService, private route: ActivatedRoute,
  private location: Location) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let id = +this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
  }

  goBack(): void {
    this.location.back();
  }

}
