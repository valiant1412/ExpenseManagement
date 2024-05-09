import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SidebarService } from '../service/sidebar.service';
@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.css'],
})
export class MenuSidebarComponent {
  constructor(public sidebarService: SidebarService) {}
  isMobileView: boolean = true;
  isMenuVisible: boolean = true;
  isIconLeft: boolean = true;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkIfMobile();
  }
  ngOnInit() {
    this.checkIfMobile();
  }

  isIconVisible: boolean = true;
  toggleMenu(): void {
    this.isIconLeft = !this.isIconLeft;
    this.isMenuVisible = !this.isMenuVisible;
    this.isIconVisible = !this.isIconVisible;
    this.sidebarService.toggle();
    if (this.isIconLeft) {
      setTimeout(() => {
        this.isIconVisible = true;
      }, 140);
      this.isIconVisible = false;
    }
  }

  checkIfMobile() {
    this.isMobileView = window.innerWidth <= 375; // Assume 768px width is mobile
    if (this.isMobileView) {
      this.isMenuVisible = false;
      this.isIconLeft = false;
    } else {
    }
  }
}
