import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
@Injectable()
export class LeaderService {

  constructor() { }

  getLeader(): Leader[] {
    return LEADERS;
  }
  getFeaturedLeader(): Leader {
    return LEADERS.filter((lead) => (lead.featured))[0];
  }
}
