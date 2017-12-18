import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
 leaders: Leader[];
  constructor(private leaderservice: LeaderService) { }

  ngOnInit() {
    this.leaders = this.leaderservice.getLeader();
  }

}
