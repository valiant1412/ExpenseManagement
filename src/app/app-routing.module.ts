import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { HomepageComponent } from './homepage/homepage.component';
const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
