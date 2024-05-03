import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  //behaviorSubject: managing the state
  private isCollapsedSubject = new BehaviorSubject<boolean>(false);
  isCollapsed$: Observable<boolean> = this.isCollapsedSubject.asObservable();
  toggleSidebar(): void {
    //this.isCollapsedSubject.next() is used to emit a new value to the isCollapsedSubject.
    this.isCollapsedSubject.next(!this.isCollapsedSubject.value);
  }
  constructor() {}
}
