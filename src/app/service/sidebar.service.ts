import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  //behaviorSubject: managing the state
  private isExpand = false;
  toggle(size?: number) {
    this.isExpand = !this.isExpand;
    return this.isExpand;
  }
  constructor() {}
}
