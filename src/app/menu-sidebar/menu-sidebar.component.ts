import { Component, ElementRef, ViewChild } from '@angular/core';
import { SidebarService } from '../service/sidebar.service';
@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.css'],
})
export class MenuSidebarComponent {
  @ViewChild('websiteName') websiteNameRef!: ElementRef;
  constructor(public sidebarService: SidebarService) {}
  isDisable = true;
  isIconVisible = true;
  toggleMenu(): void {
    this.sidebarService.toggleSidebar();
    // this.isDisable = !this.isDisable;
    this.isIconVisible = false;
    if (this.isDisable) {
      setTimeout(() => {
        this.isIconVisible = true;
      }, 200);
      this.isIconVisible = false; // Hide the double left icon when resizing to 100%
    }
  }
  ngAfterViewInit() {
    // Sau khi tất cả các phần tử con đã được render, bạn có thể đo kích thước của phần tử websiteName
    const websiteNameHeight = this.websiteNameRef.nativeElement.offsetHeight;
    const otherElement = document.getElementById('resized');
    if (otherElement) {
      otherElement.style.height = websiteNameHeight + 'px';
    }
  }
}
