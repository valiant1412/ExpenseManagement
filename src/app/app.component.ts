import { Component } from '@angular/core';
import { SidebarService } from './service/sidebar.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'money-management';
  constructor(public sidebarService: SidebarService) {}
}
